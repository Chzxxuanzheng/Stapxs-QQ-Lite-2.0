/*
 * @FileDescription: Websocket 底层模块
 * @Author: Stapxs
 * @Date: 2022/10/20
 * @Version: 1.0
 * @Description: 此模块主要处理 Websocket 交互相关功能
 */

import Option from './option'
import app from '@renderer/main'

import { reactive } from 'vue'
import { LogType, Logger, PopType, PopInfo } from './base'
import { dispatch, runtimeData } from './msg'

import { BotActionElem, LoginCacheElem } from './elements/system'
import { updateMenu } from '@renderer/function/utils/appUtil'
import { callBackend } from './utils/systemUtil'

import { v4 as uuid } from 'uuid'
import { getMsgData } from './utils/msgUtil'

import stdApi from '@renderer/assets/pathMap/std.yaml'

const logger = new Logger()
const popInfo = new PopInfo()

let retry = 0

export let websocket: WebSocket | undefined = undefined

class WsError extends Error {
    params: any
    constructor(message: string, params: any) {
        super(message)
        this.params = params
    }
}

class TimeoutError extends WsError {
    constructor(params: any) {
        super('请求超时', params)
    }
}

class ActionFailedError extends WsError {
    data: any
    constructor(params: any, data: any) {
        super(`请求失败,返回代码:${data['retcode']}`, params)
        this.data = data
    }
}

/**
 * 请求类
 */
class Request {
    timeout: number
    params: any
    resolve!: (value: any) => void
    reject!: (reason?: any) => void
    promise: Promise<any>
    echo: string
    constructor(params: any, echo: string = uuid(), timeout: number = 5000) {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve
            this.reject = reject
        })
        this.params = params
        this.echo = echo
        this.timeout = setTimeout(() => {
            Connector.RequestMap.delete(this.params.echo)
            this.reject(new TimeoutError(this.params))
        }, timeout) as unknown as number
        Connector.RequestMap.set(echo, this)
    }

    handleResponse(data: any) {
        clearTimeout(this.timeout)
        Connector.RequestMap.delete(this.echo)
        if (data.status !== 'ok') this.reject(new ActionFailedError(this.params, data))
        else this.resolve(data)
    }

    async waitResponse(): Promise<any> {
        return await this.promise
    }
}

export class Connector {
    /**
     * 创建 Websocket 连接
     * @param address 地址
     * @param token 密钥
     */
    static create(
        address: string,
        token?: string,
        wss: boolean | undefined = undefined,
    ) {
		if(address === '' || address == undefined) {
			popInfo.add(PopType.ERR, app.config.globalProperties.$t('连接地址不能为空'))
			return
		}
        const { $t } = app.config.globalProperties
        login.creating = true

        logger.add(LogType.WS, '当前处于 ALL 日志模式。连接器将输出全部收发消息 ……')

        // Electron 默认使用后端连接模式
        if (runtimeData.tags.clientType != 'web') {
            logger.add(LogType.WS, '使用后端连接模式')
            callBackend('Onebot', 'onebot:connect', false,
                ['electron', 'tauri'].includes(runtimeData.tags.clientType) ?  { address: address, token: token, } : { url: `${address}?access_token=${token}` })
            return
        }

        if(import.meta.env.VITE_APP_SSE_MODE == 'true') {
            if(import.meta.env.VITE_APP_SSE_SUPPORT == 'false') {
                // 如果 Bot 不支持 SSE 连接，直接跳过触发连接完成的后续操作
                // PS：在未连接 SSE 的情况下，ssqq 将会缺失一些功能：
                // - 新的消息推送、通知推送
                // - 聊天面板新消息将不会自动更新，但依旧可以通过重新加载面板来获取新消息
                this.onopen(address, token)
                return
            }
            logger.add(LogType.WS, '使用 SSE 连接模式')
            const sse = new EventSource(`${import.meta.env.VITE_APP_SSE_EVENT_ADDRESS}?access_token=${token}`)
            sse.onopen = () => {
                login.creating = false
                this.onopen(address, token)
            }
            sse.onmessage = (e) => {
                this.onmessage(e.data)
            }
            sse.onerror = () => {
                login.creating = false
                popInfo.add(PopType.ERR, $t('连接不稳定'))
                return
            }
            return
        } else {
            // PS：只有在未设定 wss 类型的情况下才认为是首次连接
            if (wss == undefined) {
                retry = 0
            } else {
                retry++
            }
            // 最多自动重试连接五次
            if (retry > 5) {
                login.creating = false
                return
            }

            let url = `ws://${address}?access_token=${token}`
            if (address.startsWith('ws://') || address.startsWith('wss://')) {
                url = `${address}?access_token=${token}`
            } else if (wss == undefined) {
                // 判断连接类型
                if (document.location.protocol == 'https:') {
                    // 判断连接 URL 的协议，https 优先尝试 wss
                    runtimeData.tags.connectSsl = true
                    url = `wss://${address}?access_token=${token}`
                }
            } else {
                url = `wss://${address}?access_token=${token}`
            }

            if (!websocket) {
                websocket = new WebSocket(url)
            }

            websocket.onopen = () => {
                login.creating = false
                this.onopen(address, token)
            }
            websocket.onmessage = (e) => {
                this.onmessage(e.data)
            }
            websocket.onclose = (e) => {
                login.creating = false
                this.onclose(e.code, e.reason, address, token)
            }
            websocket.onerror = (e) => {
                login.creating = false
                if (e instanceof ErrorEvent) {
                    popInfo.add(PopType.ERR, $t('连接失败') + ': ' + e.message)
                } else {
                    popInfo.add(PopType.ERR, $t('连接失败') + ': ' + $t('未知错误'))
                }
            }
        }
    }

