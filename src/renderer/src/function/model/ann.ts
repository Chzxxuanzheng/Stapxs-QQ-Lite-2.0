/*
 * @FileDescription: 群公告相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/28
 * @Version: 1.0
 * @Description: 群公告模型
 */

import app from '@renderer/main'
import { GroupSession } from './session'
import { Member } from './user'
import { Time } from './data'
import { GroupAnnouncementData } from '../adapter/interface'
import { Img } from './img'

export class Ann {
    content: string
    imgId?: string
    time: Time
    sender: Member | number
    session: GroupSession
    read?: boolean
    readNum?: number
    imgData?: Img

    constructor(data: GroupAnnouncementData, session: GroupSession) {
        this.content = data.content
        this.imgId = data.img_id
        this.time = new Time(data.time)
        this.sender = data.sender
        this.read = data.is_read
        this.readNum = data.read_num
        this.session = session
        const sender = this.session.getUserById(data.sender)
        if (sender) this.sender = sender
        if (this.getImg()) this.imgData = new Img(this.getImg()!)
    }

    getImg(): string|undefined {
        if (!this.imgId) return undefined
        return `https://p.qlogo.cn/gdynamic/${this.imgId}/0/`
    }

    getSenderFace(): string {
        if (this.sender instanceof Member) {
            return this.sender.face
        } else {
            return `https://q1.qlogo.cn/g?b=qq&s=0&nk=${this.sender}`
        }
    }

    getSenderName(): string {
        const { $t } = app.config.globalProperties
        if (this.sender instanceof Member) return this.sender.name
        return $t('已退群( {userId} )', { userId: Number(this.sender) })
    }
}
