/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger } from '../../base'
import type {
    AdapterInterface,
    AtAllSegData,
    AtSegData,
    BanEventData,
    BanLiftEventData,
    EssenceData,
    EssenceSeg,
    EventData,
    FaceSegData,
    FilesData,
    FileSegData,
    ForwardNodeData,
    ForwardSegData,
    FriendData,
    GroupAnnouncementData,
    GroupData,
    ImgSegData,
    ImplInfo,
    JoinEventData,
    JsonSegData,
    LeaveEventData,
    MdSegData,
    MemberData,
    MfaceSegData,
    MsgData,
    MsgEventData,
    PokeEventData,
    PokeSegData,
    RecallEventData,
    ReplySegData,
    SegData,
    SenderData,
    SessionData,
    TextSegData,
    UnknownSegData,
    UserData,
    VideoSegData,
    XmlSegData
} from '../interface'
import ObInfo from './ObInfo.vue'
import { $t, createSender, getGender, getRole, ObConnector } from './utils'
import type {
    LgrObGetFileUrl,
    LgrObGetFriendList,
    LgrObGetGroupFileRoot as LgrObGetGroupFile,
    LgrObGetGroupNotices,
    LgrObGetStongerInfo as LgrObGetStrangerInfo,
    ObGetFriendList,
    ObGetGroupList,
    ObGetGroupMemberList,
    ObGetLoginInfo,
    ObGetStrangerInfo,
    ObGetVersionInfo,
    ObTextSeg,
    ObImgSeg,
    ObFaceSeg,
    ObAtSeg,
    ObForwardSeg,
    ObForwardNodeSeg,
    ObPokeSeg,
    ObXmlSeg,
    ObSeg,
    ObGetForwardMsg,
    ObVideoSeg,
    ObJsonSeg,
    ObMsg,
    ObGroupSender,
    ObPrivateSender,
    ObAnonymousSender,
    ObGetMsg,
    LgrObGetHistoryMsg,
    LgrObGetEssenceMsg,
    ObReplySeg,
    LgrObMfaceSeg,
    LgrObMdSeg,
    LgrObFileSeg,
    ObSendMsg,
    LgrObImgSeg,
    LgrObGetMsg,
    LgrObGetCustomFace,
    ObMessageEvent,
    ObHeartEvent,
    ObNoticeEvent,
    ObGroupRecallEvent,
    ObGroupIncreaseEvent,
    ObGroupDecreaseEvent,
    ObGroupBanEvent,
    ObFriendRecallEvent,
    ObPokeEvent,
    LgrObPokeEvent,
    LgrObGetVersionInfo,
} from './type'
import { LoginInfo } from '../interface'
import { GroupSession, Session, UserSession } from '@renderer/function/model/session'
import { GroupFile } from '@renderer/function/model/file'
import { Member } from '@renderer/function/model/user'
import { v4 as uuid } from 'uuid'
import {
    AtAllSeg,
    AtSeg,
    FaceSeg,
    FileSeg,
    ForwardSeg,
    ImgSeg,
    JsonSeg,
    MdSeg,
    MfaceSeg,
    PokeSeg,
    ReplySeg,
    Seg,
    TxtSeg,
    UnknownSeg,
    VideoSeg,
    XmlSeg
} from '@renderer/function/model/seg'
import { Msg } from '@renderer/function/model/msg'
import { runtimeData } from '@renderer/function/msg'
import { queueWait } from '@renderer/function/utils/systemUtil'
import { handleEvent } from '@renderer/function/event'
import {
    shallowReactive,
    shallowRef,
    ShallowRef,
} from 'vue'
import { Resource } from '@renderer/function/model/ressource'

const logger = new Logger()

// 定义 API 装饰器：在方法外层包裹 try/catch，失败时返回 undefined
function api(
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.value
    descriptor.value = async function (...args: any[]) {
        try {
            return await original.apply(this, args)
        } catch (err) {
            logger.error(err as Error, `[API ${propertyKey} 调用失败]:`)
            return undefined
        }
    }
}

export class OneBotAdapter implements AdapterInterface {
    name = 'OneBot'
    version = '0.0.1'
    protocol = 'ob'
    heartBeatInfo = shallowReactive({lastBeatTime: 0, interval: -1, expectInterval: -1})
    botInfo: ShallowRef<ObGetVersionInfo|undefined> = shallowRef(undefined)
    protected url: string = ''
    protected ssl: boolean = false
    protected token?: string
    protected connector: ObConnector = new ObConnector(this.onmessage.bind(this))

