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
import { Notice, SystemNotice } from './model/notice'
import { runtimeData } from './msg'
import { Msg } from './model/msg'
import { NotifyInfo } from './elements/system'
import { Notify } from './notify'
import { isImportant as userIsImportant } from './utils/msgUtil'
import option from './option'

/**
 * 给正在输入差屁股...
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Session.newMessageHook.push((session: Session, _: Message) => {
    const { $t } = app.config.globalProperties
    if (session.appendInfo === $t('对方正在输入……')) session.appendInfo = undefined
})
//#region == 通知相关 ==============================================
/**
 * 通知处理(群组)
 */
Session.newMessageHook.push((session: Session, msg: Message) => {
    if (!(session instanceof GroupSession)) return
    if (msg instanceof SystemNotice) return
    if (!needSendNotice(session)) return

    if (!isImportant(msg) && !session.notice) return

    session.showNotice = true
    // 发送通知
    sendNotify(session, msg)
})
/**
 * 通知处理(非群组)
 */
Session.newMessageHook.push((session: Session, msg: Message) => {
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
Session.newMessageHook.push((session: Session, msg: Message) => {
    if (hasConnectionWithImport(msg)) addHighlightInfo(session, important)
    if (msg instanceof Msg) {
        if (msg.atme) addHighlightInfo(session, atme)
        if (msg.atall) addHighlightInfo(session, atall)
    }
})
//#endregion

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
    if (msg instanceof Notice) {
        for (const userId of msg.users) {
            if (userIsImportant(userId)) return true
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

    // 组装通知
    const msgInfo = {
        base_type: 'msg',
        title: session.showName,
        body: msg.preMsg,
        tag: `${session.id}/${msg.message_id}`,
        icon: session.getFace(),
        image: undefined as any,
        type: session.type,
        is_important: important,
    } as NotifyInfo

    new Notify().notify(msgInfo)
}
//#endregion
