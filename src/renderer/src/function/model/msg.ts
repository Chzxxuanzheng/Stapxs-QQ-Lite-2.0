/*
 * @FileDescription: Msg 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 提供模型定义和类型声明，用于处理消息相关的数据结构。（虽然把整个项目的类型全重构了不太现实...但还是从现在开始规范些吧...）
 */

import { PopInfo, PopType } from '../base'
import { runtimeData } from '../msg'
import app from '@renderer/main'
import { Time, TimeoutSet } from './data'
import { AtSeg, ForwardSeg, ReplySeg, Seg } from './seg'
import { autoReactive } from './utils'
import { BaseUser, ForwardSender, getSender, Member, type IUser } from './user'
import { Message } from './message'
import { GroupSession, Session } from './session'
import { delay } from '../utils/systemUtil'
import { EssenceData, ForwardNodeData, MsgData, SegData } from '../adapter/interface'
import { reactive } from 'vue'

type IconData = { icon: string, rotate: boolean, desc: string, color: string }

/**
 * 聊天消息
 */
@autoReactive
export class Msg extends Message {
    readonly type = 'message'
    /**
     * 消息ID
     */
    message_id?: string
    /**
     * 消息段列表
     */
    message: Seg[]
    /**
     * 消息发送者
     */
    sender: IUser
    /**
     * 是否提及了自己
     */
    atme: boolean = false
    /**
     * 是否提及全体成员
     */
    atall: boolean = false
    /**
     * 包含的图片信息
     */
    imgList: {url: string, id: string}[] = []
    /**
     * 对应的会话
     */
    session?: Session
    /**
     * 表情回应
     * key: 表情id
     * value: 操作者uid列表
     */
    emojis: { [emojiId: string]: number[] } = {}
    /**
     * 是否为已删除消息
     */
    isDelete: boolean = false
    constructor(data: MsgData)
    constructor(segs: Seg[], sender: IUser, session?: Session, senderTime?: Time)
    constructor(arg1: Seg[] | MsgData, arg2?: IUser, arg3?: Session, arg4?: Time) {
        if (arg2) {
            // constructor(segs: Seg[], sender: user, session?: Session, senderTime?: Time)
            const segs = arg1 as Seg[]
            const sender = arg2
            const session = arg3 as Session | undefined
            const senderTime = arg4 ?? new Time(Date.now()) as Time
            super({ time: senderTime.time })
            this.message = segs
            this.sender = sender
            this.session = session
        }else {
            // constructor(data: MsgData)
            const data = arg1 as MsgData
            super(data)
            // 消息id
            this.message_id = data.message_id
            // 补充消息段
            this.message = Msg.parseSegs(data.message)
            // 补充已删除
            this.isDelete = data.isDelete
            // 判断提及自己
            this.message.forEach(seg => {
                if (seg.type === 'atall') this.atall = true
                else if (
                    seg instanceof AtSeg && Number(seg.user_id) === Number(runtimeData.loginInfo.uin)
                ) this.atme = true
            })
            // 生成session
            this.session = Session.getSession(
                data.session.type,
                data.session.id,
                data.session.group_id
            )

            this.sender = new BaseUser(data.sender.id, data.sender.nickname)

            this.session.activate().then(()=>{
                // 获取发送者
                this.sender = getSender(data.sender, this.session)
            })
        }
        // TODO: 文件图片支持
        this.message.forEach(seg => {
            if ('getImgData' in seg && typeof seg.getImgData === 'function') {
                const imgData = seg.getImgData()
                if (imgData) {
                    this.imgList.push(imgData)
                }
            }
        })
    }

    static parseSegs(data: SegData[]): Seg[] {
        return data.map(item => Seg.parse(item)).filter(seg => seg !== undefined) as Seg[]
    }