    constructor() {
        this.init()
    }
    protected init() {
        this.segParsers['text'] = this.textParser.bind(this)
        this.segParsers['image'] = this.imageParser.bind(this)
        this.segParsers['face'] = this.faceParser.bind(this)
        this.segParsers['at'] = this.atParser.bind(this)
        this.segParsers['video'] = this.videoParser.bind(this)
        this.segParsers['forward'] = this.forwardParser.bind(this)
        this.segParsers['reply'] = this.replyParser.bind(this)
        this.segParsers['poke'] = this.pokeParser.bind(this)
        this.segParsers['xml'] = this.xmlParser.bind(this)
        this.segParsers['json'] = this.jsonParser.bind(this)

        this.segSerializer['text'] = this.textSerializer.bind(this)
        this.segSerializer['image'] = this.imageSerializer.bind(this)
        this.segSerializer['face'] = this.faceSerializer.bind(this)
        this.segSerializer['at'] = this.atSerializer.bind(this)
        this.segSerializer['atall'] = this.atallSerializer.bind(this)
        this.segSerializer['video'] = this.videoSerializer.bind(this)
        this.segSerializer['forward'] = this.forwardSerializer.bind(this)
        this.segSerializer['reply'] = this.replySerializer.bind(this)
        this.segSerializer['poke'] = this.pokeSerializer.bind(this)
        this.segSerializer['xml'] = this.xmlSerializer.bind(this)
        this.segSerializer['json'] = this.jsonSerializer.bind(this)

        this.eventProcessers['message'] = this.messageEvent.bind(this)
        this.eventProcessers['meta_event'] = this.metaEvent.bind(this)
        this.eventProcessers['notice'] = this.noticeEvent.bind(this)

        this.noticeEventProcessers['group_increase'] = this.groupIncreaseEvent.bind(this)
        this.noticeEventProcessers['group_decrease'] = this.groupDecreaseEvent.bind(this)
        this.noticeEventProcessers['group_ban'] = this.groupBanEvent.bind(this)
        this.noticeEventProcessers['group_recall'] = this.groupRecallEvent.bind(this)
        this.noticeEventProcessers['friend_recall'] = this.friendRecallEvent.bind(this)
        this.noticeEventProcessers['poke'] = this.pokeEvent.bind(this)
    }

    async connect(url: string, ssl: boolean, token?: string): Promise<boolean> {
        // 连接逻辑
        this.url = url
        this.ssl = ssl
        this.token = token

        this.resetCache()
        return await this.connector.open(url, ssl, token)
    }

    async close(): Promise<true> {
        // 关闭连接
        await this.connector.close()
        return true
    }

    async redirect(): Promise<AdapterInterface | undefined> {
        // TODO:重定向到其他适配器逻辑
        // nc llonebot
        const implInfo = await this.getImplInfo()
        if (!implInfo)
            return undefined

        if (LagrangeOneBot.match(implInfo))
            return new LagrangeOneBot(this.connector, this.botInfo.value)
        return undefined

    }

    optInfo() {
        // 返回适配器信息页面的组件
        return ObInfo
    }

    //#region == API ===============================================
    //#region == 基础消息 ======================
    @api
    async getLoginInfo(): Promise<LoginInfo> {
        const data: ObGetLoginInfo = await this.connector.send('get_login_info', {})
        return {
            uin: data.data.user_id,
            nickname: data.data.nickname,
        }
    }

    @api
    async getImplInfo(): Promise<ImplInfo | undefined> {
        // 获取协议段信息
        const data: ObGetVersionInfo = await this.connector.send('get_version_info', {})
        // 更新 botInfo
        this.botInfo.value = data
        return {
            name: data.data.app_name,
            version: data.data.app_version,
        }
    }
    //#endregion

    //#region == 获取消息 ======================
    // 获取用户信息没这个里面的数据,这个保存下,到时候往这里面查资料
    protected friendListCache: FriendData[] | null = null
    @api
    async getFriendList(useCache: boolean = true): Promise<FriendData[]> {
        if (useCache && this.friendListCache) return this.friendListCache

        const friendData = new Map<number, FriendData>()
        // 加载好友列表
        const data: ObGetFriendList = await this.connector.send('get_friend_list', {})
        for (const item of data.data) {
            if (friendData.has(item.user_id)) continue
            friendData.set(item.user_id, {
                user_id: item.user_id,
                nickname: item.nickname,
                remark: item.remark === '' ? undefined : item.remark,
                class_id: 0,           // 默认分类ID为0
                class_name: $t('好友'),     // 默认分类名称
            })
        }

        this.friendListCache = Array.from(friendData.values())

        return this.friendListCache
    }

    @api
    async getGroupList(_: boolean = true): Promise<GroupData[]> {
        const groupData = new Map<number, GroupData>()
        // 加载群组列表
        const data: ObGetGroupList = await this.connector.send('get_group_list', {})
        for (const item of data.data) {
            if (groupData.has(item.group_id)) continue
            groupData.set(item.group_id, {
                group_id: item.group_id,
                group_name: item.group_name,
                member_count: item.member_count,
                max_member_count: item.max_member_count,
            })
        }

        return Array.from(groupData.values())
    }

    @api
    async getUserInfo(userId: number, useCache: boolean = true): Promise<UserData> {
        // 获取用户信息
        const data: ObGetStrangerInfo = await this.connector.send('get_stranger_info', {
            user_id: userId,
            no_cache: !useCache,
        })
        if (!this.friendListCache) await this.getFriendList()
        const baseInfo = this.friendListCache?.find(f => f.user_id === userId)
        return {
            id: userId,
            remark: baseInfo?.remark,
            nickname: baseInfo?.nickname || data.data.nickname,
            qid: $t('不支持'),
            regTime: Date.now(),
            qqLevel: 0,
            age: data.data.age,
            sex: getGender(data.data.sex)
        }
    }

