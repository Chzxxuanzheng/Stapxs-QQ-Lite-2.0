/*
 * @FileDescription: 驱动器
 * @Author: Mr.Lee
 * @Date: 2025/08/05
 * @Version: 1.0
 * @Description: 驱动器，用于和后端通信（参考nb...）
 */

/**
 * 注:历史遗留问题,这里的Onebot指的是后端代理ws http之类的
 */

import app from '@renderer/main'
import { Logger, PopInfo, PopType } from './base'
import { runtimeData } from './msg'
import { backend } from '@renderer/runtime/backend'

const logger = new Logger()

type OnMessageData = string

type OnCloseData = {
    code: string | number,
    message: string,
}

interface Ws {
    // 开启关闭
    open(url: string): Promise<boolean>                     // 打开连接
    close(): Promise<void>                                  // 关闭连接
    // 夹送数据
    send(data: string): void                                // 发送数据
    // 自身状态
    get state(): DriverState                                      // 当前状态
    isConnected(): boolean                                  // 是否连接
    onError(callback: (data: OnCloseData) => void): void    // 错误回调
    onMessage(callback: (msg: OnMessageData) => void): void // 接收消息回调
    reset(): void                                           // 重置状态
}

class NativeWs implements Ws {
    private selfState: DriverState = DriverState.Disconnected
    private websocket?: WebSocket
    private onErrorHook?: (err: OnCloseData) => void
    private onmessageHook?: (msg: OnMessageData) => void

    //#region == 开启关闭 ============================================
    /**
     * 打开连接
     * @param url 要连接的url
     * @returns 连接是否成功
     */
    open(url: string): Promise<boolean> {
        if (this.websocket)
            throw new Error('WebSocket已存在，无法重复连接')
        if (this.selfState === DriverState.Connecting)
            throw new Error('WebSocket正在连接中，无法重复连接')
        if (this.selfState === DriverState.Close)
            throw new Error('WebSocket已关闭，请先重置')

        this.selfState = DriverState.Connecting
        return new Promise<boolean>((resolve) => {
            let isConnected = false
            const onopen = () => {
                logger.info('WebSocket连接成功')
                this.websocket = websocket
                this.selfState = DriverState.Connected
                isConnected = true
                resolve(true)
            }
            const onclose = (err: CloseEvent|Event) => {
                this.websocket = undefined
                this.selfState = DriverState.Disconnected
                if (isConnected) return this.onClose(err)
                else resolve(false)
            }
            const websocket = new WebSocket(url)
            websocket.onopen = onopen
            websocket.onclose = onclose
            websocket.onerror = onclose
            websocket.onmessage = (event: MessageEvent) => {
                this.onmessageHook?.(event.data)
            }
        })
    }
    /**
     * 关闭连接
     */
    async close(): Promise<void> {
        if (!this.websocket) throw new Error('WebSocket不存在，无法关闭')
        this.selfState = DriverState.Close
        this.websocket.close(1000)
    }
    //#endregion

    //#region == 发送数据 ============================================
    send(data: string): void {
        if (this.selfState !== DriverState.Connected)
            throw new Error('WebSocket未连接，无法发送数据')
        this.websocket!.send(data)
    }
    //#endregion

    //#region == 自身状态 ============================================
    get state(): DriverState {
        return this.selfState
    }
    isConnected(): boolean {
        return this.selfState === DriverState.Connected && this.websocket !== undefined
    }
    onError(callback: (err: OnCloseData) => void): void {
        this.onErrorHook = callback
    }
    onMessage(callback: (msg: OnMessageData) => void): void {
        this.onmessageHook = callback
    }
    async reset(): Promise<void> {
        if (this.selfState === DriverState.Disconnected) return
        await this.close()
        this.websocket = undefined
        this.selfState = DriverState.Disconnected
        this.onErrorHook = undefined
        this.onmessageHook = undefined
    }
    //#endregion

    //#region == 私有方法 ============================================
    private onClose(err: CloseEvent|Event) {
        this.websocket = undefined

        let errData: OnCloseData
        if (err instanceof CloseEvent) {
            errData = {
                code: err.code,
                message: err.reason,
            }
        }else {
            errData = {
                code: -1,
                message: '连接异常关闭',
            }
        }

        if (this.selfState === DriverState.Close) return
        this.selfState = DriverState.Error
        this.onErrorHook?.(errData)
    }
    //#endregion
}
const nativeWs = new NativeWs()

interface BackendWsOnOpenData {
    address: string
}