    /**
     * 纯文本
     */
    get plaintext(): string {
        return this.message.map(seg => {
            if (!(seg instanceof AtSeg)) return seg.plaintext
            // at 需要去会话里拿人的昵称
            if (seg.text) return seg.text
            if (!(this.session instanceof GroupSession)) return seg.plaintext

            const member = this.session.getUserById(Number(seg.user_id))
            if (member) return '@' + member.name
            return seg.plaintext
        }).join('')
    }

    /**
     * 预览消息
     */
    override get preMsg(): string {
        if (this.session?.type === 'group') {
            return this.sender.name + ': ' + this.plaintext
        }else {
            return this.plaintext
        }
    }

    /**
     * 是否存在于tx的服务器上
     */
    get exist(): boolean {
        return true
    }

    /**
     * 消息图标信息
     */
    get icon(): IconData | undefined {
        return undefined
    }

    iconClick(): void {return}

    /**
     * 判断是否有卡片消息
     * @returns 是否是卡片消息
     */
    hasCard(): boolean {
        for (const item of this.message) {
            if (item.type === 'json' || item.type === 'xml') {
                return true
            }
        }
        return false
    }

    /**
     * 判断是否是合并转发消息
    * @returns 是否有合并转发消息
     */
    hasForward(): boolean {
        for (const item of this.message) {
            if (item instanceof ForwardSeg) {
                return true
            }
        }
        return false
    }

    /**
     * 判断是否有回复消息
    * @returns 是否有回复消息
     */
    hasReply(): boolean {
        for (const item of this.message) {
            if (item instanceof ReplySeg) {
                return true
            }
        }
        return false
    }

    /**
     * 设置表情
     * @param id 表情id
     * @param add 是否添加
     */
    setEmoji(id: string, operation_id: number, add: boolean): void {
        const emojiData = this.emojis[id] ?? []
        if (add) {
            if (emojiData.includes(operation_id)) return
            emojiData.push(operation_id)
        }else {
            const index = emojiData.indexOf(operation_id)
            if (index === -1) return
            emojiData.splice(index, 1)
            if (emojiData.length === 0) {
                delete this.emojis[id]
                return
            }
        }
        this.emojis[id] = emojiData
    }
}

/**
 * 用户自己发送的消息
 */
export class SelfMsg extends Msg {
    state: 'notSend' | 'sending' | 'sent' | 'failed' = 'notSend'
    private static lock: number = 0
    declare session: Session
    static readonly sendIds: TimeoutSet<string> = new TimeoutSet()

    protected constructor(segs: Seg[], session: Session) {
        const sender = session.getMe()
        super(segs, sender, session)
    }

    static create(segs: Seg[], session: Session): SelfMsg {
        return reactive(new this(segs, session)) as unknown as SelfMsg
    }

    static createMerge(messages: Msg[], session: Session): SelfMsg {
        const segs = [new ForwardSeg(messages)]
        return reactive(new this(segs, session)) as unknown as SelfMsg
    }

    /**
     * 发送消息
     * @returns 是否发送成功
     */
    async send(): Promise<boolean> {
        if (!runtimeData.nowAdapter) return false
        if (this.state === 'sending') throw new Error('该消息正在发送,不能发送')
        if (this.state === 'sent') throw new Error('该消息已经发送成功,不能发送')
        if (!this.session) throw new Error('会话信息缺失')

        //#region 发送消息 =======================================================
        this.state = 'sending'
        SelfMsg.lock++

        const msgId = await runtimeData.nowAdapter.sendMsg(this)

        if (!msgId) {
            SelfMsg.lock--
            this.state = 'failed'
            new PopInfo().add(PopType.ERR, '发送消息失败')
            return false
        }
        this.message_id = msgId
        //#endregion

        //#region 获取发送后真实消息 ============================================
        SelfMsg.sendIds.add(msgId)
        SelfMsg.lock--
        // 发送成功后获取消息内容
        let msg: Msg | undefined
        // 不知道为啥这里有时候会失败...重试5次吧
        for (let retry = 0; retry < 5; retry++) {
            try{
                const msgData = await runtimeData.nowAdapter.getMsg(this.session, msgId)

                if (!msgData) continue

                msg = new Msg(msgData)
                break
            } catch {/**/}
            await delay(100)
        }
        if (!msg) {
            new PopInfo().add(PopType.ERR, '更新消息失败...')
            // 不知道自己组装的消息和tx的消息有多大差距...按照sent处理吧
            this.state = 'sent'
            return true
        }
        // 更新自身内容
        this.message = msg.message
        const oldImgs = this.imgList
        this.imgList = msg.imgList
        if (oldImgs.length > 0) this.session.updateImgList(oldImgs, this.imgList)
        this.state = 'sent'
        return true
        //#endregion
    }

