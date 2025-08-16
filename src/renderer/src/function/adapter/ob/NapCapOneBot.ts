import { GroupSession, Session, UserSession } from '@renderer/function/model/session'
import { EssenceData, EssenceSeg, FriendData, GroupAnnouncementData, ImplInfo, MsgData, UserData } from '../interface'
import { api, OneBotAdapter } from './adapter'
import { NcObGetStrangerInfo, NcObGetFriendsWithCategory, ObGetVersionInfo, NcObGetGroupNotices, NcObGetEssenceMsgList, NcObFetchCustomFace, NcObGetHistoryMsg } from './type'
import { createSender, getGender, ObConnector } from './utils'
import { Msg } from '@renderer/function/model/msg'
import { ForwardSeg } from '@renderer/function/model/seg'
import { Member } from '@renderer/function/model/user'

export default class NapCapOneBot extends OneBotAdapter {
    override name = 'NapCap OneBot'
    override version = '0.0.1'
    constructor(connector: ObConnector, botInfo?: ObGetVersionInfo) {
        super()
        this.connector = connector
        this.botInfo.value = botInfo
        connector.setOnMessageHook(this.onmessage.bind(this))
    }

    static match(implInfo: ImplInfo): boolean {
        return implInfo.name === 'NapCat.Onebot'
    }

    //#region == API ===============================================
    //#region == 获取信息 ======================
    @api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    override async getFriendList(_?: boolean): Promise<FriendData[]> {
        const data: NcObGetFriendsWithCategory = await this.connector.send('get_friends_with_category', {})
        const out: FriendData[] = []
        for (const category of data.data) {
            for (const friend of category.buddyList) {
                out.push({
                    user_id: friend.user_id,
                    nickname: friend.nickname,
                    remark: friend.remark,
                    class_id: category.categoryId,
                    class_name: category.categoryName,
                })
            }
        }
        return out
    }
    @api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    override async getUserInfo(userId: number, _?: boolean): Promise<UserData> {
        // 获取用户信息
        const data: NcObGetStrangerInfo = await this.connector.send('get_stranger_info', {
            user_id: userId,
        })
        const user = data.data
        if (!this.friendListCache) await this.getFriendList()
        return {
            id: userId,
            remark: user.remark === '' ? undefined : user.remark,
            nickname: user.nickname,
            longNick: user.long_nick === '' ? undefined : user.long_nick,
            qid: user.qid,
            country: user.country === '' ? undefined : user.country,
            province: user.province === '' ? undefined : user.province,
            city: user.city === '' ? undefined : user.city,
            regTime: user.reg_time,
            qqLevel: user.qqLevel,
            birthday_year: user.birthday_year === 0 ? undefined : user.birthday_year,
            birthday_month: user.birthday_month === 0 ? undefined : user.birthday_month,
            birthday_day: user.birthday_day === 0 ? undefined : user.birthday_day,
            age: user.age,
            sex: getGender(user.sex),
        }
    }
    /**
     * 获取群公告信息
     * @param group
     */
    @api
    async getGroupAnnouncement(group: GroupSession): Promise<GroupAnnouncementData[]> {
        // 获取群公告信息
        const data: NcObGetGroupNotices = await this.connector.send('_get_group_notice', { group_id: group.id })

        const out = data.data.map(item => ({
            content: item.message.text,
            img_id: item.message.image.at(0)?.id,
            time: item.publish_time,
            sender: item.sender_id,
        }))
        return out
    }
    @api
    async getGroupEssence(group: GroupSession): Promise<EssenceData[]> {
        const data: NcObGetEssenceMsgList = await this.connector.send('get_essence_msg_list', { group_id: group.id })

        const out: Promise<EssenceData>[] = []
        for (const item of data.data) {
            out.push((async () => ({
                sender: createSender(item.sender_id, item.sender_nick),
                sender_time: item.operator_time,
                operator: createSender(item.operator_id, item.operator_nick),
                operator_time: item.operator_time,
                content: (await this.parseSeg(item.content)) as EssenceSeg[]
            }))())
        }

        return await Promise.all(out)
    }
    @api
    async getCustomFace(): Promise<string[] | undefined> {
        const data: NcObFetchCustomFace = await this.connector.send('fetch_custom_face', {count: 500})

        return data.data
    }
    //#endregion
    //#region == 消息相关 ======================
    // @api
    // override async sendMsg(msg: Msg): Promise<string> {
    //     if (!this.isCustomForward(msg)) return await super.sendMsg(msg)

    //     // 自定义合并转发
    //     const message = await this.customForwardSerializer(msg.message[0] as ForwardSeg)
    //     let data: ObSendMsg
    //     if (msg.session instanceof UserSession) {
    //         data = await this.connector.send('send_private_forward_msg', {
    //             user_id: msg.session.id,
    //             messages: message,
    //         })
    //     } else if (msg.session instanceof GroupSession) {
    //         data = await this.connector.send('send_group_forward_msg', {
    //             group_id: msg.session.id,
    //             messages: message,
    //         })
    //     } else {
    //         throw new Error('OneBot 不支持发送临时会话消息')
    //     }
    //     if (!data.data.message_id) throw new Error('发送消息失败，返回值无message_id')

    //     return data.data.message_id.toString()
    // }
    //#endregion

    @api
    async getHistoryMsg(session: Session, count: number, start?: Msg): Promise<MsgData[] | undefined> {
        let type: 'user' | 'group'

        if (session instanceof UserSession)
            type = 'user'
        else if (session instanceof GroupSession)
            type = 'group'
        else
            throw new Error('NapCat不支持临时会话')

        let data: NcObGetHistoryMsg

        if (type === 'user') {
            data = await this.connector.send('get_friend_msg_history', {
                user_id: session.id.toString(),
                count: count,
                message_id: start,
            })
        } else {
            data = await this.connector.send('get_group_msg_history', {
                group_id: session.id.toString(),
                count: count,
                message_id: start,
            })
        }

        const out: Promise<MsgData>[] = data.data.messages.map(msg => this.parseMsg(msg))

        return await Promise.all(out)
    }
    @api
    async sendGroupPoke(session: GroupSession, target: Member): Promise<true | undefined> {
        await this.connector.send('send_poke', {
            group_id: session.id,
            user_id: target.user_id,
        })
        return true
    }
    @api
    async sendPrivatePoke(session: UserSession): Promise<true | undefined> {
        await this.connector.send('send_poke', {
            user_id: session.id,
        })
        return true
    }
    @api
    async setResponse(msg: Msg, emojiId: string, add?: boolean): Promise<true | undefined> {
        await this.connector.send('set_msg_emoji_like', {
            message_id: msg.message_id,
            emoji_id: emojiId,
            set: add, // 默认为添加表情
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
        await this.connector.send('set_group_leave', { group_id: group.id })
        return true
    }
    //#endregion
    //#endregion

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
}