    // 连接事件 =====================================================

    static onopen(address: string, token: string | undefined) {
        logger.add(LogType.WS, '连接成功')
        // 保存登录信息
        Option.save('address', address)
        // 保存密钥
        if (
            runtimeData.sysConfig.save_password &&
            runtimeData.sysConfig.save_password != ''
        ) {
            Option.save('save_password', token)
        }
        // 清空应用通知
        popInfo.clear()
        // 加载初始化数据
        // PS：标记登陆成功在获取用户信息的回调位置，防止无法获取到内容
        Connector.send('get_version_info', {}, 'getVersionInfo')
        // 更新菜单
        updateMenu({
            parent: 'account',
            id: 'logout',
            action: 'visible',
            value: 'true',
        })
    }

    static onmessage(message: string) {
        const data = JSON.parse(message)
        // 分发事件
        if (data.echo === undefined){
            dispatch(data)
        }
        // 处理请求返回值
        if (data.echo) {
            let echo: string = data.echo
            delete data.echo
            // 旧回调系统处理
            if (echo.startsWith('send_')) {
                echo = echo.slice(5)
                dispatch(data, echo)
                return
            }
            const request = Connector.RequestMap.get(echo)
            if (!request) return
            request.handleResponse(data)
        }
    }

    /**
     * 返回值Map
     */
    static RequestMap: Map<string, Request> = new Map()

    static onclose(
        code: number,
        msg: string | undefined,
        address: string,
        token: string | undefined,
    ) {
        const { $t } = app.config.globalProperties

        websocket = undefined
        updateMenu({ parent: 'account', id: 'logout', action: 'visible', value: 'false' })
        updateMenu({ parent: 'account', id: 'userName', action: 'label', value: $t('连接') })

        switch (Number(code)) {
            case 1000:
                popInfo.add(PopType.INFO, $t('连接已断开') + (msg ? (': ' + msg.replace(':', ' - ')) : ''), false)
                break // 正常关闭
            case 1006: {
                // 非正常关闭，尝试重连
                popInfo.add(PopType.ERR, $t('连接失败') + ': ' + $t('连接异常关闭'), false)
                if (login.status) {
                    this.create(address, token, undefined)
                } else {
                    // PS：由于创建连接失败也会触发此事件，所以需要判断是否已经登录
                    // 尝试使用 ws 连接
                    this.create(address, token, false)
                }
                break
            }
            case 1015: {
                // TLS 错误，尝试使用 ws 连接
                popInfo.add(PopType.ERR, $t('连接失败') + ': ' + $t('TLS错误'), false)
                this.create(address, token, false)
                break
            }
            default: {
                login.creating = false
                popInfo.add(PopType.ERR, $t('连接失败') + ': ' + $t('未知的错误 {code}',{ code: code }), false)
            }
        }

        logger.error(null, $t('连接失败') + ': ' + code)
        login.creating = false
        login.status = false
    }