class BackendWs implements Ws {
    private selfState: DriverState = DriverState.Disconnected
    private onmessageHook?: (msg: OnMessageData) => void
    private onErrorHook?: (err: OnCloseData) => void
    //#region == 开启关闭 ============================================
    open(url: string): Promise<boolean> {
        if (this.selfState === DriverState.Connected)
            throw new Error('WebSocket已存在，无法重复连接')
        if (this.selfState === DriverState.Connecting)
            throw new Error('WebSocket正在连接中，无法重复连接')
        if (this.selfState === DriverState.Close)
            throw new Error('WebSocket已关闭，请先重置')

        this.selfState = DriverState.Connecting
        return new Promise<boolean>((resolve) => {
            let isConnected = false
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const onopen = (_: any) => {
                logger.info('WebSocket连接成功')
                this.selfState = DriverState.Connected
                isConnected = true
                resolve(true)
            }
            const onclose = (data: OnCloseData) => {
                this.selfState = DriverState.Disconnected
                if (isConnected) return this.onClose(data)
                else resolve(false)
            }
            this._onOpenHook = onopen
            this._onCloseHook = onclose
            this._onMessageHook = (message: OnMessageData) => {
                this.onmessageHook?.(message)
            }
            backend.call('Onebot', 'onebot:connect', false, { url })
        })
    }
    close(): Promise<void> {
        let resolve!: (value: void | PromiseLike<void>) => void
        const promise = new Promise<void>(
            r => resolve = r
        )
        this.selfState = DriverState.Close
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onclose = (_: OnCloseData) => {
            resolve()
        }
        this._onCloseHook = onclose
        backend.call('Onebot', 'onebot:close', false)
        new PopInfo().add(
            PopType.INFO,
            app.config.globalProperties.$t('正在断开链接……'),
        )
        return promise
    }
    //#endregion

    //#region == 发送数据 ============================================
    send(data: string): void {
        backend.call('Onebot', 'onebot:send', false, data)
    }
    //#endregion

    //#region == 自身状态 ============================================
    get state(): DriverState {
        return this.selfState
    }
    isConnected(): boolean {
        return this.selfState === DriverState.Connected
    }
    onError(callback: (err: OnCloseData) => void): void {
        this.onErrorHook = callback
    }
    onMessage(callback: (msg: OnMessageData) => void): void {
        this.onmessageHook = callback
    }
    async reset(): Promise<void> {
        if (this.selfState === DriverState.Disconnected) return
        await this.close()
        this.selfState = DriverState.Disconnected
        this.onErrorHook = undefined
        this.onmessageHook = undefined
        this._onOpenHook = undefined
        this._onMessageHook = undefined
        this._onCloseHook = undefined
    }
    //#endregion

    //#region == 私有方法 ============================================
    // 处理退出
    private onClose(data: OnCloseData) {
        if (this.selfState === DriverState.Close) return
        this.selfState = DriverState.Error
        this.onErrorHook?.(data)
    }
    // 向后端添加监听
    private _onOpenHook?: (data: BackendWsOnOpenData) => void
    private _onMessageHook?: (message: OnMessageData) => void
    private _onCloseHook?: (data: OnCloseData) => void
    _onOpen(data: BackendWsOnOpenData) {
        this._onOpenHook?.(data)
    }
    _onMessage(data: OnMessageData) {
        this._onMessageHook?.(data)
    }
    _onClose(data: OnCloseData) {
        this._onCloseHook?.(data)
    }
    //#endregion
}
export const backendWs = new BackendWs()

interface Fetch {
    get(
        url: string,
        data: Record<string, any>,
        header: Record<string, any>
    ): Promise<string>
    post(
        url: string,
        data: Record<string, any>,
        header: Record<string, any>
    ): Promise<string>
}

class NativeFetch implements Fetch {
    async get(
        url: string,
        data: Record<string, any>,
        header: Record<string, any>
    ): Promise<string> {
        return await this.main(url, data, header, 'GET')
    }
    async post(
        url: string,
        data: Record<string, any>,
        header: Record<string, any>
    ): Promise<string> {
        return await this.main(url, data, header, 'POST')
    }

