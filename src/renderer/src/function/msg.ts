/*
 * @FileDescription: 消息处理模块
 * @Author: Stapxs
 * @Date:
 *      2022/11/1
 *      2022/12/7
 *      2024/9/2
 * @Version:
 *      1.0 - 初始版本
 *      2.0 - 重构为 ts 版本，修改 Vue3 相关变更
 *      3.0 - 优化更优雅的代码结构
 * @Description: <del>此模块用于拆分和保存/处理 bot 返回的各类信息，整个运行时数据也保存在这儿。</del>
 *               用于处理受到的事件
 */
import qed from '@renderer/assets/qed.txt?raw'

import app from '@renderer/main'
import Option, { optDefault } from './option'

import Umami from '@stapxs/umami-logger-typescript'

import {
    getMsgData,
    parseMsgList,
    createMsg,
} from '@renderer/function/utils/msgUtil'
import {
    callBackend,
    getInch,
    randomNum,
} from '@renderer/function/utils/systemUtil'
import {
    reloadUsers,
    updateMenu,
    loadJsonMap,
    sendStatEvent,
} from '@renderer/function/utils/appUtil'
import { reactive, markRaw, defineAsyncComponent } from 'vue'
import { PopInfo, PopType, Logger, LogType } from './base'
import { Connector, login } from './connect'
import {
    RunTimeDataElem,
    BotMsgType,
} from './elements/information'
import { Notify } from './notify'
import { Msg, SelfMsg } from './model/msg'
import { BanLiftNotice, BanNotice, JoinNotice, LeaveNotice, PokeNotice, RevokeNotice } from './model/notice'
import { Session } from './model/session'
import { Member } from './model/user'

// eslint-disable-next-line
const msgPaths = import.meta.glob("@renderer/assets/pathMap/*.yaml", { eager: true})
// 取出包含 Lagrange.OneBot.yaml 的那条
const msgPathAt = Object.keys(msgPaths).find((item) => {
    return item.indexOf('Lagrange.OneBot.yaml') > 0
})
let msgPath = {} as { [key: string]: any }
if(msgPathAt != undefined) {
    msgPath = (msgPaths[msgPathAt] as any).default
}
// 其他 tag
const logger = new Logger()
let firstHeartbeatTime = -1
let heartbeatTime = -1

export function dispatch(raw: string | { [k: string]: any }, echo?: string) {
    let msg: any;

    // TODO: 分发事件适配
    // TODO: 事件模型重构
    logger.add(LogType.WS, 'GET：', raw)

    // 1) 如有需要先 parse
    if (typeof raw === 'string') {
        try {
            msg = JSON.parse(raw)
        } catch {
            if (!raw.includes('"meta_event_type":"heartbeat"')) {
                logger.add(LogType.WS, 'GET：' + raw)
            }
            return
        }
    } else {
        msg = raw
    }

    // 2) 決定 name/key
    const name = echo ? echo.split('_')[0] : msg.post_type === 'notice' ? msg.sub_type ?? msg.notice_type : msg.post_type

    // 3) 安全調用 handler
    try {
        const fn = handlers[name]
        if (!fn) throw new Error(`No handler for "${name}"`)
        const metaArgs = echo ? echo.split('_') : undefined
        fn(msg, metaArgs)
    } catch (e) {
        logger.error(e as Error, `跳转事件处理错误 - ${name}:\n${JSON.stringify(msg)}`)
    }
}