    @api
    async getMemberList(group: GroupSession, _: boolean): Promise<MemberData[]> {
        const data: ObGetGroupMemberList = await this.connector.send(
            'get_group_member_list',
            {group_id: group.id},
        )
        return data.data.map(item => ({
            age: item.age,
            card: item.card,
            group_id: item.group_id,
            join_time: item.join_time,
            last_sent_time: item.last_sent_time,
            level: item.level,
            nickname: item.nickname,
            role: getRole(item.role),
            sex: getGender(item.sex),
            title: item.title,
            user_id: item.user_id,
            unfriendly: item.unfriendly,
        }))
    }
    //#endregion

    //#region == 群聊相关 ======================
    @api
    async setMemberCard(group: GroupSession, mem: Member, card: string): Promise<true> {
        await this.connector.send('set_group_card', {
            group_id: group.id,
            user_id: mem.user_id,
            card: card,
        })
        return true
    }
    @api
    async setMemberTitle(group: GroupSession, mem: Member, title?: string): Promise<true> {
        await this.connector.send('set_group_special_title', {
            group_id: group.id,
            user_id: mem.user_id,
            special_title: title || '',
        })
        return true
    }
    @api
    async banMember(group: GroupSession, mem: Member, time: number): Promise<true> {
        await this.connector.send('set_group_ban', {
            group_id: group.id,
            user_id: mem.user_id,
            duration: time,
        })
        return true
    }
    @api
    async kickMember(group: GroupSession, mem: Member): Promise<true> {
        await this.connector.send('set_group_kick', {
            group_id: group.id,
            user_id: mem.user_id,
        })
        return true
    }
    //#region == 消息相关 ===========================
    @api
    async getForwardMsg(forwardId: string): Promise<ForwardNodeData[]> {
        const { data }: ObGetForwardMsg = await this.connector.send('get_forward_msg', {
            id: forwardId,
        })
        return await Promise.all(data.message.map(node => this.nodeParser(node)))
    }
    @api
    async getMsg(_: Session, msgId: string): Promise<MsgData | undefined> {
        const data: ObGetMsg = await this.connector.send('get_msg', {
            message_id: msgId,
        })
        if (!data.data) return undefined

        // 解析消息
        const msgData = await this.parseMsg(data.data)
        return msgData
    }
    @api
    async sendMsg(msg: Msg): Promise<string> {
        const message = await this.serializeMsg(msg)
        let data: ObSendMsg
        if (msg.session instanceof UserSession) {
            data = await this.connector.send('send_private_msg', {
                user_id: msg.session.id,
                message: message,
            })
        } else if (msg.session instanceof GroupSession) {
            data = await this.connector.send('send_group_msg', {
                group_id: msg.session.id,
                message: message,
            })
        } else {
            throw new Error('OneBot 不支持发送临时会话消息')
        }
        if (!data.data.message_id) throw new Error('发送消息失败，返回值无message_id')

        return data.data.message_id.toString()
    }
    @api
    async recallMsg(msg: Msg): Promise<true> {
        await this.connector.send('delete_msg', {
            message_id: msg.message_id
        })
        return true
    }
    //#endregion
    //#endregion
    //#endregion


    //#region == 消息相关 ===========================================
    async parseMsg(data: ObMsg): Promise<MsgData> {
        const message = await this.parseSeg(data.message)

        // 组装发送者信息
        let sender: SenderData
        if (data.message_type === 'group' && data.sub_type === 'anonymous') {
            const msgSender = data.sender as ObAnonymousSender
            sender = createSender(
                Number(msgSender.id),
                msgSender.id,
            )
        }else {
            const msgSender = data.sender as ObPrivateSender | ObGroupSender
            sender = createSender(
                Number(msgSender.user_id),
                msgSender.nickname,
            )
        }
        return {
            message_id: data.message_id.toString(),
            session: this.parseSession(data),
            sender: sender,
            time: data.time,
            message: message,
        }
    }
    parseSession(data: ObMessageEvent | ObMsg): SessionData {
        let session_info
        // 组装会话信息
        if (data.message_type === 'group') {
            session_info = {
                id: data.group_id,
                type: 'group',
            }
        } else if (data.message_type === 'private' && data.sub_type === 'group') {
            session_info = {
                id: data.user_id,
                group_id: data.group_id,
                type: 'temp',
            }
        } else {
            session_info = {
                id: data.user_id,
                type: 'user',
            }

        }
        return session_info
    }
    async serializeMsg(msg: Msg): Promise<ObSeg<string, any>[]> {
        const data = await Promise.all(msg.message.map(seg => this.serializeSeg(seg)))
        return data
    }

