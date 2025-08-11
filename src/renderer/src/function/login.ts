import {
    reactive,
    markRaw,
} from 'vue'
import { LoginCacheElem } from './elements/system'
import { URL } from './model/data'
import { PopInfo, PopType } from './base'
import { AdapterInterface } from './adapter/interface'
import { resetRuntime, runtimeData } from './msg'
import app from '@renderer/main'
import { reloadUsers, updateMenu } from './utils/appUtil'
import { callBackend } from './utils/systemUtil'

const popInfo = new PopInfo()

function $t(key: string): string {
    return app.config.globalProperties.$t(key)
}

export const loginInfo: LoginCacheElem = reactive({
    quickLogin: [],
    address: '',
    token: '',
})

const adapters = import.meta.glob('@renderer/function/adapter/*/adapter.ts', { eager: true })
const adapterMap = new Map<string, AdapterInterface>()
for (const key in adapters) {
    const adapter: AdapterInterface = (adapters as any)[key].default
    if (adapter) {
        adapterMap.set(adapter.protocol, adapter)
    }
}

export async function login(originUrl: string, token: string): Promise<boolean>{
    const parseUrl = new URL(originUrl)
    let protocol: string = parseUrl.protocol
    const ssl: boolean = parseUrl.ssl
    const url: string = `${parseUrl.host}:${parseUrl.port}`
    if (protocol === 'ws') {
        popInfo.add(PopType.INFO, $t('协议仅支持ob/mk,详情请看如何连接.ws默认按ob处理'))
        protocol = 'ob'
    }

    // 查询适配器
    if (!adapterMap.has(protocol)) {
        popInfo.add(PopType.ERR, $t('不支持的协议: ') + protocol)
        return false
    }

    let adapter = adapterMap.get(protocol) as AdapterInterface
    runtimeData.nowAdapter = markRaw(adapter)
    const re = await adapter.connect(url, ssl, token,)
    if (!re) {
        popInfo.add(PopType.ERR, $t('连接失败'))
        return false
    }

    // 初始化连接
    const redirect = await adapter.redirect?.()
    if (redirect) {
        adapter = redirect
        runtimeData.nowAdapter = markRaw(redirect)
    }

    // 获取登陆信息
    const loginData = await adapter.getLoginInfo()
    if (!loginData) {
        popInfo.add(
            PopType.ERR,
            $t('获取登录信息失败')
        )
        return false
    }

    // 重置runtimeData
    resetRuntime(runtimeData.loginInfo.uin !== loginData.uin)

    // 完成登陆初始化
    runtimeData.loginInfo = loginData

    // 显示账户菜单
    updateMenu({
        parent: 'account',
        id: 'userName',
        action: 'label',
        value: loginData.nickname,
    })
    const title = `${loginData.nickname}（${loginData.uin}）`
    if(runtimeData.tags.platform == 'web') {
        document.title = title + '- Stapxs QQ Lite'
    } else {
        document.title = title
        callBackend(undefined, 'win:setTitle', false, title)
    }

    // 跳转标签卡
    const barMsg = document.getElementById('bar-msg')
    if (barMsg != null) barMsg.click()

    // 加载列表消息
    await reloadUsers()

    return true
}