// ==============================================================
const noticeFunctions = {
    /**
     * 心跳包
     */
    meta_event: (_: string, msg: { [key: string]: any }) => {
        if (firstHeartbeatTime == -1) {
            firstHeartbeatTime = 0
            runtimeData.watch.heartbeatTime = 0
            return
        }
        if (firstHeartbeatTime == 0) {
            firstHeartbeatTime = msg.time
            runtimeData.watch.lastHeartbeatTime = msg.time
            return
        }
        if (firstHeartbeatTime != -1 && heartbeatTime == -1) {
            // 计算心跳时间
            heartbeatTime = msg.time - firstHeartbeatTime
        }
        // 记录心跳状态
        if (heartbeatTime != -1) {
            runtimeData.watch.heartbeatTime = heartbeatTime
            runtimeData.watch.oldHeartbeatTime =
                runtimeData.watch.lastHeartbeatTime
            runtimeData.watch.lastHeartbeatTime = msg.time
        }
    },

    /**
     * 新消息
     */
    message_sent: newMsg,
    message: newMsg,

    /**
     * 请求
     */
    request: (_: string, msg: { [key: string]: any }) => {
        if (runtimeData.systemNoticesList) {
            runtimeData.systemNoticesList.push(msg)
        } else {
            runtimeData.systemNoticesList = [msg]
        }
    },

    /**
     * 好友变动
     */
    friend: (_: string, msg: { [key: string]: any }) => {
        // 重新加载联系人列表
        reloadUsers()
        switch (msg.sub_type) {
            case 'increase': {
                // 添加系统通知
                new PopInfo().add(
                    PopType.INFO,
                    app.config.globalProperties.$t('添加好友 {name} 成功！', {
                        name: msg.nickname,
                    }),
                )
                break
            }
            case 'decrease': {
                // 输出日志（显示为红色字体）
                // eslint-disable-next-line no-console
                console.log(
                    '%c消失了一个好友：' +
                        msg.nickname +
                        '（' +
                        msg.user_id +
                        '）',
                    'color:red;',
                )
                break
            }
        }
    },

    /**
     * 消息撤回
     */
    group_recall: revokeMsg,
    friend_recall: revokeMsg,
    recall: revokeMsg,

    /**
     * 表情回应
     */
    group_msg_emoji_like: (_: string, msg: { [key: string]: any }) => {
        const msgId = msg.message_id
        const emojiList = msg.likes
        // 寻找消息
        for (const session of Session.activeSessions) {
            for (const msg of session.messageList) {
                if (msg.message_id === msgId) {
                    if (msg instanceof Msg) {
                        msg.emojis = emojiList
                    }
                }
            }
        }
    },

    /**
     * 群禁言
     */
    ban: (_: string, msg: { [key: string]: any }) => {
        const notice = new BanNotice(msg as any)
        if (!notice.session) {
            throw new Error('群禁言通知解析失败')
        }
        const session = notice.session
        if (notice.user instanceof Member) notice.user.setBanTime(notice.duration)
        session.addMessage(notice)
    },
    lift_ban: (_: string, msg: { [key: string]: any }) => {
        const notice = new BanLiftNotice(msg as any)

        if (!notice.session) {
            throw new Error('群禁言通知解析失败')
        }

        const session = notice.session
        if (notice.user instanceof Member) notice.user.clearBanTime()
        session.addMessage(notice)
    },

    /**
     * 戳一戳
     */
    poke: (_: string, msg: { [key: string]: any }) => {
        const notice = new PokeNotice(msg as any)
        if (! notice.session)  throw new Error('戳一戳通知解析失败')

        notice.session.addMessage(notice)
    },

    approve: joinGroup,
    invite: joinGroup,

    leave: leaveGroup,
    kick: leaveGroup,
    kick_me: leaveGroup,

    input_status: (_: string, msg: { [key: string]: any }) => {
        const { $t } = app.config.globalProperties
        const session = Session.getSessionById(msg.user_id)
        if (!session) return
        session.appendInfo =  $t('对方正在输入……')
        // TODO: 计时器移除
        setTimeout(() => {
            session.appendInfo = undefined
        }, 10000)
    },
} as { [key: string]: (name: string, msg: { [key: string]: any }) => void | Promise<void> }

