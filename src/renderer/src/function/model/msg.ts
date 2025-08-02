/*
 * @FileDescription: Msg 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 提供模型定义和类型声明，用于处理消息相关的数据结构。（虽然把整个项目的类型全重构了不太现实...但还是从现在开始规范些吧...）
 */

import { Connector } from '../connect'
import { createMsg } from '../utils/msgUtil'
import { Logger, PopInfo, PopType } from '../base'
import { runtimeData } from '../msg'
import app from '@renderer/main'
import { BotMsgType } from '../elements/information'
import { Time, TimeoutSet } from './data'
import { AtSeg, ForwardSeg, ReplySeg, Seg } from './seg'
import { autoReactive } from './utils'
import { BaseUser, Member, type IUser } from './user'
import { Message } from './message'
import { GroupSession, Session, TempSession } from './session'
import { delay } from '../utils/systemUtil'

const logger = new Logger()
type IconData = { icon: string, rotate: boolean, desc: string, color: string }

/**
 * 聊天消息
 */
@autoReactive
export class Msg extends Message {
    readonly type = 'message'
    message: Seg[]
    sender: IUser
    raw_message: string
    atme: boolean = false
    atall: boolean = false
    imgList: {url: string, id: string}[] = []
    session?: Session
    emojis: { [key: string]: {count: number, meSend: boolean} } = {}
    constructor(segs: Seg[], sender: IUser, session?: Session, senderTime?: Time)
    constructor(data: any)
    constructor(arg1: Seg[] | any, arg2?: IUser, arg3?: Session, arg4?: Time) {
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
            this.raw_message = this.generateRawMsg()
        }else {
            const data = arg1 as any
            super(data)
            if (!data['sender']) throw new Error('发送者信息缺失')
            if (!data['message']) throw new Error('消息内容缺失')
            this.sender = BaseUser.parse(data['sender'])
            this.message = Msg.createSegs(data['message'])
            if (data['raw_message'] || data['raw_message'] === '') this.raw_message = data['raw_message']
            else this.raw_message = this.generateRawMsg()
            this.message.forEach(seg => {
                if (!(seg instanceof AtSeg)) return
                if (seg.qq === 'all') this.atall = true
                else if (seg.qq === String(runtimeData.loginInfo.uin)) this.atme = true
            })
            if (data['message_type'] === 'group') {
                this.session = Session.getSession('group', data['group_id'])
            } else if (data['message_type'] === 'private') {
                this.session = Session.getSession('user', data['user_id'])
            } else if (data['group_id'] && data['user_id']) {
                this.session = Session.getSession('temp', data['group_id'], data['user_id'])
            }
            // 更新Sender
            if (!this.session) return
            if (this.session instanceof GroupSession) {
                const session = this.session as GroupSession
                this.session.activate().then(()=>{
                    this.sender = session.getUserById(this.sender.user_id) ?? this.sender
                })
            }
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

    static createSegs(data: any[]): Seg[] {
        return data.map(item => Seg.parse(item))
    }

    /**
     * 生成raw_message,应在data里没raw_message时使用
     * @returns
     */
    generateRawMsg(): string {
        const { $t } = app.config.globalProperties
        if (this.message.length === 0) return $t('空消息')
        return this.message.map(seg => seg.toCq()).join('')
    }

    /**
     * 序列化message为可发送内容
     * @returns 序列化后的内容
     */
    serialize(): object[] | string {
        if (runtimeData.tags.msgType == BotMsgType.Array) return this.message.map(item => item.toArray())
        else return this.message.map(item => item.toCq()).join('')
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

            const member = this.session.getUserById(Number(seg.qq))
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
     * 序列化转化为合并转发节点
     * @returns 合并转发节点
     */
    toMergeForwardNode(){
        return {
            type: 'node',
            data: {
                user_id: String(this.sender.user_id),
                nickname: this.sender.name,
                content: this.serialize(),
            }
        }
    }

    /**
     * 重新设置表情数据
     * @param data 表情数据
     * @description 重新设置表情数据，清空之前的表情数据
     */
    resetEmojis(data: { emoji_id: number, count: number }[]): void {
        this.emojis = {}
        data.forEach(item => {
            this.emojis[String(item.emoji_id)] = { count: item.count, meSend: false }
        })
    }
    /**
     * 设置表情
     * @param id 表情id
     * @param add 是否添加
     */
    setEmoji(id: string, add: boolean): void {
        const emojiData = this.emojis[id]
        if (add) {
            if (emojiData?.meSend) throw new Error('不能重复添加自己发送的表情')
            if (emojiData) {
                emojiData.count++
            } else {
                this.emojis[id] = { count: 1, meSend: true }
            }
        }else {
            if (!emojiData) throw new Error('表情不存在')
            emojiData.count--
            if (emojiData.count === 0)
                delete this.emojis[id]
        }
    }
}

/**
 * 用户自己发送的消息
 */
@autoReactive
export class SelfMsg extends Msg {
    state: 'notSend' | 'sending' | 'sent' | 'failed' = 'notSend'
    private static lock: number = 0
    declare session: Session
    static readonly sendIds: TimeoutSet<string> = new TimeoutSet()

    constructor(segs: Seg[], session: Session) {
        const sender = session.getMe()
        super(segs, sender, session)
    }

    createSendParam(): any {
        const param: any = this.session.createSendParam()
        param.message = this.serialize()
        return param
    }
    getSendApi(): string {
        if (!this.session) throw new Error('会话信息缺失')
        return this.session.getSendApi()
    }

    /**
     * 发送消息
     * @returns 是否发送成功
     */
    async send(): Promise<boolean> {
        if (this.state === 'sending') throw new Error('该消息正在发送,不能发送')
        if (this.state === 'sent') throw new Error('该消息已经发送成功,不能发送')
        if (!this.session) throw new Error('会话信息缺失')
        //#region 拼装参数 =======================================================
        const param = this.createSendParam()
        const api = this.getSendApi()
        //#endregion

        //#region 发送消息 =======================================================
        this.state = 'sending'
        SelfMsg.lock++
        let data: any|undefined
        try {
            [ data ] = await Connector.callApi(api, param)
        } catch (err) {
            logger.error(err as Error, '发送消息失败')
        }
        if (!data || !data['message_id']) {
            SelfMsg.lock--
            this.state = 'failed'
            new PopInfo().add(PopType.ERR, '发送消息失败')
            return false
        }
        this.message_id = String(data['message_id'])
        //#endregion

        //#region 获取发送后真实消息 ============================================
        const msgId = String(data['message_id'])
        SelfMsg.sendIds.add(msgId)
        SelfMsg.lock--
        // 发送成功后获取消息内容
        let msg: Msg | undefined
        // 不知道为啥这里有时候会失败...重试5次吧
        for (let retry = 0; retry < 5; retry++) {
            try{
                const [ msgData ] = await Connector.callApi('get_message', { message_id: msgId })
                // 艹,原来这样获得的消息不包含群组id...
                // 补加会话信息
                if (this.session.type === 'group') msgData.group_id = this.session.id
                else if (this.session.type === 'user') msgData.user_id = this.session.id
                else if (this.session instanceof TempSession) {
                    msgData.group_id = this.session.group_id
                    msgData.user_id = this.session.id
                }
                if (msgData) {
                    msg = createMsg(msgData)
                    break
                }
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
        this.raw_message = this.generateRawMsg()
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
 * 合并转发需要重写序列化函数
 */
export class SelfMergeMsg extends SelfMsg {
    constructor(messages: Msg[], session: Session) {
        const segs = [new ForwardSeg(messages)]
        super(segs, session)
    }

    override serialize(): object[] | string {
        // 没forward_id会抛异常,不抛代表有
        try {
            return super.serialize()
        } catch (err) { /* empty */ }
        if (runtimeData.tags.msgType == BotMsgType.CQCode) {
            new PopInfo().add(PopType.ERR, app.config.globalProperties.$t('合并转发消息不支持CQCode格式'))
            throw new Error('合并转发消息不支持CQCode格式')
        }
        const msgs = (this.message[0] as ForwardSeg).content
        if (!msgs) throw new Error('合并转发消息内容缺失')

        return msgs.map(msg => msg.toMergeForwardNode())
    }

    override generateRawMsg(): string {
        const { $t } = app.config.globalProperties
        return $t('合并转发消息')
    }

    override createSendParam(): any {
        const seg = this.message[0] as ForwardSeg
        if (seg.id) return super.createSendParam()

        const param: any = this.session.createSendParam()
        param.messages = this.serialize()
        return param
    }
    override getSendApi(): string {
        const seg = this.message[0] as ForwardSeg
        if (seg.id) return super.createSendParam()

        if (!this.session) throw new Error('会话信息缺失')
        return this.session.getSendApi(true)
    }
}

/**
 * 自身发送的预览消息
 */
export class SelfPreMsg extends Msg {
    constructor(segs: Seg[]) {
        super(segs, BaseUser.createMe())
    }
}

/**
 * 自身发送的合并预览消息
 */
export class SelfPreMergeMsg extends SelfPreMsg {
    constructor(messages: Msg[]) {
        const segs = [new ForwardSeg(messages)]
        super(segs.map(seg =>{seg.id='0';return seg}))
    }

    override generateRawMsg(): string {
        const { $t } = app.config.globalProperties
        return $t('合并转发消息')
    }
}

/**
 * 精华消息
 */
export class EssenceMsg extends Msg {
    operatorTime: Time
    operator: BaseUser | Member
    constructor(data: any, session: GroupSession) {
        // 变化为Msg用的格式
        const segsData = data['content'].map((item: any) => {
            return {
                type: item['type'],
                ...item['data']
            }
        })
        const segs = Msg.createSegs(segsData)
        const sender = session.getUserById(Number(data['sender_id'])) || new BaseUser(
            data['sender_id'], data['sender_nick']
        )
        super(segs, sender, session, new Time(data['sender_time']))
        this.operator = session.getUserById(Number(data['operator_id'])) || new BaseUser(
            data['operator_id'], data['operator_nick']
        )
        this.operatorTime = new Time(data['operator_time'])
    }
}
