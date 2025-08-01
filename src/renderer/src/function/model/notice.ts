/*
 * @FileDescription: Message 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/20
 * @Version: 1.0
 * @Description: 直接在消息栏上展示的通知
 */

import app from '@renderer/main';
import { runtimeData } from '../msg';
import { Message } from './message';
import { GroupSession, Session } from './session';
import { autoReactive, formatTime } from './utils';
import { getViewTime, stdUrl } from '../utils/systemUtil';
import { BaseUser, IUser } from './user';

/**
 * 通知类消息
 */
export abstract class Notice extends Message {
    abstract readonly type: string
    override session?: Session
    users: IUser[] = []
    static matchType: string[]
    static matchSubType?: string[]

    constructor(data: object) {
        super(data)
        if (data['group_id']) this.session = Session.getSession('group', Number(data['group_id']))
        else if (data['user_id']) this.session = Session.getSession('user', Number(data['user_id']))
    }

    get tome(): boolean {
        return false
    }

    protected getUser(id: number | string): IUser {
        if (!this.session) return BaseUser.createById(Number(id))
        return this.session.getUserByIdWithBu(Number(id))
    }
}

@autoReactive
export class RevokeNotice extends Notice {
    override readonly type: string = 'revoke'
    message_id: string
    user: IUser
    operator: IUser

    constructor(data: { message_id: string, user_id: number, operator_id?: number }) {
        super(data)
        this.message_id = data.message_id
        const user_id = data.user_id
        const operator_id = data.operator_id ?? data.user_id
        this.user = this.getUser(user_id)
        this.operator = this.getUser(operator_id)
        this.users.push(this.user, this.operator)
    }

    get selfRevoke(): boolean {
        return this.user === this.operator
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.selfRevoke) return this.user.name + $t('撤回了一条消息')
        return this.operator.name + $t('撤回了') + this.user.name + $t('的消息')
    }
}

@autoReactive
export class BanNotice extends Notice {
    override readonly type: string = 'ban'
    declare session?: GroupSession
    duration: number
    user: IUser
    operator: IUser
    constructor(data: { user_id: number, operator_id: number, duration: number }) {
        super(data)
        this.duration = getViewTime(data.duration)
        this.user = this.getUser(data.user_id)
        this.operator = this.getUser(data.operator_id)
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
export class BanLiftNotice extends Notice {
    override readonly type: string = 'lift_ban'
    declare session?: GroupSession
    user: IUser
    operator: IUser
    constructor(data: { user_id: number, operator_id: number }) {
        super(data)
        this.user = this.getUser(data.user_id)
        this.operator = this.getUser(data.operator_id)
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
export class PokeNotice extends Notice {
    override readonly type: string = 'poke'
    action!: string
    suffix!: string
    img!: string
    user: IUser
    target: IUser
    constructor(data: {
        user_id: number,
        target_id: number,
        raw_info?: any[],
        action?: string,
        suffix?: string,
        action_img_url?: string,
    }) {
        super(data)
        this.user = this.getUser(data.user_id)
        this.target = this.getUser(data.target_id)

        this.users.push(this.user, this.target)

        if (data.raw_info) {
            let getTxt = 0
            let setImg = false
            for (const item of data.raw_info) {
                if (item.type === 'img') {
                    this.img = stdUrl(item.url)
                    setImg = true
                }
                if (item.type === 'nor') {
                    if (getTxt === 0) {
                        this.action = item.txt
                        getTxt++
                    } else if (getTxt === 1) {
                        this.suffix = item.txt
                        getTxt++
                    }
                }
            }
            if (!setImg) throw new Error('缺少必要的 poke 图片信息')
            if (getTxt !== 2) throw new Error('缺少必要的 poke 文本信息')
        } else if (data.action && data.suffix !== undefined && data.action_img_url) {
            this.action = data.action
            this.suffix = data.suffix
            this.img = stdUrl(data.action_img_url)
        } else throw new Error('缺少必要的 poke 信息')
    }

    override get tome(): boolean {
        return this.target.user_id === runtimeData.loginInfo.uin
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.tome) return this.user.name + $t('戳了你')
        return this.user + this.action + this.target.name + this.suffix
    }
}

export class JoinNotice extends Notice {
    override readonly type: string = 'join'
    declare session?: GroupSession
    join_type: 'approve' | 'invite' | 'self'
    user!: IUser
    operator!: IUser
    private user_id: number
    private operator_id: number
    constructor(data: { user_id: number, operator_id: number, sub_type: 'approve' | 'invite' }) {
        super(data)
        this.join_type = data.sub_type
        this.user_id = data.user_id
        this.operator_id = data.operator_id || data.user_id
    }

    /**
     * 刷新自身数据
     * 因为刚加群时没他的信息
     */
    refreshUserData(){
        this.user = this.getUser(this.user_id)
        this.operator = this.getUser(this.operator_id)
        this.users.push(this.user, this.operator)
        if (this.operator.user_id === 0) {
            this.operator.user_id = this.user.user_id
            this.join_type = 'self'
        }
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.join_type === 'self') return this.user.name + $t('加入了群聊')
        if (this.join_type === 'approve') return this.operator.name + $t('通过了') + this.user.name + $t('的入群申请')
        return this.operator.name + $t('邀请') + this.user.name + $t('加入了群聊')
    }
}

export class LeaveNotice extends Notice {
    override readonly type: string = 'leave'
    declare session?: GroupSession
    user: IUser
    operator: IUser
    constructor(data: { user_id: number, operator_id: number }) {
        super(data)
        if (data.operator_id === 0) data.operator_id = data.user_id
        this.user = this.getUser(data.user_id)
        this.operator = this.getUser(data.operator_id)
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

export class UnknownNotice extends Notice {
    override readonly type: string = 'unknown'
    data: {[key: string]: any} = {}

    constructor(data: { notice_type: string }) {
        super(data)
        this.type = data.notice_type
        this.data = data
    }

    static get type() :string {
        return 'unknown'
    }

    override get preMsg(): string {
        const { $t } = app.config.globalProperties
        return $t('未知通知类型') + this.type
    }
}

/**
 * 系统自身产生的通知,非收到协议段的
 */
export abstract class SystemNotice extends Notice {
    static override matchType: string[] = []
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
