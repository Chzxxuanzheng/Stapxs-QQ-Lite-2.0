/*
 * @FileDescription: Notice 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/20
 * @Version: 1.0
 * @Description: 在消息栏上展示的通知，只负责显示通知，不关心事件怎么处理的
 */

import app from '@renderer/main'
import { runtimeData } from '../msg'
import { Message } from './message'
import { GroupSession, Session } from './session'
import { autoReactive, formatTime } from './utils'
import { getSender, IUser } from './user'
import type {
    BanEventData,
    BanLiftEventData,
    JoinEventData,
    LeaveEventData,
    MessageEventType,
    PokeEventData,
    RecallEventData,
    SenderData,
    SessionData
} from '../adapter/interface'
import { ProxyUrl } from './proxyUrl'

export abstract class Notice extends Message {
    abstract readonly type: string

    get tome(): boolean {
        return false
    }
}

/**
 * 收到的通知类消息
 */
export abstract class ReceivedNotice extends Notice {
    abstract readonly type: MessageEventType
    override session: Session
    users: IUser[] = []

    constructor(data: {session: SessionData, time: number}) {
        super(data)
        this.session = Session.getSession(data.session)
    }

    protected getUser(user: SenderData): IUser {
        return getSender(user, this.session)
    }
}

@autoReactive
export class RecallNotice extends ReceivedNotice {
    override readonly type = 'recall'
    user: IUser
    operator: IUser
    suffix: string

    constructor(data: RecallEventData) {
        super(data)
        this.user = this.getUser(data.user)
        this.operator = this.getUser(data.operator)
        this.users.push(this.user, this.operator)
        this.suffix = data.suffix
    }

    get selfRevoke(): boolean {
        return this.user.user_id === this.operator.user_id
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.selfRevoke) return this.user.name + $t('撤回了一条消息')
        return this.operator.name + $t('撤回了') + this.user.name + $t('的消息')
    }
}

@autoReactive
export class BanNotice extends ReceivedNotice {
    override readonly type = 'ban'
    declare session: GroupSession
    /**
     * 禁言时长，单位秒
     */
    duration: number
    user: IUser
    operator: IUser
    constructor(data: BanEventData) {
        super(data)
        this.duration = data.duration
        this.user = this.getUser(data.user)
        this.operator = this.getUser(data.operator)
        this.users.push(this.user, this.operator)
    }

    get fTime(): string {
        const { $t } = app.config.globalProperties

        // 将秒数转换为可阅读的时间，最大单位天
        const day = Math.floor(this.duration / 86400)
        const hour = Math.floor((this.duration % 86400) / 3600)
        const minute = Math.floor((this.duration % 3600) / 60)
        const second = this.duration % 60

        let back = ''
        if (day > 0) back += `${day} ${$t('天')} `
        if (hour > 0) back += `${hour} ${$t('小时')} `
        if (minute > 0) back += `${minute} ${$t('分钟')} `
        if (second > 0) back += `${second} ${$t('秒')} `
        return back
    }

    override get tome(): boolean {
        return this.user.user_id === runtimeData.loginInfo.uin
    }

    get formatDuration(): string {
        return formatTime(this.duration * 1000, 'auto')
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.tome) return this.operator.name + $t('禁言了') + $t('你') + this.fTime
        return this.operator.name + $t('禁言了') + this.user.name + this.fTime
    }
}

@autoReactive
export class BanLiftNotice extends ReceivedNotice {
    override readonly type = 'banLift'
    declare session: GroupSession
    user: IUser
    operator: IUser
    constructor(data: BanLiftEventData) {
        super(data)
        this.user = this.getUser(data.user)
        this.operator = this.getUser(data.operator)
        this.users.push(this.user, this.operator)
    }

    override get tome(): boolean {
        return this.user.user_id === runtimeData.loginInfo.uin
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.tome) return this.operator.name + $t('解除了你的禁言')
        return this.operator + $t('解除了') + this.user.name + $t('的禁言')
    }
}

