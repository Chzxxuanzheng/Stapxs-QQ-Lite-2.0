/*
 * @FileDescription: 消息处理模块
 * @Author: Mr.Lee
 * @Date:
 *      2025/08/09
 * @Version:
 *      1.0 - 初始版本
 * @Description:
 *               用于处理收到的事件，分发向钩子
 */

import {
    EventData,
    EventType
} from './adapter/interface'
import { BanEvent, BanLiftEvent, Event, JoinEvent, LeaveEvent, MsgEvent, PokeEvent, RecallEvent, ResponseEvent } from './model/event'
import { newMsg, recallMsg } from './msg'

type EventHook<T extends Event> = ((event: T) => void | Promise<void>)
const eventHooks: Map<EventType, EventHook<any>[]> = new Map()

export function eventHandle<T extends Event>(...args: [EventType, ...EventType[], EventHook<T>]): void {
    const handle = args.pop() as EventHook<T>
    const types = args as EventType[]
    for (const t of types) {
        if (!eventHooks.has(t)) {
            eventHooks.set(t, [])
        }
        eventHooks.get(t)?.push(handle)
    }
}
/**
 * 收到事件
 * @param event
 */
export function handleEvent(eventData: EventData): void {
    const event = Event.parse(eventData)
    const hooks = eventHooks.get(event.type)
    if (hooks) {
        for (const hook of hooks) {
            hook(event)
        }
    }
}


// 处理新消息
eventHandle('msg', (event: MsgEvent) => {
    newMsg(event.message)
    // newMsg 包含加消息的逻辑，这里不处理
})

// 撤回消息
eventHandle('recall', (event: RecallEvent) => {
    recallMsg(event.session, event.recallId)
    event.session.addMessage(event.message)
})

// 禁言
eventHandle('ban', (event: BanEvent) => {
    event.user.setBanTime(event.duration)
    event.session.addMessage(event.message)
})

// 解禁
eventHandle('banLift', (event: BanLiftEvent) => {
    event.user.clearBanTime()
    event.session.addMessage(event.message)
})

// 戳一戳
eventHandle('poke', (event: PokeEvent) => {
    event.session.addMessage(event.message)
})

// 加群
eventHandle('join', async (event: JoinEvent) => {
    await event.session.reloadUserList()
    event.message.refreshUserData()
    event.session.addMessage(event.message)
})

// 退群
eventHandle('leave', async (event: LeaveEvent) => {
    await event.session.reloadUserList()
    event.session.addMessage(event.message)
})

// 表情回应
eventHandle('response', async (event: ResponseEvent) => {
    event.msg.setEmoji(event.emojiId, event.operator.user_id, event.add)
})
