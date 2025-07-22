/*
 * @FileDescription: Message 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/20
 * @Version: 1.0
 * @Description: 直接在消息栏上展示的通知
 */

import app from '@renderer/main';
import { GroupMemberInfoElem } from '../elements/information';
import { runtimeData } from '../msg';
import { Message } from './message';
import { Session } from './session';
import { autoReactive, formatTime } from './utils';
import { getViewTime, stdUrl } from '../utils/systemUtil';

/**
 * 通知类消息
 */
export abstract class Notice extends Message {
    abstract readonly type: string
    override session?: Session | undefined
    static matchType: string[]
    static matchSubType?: string[]

    constructor(data: object) {
        super(data)
        if (data['group_id']) this.session = new Session('group', data['group_id'])
        else if (data['user_id']) this.session = new Session('user', data['user_id'])
    }

    /**
     * 初始化用户信息
     * 写的比较抽象...先这样把.那天给chat哪里重构了,支持多会话系统后自己去自己的会话查找
     */
    protected users: number[] = []
    protected userInfos?: Map<number,string>
    initUserInfo(username: string, userId: number): void
    initUserInfo(userList: GroupMemberInfoElem[]): void
    initUserInfo(arg1: string|GroupMemberInfoElem[], arg2?: number): void {
        if (typeof arg1 === 'string') {
            // initUserInfo(username: string, userId: number): void
            const selfName = runtimeData.loginInfo.nickname
            const selfId = runtimeData.loginInfo.uin
            const name = arg1
            const id = arg2 as number
            this.userInfos = new Map()
            for (const userId of this.users) {
                if (userId === id) this.userInfos.set(userId, name)
                else if (userId === selfId) this.userInfos.set(userId, selfName)
                else this.userInfos.set(userId, `未知用户(${userId})`)
            }
        } else {
            // initUserInfo(userList: GroupMemberInfoElem[]): void
            const userList = arg1 as GroupMemberInfoElem[]
            this.userInfos = new Map()
            for (const user of userList) {
                if (this.users.includes(user.user_id)) {
                    this.userInfos.set(user.user_id, user.nickname)
                }
            }
            for (const userId of this.users) {
                if (!this.userInfos.has(userId)) {
                    this.userInfos.set(userId, `未知用户(${userId})`)
                }
            }
        }
    }
}

@autoReactive
export class RevokeNotice extends Notice {
    override readonly type: string = 'revoke'
    message_id: string
    operator_id: number
    user_id: number

    constructor(data: { message_id: string, user_id: number, operator_id?: number }) {
        super(data)
        this.message_id = data.message_id
        this.user_id = data.user_id
        this.operator_id = data.operator_id ?? data.user_id
        this.users.push(this.user_id)
        this.users.push(this.operator_id)
    }

    get operator(): string {
        return this.userInfos?.get(this.operator_id) ?? `未知用户(${this.operator_id})`
    }

    get user(): string {
        return this.userInfos?.get(this.user_id) ?? `未知用户(${this.user_id})`
    }

    get selfRevoke(): boolean {
        return this.user_id === this.operator_id
    }
}

@autoReactive
export class BanNotice extends Notice {
    override readonly type: string = 'ban'
    user_id: number
    operator_id: number
    duration: number
    constructor(data: { user_id: number, operator_id: number, duration: number }) {
        super(data)
        this.duration = getViewTime(data.duration)
        this.user_id = data.user_id
        this.operator_id = data.operator_id
        this.users.push(this.user_id)
        this.users.push(this.operator_id)
    }

    get operator(): string {
        return this.userInfos?.get(this.operator_id) ?? `未知用户(${this.operator_id})`
    }

    get user(): string {
        return this.userInfos?.get(this.user_id) ?? `未知用户(${this.user_id})`
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

    get tome(): boolean {
        return this.user_id === runtimeData.loginInfo.uin
    }

    get formatDuration(): string {
        return formatTime(this.duration * 1000, 'auto')
    }
}

@autoReactive
export class BanLiftNotice extends Notice {
    override readonly type: string = 'lift_ban'
    user_id: number
    operator_id: number
    constructor(data: { user_id: number, operator_id: number }) {
        super(data)
        this.user_id = data.user_id
        this.operator_id = data.operator_id
        this.users.push(this.user_id)
        this.users.push(this.operator_id)
    }

    get operator(): string {
        return this.userInfos?.get(this.operator_id) ?? `未知用户(${this.operator_id})`
    }

    get user(): string {
        return this.userInfos?.get(this.user_id) ?? `未知用户(${this.user_id})`
    }

    get tome(): boolean {
        return this.user_id === runtimeData.loginInfo.uin
    }
}

@autoReactive
export class PokeNotice extends Notice {
    override readonly type: string = 'poke'
    user_id: number
    target_id: number
    action!: string
    suffix!: string
    img!: string
    constructor(data: { 
        user_id: number,
        target_id: number,
        raw_info?: any[],
        action?: string,
        suffix?: string,
        action_img_url?: string,
    }) {
        super(data)
        this.user_id = data.user_id
        this.target_id = data.target_id
        this.users.push(this.user_id)
        this.users.push(this.target_id)

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

    get tome(): boolean {
        return this.target_id === runtimeData.loginInfo.uin
    }

    get user(): string {
        return this.userInfos?.get(this.user_id) ?? `未知用户(${this.user_id})`
    }

    get target(): string {
        return this.userInfos?.get(this.target_id) ?? `未知用户(${this.target_id})`
    }
}

export class JoinNotice extends Notice {
    override readonly type: string = 'join'
    join_type: 'approve' | 'invite' | 'self'
    user_id: number
    operator_id: number
    constructor(data: { user_id: number, operator_id: number, sub_type: 'approve' | 'invite' }) {
        super(data)
        this.join_type = data.sub_type
        this.user_id = data.user_id
        this.operator_id = data.operator_id
        if (this.operator_id === 0) {
            this.operator_id = this.user_id
            this.join_type = 'self'
        }
        this.users.push(this.user_id)
        this.users.push(this.operator_id)
    }

    get operator(): string {
        return this.userInfos?.get(this.operator_id) ?? `未知用户(${this.operator_id})`
    }

    get user(): string {
        return this.userInfos?.get(this.user_id) ?? `未知用户(${this.user_id})`
    }
}

export class LeaveNotice extends Notice {
    override readonly type: string = 'leave'
    user_id: number
    operator_id: number

    constructor(data: { user_id: number, operator_id: number }) {
        super(data)
        this.user_id = data.user_id
        this.operator_id = data.operator_id
        if (this.operator_id === 0) this.operator_id = this.user_id
        this.users.push(this.user_id)
        this.users.push(this.operator_id)
    }

    get operator(): string {
        return this.userInfos?.get(this.operator_id) ?? `未知用户(${this.operator_id})`
    }

    get user(): string {
        return this.userInfos?.get(this.user_id) ?? `未知用户(${this.user_id})`
    }

    get tome(): boolean {
        return this.user_id === runtimeData.loginInfo.uin
    }

    get kick(): boolean {
        return this.operator_id !== this.user_id
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