const msgFunctions = {
    /**
     * 保存 Bot 信息
     */
    getVersionInfo: (_: string, msg: { [key: string]: any }) => {
        const data = getMsgData('version_info', msg, msgPath.version_info)[0]

        if (data) {
            // 如果 runtime 存在（即不是第一次连接），且 app_name 不同，重置 runtime
            resetRimtime(
                runtimeData.botInfo.app_name != data.app_name && !login.status,
            )

            runtimeData.botInfo = data
            if (Option.get('open_ga_bot') !== false) {
                if (data.app_name !== undefined) {
                    sendStatEvent('connect', { method: data.app_name })
                } else {
                    sendStatEvent('connect', { method: '（未知）' })
                }
            }
            if (!login.status) {
                // 尝试动态载入对应的 pathMap
                if (data.app_name !== undefined) {
                    const getMap = loadJsonMap(data.app_name)
                    if (getMap != null) msgPath = getMap
                }
                // 继续获取后续内容
                Connector.send('get_login_info', {}, 'getLoginInfo')
            }
        }
    },

    /**
     * 保存账号信息
     */
    getLoginInfo: async (_: string, msg: { [key: string]: any }) => {
        const msgBody = getMsgData('login_info', msg, msgPath.login_info)
        if (msgBody) {
            const data = msgBody[0]

            // 如果 runtime 存在（即不是第一次连接），且 uin 不同，重置 runtime
            resetRimtime(runtimeData.loginInfo.uin != data.uin && !login.status)

            // 完成登陆初始化
            runtimeData.loginInfo = data
            login.status = true
            // 显示账户菜单
            updateMenu({
                parent: 'account',
                id: 'userName',
                action: 'label',
                value: data.nickname,
            })
            const title = `${data.nickname}（${data.uin}）`
            if(runtimeData.tags.platform == 'web') {
                document.title = title + '- Stapxs QQ Lite'
            } else {
                document.title = title
                callBackend(undefined, 'win:setTitle', false, title)
            }
            // 结束登录页面的水波动画
            clearInterval(runtimeData.tags.loginWaveTimer)
            // 跳转标签卡
            const barMsg = document.getElementById('bar-msg')
            if (barMsg != null) barMsg.click()
            // 加载列表消息
            await reloadUsers()
        }
    },

    /**
     * 获取收藏表情
     */
    getRoamingStamp: (
        _: string,
        msg: { [key: string]: any },
        echoList: string[],
    ) => {
        const getCount = Number(echoList[1])
        const data = msg.data
        if (msgPath.roaming_stamp.reverse) {
            data.reverse()
        }
        if (runtimeData.stickerCache == undefined) {
            runtimeData.stickerCache = data
        } else if (runtimeData.jsonMap.roaming_stamp.pagerType == 'full') {
            // 全量分页模式下不追加
            if (getCount > runtimeData.stickerCache.length + 48) {
                // 已经获取到所有内容了
                data.push('end')
            }
            runtimeData.stickerCache = data
        } else {
            runtimeData.stickerCache = runtimeData.stickerCache.concat(data)
        }
    },

    /**
     * 系统通知后处理
     */
    setFriendAdd: updateSysInfo,
    setGroupAdd: updateSysInfo,
} as {
    [key: string]: (
        name: string,
        msg: { [key: string]: any },
        echoList?: string[],
    ) => void
}

const handlers: Record<string, (payload: any, metaArgs?: string[]) => void> = {
  ...(Object.entries(msgFunctions).reduce((acc, [key, fn]) => ({
    ...acc,
    [key]: (payload: any, metaArgs?: string[]) => fn(key, payload, metaArgs)
  }), {})),
  ...(Object.entries(noticeFunctions).reduce((acc, [key, fn]) => ({
    ...acc,
    [key]: (payload: any) => fn(key, payload)
  }), {}))
};

// ==========================================

export function getMessageList(list: any[] | undefined): Msg[] {
    list = parseMsgList(
        list,
        msgPath.message_list.type,
        msgPath.message_value,
    )
    // 倒序处理
    if (msgPath.message_list.order === 'reverse') {
        list.reverse()
    }
    // 检查必要字段
    list.forEach((item: any) => {
        if (!item.post_type) {
            item.post_type = 'message'
        }
    })
    return list
}

function revokeMsg(_: string, msg: any) {
    const notice = new RevokeNotice(msg)
    if (!notice.session || !notice.message_id) throw new Error('撤回通知缺少必要信息')
    const session = notice.session
    const msgId = notice.message_id
    // 寻找消息
    let matchMsg: undefined | Msg
    let matchMsgId: undefined | number
    for (const [ id, msg ] of session.messageList.entries()) {
        if (msg.message_id === String(msgId)) {
            matchMsg = msg as Msg
            matchMsgId = id
            break
        }
    }
    if (!matchMsg || !matchMsgId) {
        logger.error(null, '没有找到这条被撤回的消息 ……')
        return
    }

    // 添加提示,移除消息
    session.removeMsg(matchMsg)
    session.addMessage(notice)

    // 撤回通知
    new Notify().closeAll(String(session.id))
}

