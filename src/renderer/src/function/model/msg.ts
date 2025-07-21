/*
 * @FileDescription: Msg 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 提供模型定义和类型声明，用于处理消息相关的数据结构。（虽然把整个项目的类型全重构了不太现实...但还是从现在开始规范些吧...）
 */

import { Connector } from '../connect';
import { createMsg, getMsgRawTxt } from '../utils/msgUtil';
import { Logger, PopInfo, PopType } from '../base';
import { runtimeData } from '../msg';
import app from '@renderer/main';
import { BotMsgType } from '../elements/information';
import { TimeoutSet } from './data';
import { AtSeg, ImgSeg, Seg } from './seg';
import { autoReactive } from './utils';
import { Sender } from './user';
import { Message } from './message';
import { Session } from './session';

const logger = new Logger()

/**
 * 聊天消息
 */
@autoReactive
export class Msg extends Message {
    readonly type = 'message'
    revoke: boolean = false
    message: Seg[]
    sender: Sender
    raw_message: string
    atme: boolean = false
    atall: boolean = false
    imgList: string[] = []
    session?: Session | undefined;
    constructor(segs: Seg[], sender: Sender, session: Session)
    constructor(data: any)
    constructor(arg1: Seg[] | any, arg2?: Sender, arg3?: Session) {
        if (arg2) {
            // constructor(segs: Seg[], sender: Sender)
            const segs = arg1 as Seg[]
            const sender = arg2 as Sender
            const session = arg3 as Session
            super({ time: Date.now() })
            this.message = segs
            this.sender = sender
            this.session = session
            this.raw_message = this.generateRawMsg()
        } else{
            const data = arg1 as any
            super(data)
            if (!data['sender']) throw new Error('发送者信息缺失')
            if (!data['message']) throw new Error('消息内容缺失')
            this.sender = new Sender(data['sender'])
            this.message = Msg.createSegs(data['message'])
            if (data['raw_message'] || data['raw_message'] === '') this.raw_message = data['raw_message']
            else this.raw_message = this.generateRawMsg()
            this.message.forEach(seg => {
                if (!(seg instanceof AtSeg)) return
                if (seg.qq === 'all') this.atall = true
                else if (seg.qq === String(runtimeData.loginInfo.uin)) this.atme = true
            })
            if (data['message_type'] === 'group') {
                this.session = new Session('group', data['group_id'])
            } else if (data['message_type'] === 'private') {
                this.session = new Session('user', data['user_id'])
            } else if (data['group_id'] && data['user_id']) {
                this.session = new Session('temp', data['group_id'], data['user_id'])
            }
        }
        // TODO 文件图片支持
        this.message.forEach(seg => {
            if (!(seg instanceof ImgSeg)) return
            this.imgList.push(seg.url)
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
        return this.message.map(seg => seg.plaintext).join('')
    }

    /**
     * 预览消息
     */
    get preMsg(): string {
        if (this.session?.type === 'group') {
            return this.sender.name + ': ' + getMsgRawTxt(this)
        }else {
            return getMsgRawTxt(this)
        }
    }

    /**
     * 是否存在于tx的服务器上
     */
    get exist(): boolean {
        return !this.revoke
    }

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
}

/**
 * 用户自己发送的消息
 */
@autoReactive
export class SelfMsg extends Msg {
    state: 'notSend' | 'sending' | 'sent' | 'failed' = 'sending'
    private static lock: number = 0
    static readonly sendIds: TimeoutSet<string> = new TimeoutSet()
    
    constructor(segs: Seg[], type: 'group' | 'user' | 'temp', id: string|number) {
        const sender = new Sender({
            user_id: runtimeData.loginInfo.uin,
            nickname: runtimeData.loginInfo.nickname,
            gender: 'unknown',
        })
        const session: Session = new Session(type, id)
        super(segs, sender, session)
    }

    /**
     * 发送消息
     * @returns 是否发送成功
     */
    async send(): Promise<boolean> {
        if (this.state !== 'sending') throw new Error('该消息正在发送，不能发送')
        if (!this.session) throw new Error('会话信息缺失')
        //#region 拼装参数 =======================================================
        const param: any = this.session.createSendParam()
        param.message = this.serialize()
        const api = this.session.getSendApi()
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
                const [msgData] = await Connector.callApi('get_message', { message_id: msgId })
                if (msgData) {
                    msg = createMsg(msgData)
                    break
                }
            } catch {
                await new Promise(resolve => setTimeout(resolve, 100))
            }
        }
        if (!msg) {
            new PopInfo().add(PopType.ERR, '更新消息失败...')
            // 不知道自己组装的消息和tx的消息有多大差距...按照sent处理吧
            this.state = 'sent'
            return true
        }
        // 更新自身内容
        this.message = Msg.createSegs(msg.message)
        this.raw_message = this.generateRawMsg()
        this.sender = new Sender(msg.sender)
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
}