    // 连接器操作 =====================================================

    /**
     * 正常断开 Websocket 连接
     */
    static close() {
        if(runtimeData.tags.clientType != 'web') {
            callBackend('Onebot', 'onebot:close', false)
        } else {
            popInfo.add(
                PopType.INFO,
                app.config.globalProperties.$t('正在断开链接……'),
            )
            if (websocket) websocket.close(1000)
        }
    }

    /**
     * 调用 api
     * @param api  api名称,该api应该为映射Map里存在的键
     * @param args 参数
     * @returns undefined 表示无此API, null表示调用失败, 其余为经getMsgData过滤的返回值
     */
    static async callApi(api: string, args: {[key: string]: any}): Promise<any|undefined|null>{
        // 组建信息
        const apiMap = runtimeData.jsonMap[api] ?? stdApi[api]
        if (!apiMap) {
            logger.debug(`${runtimeData.jsonMap.name} 未适配 API ${api}`)
            return undefined
        }

        const request = new Request(args)

        // 发送信息
        if(import.meta.env.VITE_APP_SSE_MODE == 'true') {
            // 使用 http POST 请求 /api/$name,body 为 json
            this.sendSeeMod(apiMap.name, request.params, request.echo)
        } else {
            this.sendRaw(apiMap.name, request.params, request.echo)
        }

        // 处理响应
        try{
            const re = await request.waitResponse()
            logger.get(api, re)
            return getMsgData(api, re, apiMap)
        }catch (e) {
            if (e instanceof TimeoutError) {
                logger.error(e, `API ${api} 请求超时`)
            }else {
                logger.error(e as Error, `API ${api} 请求失败`)
            }
        }
        return null
    }

    /**
     * 发送 Websocket 消息
     * @param name 事件名
     * @param value 参数
     * @param echo 回调名
     * @deprecated 该函数看似在掉api,其实还有去指定对象调用回调函数,无法拿到api返回值
     */
    static send(
        name: string,
        value: { [key: string]: any },
        echo: string = name,
    ) {
        echo = 'send_' + echo
        if(import.meta.env.VITE_APP_SSE_MODE == 'true') {
            // 使用 http POST 请求 /api/$name,body 为 json
            this.sendSeeMod(name,value,echo)
        } else {
            this.sendRaw(name, value, echo)
        }
    }
    /**
     * 使用 see 模式发请求，请求结果会一并送到onmessage方法上
     * @param name api名称
     * @param args 参数
     * @param echo 回调标识
     */
    static sendSeeMod(
        name: string,
        args: { [key: string]: any },
        echo: string = name,
    ) {
        fetch(`${import.meta.env.VITE_APP_SSE_HTTP_ADDRESS}/${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': login.token,
            },
            body: JSON.stringify(args),
        }).then(async (response) => {
            if (response.ok) {
                try {
                    const data = await response.json()
                    data.echo = echo
                    this.onmessage(JSON.stringify(data))
                } catch (e) {
                    logger.error(null, `API ${name} 返回非 JSON 数据`)
                }
            }
        }).catch((error) => {
            logger.error(error, ` 请求 API ${name} 失败`)
        })
    }
    /**
     * 使用 ws 模式发请求，请求结果会送到onmessage方法上
     * @param name api名称
     * @param args 参数
     * @param echo 回调标识
     */
    static sendRaw(
        name: string,
        args: { [key: string]: any },
        echo: string = name,
    ) {
        const json = JSON.stringify({
            action: name,
            params: args,
            echo: echo,
        } as BotActionElem)
        // 发送
        if(runtimeData.tags.clientType != 'web') {
            callBackend('Onebot', 'onebot:send', false, json)
        } else if (websocket) {
            websocket.send(json)
        }
        logger.put(name, args)
    }
    static sendRawJson(str: string) {
        const json = JSON.parse(str)
        this.sendRaw(
            json.action,
            json.params,
            json.echo,
        )
    }
}

export const login: LoginCacheElem = reactive({
    quickLogin: [],
    status: false,
    address: '',
    token: '',
    creating: false,
})