    //#region == 反序列化 ===========================
    segParsers: Record<string, ((data: ObSeg<any, any>)=>Promise<SegData>)> = {}
    async parseSeg(data: ObSeg<string, any>): Promise<SegData>
    async parseSeg(data: ObSeg<string, any>[]): Promise<SegData[]>
    async parseSeg(data: ObSeg<string, any> | ObSeg<string, any>[]): Promise<SegData | SegData[]> {
        if (Array.isArray(data)) {
            return await Promise.all(data.map(d => this.parseSeg(d)))
        } else {
            const parser = this.segParsers[data.type]
            if (parser) return await parser(data)
            return this.unknownParser(data)
        }
    }
    async textParser(data: ObTextSeg): Promise<TextSegData> {
        return {
            type: 'text',
            text: data.data.text
        }
    }
    async imageParser(data: ObImgSeg): Promise<ImgSegData> {
        return {
            type: 'image',
            url: Resource.fromUrl(data.data.url),
            isFace: false,
        }
    }
    async faceParser(data: ObFaceSeg): Promise<FaceSegData> {
        return {
            type: 'face',
            id: Number(data.data.id),
        }
    }
    async atParser(data: ObAtSeg): Promise<AtSegData|AtAllSegData> {
        if (data.data.qq === 'all') {
            return {
                type: 'atall',
            }
        }
        else {
            return {
                type: 'at',
                user_id: Number(data.data.qq),
            }
        }
    }
    async videoParser(data: ObVideoSeg): Promise<VideoSegData> {
        return {
            type: 'video',
            file: data.data.file,
            url: Resource.fromUrl(data.data.url),
        }
    }
    async forwardParser(data: ObForwardSeg): Promise<ForwardSegData> {
        const id: string = data.data.id
        const nodes = await this.getForwardMsg(id)
        return {
            type: 'forward',
            id,
            content: nodes,
        }
    }
    async replyParser(data: ObReplySeg): Promise<ReplySegData> {
        return {
            type: 'reply',
            id: data.data.id,
        }
    }
    async pokeParser(_data: ObPokeSeg): Promise<PokeSegData> {
        return { type: 'poke' }
    }
    async xmlParser(data: ObXmlSeg): Promise<XmlSegData> {
        return {
            type: 'xml',
            data: data.data.data,
            id: uuid(),
        }
    }
    async jsonParser(data: ObJsonSeg): Promise<JsonSegData> {
        return {
            type: 'json',
            data: data.data.data,
            id: uuid(),
        }
    }

    unknownParser(data: ObSeg<string, any>): UnknownSegData {
        return {
            type: 'unknown',
            segType: data.type,
            data: data
        }
    }
    async nodeParser(data: ObForwardNodeSeg): Promise<ForwardNodeData> {
        return {
            sender: createSender(Number(data.data.user_id), data.data.nickname),
            content: await this.parseSeg(data.data.content),
        }
    }
    //#endregion

    //#region == 序列化 =============================
    segSerializer: Record<string, ((data: any) => Promise<ObSeg<string, any>>)> = {}
    async serializeSeg(seg: Seg): Promise<ObSeg<string, any>>
    async serializeSeg(seg: Seg[]): Promise<ObSeg<string, any>[]>
    async serializeSeg(seg: Seg | Seg[]): Promise<ObSeg<string, any> | ObSeg<string, any>[]> {
        if (Array.isArray(seg)) {
            return Promise.all(seg.map(d => this.serializeSeg(d)))
        } else {
            const serializer = this[`${seg.type}Serializer`]
            if (serializer) return await serializer(seg)
            return this.unmatchSerializer(seg)
        }
    }
    async textSerializer(seg: TxtSeg): Promise<ObTextSeg> {
        return {
            type: 'text',
            data: {
                text: seg.text
            }
        }
    }
    async imageSerializer(seg: ImgSeg): Promise<ObImgSeg> {
        return {
            type: 'image',
            data: {
                url: seg.url,
                file: seg.url,
            }
        }
    }
    async faceSerializer(seg: FaceSeg): Promise<ObFaceSeg> {
        return {
            type: 'face',
            data: {
                id: seg.id.toString(),
            },
        }
    }
    async atSerializer(seg: AtSeg): Promise<ObAtSeg> {
        return {
            type: 'at',
            data: {
                qq: seg.user_id.toString(),
            },
        }
    }
    async atallSerializer(_: AtAllSeg): Promise<ObAtSeg> {
        return {
            type: 'at',
            data: {
                qq: 'all',
            },
        }
    }
    async videoSerializer(seg: VideoSeg): Promise<ObVideoSeg> {
        return {
            type: 'video',
            data: {
                file: seg.file,
                url: seg.url,
            },
        }
    }
    async forwardSerializer(seg: ForwardSeg): Promise<ObForwardSeg> {
        const id = seg.id
        if (!id) throw new Error('合并转发消息没id无法序列化为标准Ob消息')

        return {
            'type': 'forward',
            'data': {
                'id': id,
            }
        }
    }
    async replySerializer(seg: ReplySeg): Promise<ObReplySeg> {
        return {
            type: 'reply',
            data: {
                id: seg.id,
            }
        }
    }
    async pokeSerializer(_seg: PokeSeg): Promise<ObPokeSeg> {
        return {
            type: 'poke',
            data: {
                type: '1',
                id: '-1',
            }
        }
    }
    async xmlSerializer(seg: XmlSeg): Promise<ObXmlSeg> {
        return {
            type: 'xml',
            data: {
                data: seg.data,
            }
        }
    }
    async jsonSerializer(seg: JsonSeg): Promise<ObJsonSeg> {
        return {
            type: 'json',
            data: {
                data: seg.data,
            }
        }
    }
    async unknownSerializer(seg: UnknownSeg): Promise<ObSeg<string, any>> {
        return seg.data as ObSeg<string, any>
    }
    async nodeSerializer(msg: Msg): Promise<ObForwardNodeSeg> {
        return {
            'type': 'node',
            'data': {
                'nickname': msg.sender.name,
                'user_id': msg.sender.user_id.toString(),
                'content': await this.serializeSeg(msg.message),
            }
        }
    }
    unmatchSerializer(seg: Seg): ObSeg<string, any> {
        const data = {}
        for (const key in seg) {
            if (key === 'type') continue
            data[key] = seg[key]
        }
        return {
            type: seg.type,
            data: data
        }
    }
    //#endregion
    //#endregion

