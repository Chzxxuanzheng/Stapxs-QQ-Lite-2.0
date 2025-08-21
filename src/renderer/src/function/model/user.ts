/*
 * @FileDescription: 用户 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/19
 * @Version: 1.0
 *           2.0
 * @Description: 提供模型定义和类型声明，用于处理用户相关的数据结构
 *               增加用户相关模型，而非仅局限于发送者
 */

import app from '@renderer/main'
import { runtimeData } from '../msg'
import { stdUrl } from '../utils/systemUtil'
import { Name, Time } from './data'
import { GroupSession, Session, TempSession, UserSession } from './session'
import { computed } from 'vue'
import { ForwardSenderData, MemberData, SenderData, UserData } from '@renderer/function/adapter/interface'
import { Gender, Role } from '../adapter/enmu'

export interface IUser {
    user_id: number
    level?: number
    get name(): string
    get namePy(): string
    get face(): string
    match(search: string): boolean
    canBeAdmined?(other: Role): boolean
    canAdmin?(other: Role): boolean
    role?: Role
}

/**
 * 群成员
 */
export class Member implements IUser {
    _card?: Name
    join_time: Time
    last_sent_time: Time
    level: number
    _nickname?: Name
    role: Role
    sex: Gender
    _title?: Name
    user_id: number
    unfriendly: boolean
    /**
     * 禁言时间
     */
    _banTime?: number
    /**
     * 对应的用户对象
     */
    user?: UserSession
    /**
     * 是否离开了群
     */
    leave: boolean = false
    constructor(data: MemberData) {
        if (data.card) this._card = new Name(data.card)
        this.join_time = new Time(data.join_time)
        this.last_sent_time = new Time(data.last_sent_time)
        this.level = parseInt(data.level, 10)
        this.user_id = data.user_id
        this.unfriendly = data.unfriendly
        if (data.nickname) this._nickname = new Name(data.nickname)
        if (data.title) this._title = new Name(data.title)
        this.user = UserSession.getSessionById(data.user_id)
        switch (data.role) {
            case 'owner':
                this.role = Role.Owner
                break
            case 'admin':
                this.role = Role.Admin
                break
            default:
                if (isRobot(data.user_id)) this.role = Role.Bot
                else this.role = Role.User
                break
        }
        switch (data.sex) {
            case 'male':
                this.sex = Gender.Male
                break
            case 'female':
                this.sex = Gender.Female
                break
            default:
                this.sex = Gender.Unknown
                break
        }
    }

    private lastBanTimeoutId: number | undefined
    /**
     * 设置禁言时间
     * @param time 禁言时间 (s)
     * @returns
     */
    setBanTime(time: number): void {
        time *= 1000 // 转换为毫秒
        clearTimeout(this.lastBanTimeoutId)
        this._banTime = time + Date.now()
        this.lastBanTimeoutId = setTimeout(() => {
            this._banTime = undefined
        }, time) as unknown as number
    }
    /**
     * 清除禁言时间
     */
    clearBanTime(): void {
        clearTimeout(this.lastBanTimeoutId)
        this._banTime = undefined
    }

    /**
     * 获取禁言剩余时间
     */
    get banTime(): Time | undefined {
        if (!this._banTime) return undefined
        if (this._banTime < Date.now()) return undefined
        return new Time(this._banTime - Date.now())
    }

    get card(): Name | undefined {
        return this._card
    }

    get nickname(): Name | undefined {
        return this._nickname
    }

    get title(): Name | undefined {
        return this._title
    }

    set card(value: Name | string) {
        if (value instanceof Name) this._card = value
        else this._card = new Name(value)
    }

    set nickname(value: Name | string) {
        if (value instanceof Name) this._nickname = value
        else this._nickname = new Name(value)
    }

    set title(value: Name | string) {
        if (value instanceof Name) this._title = value
        else this._title = new Name(value)
    }

    get name(): string {
        const { $t } = app.config.globalProperties
        const name = this.user?.remark?.toString()
            ?? this._card?.toString()
            ?? this._nickname?.toString()
            ?? this.user_id.toString()
        if (this.leave) return name + $t('(已离开)')
        return name
    }

    get namePy(): string {
        const name = this.user?.remark?.py
            ?? this._card?.py
            ?? this._nickname?.py
            ?? this.user_id.toString()
        return name
    }

