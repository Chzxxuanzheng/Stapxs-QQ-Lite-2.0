/*
 * @FileDescription: 用户 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/19
 * @Version: 1.0
 * @Description: 提供模型定义和类型声明，用于处理用户相关的数据结构
 */

export class Sender {
    user_id: number
    nickname?: string
    card?: string
    sex: Gender = Gender.Unknown
    age?: number
    area?: string
    level?: string
    role?: Role = Role.User
    title?: string
    constructor(data: object) {
        this.user_id = data['user_id']
        if (data['nickname']) this.nickname = data['nickname']
        if (data['card']) this.card = data['card']
        if (data['sex']) {
            switch (data['sex']) {
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
        if (data['age']) this.age = data['age']
        if (data['area']) this.area = data['area']
        if (data['level']) this.level = data['level']
        if (data['role']) {
            switch (data['role']) {
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
        }
        if (data['title']) this.title = data['title']
        if (data['is_robot'] === true) this.role = Role.Bot
    }

    get name(): string {
        if (this.card != undefined && this.card != '') {
            return this.card
        } else if (this.nickname != undefined && this.nickname != '') {
            return this.nickname
        } else {
            return this.user_id.toString()
        }
    }

    canAdmin(other: Role): boolean {
        if (this.role === Role.Owner) return true
        if (this.role === Role.Admin) {
            if (other === Role.Owner) return false
            if (other === Role.Admin) return false
            return true
        }
        return false
    }

    canBeAdmined(other: Role): boolean {
        if (this.role === Role.Owner) return false
        if (this.role === Role.Admin) {
            if (other === Role.Owner) return true
            return false
        }
        if (other === Role.User || other === Role.Bot) return false
        return true
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