    //#region == 事件相关 ===========================================
    eventProcessers: Record<string, (event: any) => Promise<EventData | undefined>> = {}
    async messageEvent(event: ObMessageEvent): Promise<MsgEventData> {
        const process = async (data: ObMessageEvent) => {
            if (data.sub_type === 'other') throw new Error('不支持 other 类型的消息')
            if (data.sub_type === 'notice') throw new Error('不支持 notice 类型的消息')

            const originMsg: ObMsg = {
                time: data.time,
                message_type: data.message_type,
                sub_type: data.sub_type,
                message_id: data.message_id,
                real_id: 0,
                sender: data.sender,
                message: data.message,
                user_id: data.user_id,
                group_id: data?.group_id,
            }

            const msgData = await this.parseMsg(originMsg)
            const out: MsgEventData = {
                type: 'msg',
                message: msgData,
                message_id: data.message_id.toString(),
                time: data.time,
                session: msgData.session,
            }
            return out
        }
        const sessionId = event.message_type === 'group' ? event.group_id : event.user_id
        return await queueWait(process(event), `${event.message_type}-${sessionId}`)
    }
    async metaEvent(event: ObHeartEvent): Promise<undefined> {
        if (event.meta_event_type !== 'heartbeat') return


        if (this.heartBeatInfo.expectInterval === -1) {
            this.heartBeatInfo.expectInterval = event.interval /  1000
            this.heartBeatInfo.lastBeatTime = event.time
            return
        }

        this.heartBeatInfo.interval = event.time - this.heartBeatInfo.lastBeatTime
        this.heartBeatInfo.lastBeatTime = event.time
        this.heartBeatInfo.expectInterval = event.interval / 1000
    }
    noticeEventProcessers: Record<string, (event: any) => Promise<EventData | undefined>> = {}
    async noticeEvent(event: ObNoticeEvent): Promise<undefined | EventData> {
        const eventType = event.notice_type === 'notify' ? event.sub_type : event.notice_type
        const processer = this.noticeEventProcessers[eventType ?? '']
        if (!processer) return
        const sessionId = event.group_id || event.user_id
        const type = event.group_id ? 'group' : 'user'
        return await queueWait(
            processer(event),
            `${type}-${sessionId}`
        )
    }
    async groupIncreaseEvent(event: ObGroupIncreaseEvent): Promise<JoinEventData> {
        return {
            type: 'join',
            session: {
                id: event.group_id,
                type: 'group',
            },
            user: createSender(event.user_id),
            operator: createSender(event.operator_id),
            join_type: event.sub_type,
            time: event.time,
        }
    }
    async groupDecreaseEvent(event: ObGroupDecreaseEvent): Promise<LeaveEventData> {
        return {
            type: 'leave',
            session: {
                id: event.group_id,
                type: 'group',
            },
            user: createSender(event.user_id),
            operator: createSender(event.operator_id),
            time: event.time,
        }
    }
    async groupBanEvent(event: ObGroupBanEvent): Promise<BanEventData|BanLiftEventData> {
        if (event.sub_type === 'ban') {
            return {
                type: 'ban',
                session: {
                    id: event.group_id,
                    type: 'group',
                },
                user: createSender(event.user_id),
                operator: createSender(event.operator_id),
                time: event.time,
                duration: event.duration,
            }
        }else {
            return {
                type: 'banLift',
                session: {
                    id: event.group_id,
                    type: 'group',
                },
                user: createSender(event.user_id),
                operator: createSender(event.operator_id),
                time: event.time,
            }
        }
    }
    async groupRecallEvent (event: ObGroupRecallEvent): Promise<RecallEventData> {
        return {
            type: 'recall',
            session: {
                id: event.group_id,
                type: 'group',
            },
            user: createSender(event.user_id),
            operator: createSender(event.operator_id),
            time: event.time,
            recallId: event.message_id.toString(),
        }
    }
    async friendRecallEvent (event: ObFriendRecallEvent): Promise<RecallEventData> {
        return {
            type: 'recall',
            session: {
                id: event.user_id,
                type: 'user',
            },
            user: createSender(event.user_id),
            operator: createSender(event.user_id),
            time: event.time,
            recallId: event.message_id.toString(),
        }
    }
    async pokeEvent(event: ObPokeEvent): Promise<PokeEventData> {
        return {
            type: 'poke',
            session: {
                id: event.group_id,
                type: 'group',
            },
            sender: createSender(event.user_id),
            target: createSender(event.target_id),
            action: '戳了戳',
            suffix: '',
            ico: 'https://tianquan.gtimg.cn/nudgeaction/item/0/expression.jpg',
            time: event.time,
        }
    }
    //#endregion
    // TODO: 错别字
    get selfInfo(): {[key: string]: string} {
        if (!this.botInfo.value) return {}
        return {
            '协议段名称': this.botInfo.value.data.app_name,
            '协议段版本': this.botInfo.value.data.app_version,
            'OneBot 版本': this.botInfo.value.data.protocol_version,
        }
    }
    protected onmessage(data: any) {
        return this.handleEvent(data)
    }