    private _face = computed(()=>{
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.user_id)
    })

    get face(): string {
        // 用来解决vue自动解包的
        if (typeof this._face === 'string') return this._face
        return this._face.value
    }

    /**
     * 能否管理指定角色
     * @param other 指定角色
     * @returns
     */
    canAdmin(other: Role): boolean {
        if (this.leave) return false
        return canAdmin(this.role, other)
    }

    /**
     * 能否被指定角色管理
     * @param other 指定角色
     * @returns
     */
    canBeAdmined(other: Role): boolean {
        if (this.leave) return false
        return canBeAdmined(this.role, other)
    }

    match(search: string): boolean {
        if (this.leave) return false
        if (this.nickname?.matchStr(search)) return true
        if (this.card?.matchStr(search)) return true
        if (this._title?.matchStr(search)) return true
        if (this.user_id.toString().includes(search)) return true
        if (this.user?.match(search)) return true
        return false
    }

    /**
     * 更新数据
     * @param newData 新数据
     */
    update(newData: Member): void {
        if (newData._card) this._card = newData._card
        if (newData._nickname) this._nickname = newData._nickname
        if (newData._title) this._title = newData._title
        this.join_time = newData.join_time
        this.last_sent_time = newData.last_sent_time
        this.level = newData.level
        this.role = newData.role
        if(newData._banTime) this._banTime = newData._banTime
    }
}

/**
 * 好友|用户
 */
export class User implements IUser {
    user_id: number
    _nickname?: Name
    _remark?: Name
    _longNick?: Name
    qid?: string
    country?: string
    province?: string
    city?: string
    regTime: Time
    level: number
    birthday_year?: number
    birthday_month?: number
    birthday_day?: number
    age: number
    sex: Gender
    constructor(data: UserData) {
        this.user_id = data.id
        if(data.nickname) this._nickname = new Name(data.nickname)
        if(data.remark) this._remark = new Name(data.remark)
        if(data.longNick) this._longNick = new Name(data.longNick)
        this.qid = data.qid
        this.country = data.country
        this.province = data.province
        this.city = data.city
        this.level = data.qqLevel
        this.birthday_year = data.birthday_year
        this.birthday_month = data.birthday_month
        this.birthday_day = data.birthday_day
        this.age = data.age
        this.regTime = new Time(data.regTime)
        this.sex = data.sex
    }

    get nickname(): Name|undefined {
        return this._nickname
    }

    get remark(): Name | undefined {
        return this._remark
    }

    get longNick(): Name | undefined {
        return this._longNick
    }

    set nickname(value: Name | string) {
        if (value instanceof Name) this._nickname = value
        else this._nickname = new Name(value)
    }

    set remark(value: Name | string) {
        if (value instanceof Name) this._remark = value
        else this._remark = new Name(value)
    }

    set longNick(value: Name | string) {
        if (value instanceof Name) this._longNick = value
        else this._longNick = new Name(value)
    }

    get name(): string {
        return this._remark?.toString()
            ?? this._nickname?.toString()
            ?? this._longNick?.toString()
            ?? this.user_id.toString()
    }

    get namePy(): string {
        const name = this._remark?.py
            ?? this._nickname?.py
            ?? this._longNick?.py
            ?? this.user_id.toString()
        return name
    }

    private _face = computed(()=>{
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.user_id)
    })

    get face(): string {
        // 用来解决vue自动解包的
        if (typeof this._face === 'string') return this._face
        return this._face.value
    }

    match(search: string): boolean {
        if (this._nickname?.matchStr(search)) return true
        if (this._remark?.matchStr(search)) return true
        if (this._longNick?.matchStr(search)) return true
        if (this.user_id.toString().includes(search)) return true
        return false
    }
}

/**
 * 信息不全,保底的
 */
export class BaseUser {
    user_id: number
    _nickname?: Name
    _remark?: Name
    _card?: Name
    sex: Gender = Gender.Unknown
    age?: number
    area?: string
    level?: number
    role?: Role
    _title?: Name
    constructor(user_id: number, nickname?: string, remark?: string) {
        this.user_id = Number(user_id)
        if (nickname) this._nickname = new Name(nickname)
        if (remark) this._remark = new Name(remark)
    }

    /**
     * 创建自身信息
     * @returns
     */
    static createMe(): BaseUser {
        return new BaseUser(
            runtimeData.loginInfo.uin,
            runtimeData.loginInfo.nickname,
        )
    }