@autoReactive
export class PokeNotice extends ReceivedNotice {
    override readonly type = 'poke'
    action!: string
    suffix!: string
    _ico: ProxyUrl
    user: IUser
    target: IUser
    constructor(data: PokeEventData) {
        super(data)
        this.user = this.getUser(data.sender)
        this.target = this.getUser(data.target)
        this.action = data.action
        this.suffix = data.suffix
        this._ico = new ProxyUrl(data.ico)
        this.users.push(this.user, this.target)
    }

    override get tome(): boolean {
        return this.target.user_id === runtimeData.loginInfo.uin
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.tome) return this.user.name + $t('戳了你')
        return this.user.name + this.action + this.target.name + this.suffix
    }

    get ico(): string {
        return this._ico.url
    }
}

export class JoinNotice extends ReceivedNotice {
    override readonly type = 'join'
    declare session: GroupSession
    user!: IUser
    operator?: IUser
    invitor?: IUser
    private user_info: SenderData
    private operator_info?: SenderData
    private invitor_info?: SenderData
    constructor(data: JoinEventData) {
        super(data)
        this.user_info = data.user

        this.user = getSender(this.user_info)

        if (data.operator) {
            this.operator_info = data.operator
            this.operator = this.getUser(this.operator_info)
            this.users.push(this.operator)
        }
        if (data.invitor) {
            this.invitor_info = data.invitor
            this.invitor = this.getUser(this.invitor_info)
            this.users.push(this.invitor)
        }
    }

    /**
     * 刷新自身数据
     * 因为刚加群时没他的信息
     */
    refreshUserData(){
        this.user = this.getUser(this.user_info)
        this.users.push(this.user)
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        let out = ''
        if (this.operator)
            out += this.operator.name + $t('通过了')
        if (this.invitor)
            out += this.invitor.name + $t('邀请')
        out += this.user.name + $t('加入了群聊')
        return out
    }
}

export class LeaveNotice extends ReceivedNotice {
    override readonly type = 'leave'
    declare session: GroupSession
    user: IUser
    operator: IUser
    constructor(data: LeaveEventData) {
        super(data)
        this.user = this.getUser(data.user)
        this.operator = this.getUser(data.operator)
        this.users.push(this.user, this.operator)
    }

    override get tome(): boolean {
        return this.user.user_id === runtimeData.loginInfo.uin
    }

    get kick(): boolean {
        return this.operator !== this.user
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.kick) return this.operator.name + $t('将') + this.user.name + $t('移出群聊')
        return this.user + $t('离开了群聊')
    }
}

// export class UnknownNotice extends ReceivedNotice {
//     override readonly type: string = 'unknown'
//     data: {[key: string]: any} = {}

//     constructor(data: { notice_type: string }) {
//         super(data)
//         this.type = data.notice_type
//         this.data = data
//     }

//     static get type() :string {
//         return 'unknown'
//     }

//     override get preMsg(): string {
//         const { $t } = app.config.globalProperties
//         return $t('未知通知类型') + this.type
//     }
// }

/**
 * 系统自身产生的通知,非收到协议段的
 */
export abstract class SystemNotice extends Notice {
    override session: undefined
    constructor(data: object) {
        super(data)
    }

    static time(time: number): TimeNotice {
        return new TimeNotice({ time })
    }

    static delete(): DeleteNotice {
        return new DeleteNotice()
    }

    static info(message: string): InfoNotice {
        return new InfoNotice({ message })
    }

    override get preMsg(): string {
        throw new Error('SystemNotice 不支持 preMsg')
    }
}

export class TimeNotice extends SystemNotice {
    override readonly type: string = 'time'

    constructor(data: { time: number }) {
        super(data)
    }
}

export class DeleteNotice extends SystemNotice {
    override readonly type: string = 'delete'

    constructor() {
        super({})
    }
}

export class InfoNotice extends SystemNotice {
    override readonly type: string = 'error'
    message: string

    constructor(data: { message: string }) {
        super(data)
        this.message = data.message
    }
}