    /**
     * 事件处理
     * @param event 事件
     * @returns
     */
    protected handleEvent(event: any) {
        const eventProcesser = this.eventProcessers[event.post_type]
        if (!eventProcesser) return
        eventProcesser(event)
            .then((data) => {
                if (!data) return
                handleEvent(data)
            })
    }

    private resetCache(){
        // 重置缓存
        this.friendListCache = null
    }
}

export class LagrangeOneBot extends OneBotAdapter implements AdapterInterface {
    override name = 'Lagrange OneBot'
    override version = '0.0.1'
    declare botInfo: ShallowRef<LgrObGetVersionInfo | undefined>
    constructor(connector: ObConnector, botInfo?: ObGetVersionInfo) {
        super()
        this.connector = connector
        this.botInfo.value = botInfo as LgrObGetVersionInfo
        connector.setOnMessageHook(this.onmessage.bind(this))
    }

    protected override init(): void {
        super.init()
        this.segParsers['markdown'] = this.mdParser.bind(this)
        this.segParsers['mface'] = this.mfaceParser.bind(this)

        this.segSerializer['markdown'] = this.mdSerializer.bind(this)
        this.segSerializer['mface'] = this.mfaceSerializer.bind(this)
    }

    //#region == API ===============================================
    //#region == 获取信息 ======================
    @api
    override async getFriendList(useCache: boolean = true): Promise<FriendData[]> {
        if (useCache && this.friendListCache) return this.friendListCache

        const friendData = new Map<number, FriendData>()
        // 加载好友列表
        const data: LgrObGetFriendList = await this.connector.send('get_friend_list', {})

        for (const item of data.data) {
            if (friendData.has(item.user_id)) continue
            friendData.set(item.user_id, {
                user_id: item.user_id,
                nickname: item.nickname,
                remark: item.remark === '' ? undefined : item.remark,
                class_id: item.group.group_id,
                class_name: item.group.group_name,
            })
        }

        this.friendListCache = Array.from(friendData.values())

        return this.friendListCache
    }

    @api
    override async getUserInfo(userId: number, useCache: boolean = true): Promise<UserData> {
        // 获取用户信息
        const data: LgrObGetStrangerInfo = await this.connector.send('get_stranger_info', {
            user_id: userId,
            no_cache: !useCache,
        })
        const user = data.data
        if (!this.friendListCache) await this.getFriendList()
        const baseInfo = this.friendListCache?.find(f => f.user_id === userId)
        return {
            id: user.user_id,
            remark: baseInfo?.remark,
            nickname: user.nickname,
            longNick: user.sign,
            qid: user.q_id,
            regTime: user.RegisterTime ,
            qqLevel: user.level,
            age: user.age,
            sex: getGender(user.sex),
        }
    }
    /**
     * 获取群公告信息
     * @param group
     */
    @api
    async getGroupAnnouncement?(group: GroupSession): Promise<GroupAnnouncementData[]> {
        // 获取群公告信息
        const data: LgrObGetGroupNotices = await this.connector.send('_get_group_notice', {group_id: group.id})

        const out = data.data.map(item => ({
            content: item.message.text,
            img_id: item.message.images.at(0)?.id,
            time: item.publish_time,
            sender: item.sender_id,
        }))
        return out
    }

    /**
     * 获取群精华消息
     * @param group
     */
    @api
    async getGroupEssence?(group: GroupSession): Promise<EssenceData[]> {
        const data: LgrObGetEssenceMsg = await this.connector.send('get_essence_msg_list', {group_id: group.id})

        const out: Promise<EssenceData>[] = []
        for (const item of data.data) {
            out.push((async () => ({
                sender: createSender(item.sender_id, item.sender_nick),
                sender_time: item.sender_time,
                operator: createSender(item.operator_id, item.operator_nick),
                operator_time: item.operator_time,
                content: (await this.parseSeg(item.content)) as EssenceSeg[]
            }))())
        }

        return await Promise.all(out)
    }
    @api
    async getCustomFace(): Promise<string[] | undefined> {
        const data: LgrObGetCustomFace = await this.connector.send('fetch_custom_face', {})

        return data.data
    }
    //#endregion

    //#region == 消息相关 ======================
    @api
    override async getMsg(session: Session, msgId: string): Promise<MsgData | undefined> {
        const data: LgrObGetMsg = await this.connector.send('get_msg', {
            message_id: msgId,
        })
        if (!data.data) return undefined

        let msgData: ObMsg

        if (session.type === 'group') {
            msgData = {
                group_id: session.id,
                ...data.data
            }
        }else {
            msgData = {
                user_id: session.id,
                ...data.data
            }
        }

        // 解析消息
        return await this.parseMsg(msgData)
    }
    @api
    override async sendMsg(msg: Msg): Promise<string> {
        if (!this.isCustomForward(msg)) return await super.sendMsg(msg)

        // 自定义合并转发
        const message = await this.customForwardSerializer(msg.message[0] as ForwardSeg)
        let data: ObSendMsg
        if (msg.session instanceof UserSession) {
            data = await this.connector.send('send_private_forward_msg', {
                user_id: msg.session.id,
                messages: message,
            })
        } else if (msg.session instanceof GroupSession) {
            data = await this.connector.send('send_group_forward_msg', {
                group_id: msg.session.id,
                messages: message,
            })
        } else {
            throw new Error('OneBot 不支持发送临时会话消息')
        }
        if (!data.data.message_id) throw new Error('发送消息失败，返回值无message_id')

        return data.data.message_id.toString()
    }