    /**
     * 仅有id的情况
     * @param user_id 用户id
     */
    static createById(user_id: number): BaseUser {
        return new BaseUser(Number(user_id), undefined, undefined)
    }

    /**
     * 解析数据
     * @param data 数据
     */
    static parse(data: SenderData): BaseUser {
        const base = new BaseUser(data.id, data.nickname)

        if (data.card) base.card = data.card
        if (data.title) base.title = data.title

        base.sex = data.sex
        base.age = data.age
        base.area = data.area
        base.level = data.level
        base.role = data.role

        return base
    }

    get nickname(): Name | undefined {
        return this._nickname
    }

    get remark(): Name | undefined {
        return this._remark
    }

    get card(): Name | undefined {
        return this._card
    }

    get title(): Name | undefined {
        return this._title
    }

    set nickname(value: Name | string) {
        if (value instanceof Name) this._nickname = value
        else this._nickname = new Name(value)
    }

    set remark(value: Name | string) {
        if (value instanceof Name) this._remark = value
        else this._remark = new Name(value)
    }

    set card(value: Name | string) {
        if (value instanceof Name) this._card = value
        else this._card = new Name(value)
    }

    set title(value: Name | string) {
        if (value instanceof Name) this.title = value
        else this.title = new Name(value)
    }

    get name(): string {
        return this._remark?.toString()
            ?? this._card?.toString()
            ?? this._nickname?.toString()
            ?? this.user_id.toString()
    }

    get namePy(): string {
        return this._remark?.py
            ?? this._card?.py
            ?? this._nickname?.py
            ?? this.user_id.toString()
    }

    /**
     * 能否管理指定角色
     * @param other 指定角色
     * @returns
     */
    canAdmin(other: Role): boolean {
        if (!this.role) return false
        return canAdmin(this.role, other)
    }

    /**
     * 能否被指定角色管理
     * @param other 指定角色
     * @returns
     */
    canBeAdmined(other: Role): boolean {
        if (!this.role) return false
        return canBeAdmined(this.role, other)
    }

    private _face = computed(()=>{
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.user_id)
    })

    get face(): string {
        // 用来解决vue自动解包的
        if (typeof this._face === 'string') return this._face
        return this._face.value
    }

    match(search: string): boolean {
        if (this._nickname?.matchStr(search)) return true
        if (this._card?.matchStr(search)) return true
        if (this.title?.matchStr(search)) return true
        if (this.user_id.toString().includes(search)) return true
        if (this._remark?.matchStr(search)) return true
        return false
    }
}

function canAdmin(target: Role, other: Role): boolean {
    if (target === Role.Owner) return true
    if (target === Role.Admin) {
        if (other === Role.Owner) return false
        if (other === Role.Admin) return false
        return true
    }
    return false
}

function canBeAdmined(target: Role, other: Role): boolean {
    if (target === Role.Owner) return false
    if (target === Role.Admin) {
        if (other === Role.Owner) return true
        return false
    }
    if (other === Role.User || other === Role.Bot) return false
    return true
}

function isRobot(id: number): boolean {
    if (id >= 4010000000 && id <= 4019999999) return true
    if (id >= 2854196301 && id <= 2854216399) return true
    if (id >= 3889000000 && id <= 3889999999) return true
    if (id === 66600000) return true
    return false
}

/**
 * 合并转发的发送者
 */
export class ForwardSender implements IUser{
    user_id = 0
    _nickname: Name
    face: string
    constructor(data: ForwardSenderData) {
        this._nickname = new Name(data.nickname)
        this.face = stdUrl(data.face)
    }
    get nickname(): string {
        return this._nickname.toString()
    }
    set nickname(value: string) {
        this._nickname = new Name(value)
    }
    get name(): string {
        return this.nickname
    }
    get namePy(): string {
        return this._nickname.py
    }
    match(search: string): boolean {
        return this._nickname.matchStr(search)
    }
}

/**
 * 获取发送者信息
 * @param sender 发送者数据
 * @param session? 来源会话
 */
export function getSender(sender: SenderData): BaseUser
export function getSender(sender: SenderData, session: GroupSession): Member | BaseUser
export function getSender(sender: SenderData, session: UserSession | TempSession): User | BaseUser
export function getSender(sender: SenderData, session?: Session): IUser
export function getSender(sender: SenderData, session?: Session): IUser {
    if (!session) return BaseUser.parse(sender)
    else {
        const user = session.getUserById(sender.id)
        if (user) return user
        return BaseUser.parse(sender)
    }
}