    /**
     * 判断该消息是否是自己发送的
     */
    static async isSendMsg(msg: Msg): Promise<boolean> {
        if (!msg.message_id) throw new Error('消息ID缺失')
        await this.waitSendLock()
        if (this.sendIds.has(msg.message_id)) {
            this.sendIds.delete(msg.message_id)
            return true
        }
        return false
    }

    /**
     * 等待消息发送完成
     * @returns
     */
    waitSend(): Promise<void> {
        const check = (resolve) => {
            if (this.state === 'sent' || this.state === 'failed') {
                resolve()
                return
            }
            setTimeout(()=>check(resolve), 100)
        }
        return new Promise((resolve) => check(resolve))
    }

    /**
     * 锁，直到所有发送结果把messageId
     */
    static waitSendLock(): Promise<void> {
        return new Promise((resolve) => {
            const check = () => {
                if (SelfMsg.lock === 0) {
                    resolve()
                } else {
                    setTimeout(check, 100)
                }
            }
            check()
        })
    }

    override get exist(): boolean {
        if (this.state !== 'sent') return false
        return super.exist
    }

    override get icon(): IconData|undefined {
        if (this.state === 'sending') return {
            icon: 'spinner',
            rotate: true,
            desc: app.config.globalProperties.$t('正在发送'),
            color: 'var(--color-font-2)',
        }
        if (this.state === 'failed') return {
            icon: 'exclamation-triangle',
            rotate: false,
            desc: app.config.globalProperties.$t('发送失败'),
            color: 'var(--color-yellow)',
        }
        return super.icon
    }

    override iconClick(): void {
        if (this.state !== 'failed') return
        this.send()
    }
}

/**
 * 自身发送的预览消息
 */
export class SelfPreMsg extends Msg {
    protected constructor(segs: Seg[]) {
        super(segs, BaseUser.createMe())
    }

    /**
     * 创建自身发送的预览消息
     * @param segs
     * @returns
     */
    static create(segs: Seg[]): SelfPreMsg {
        return new this(segs)
    }

    /**
     * 创建自身发送的合并预览消息
     * @param messages 消息列表
     * @returns 合并预览消息
     */
    static createMerge(messages: Msg[]): SelfPreMsg {
        const segs = [new ForwardSeg(messages)]
        return new this(segs.map(seg => { seg.id = '0'; return seg }))
    }
}

/**
 * 精华消息
 */
export class EssenceMsg extends Msg {
    operatorTime: Time
    operator: BaseUser | Member
    constructor(data: EssenceData, session: GroupSession) {
        // 变化为Msg用的格式
        const segs = Msg.parseSegs(data.content)
        const sender = getSender(data.sender, session)
        super(segs, sender, session, new Time(data.sender_time))
        this.operator = getSender(data.operator, session) as BaseUser | Member
        this.operatorTime = new Time(data.operator_time)
    }
}

/**
 * 合并转发消息
 */
export class ForwardMsg extends Msg {
    declare sender: ForwardSender
    constructor(data: ForwardNodeData) {
        const sender = new ForwardSender(data.sender)
        const message = Msg.parseSegs(data.content)
        super(message, sender)
    }
}