let qed_try_times = 0
async function newMsg(_: string, data: any) {
    // 没有对频道的支持计划
    if (data.detail_type == 'guild') return

    // 消息基础信息 ============================================
    const msg = createMsg(data)
    if (!msg) return logger.error(data, '消息解析失败')
    if (!msg.session) return logger.error(null, '消息没有 session 信息，无法处理消息')
    if (!msg.message_id) return logger.error(null, '消息没有 message_id 信息，无法处理消息')
    const loginId = runtimeData.loginInfo.uin
    const sender = msg.sender.user_id

    // 自己发送消息拦截 ============================================
    if (sender === loginId) {
        if (await SelfMsg.isSendMsg(msg)) return
    }

    msg.session.addMessage(msg)

    // 抽个签 (什么鬼？业务逻辑而还没抽签多)
    const num = randomNum(0, 10000)
    if (num >= 4500 && num <= 5500) {
        logger.add(
            LogType.INFO,
            num.toString() + '，这只是个神秘的数字...',
            undefined,
            true,
        )
    }
    if (num === 495) {  // QED怎么能和芙兰无关？(◣_◢)吃我一发 QED [495年的波纹]
        const popInfo = {
            html: qed,
            button: [
                {
                    text: '确定(O)',
                    fun: () => {
                        runtimeData.popBoxList.shift()
                    },
                },
            ],
        }
        runtimeData.popBoxList.push(popInfo)
        Umami.trackEvent('show_qed', { times: qed_try_times })
    }
    qed_try_times++
}

/**
 * 刷新系统通知和其他内容，给系统通知响应用的
 */
function updateSysInfo(
    _: string,
    __: { [key: string]: any },
    echoList: string[],
) {
    const flag = echoList[1]
    // 从系统通知列表里删除这条消息
    if (flag !== undefined) {
        const index = runtimeData.systemNoticesList?.findIndex((item: any) => {
            return item.flag == flag
        })
        if (index !== -1) {
            runtimeData.systemNoticesList?.splice(index, 1)
        }
    }
}

async function joinGroup(_: string, msg: { [key: string]: any }){
    const notice = new JoinNotice(msg as any)

    if (!notice.session) throw new Error('入群通知解析失败')
    await notice.session.reloadUserList(true)

    notice.refreshUserData()
    notice.session.addMessage(notice)

}

async function leaveGroup(_: string, msg: { [key: string]: any }) {
    const notice = new LeaveNotice(msg as any)

    if (!notice.session) throw new Error('退群通知解析失败')

    notice.session.addMessage(notice)
    await notice.session.reloadUserList(true)
}

// ==============================================================

const baseRuntime = {
    plantform: {} as any,
    tags: {
        firstLoad: false,
        canLoadHistory: true,
        openSideBar: true,
        viewer: { index: 0 },
        msgType: BotMsgType.Array,
        isElectron: false,
        isCapacitor: false,
        clientType: 'web' as const,
        platform: undefined,
        release: undefined,
        connectSsl: false,
        classes: [],
        darkMode: false,
    },
    watch: {
        backTimes: 0,
    },
    pageView: {
        chatView: markRaw(
            defineAsyncComponent(() => import('@renderer/pages/Chat.vue')),
        ),
        msgView: markRaw(
            defineAsyncComponent(
                () => import('@renderer/components/MsgBody.vue'),
            ),
        ),
    },
    systemNoticesList: undefined,
    onMsgList: [],
    groupAssistList: [],
    loginInfo: {} as unknown as {nickname: string, uin: number},
    botInfo: {},
    sysConfig: {} as Record<keyof typeof optDefault, any | null>,
    popBoxList: [],
    mergeMsgStack: [],
    inch: getInch(),
    nowChat: undefined,
    nowBox: undefined,
    img_list: [],
    color_mod: 'light' as 'light' | 'dark',
}

export const runtimeData: RunTimeDataElem = reactive(baseRuntime)

// 重置 Runtime，但是保留应用设置之类已经加载好的应用内容
export function resetRimtime(resetAll = false) {
    runtimeData.botInfo = reactive([])
    runtimeData.watch = reactive(baseRuntime.watch)
    firstHeartbeatTime = -1
    heartbeatTime = -1
    if (resetAll) {
        runtimeData.tags = reactive(baseRuntime.tags)
        runtimeData.systemNoticesList = reactive([])
        runtimeData.onMsgList = reactive([])
        runtimeData.groupAssistList = reactive([])
        runtimeData.loginInfo = reactive({} as unknown as {nickname: string, uin: number})
    }
}