    @api
    async getHistoryMsg(session: Session, count: number, start?: Msg): Promise<MsgData[] | undefined> {
        let out: MsgData[] = []
        let type: 'user' | 'group'
        let startId: string | undefined = start?.message_id
        const id = session.id.toString()

        if (session instanceof UserSession)
            type = 'user'
        else if (session instanceof GroupSession)
            type = 'group'
        else
            throw new Error('LgrV1不支持临时会话')

        while (out.length < count) {
            // 拉消息
            const data: MsgData[] | undefined = await this._getHistoryMsg(
                type,
                id,
                count - out.length,
                startId
            )
            if (!data || data.length === 0) break

            // 保存头部消息
            startId = data[0].message_id
            // 过滤掉已删除消息
            const dataFilter = data.filter(msg => !this.isDeletedMsg(msg))

            out = [...dataFilter, ...out]
        }

        return out
    }
    @api
    async sendGroupPoke(session: GroupSession, target: Member): Promise<true | undefined> {
        await this.connector.send('group_poke', {
            group_id: session.id,
            user_id: target.user_id,
        })
        return true
    }
    @api
    async sendPrivatePoke(session: UserSession): Promise<true | undefined> {
        await this.connector.send('friend_poke', {
            user_id: session.id,
        })
        return true
    }
    @api
    async setResponse(msg: Msg, emojiId: string, add?: boolean): Promise<true | undefined> {
        await this.connector.send('set_group_reaction', {
            group_id: msg.session!.id,
            message_id: msg.message_id,
            code: emojiId,
            is_add: add, // 默认为添加表情
        })
        return true
    }
    //#endregion

    //#region == 群聊相关 ======================
    @api
    async setGroupName(group: GroupSession, name: string): Promise<true> {
        await this.connector.send('set_group_name', {
            group_id: group.id,
            group_name: name,
        })
        return true
    }
    @api
    async leaveGroup(group: GroupSession): Promise<true> {
        await this.connector.send('set_group_leave', {group_id: group.id})
        return true
    }
    //#endregion

    //#region == 文件相关 ======================
    @api
    async getGroupFile?(group: GroupSession): Promise<FilesData> {
        const data: LgrObGetGroupFile = await this.connector.send('get_group_root_files', {group_id: group.id})
        return this.parseFileData(data)
    }

    @api
    async getGroupFolderFile(group: GroupSession, folderId: string): Promise<FilesData | undefined> {
        const data: LgrObGetGroupFile = await this.connector.send('get_group_files_by_folder', {
            group_id: group.id,
            folder_id: folderId,
        })
        return this.parseFileData(data)
    }

    @api
    async getGroupFileUrl(file: GroupFile): Promise<string | undefined> {
        const data: LgrObGetFileUrl = await this.connector.send('get_group_file_url', {
            group_id: file.group.id,
            file_id: file.id,
        })

        return data.data.url
    }
    //#endregion
    //#endregion

    //#region == 消息相关 ===========================================
    override async parseMsg(data: ObMsg): Promise<MsgData> {
        const msg = await super.parseMsg(data)
        // 过滤掉mface后面尾随的字符串
        const filter: SegData[] = []
        for (let id=0;id<msg.message.length;id++) {
            const seg = msg.message[id]
            filter.push(seg)
            if (seg.type === 'mface') id ++
        }
        msg.message = filter
        return msg
    }
    async customForwardSerializer(seg: ForwardSeg): Promise<ObForwardNodeSeg[]> {
        const msgs = seg.content as Msg[]
        const messagesList = await Promise.all(msgs.map(msg => this.serializeMsg(msg)))
        const out: ObForwardNodeSeg[] = []
        for (let i = 0; i < messagesList.length; i++) {
            out.push({
                type: 'node',
                data: {
                    nickname: msgs[i].sender.name,
                    user_id: msgs[i].sender.user_id.toString(),
                    content: messagesList[i],
                }
            })
        }
        return out
    }
    //#region == 反序列化 ===========================
    async mdParser(data: LgrObMdSeg): Promise<MdSegData> {
        return {
            type: 'md',
            content: data.data.content,
        }
    }
    override async imageParser(data: LgrObImgSeg): Promise<ImgSegData> {
        return {
            type: 'image',
            url: Resource.fromUrl(data.data.url),
            isFace: data.data.subType === 7 || data.data.subType === 1,
            summary: data.data.summary,
        }
    }
    async mfaceParser(data: LgrObMfaceSeg): Promise<MfaceSegData> {
        return {
            type: 'mface',
            url: data.data.url,
            summary: data.data.summary,
            packageId: data.data.emoji_package_id,
            id: data.data.emoji_id,
            key: data.data.key,
        }
    }
    async fileParser(data: LgrObFileSeg): Promise<FileSegData> {
        return {
            type: 'file',
            name: data.data.file_name,
            size: 0,
            url: data.data.url,
            file_id: data.data.file_id,
        }
    }
    //#endregion
    //#region == 序列化 =============================
    async mdSerializer(seg: MdSeg): Promise<LgrObMdSeg> {
        return {
            type: 'markdown',
            data: {
                content: seg.content,
            }
        }
    }
    override async imageSerializer(seg: ImgSeg): Promise<LgrObImgSeg> {
        return {
            type: 'image',
            data: {
                url: seg.url,
                file: seg.url,
                subType: seg.isFace ? 7 : undefined, // 0表示普通图片，7表示表情
                summary: seg.summary,
            }
        }
    }
    async mfaceSerializer(seg: MfaceSeg): Promise<LgrObMfaceSeg> {
        return {
            type: 'mface',
            data: {
                url: seg.url,
                summary: seg.summary,
                emoji_package_id: seg.packageId,
                emoji_id: seg.id,
                key: seg.key,
            }
        }
    }
    async fileSerializer(seg: FileSeg): Promise<LgrObFileSeg> {
        // 反正lgrv1我发不出去文件，就胡乱写吧...
        if (!seg.file_id) throw new Error('文件消息必须有 file_id')
        return {
            type: 'file',
            data: {
                file_name: seg.name,
                url: seg.url,
                file_id: seg.file_id,
                file_hash: undefined as any,
            }
        }
    }
    //#endregion
    //#endregion

