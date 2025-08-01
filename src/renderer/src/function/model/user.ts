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
import { UserSession } from './session'

export interface IUser {
    user_id: number
    level?: number
    get name(): string
    get namePy(): string
    getFace(): string
    match(search: string): boolean
    canBeAdmined?(other: Role): boolean
    canAdmin?(other: Role): boolean
    role?: Role
}

interface memberData {
    age: number
    area: string
    card?: string
    card_changeable: boolean
    group_id: number
    join_time: number
    last_sent_time: number
    level: string
    nickname?: string
    role: string
    sex: string
    title: string
    title_expire_time: number
    user_id: number
    unfriendly: boolean
}

/**
 * 群成员
 */
export class Member implements IUser {
    area: string
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
    constructor(data: memberData) {
        this.area = data.area
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
                this.role = Role.User
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

    getFace(): string {
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.user_id)
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
        this.area = newData.area
        this.join_time = newData.join_time
        this.last_sent_time = newData.last_sent_time
        this.level = newData.level
        this.role = newData.role
        if(newData._banTime) this._banTime = newData._banTime
    }
}

interface UserData {
    longNick: string
    qid: string
    country?: string
    province?: string
    city?: string
    regTime: number | string
    qqLevel: number
    birthday_year?: number
    birthday_month?: number
    birthday_day?: number
    age: number

    // 需自己补充
    id: number
    remark?: string
    nickname: string
}

/**
 * 好友|用户
 */
export class User implements IUser {
    user_id: number
    _nickname: Name
    _remark?: Name
    _longNick?: Name
    qid: string
    country?: string
    province?: string
    city?: string
    regTime: Time
    level: number
    birthday_year?: number
    birthday_month?: number
    birthday_day?: number
    age: number
    constructor(data: UserData) {
        this.user_id = data.id
        this._nickname = new Name(data.nickname)
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
    }

    get nickname(): Name {
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
            ?? this._nickname.toString()
            ?? this._longNick?.toString()
            ?? this.user_id.toString()
    }

    get namePy(): string {
        const name = this._remark?.py
            ?? this._nickname.py
            ?? this._longNick?.py
            ?? this.user_id.toString()
        return name
    }

    getFace(): string {
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.user_id)
    }

    match(search: string): boolean {
        if (this._nickname.matchStr(search)) return true
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
    static parse(data: object): BaseUser {
        const base = new BaseUser(Number(data['user_id']), data['nickname'])
        if (data['nickname']) base.nickname = data['nickname']
        if (data['card']) base.card = data['card']
        if (data['sex']) {
            switch (data['sex']) {
                case 'male':
                    base.sex = Gender.Male
                    break
                case 'female':
                    base.sex = Gender.Female
                    break
                default:
                    base.sex = Gender.Unknown
                    break
            }
        }
        if (data['age']) base.age = Number(data['age'])
        if (data['area']) base.area = data['area']
        if (data['level']) base.level = Number(data['level'])
        if (data['role']) {
            switch (data['role']) {
                case 'owner':
                    base.role = Role.Owner
                    break
                case 'admin':
                    base.role = Role.Admin
                    break
                default:
                    base.role = Role.User
                    break
            }
        }
        if (data['title']) base.title = data['title']
        if (data['is_robot'] === true) base.role = Role.Bot
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
        return this.title
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


    getFace(): string {
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.user_id)
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

export enum Gender {
    Male = 'male',
    Female = 'female',
    Unknown = 'unknown'
}

export enum Role {
    Owner = 'owner',
    Admin = 'admin',
    User = 'user',
    Bot = 'bot'
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