    private async main(
        url: string,
        data: Record<string, any>,
        header: Record<string, any>,
        method: 'GET' | 'POST'
    ) {
        const params = { method, headers: header } as RequestInit
        if (method === 'GET') {
            const urlObj = new URL(url)
            Object.keys(data).forEach(key => {
                urlObj.searchParams.append(key, data[key])
            })
            url = urlObj.toString()
        } else {
            params.body = JSON.stringify(data)
            params.headers = {
                ...params.headers,
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, params)
        if (!response.ok) throw new Error('网络请求失败')
        return await response.text()
    }
}
const nativeFetch = new NativeFetch()

class BackendFetch implements Fetch {
    async get(url: string, data: Record<string, any>, header: Record<string, any>): Promise<string> {
        return await backend.call(
            undefined,
            'onebot:get',
            true,
            { url, data, header }
        )
    }
    async post(url: string, data: Record<string, any>, header: Record<string, any>): Promise<string> {
        return await backend.call(
            undefined,
            'onebot:post',
            true,
            { url, data, header }
        )
    }
}
const backendFetch = new BackendFetch

/**
 * 驱动器，直接用于和后端通信以及和适配器通信
 */
class Driver {
    // 连接状态
    private state: DriverState = DriverState.Disconnected
    private url!: string
    private ssl: boolean = false
    private token?: string
    private header: Record<string, string> = {}
    private wsUrl!: string
    private httpUrl!: string
    private ws!: Ws
    private fetch!: Fetch
    private retry!: number
    private path!: string
    private onMessageHook?: (msg: string) => void
    private onErrHook?: (err: OnCloseData) => void
    reset(
        url: string,
        ssl: boolean,
        token?: string,
        path?: string,
        header: Record<string, string> = {},
        retry: number = 5,
    ) {
        this.url = url
        this.ssl = ssl
        this.header = header
        this.token = token
        if (this.token) this.header['Authorization'] = `Bearer ${this.token}`
        this.wsUrl = this.getUrl('ws')
        this.httpUrl = this.getUrl('http')
        this.retry = retry
        this.path = path ?? ''

        if (backend.isWeb()) {
            this.ws = nativeWs
            this.fetch = nativeFetch
        }else {
            this.ws = backendWs
            this.fetch = backendFetch
        }

        // 重置状态
        this.ws.reset()
        this.state = DriverState.Disconnected
        this.onErrHook = undefined
        this.onMessageHook = undefined

        // 收到消息
        this.ws.onMessage(msg => this.onMessageHook?.(msg))
        // 自动重连
        this.ws.onError(async(err) => {
            if (this.state === DriverState.Close) return
            new PopInfo().add(PopType.INFO, '连接不稳定')
            const re = await this.connectWs(this.path)

            if (re) return

            // 连接失败处理
            this.state = DriverState.Error
            this.onErrHook?.(err)
            runtimeData.nowAdapter = undefined
            new PopInfo().add(PopType.ERR, '连接中断')
        })
    }


    //#region == 开启关闭 ============================================
    /**
     * 打开连接
     * @returns 是否连接成功
     */
    async open(): Promise<boolean> {
        if (this.state !== DriverState.Disconnected)
            throw new Error('驱动器不处于断开状态，无法连接')
        this.state = DriverState.Connecting
        const re = await this.connectWs(this.path)
        if (re) {
            this.state = DriverState.Connected
        }else {
            this.state = DriverState.Error
            new PopInfo().add(PopType.ERR, '连接失败')
        }
        return re
    }

    async close(): Promise<void> {
        this.state = DriverState.Close
        runtimeData.nowAdapter = undefined
        await this.ws.close()
    }
    //#endregion

    //#region == 收发数据 ============================================
    /**
     * WebSocket 发送数据
     * @param data
     */
    async send(data: string): Promise<boolean> {
        if (!this.ws.isConnected()) return false
        await this.ws.send(data)
        return true
    }

    /**
     * get 方法 获取数据
     * @returns 获取的数据
     */
    async get(path: string, data: Record<string, any>): Promise<boolean|string>  {
        if (!this.ws.isConnected()) return false
        return await this.fetch.get(`${this.httpUrl}/${path}`, data, this.header)
    }

    /**
     * post 方法 发送数据
     * @param path
     * @param data
     */
    async post(path: string, data: Record<string, any>): Promise<false|string> {
        if (!this.ws.isConnected()) return false
        return await this.fetch.post(`${this.httpUrl}/${path}`, data, this.header)
    }
    //#endregion

    //#region == 运行状态 ============================================
    /**
     * 是否正在运行
     * @returns
     */
    isConnected(): boolean {
        if (this.state === DriverState.Connecting) return true
        if (this.state === DriverState.Connected) return true
        return false
    }
    isConnecting(): boolean {
        return this.state === DriverState.Connecting
    }
    //#endregion

    //#region == 钩子相关 ============================================
    /**
     * ws收到消息钩子
     * @param callback 回调
     */
    onMessage(callback: (msg: string) => void): void {
        this.onMessageHook = callback
    }
    /**
     * 异常关闭时
     * @param callback 回调
     */
    onError(callback: (err: OnCloseData) => void): void {
        this.onErrHook = callback
    }
    //#endregion

    //#region == 私有方法 ============================================
    /**
     * 获取不同协议的URL
     * @param protocol 协议
     * @returns
     */
    private getUrl(protocol: 'ws' | 'http') {
        if (this.ssl) protocol += 's'
        if (protocol === 'http')
            return `${protocol}://${this.url}`
        else if (this.token)
            return `${protocol}://${this.url}?access_token=${this.token}`
        else
            return `${protocol}://${this.url}`
    }
    /**
     * 连接到WebSocket
     * @returns 是否成功
     */
    private async connectWs(path: string): Promise<boolean> {
        for (let i = 0; i < this.retry; i++) {
            const re = await this.ws.open(this.wsUrl + '/' + path)
            if (re) return true
        }
        return false
    }
    //#endregion
}

export default new Driver()

export enum DriverState {
    Disconnected = 'disconnected',
    Connecting = 'connecting',
    Connected = 'connected',
    Error = 'error',
    Close = 'close',
}