    //#region == 事件处理 ===========================================
    override async pokeEvent(event: LgrObPokeEvent): Promise<PokeEventData> {
        return {
            type: 'poke',
            session: {
                id: event.group_id,
                type: 'group',
            },
            sender: createSender(event.user_id),
            target: createSender(event.target_id),
            action: event.action,
            suffix: event.suffix,
            ico: event.action_img_url,
            time: event.time,
        }
    }
    override async groupDecreaseEvent(event: ObGroupDecreaseEvent): Promise<LeaveEventData> {
        if (event.operator_id === 0) event.operator_id = event.user_id
        return super.groupDecreaseEvent(event)
    }
    //#endregion

    static match(implInfo: ImplInfo): boolean {
        return implInfo.name === 'Lagrange.OneBot'
    }

    private parseFileData(data: LgrObGetGroupFile): FilesData {
        return {
            files: data.data.files.map(file => ({
                file_id: file.file_id,
                file_name: file.file_name,
                size: file.file_size,
                download_times: file.download_times,
                dead_time: file.dead_time,
                upload_time: file.upload_time,
                uploader_name: file.uploader_name,
            })),
            folders: data.data.folders.map(folder => ({
                folder_id: folder.folder_id,
                folder_name: folder.folder_name,
                count: folder.total_file_count,
                create_time: folder.create_time,
                creater_name: folder.create_name,
            }))
        }
    }

    /**
     * 判断一个消息是否为构建转发
     * @param msg
     * @returns
     */
    private isCustomForward(msg: Msg): boolean {
        const firstSeg = msg.message.at(0)
        if (!(firstSeg instanceof ForwardSeg)) return false
        if (!firstSeg.id) return true
        return false
    }

    /**
     * 对[已删除]不过滤的获取历史消息
     * @param session
     * @param count
     * @param start
     * @returns
     */
    @api
    private async _getHistoryMsg(
        type: 'user' | 'group',
        id: string,
        count: number,
        start_id?: string
    ): Promise<MsgData[] | undefined> {
        let data: LgrObGetHistoryMsg
        if (type === 'user') {
            data = await this.connector.send('get_friend_msg_history', {
                user_id: id,
                count: count,
                message_id: start_id,
            })
        } else {
            data = await this.connector.send('get_group_msg_history', {
                group_id: id,
                count: count,
                message_id: start_id,
            })
        }

        const out: Promise<MsgData>[] = []
        for (const msg of data.data.messages) {
            out.push(this.parseMsg(msg))
        }

        return await Promise.all(out)
    }

    override get selfInfo(): {[key: string]: string} {
        if (!this.botInfo.value) return {}
        return {
            ...super.selfInfo,
            'ntqq协议': this.botInfo.value.data.nt_protocol,
        }
    }

    private isDeletedMsg(msg: MsgData): boolean {
        // 判断消息是否为[已删除]消息
        if (msg.message.length !== 1)return false
        if (msg.sender.id !== runtimeData.loginInfo.uin) return false
        if (msg.message[0].type !== 'text') return false
        if ((msg.message[0] as TextSegData).text !== '[已删除]') return false
        return true

    }
}

class NapCapOneBot extends OneBotAdapter {
    override name = 'NapCap OneBot'
    override version = '0.0.1'
    constructor(connector: ObConnector) {
        super()
        this.connector = connector
    }
}

export default new OneBotAdapter()


    // /**
    //  * 序列化为 CQ 码
    //  * @returns CQ 码
    //  */
    // toCq(): string {
    //     const params = Object.entries(this.serializeData())
    //         .map(([key, value]) => `${key}=${value}`)
    //         .join(',');
    //     return `[CQ:${this.type},${params}]`;
    // }



        // serializeData(): any {
        //     return {
        //         text: this.text,
        //     }
        // }

        // toCq(): string {
        //     return this.text.replace('[', '&#91;').replace(']', '&#93;')
        // }
