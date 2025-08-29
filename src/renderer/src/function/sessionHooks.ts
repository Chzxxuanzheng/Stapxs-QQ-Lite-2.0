/*
 * @FileDescription: Session 的一些钩子函数
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 *           2.0
 * @Description: 感觉业务逻辑写在模型里太怪了...拆出来(里面的方法也不少了吧?)
 */

import app from '@renderer/main'
import { Message } from './model/message'
import { GroupSession, Session } from './model/session'
import { Notice, ReceivedNotice, SystemNotice } from './model/notice'
import { runtimeData } from './msg'
import { Msg } from './model/msg'
import { NotifyInfo } from './elements/system'
import { Notify } from './notify'
import { isImportant as userIsImportant } from './utils/msgUtil'
import option from './option'
import { backend } from '@renderer/runtime/backend'
import { refreshFavicon } from './utils/favicon'

/**
 * 给正在输入差屁股...
 */
Session.afterNewMessageHook.push((session: Session, _: Message) => {
    const { $t } = app.config.globalProperties
    if (session.appendInfo === $t('对方正在输入……')) session.appendInfo = undefined
})
//#region == 通知相关 ==============================================
/**
 * 通知处理(群组)
 */
Session.afterNewMessageHook.push((session: Session, msg: Message) => {
    if (!(session instanceof GroupSession)) return
    if (msg instanceof SystemNotice) return
    if (!needSendNotice(session)) return

    if (!isImportant(msg) && !groupNeedShowNotice(session)) return

    session.showNotice = true

    // 发送通知
    if (!groupNeedSendNotify(session)) return
    sendNotify(session, msg)
})
/**
 * 通知处理(非群组)
 */
Session.afterNewMessageHook.push((session: Session, msg: Message) => {
    if (session instanceof GroupSession) return
    if (msg instanceof SystemNotice) return
    if (!needSendNotice(session)) return

    session.showNotice = true
    // 发送通知
    sendNotify(session, msg)
})

//#endregion

//#region == 高亮相关 ==============================================
const atme = app.config.globalProperties.$t('@你')
const atall = app.config.globalProperties.$t('@全体')
const important = app.config.globalProperties.$t('特别关心')
// const ann = app.config.globalProperties.$t('公告')
Session.afterNewMessageHook.push((session: Session, msg: Message) => {
    if (hasConnectionWithImport(msg)) addHighlightInfo(session, important)
    if (msg instanceof Msg) {
        if (msg.atme) addHighlightInfo(session, atme)
        if (msg.atall) addHighlightInfo(session, atall)
    }
})
//#endregion

//#region == 图标更新 ==============================================
Session.afterNewMessageHook.push((_session: Session, _msg: Message) => {
    refreshFavicon()
})
Session.afterSetReadHook.push((_session: Session) => {
    refreshFavicon()
})
Session.afterUnactiveHook.push((_session: Session) => {
    refreshFavicon()
})
//#endregion

// 本人无苹果设备,不保证可以用
//#region == Touch Bar ============================================
Session.afterActiveHook.push((_)=>{
    if (!backend.isDesktop()) return
    const list = [] as
        { id: number, name: string, image?: string }[]
    for (const session of Session.activeSessions.values()) {
        list.push({
            id: session.id,
            name: session.showName,
            image: session.face
        })
    }
    backend.call(undefined, 'sys:flushOnMessage', false, list)
})

//#region == 工具函数 ==============================================
/**
 * 判断现在窗口是否有必要发通知
 */
function needSendNotice(session: Session): boolean {
    if (!document.hasFocus()) return true
    if (document.hidden) return true
    if (runtimeData.nowChat !== session) return true
    return false
}

/**
 * 该消息是否和特别关系的人有关系
 * @param msg 消息
 * @returns
 */
function hasConnectionWithImport(msg: Message): boolean {
    if (msg instanceof ReceivedNotice) {
        for (const user of msg.users) {
            if (userIsImportant(user.user_id)) return true
        }
        return false
    }else if (msg instanceof Msg) {
        return userIsImportant(msg.sender)
    }
    return false
}

/**
 * 判断消息是否重要
 * @param msg 消息
 */
function isImportant(msg: Message): boolean {
    if (hasConnectionWithImport(msg)) return true
    if (msg instanceof Notice) {
        if (msg.tome) return true
        return false
    }else if (msg instanceof Msg) {
        if (msg.atme) return true
        if (msg.atall) return true
        return false
    }
    return false
}

function addHighlightInfo(session: Session, msg: string): void {
    if (!session.highlightInfo.includes(msg)) {
        session.highlightInfo.unshift(msg)
    }
}

/**
 * 发送通知
 * @param session 会话
 * @param msg 消息
 * @param important 特别关心
 */
function sendNotify(session: Session, msg: Message, important: boolean = false): void {
    // 如果没有开启通知，直接返回
    if (option.get('close_notice')) return

    // TODO: 通知跳转
    // 组装通知
    const msgInfo = {
        base_type: 'msg',
        title: session.showName,
        body: msg.preMsg,
        tag: `${session.id}/${msg.message_id}`,
        icon: session.face,
        image: undefined as any,
        type: session.type,
        is_important: important,
    } as NotifyInfo

    new Notify().notify(msgInfo)
}

/**
 * 判断群组是否需要通知
 * @param session 群组会话
 */
function groupNeedShowNotice(session: GroupSession): boolean {
    if (session.notice) return true
    if (runtimeData.sysConfig.group_notice_type === 'all') return true
    if (runtimeData.sysConfig.group_notice_type === 'inner') return true
    return false
}

/**
 * 判断群组是否需要发送通知
 * @param session 群组会话
 */
function groupNeedSendNotify(session: GroupSession): boolean {
    if (session.notice) return true
    if (runtimeData.sysConfig.group_notice_type === 'all') return true
    return false
}

//#endregion
