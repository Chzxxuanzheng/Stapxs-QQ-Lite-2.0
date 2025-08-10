/*
 * @FileDescription: 事件相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 用于处理适配器收到的事件
 */

import { Message } from './message'
import type {
    BanEventData,
    BanLiftEventData,
    EventData,
    EventType,
    JoinEventData,
    LeaveEventData,
    MessageEventType,
    MsgEventData,
    PokeEventData,
    RecallEventData
} from '../adapter/interface'
import { GroupSession, Session } from './session'
import { Msg } from './msg'
import {
    BanLiftNotice,
    BanNotice,
    JoinNotice,
    LeaveNotice,
    PokeNotice,
    RecallNotice
} from './notice'
import { Member } from './user'

type EventConstructor = { new (...args: any[]): Event }
const eventType: Map<string, EventConstructor> = new Map()

function registerEventType(type: EventType): ClassDecorator {
    function decorator<T extends EventConstructor>(constructor: T): T {
        if (eventType.has(type)) {
            throw new Error(`事件类型 ${type} 已经被注册`)
        }
        eventType.set(type, constructor)
        return constructor
    }
    return decorator as ClassDecorator
}

/**
 * 事件类
 */
export abstract class Event {
    abstract readonly type: EventType // 事件类型

    static parse(data: EventData): Event {
        const Constructor = eventType.get(data.type) ?? UnknownEvent

        return new Constructor(data)
    }
}

/**
 * 消息事件
 * 该事件会携带一个Message对象和一个Session对象
 */
export abstract class MessageEvent extends Event {
    abstract override readonly type: MessageEventType
    session: Session
    message: Message
    constructor(session: Session, message: Message) {
        super()
        this.session = session
        this.message = message
    }
}

/**
 * 新消息事件
 */
@registerEventType('msg')
export class MsgEvent extends MessageEvent {
    override readonly type = 'msg'
    declare message: Msg
    constructor(data: MsgEventData) {
        const session = Session.getSession(data.session)
        const msg = new Msg(data.message)
        super(session, msg)
    }
}

/**
 * 撤回消息事件
 */
@registerEventType('recall')
export class RecallEvent extends MessageEvent {
    override readonly type = 'recall'
    recallId: string
    declare message: RecallNotice
    constructor(data: RecallEventData) {
        const session = Session.getSession(data.session)
        const notice = new RecallNotice(data)
        super(session, notice)
        this.recallId = data.recallId
    }
}

/**
 * 禁言事件
 */
@registerEventType('ban')
export class BanEvent extends MessageEvent {
    override readonly type = 'ban'
    user: Member
    /**
     * 禁言时间，单位s
     */
    duration: number
    declare session: GroupSession
    declare message: BanNotice
    constructor(data: BanEventData) {
        const session = Session.getSession(data.session)
        const notice = new BanNotice(data)
        super(session, notice)
        if (!(notice.user instanceof Member))
            throw new Error('禁言事件的用户必须是群成员实例')
        this.user = notice.user
        this.duration = data.duration
    }
}

/**
 * 解除禁言事件
 */
@registerEventType('banLift')
export class BanLiftEvent extends MessageEvent {
    override readonly type = 'banLift'
    user: Member
    declare message: BanLiftNotice
    declare session: GroupSession
    constructor(data: BanLiftEventData) {
        const session = Session.getSession(data.session)
        const notice = new BanLiftNotice(data)
        super(session, notice)
        if (!(notice.user instanceof Member))
            throw new Error('解除禁言事件的用户必须是群成员实例')
        this.user = notice.user
    }
}


@registerEventType('poke')
export class PokeEvent extends MessageEvent {
    override readonly type = 'poke'
    declare message: PokeNotice
    constructor(data: PokeEventData){
        const session = Session.getSession(data.session)
        const notice = new PokeNotice(data)
        super(session, notice)
    }
}


@registerEventType('join')
export class JoinEvent extends MessageEvent {
    override readonly type = 'join'
    declare message: JoinNotice
    declare session: GroupSession
    constructor(data: JoinEventData) {
        const session = Session.getSession(data.session)
        const notice = new JoinNotice(data)
        super(session, notice)
    }
}

@registerEventType('leave')
export class LeaveEvent extends MessageEvent {
    override readonly type = 'leave'
    declare message: LeaveNotice
    declare session: GroupSession
    constructor(data: LeaveEventData) {
        const session = Session.getSession(data.session)
        const notice = new LeaveNotice(data)
        super(session, notice)
    }
}

export class UnknownEvent extends Event {
    override readonly type = 'unknown'
    data: EventData
    constructor(data: EventData) {
        super()
        this.data = data
    }
}
