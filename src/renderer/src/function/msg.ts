/*
 * @FileDescription: 消息处理模块
 * @Author: Stapxs
 * @Date:
 *      2022/11/1
 *      2022/12/7
 *      2024/9/2
 * @Version:
 *      1.0 - 初始版本
 *      2.0 - 重构为 ts 版本，修改 Vue3 相关变更
 *      3.0 - 优化更优雅的代码结构
 * @Description: 此模块用于拆分和保存/处理 bot 返回的各类信息，整个运行时数据也保存在这儿。
 */
import qed from '@renderer/assets/qed.txt?raw'

import app from '@renderer/main'
import Option from './option'
import pinyin from 'tiny-pinyin'

import Umami from '@stapxs/umami-logger-typescript'

import {
    buildMsgList,
    getMsgData,
    parseMsgList,
    getMsgRawTxt,
    updateLastestHistory,
    sendMsgAppendInfo,
    createMsg,
} from '@renderer/function/utils/msgUtil'
import {
    callBackend,
    delay,
    getInch,
    getViewTime,
    randomNum,
} from '@renderer/function/utils/systemUtil'
import {
    reloadUsers,
    reloadCookies,
    downloadFile,
    updateMenu,
    loadJsonMap,
    sendStatEvent,
} from '@renderer/function/utils/appUtil'
import { reactive, markRaw, defineAsyncComponent, nextTick } from 'vue'
import { PopInfo, PopType, Logger, LogType } from './base'
import { Connector, login } from './connect'
import {
    GroupFileElem,
    GroupFileFolderElem,
    GroupMemberInfoElem,
    UserFriendElem,
    UserGroupElem,
    RunTimeDataElem,
    BotMsgType,
} from './elements/information'
import { NotifyInfo } from './elements/system'
import { Notify } from './notify'
import { Msg, SelfMsg } from './model/msg'
import { BanLiftNotice, BanNotice, JoinNotice, LeaveNotice, PokeNotice, RevokeNotice } from './model/notice'

// eslint-disable-next-line
const msgPaths = import.meta.glob("@renderer/assets/pathMap/*.yaml", { eager: true})
// 取出包含 Lagrange.OneBot.yaml 的那条
const msgPathAt = Object.keys(msgPaths).find((item) => {
    return item.indexOf('Lagrange.OneBot.yaml') > 0
})
let msgPath = {} as { [key: string]: any }
if(msgPathAt != undefined) {
    msgPath = (msgPaths[msgPathAt] as any).default
}
// 其他 tag
let listLoadTimes = 0
const logger = new Logger()
let firstHeartbeatTime = -1
let heartbeatTime = -1

export function dispatch(raw: string | { [k: string]: any }, echo?: string) {
    let msg: any;

    // TODO 分发事件适配
    // TODO 事件模型重构
    logger.add(LogType.WS, 'GET：', raw)

    // 1) 如有需要先 parse
    if (typeof raw === 'string') {
        try {
            msg = JSON.parse(raw)
        } catch {
            if (!raw.includes('"meta_event_type":"heartbeat"')) {
                logger.add(LogType.WS, 'GET：' + raw)
            }
            return
        }
    } else {
        msg = raw
    }

    // 2) 決定 name/key
    const name = echo ? echo.split('_')[0] : msg.post_type === 'notice' ? msg.sub_type ?? msg.notice_type : msg.post_type

    // 3) 安全調用 handler
    try {
        const fn = handlers[name]
        if (!fn) throw new Error(`No handler for "${name}"`)
        const metaArgs = echo ? echo.split('_') : undefined
        fn(msg, metaArgs)
    } catch (e) {
        logger.error(e as Error, `跳转事件处理错误 - ${name}:\n${JSON.stringify(msg)}`)
    }
}

// ==============================================================
const noticeFunctions = {
    /**
     * 心跳包
     */
    meta_event: (_: string, msg: { [key: string]: any }) => {
        if (firstHeartbeatTime == -1) {
            firstHeartbeatTime = 0
            runtimeData.watch.heartbeatTime = 0
            return
        }
        if (firstHeartbeatTime == 0) {
            firstHeartbeatTime = msg.time
            runtimeData.watch.lastHeartbeatTime = msg.time
            return
        }
        if (firstHeartbeatTime != -1 && heartbeatTime == -1) {
            // 计算心跳时间
            heartbeatTime = msg.time - firstHeartbeatTime
        }
        // 记录心跳状态
        if (heartbeatTime != -1) {
            runtimeData.watch.heartbeatTime = heartbeatTime
            runtimeData.watch.oldHeartbeatTime =
                runtimeData.watch.lastHeartbeatTime
            runtimeData.watch.lastHeartbeatTime = msg.time
        }
    },

    /**
     * 新消息
     */
    message_sent: newMsg,
    message: newMsg,

    /**
     * 请求
     */
    request: (_: string, msg: { [key: string]: any }) => {
        if (runtimeData.systemNoticesList) {
            runtimeData.systemNoticesList.push(msg)
        } else {
            runtimeData.systemNoticesList = [msg]
        }
    },

    /**
     * 好友变动
     */
    friend: (_: string, msg: { [key: string]: any }) => {
        // 重新加载联系人列表
        reloadUsers()
        switch (msg.sub_type) {
            case 'increase': {
                // 添加系统通知
                new PopInfo().add(
                    PopType.INFO,
                    app.config.globalProperties.$t('添加好友 {name} 成功！', {
                        name: msg.nickname,
                    }),
                )
                break
            }
            case 'decrease': {
                // 输出日志（显示为红色字体）
                // eslint-disable-next-line no-console
                console.log(
                    '%c消失了一个好友：' +
                        msg.nickname +
                        '（' +
                        msg.user_id +
                        '）',
                    'color:red;',
                )
                break
            }
        }
    },

    /**
     * 消息撤回
     */
    group_recall: revokeMsg,
    friend_recall: revokeMsg,
    recall: revokeMsg,

    /**
     * 表情回应
     */
    group_msg_emoji_like: (_: string, msg: { [key: string]: any }) => {
        const msgId = msg.message_id
        const emojiList = msg.likes
        // 寻找消息
        runtimeData.messageList.forEach((item, index) => {
            if (item.message_id === msgId) {
                runtimeData.messageList[index].emoji_like = emojiList
            }
        })
    },

    /**
     * 群禁言
     */
    ban: (_: string, msg: { [key: string]: any }) => {
        const notice = new BanNotice(msg as any)
        if (!notice.session) {
            throw new Error('群禁言通知解析失败')
        }

        const groupId = notice.session.id

        // 如果是自己，更新禁言时间
        if (notice.tome && groupId == runtimeData.chatInfo.show.id) {
            runtimeData.chatInfo.info.me_info.shut_up_timestamp =
                new Date().getTime() + notice.duration * 1000
        }

        // 只有在当前群才会显示
        if (groupId == runtimeData.chatInfo.show.id)
            runtimeData.messageList.push(notice)
    },
    lift_ban: (_: string, msg: { [key: string]: any }) => {
        const notice = new BanLiftNotice(msg as any)

        if (!notice.session) {
            throw new Error('群禁言通知解析失败')
        }
        const groupId = notice.session.id

        // 如果是自己，更新禁言时间
        if (notice.tome && groupId == runtimeData.chatInfo.show.id) {
            runtimeData.chatInfo.info.me_info.shut_up_timestamp = 0
        }

        // 只有在当前群才会显示
        if (groupId == runtimeData.chatInfo.show.id)
            runtimeData.messageList.push(notice)
    },

    /**
     * 戳一戳
     */
    poke: (_: string, msg: { [key: string]: any }) => {
        const notice = new PokeNotice(msg as any)
        if (! notice.session)  throw new Error('戳一戳通知解析失败')
        // 只有在当前群才会显示
        if (notice.session?.id == runtimeData.chatInfo.show.id)
            runtimeData.messageList.push(notice)
    },

    approve: joinGroup,
    invite: joinGroup,

    leave: leaveGroup,
    kick: leaveGroup,
    kick_me: leaveGroup,

    input_status: (_: string, msg: { [key: string]: any }) => {
        const { $t } = app.config.globalProperties
        const sender = msg.user_id
        if(runtimeData.chatInfo.show.id == sender) {
            runtimeData.chatInfo.show.appendInfo = $t('对方正在输入……')
            setTimeout(() => {
                runtimeData.chatInfo.show.appendInfo = undefined
            }, 10000)
        }
    },
} as { [key: string]: (name: string, msg: { [key: string]: any }) => void }

const msgFunctions = {
    /**
     * 修改群成员信息回调
     */
    updateGroupMemberInfo: () => {
        const { $t } = app.config.globalProperties
        const popInfo = {
            title: $t('操作'),
            html: `<span>${$t('正在确认操作……')}</span>`
        }
        runtimeData.popBoxList.push(popInfo)
        // 稍微等一下再刷新成员列表
        delay(1000).then(() => {
            Connector.send(
                'get_group_member_list',
                { group_id: runtimeData.chatInfo.show.id, no_cache: true },
                'getGroupMemberList',
            )
            return delay(1000)
        }).then(() => {
            Connector.send(
                'get_group_member_list',
                { group_id: runtimeData.chatInfo.show.id, no_cache: true },
                'getGroupMemberList',
            )
            runtimeData.popBoxList.shift()
        })
    },

    /**
     * 保存 Bot 信息
     */
    getVersionInfo: (_: string, msg: { [key: string]: any }) => {
        const data = getMsgData('version_info', msg, msgPath.version_info)[0]

        if (data) {
            // 如果 runtime 存在（即不是第一次连接），且 app_name 不同，重置 runtime
            resetRimtime(
                runtimeData.botInfo.app_name != data.app_name && !login.status,
            )

            runtimeData.botInfo = data
            if (Option.get('open_ga_bot') !== false) {
                if (data.app_name !== undefined) {
                    sendStatEvent('connect', { method: data.app_name })
                } else {
                    sendStatEvent('connect', { method: '（未知）' })
                }
            }
            if (!login.status) {
                // 尝试动态载入对应的 pathMap
                if (data.app_name !== undefined) {
                    const getMap = loadJsonMap(data.app_name)
                    if (getMap != null) msgPath = getMap
                }
                // 继续获取后续内容
                Connector.send('get_login_info', {}, 'getLoginInfo')
            }
        }
    },

    /**
     * 保存账号信息
     */
    getLoginInfo: (_: string, msg: { [key: string]: any }) => {
        const msgBody = getMsgData('login_info', msg, msgPath.login_info)
        if (msgBody) {
            const data = msgBody[0]

            // 如果 runtime 存在（即不是第一次连接），且 uin 不同，重置 runtime
            resetRimtime(runtimeData.loginInfo.uin != data.uin && !login.status)

            // 完成登陆初始化
            runtimeData.loginInfo = data
            login.status = true
            // 显示账户菜单
            updateMenu({
                parent: 'account',
                id: 'userName',
                action: 'label',
                value: data.nickname,
            })
            const title = `${data.nickname}（${data.uin}）`
            if(runtimeData.tags.platform == 'web') {
                document.title = title + '- Stapxs QQ Lite'
            } else {
                document.title = title
                callBackend(undefined, 'win:setTitle', false, title)
            }
            // 结束登录页面的水波动画
            clearInterval(runtimeData.tags.loginWaveTimer)
            // 跳转标签卡
            const barMsg = document.getElementById('bar-msg')
            if (barMsg != null) barMsg.click()
            // 加载列表消息
            reloadUsers()
            reloadCookies()
        }
    },

    /**
     * 补充登录信息
     * @deprecated 功能在后期更新中未被重构检查，可能存在问题
     */
    getMoreLoginInfo: (_: string, msg: { [key: string]: any }) => {
        runtimeData.loginInfo.info = msg.data.data.result.buddy.info_list[0]
    },

    /**
     * 保存好友列表
     */
    getGroupList: (_: string, msg: { [key: string]: any }) => {
        saveUser(msg, 'group')
    },
    getFriendList: (_: string, msg: { [key: string]: any }) => {
        saveUser(msg, 'friend')
    },

    /**
     * 保存分组信息（独立保存）
     */
    getFriendCategory: (_: string, msg: { [key: string]: any }) => {
        const list = getMsgData(
            'friend_category',
            msg,
            msgPath.friend_category,
        ) as {
            class_id: number
            class_name: string
            sort_id: number
            users: number[]
        }[]
        if (list != undefined) {
            saveClassInfo(list)
        }
        // 刷新用户列表的分类信息
        list.forEach((item) => {
            item.users.forEach((id) => {
                runtimeData.userList.forEach((user) => {
                    if (user.user_id == id && user.class_id == undefined) {
                        user.class_id = item.class_id
                        user.class_name = item.class_name
                    }
                })
            })
        })
    },

    /**
     * 获取群成员信息
     */
    getUserInfoInGroup: (_: string, msg: { [key: string]: any }) => {
        const data = getMsgData(
            'group_member_info',
            msg,
            msgPath.group_member_info,
        )
        if (data && data[0]) {
            const info = data[0]
            // 单独判断下 shut_up_timestamp
            if (info.shut_up_timestamp * 1000 < Date.now()) {
                info.shut_up_timestamp = 0
            }
            runtimeData.chatInfo.info.me_info = info
        }
    },

    /**
     * 保存群成员列表
     */
    getGroupMemberList: (_: string, msg: { [key: string]: any }) => {
        const data = msg.data as GroupMemberInfoElem[]
        data.forEach((item: any) => {
            let name: string
            if (item.card != undefined && item.card != '') {
                name = item.card
            }else if (item.nickname != undefined && item.nickname != '') {
                name = item.nickname
            }else{
                name = item.user_id.toString()
            }

            // 获取拼音首字母
            const first = name.substring(0, 1)
            item.py_start = pinyin
                .convertToPinyin(first, '')
                .toUpperCase()
                .substring(0, 1)
        })
        // 筛选列表
        const adminList = data.filter((item: GroupMemberInfoElem) => {
            return item.role === 'admin'
        })
        adminList.sort((a, b) => {
            if (a.py_start && b.py_start) {
                return a.py_start.charCodeAt(0) - b.py_start.charCodeAt(0)
            }
            return 0
        })
        const createrList = data.filter((item: GroupMemberInfoElem) => {
            return item.role === 'owner'
        })
        const memberList = data.filter((item: GroupMemberInfoElem) => {
            return item.role !== 'admin' && item.role !== 'owner'
        })
        memberList.sort((a, b) => {
            if (a.py_start && b.py_start) {
                return a.py_start.charCodeAt(0) - b.py_start.charCodeAt(0)
            }
            return 0
            // return a.user_id - b.user_id
        })
        // 拼接列表
        const back = createrList.concat(adminList.concat(memberList))
        runtimeData.chatInfo.info.group_members = back
    },

    /**
     * 保存聊天记录
     */
    getChatHistoryFist: (_: string, msg: { [key: string]: any }) => {
        saveMsg(msg, 'top')
    },
    /**
     * @deprecated
     * @param _ 
     * @param msg 
     */
    getChatHistory: (_: string, msg: { [key: string]: any }) => {

    },

    getChatHistoryOnMsg: (
        _: string,
        msg: { [key: string]: any },
        echoList: string[],
    ) => {
        const id = Number(echoList[1])
        if (id) {
                try {
                // 对消息进行一次格式化处理
                let list = getMsgData('message_list', msg, msgPath.message_list)
                if (list != undefined) {
                    list = parseMsgList(
                        list,
                        msgPath.message_list.type,
                        msgPath.message_value,
                    )
                    const msg: Msg = list[0]
                    const raw = msg.preMsg
                    const {time} = list[0]
                    // 更新消息列表
                    const onmsg = runtimeData.baseOnMsgList.get(Number(id))
                    if(onmsg) {
                        onmsg.raw_msg = raw
                        onmsg.time = getViewTime(Number(time))
                        runtimeData.baseOnMsgList.set(id, onmsg)
                    }
                }
            } catch (e) {
                // do nothing
            }
        }
    },

    /**
     * 获取收藏表情
     */
    getRoamingStamp: (
        _: string,
        msg: { [key: string]: any },
        echoList: string[],
    ) => {
        const getCount = Number(echoList[1])
        const data = msg.data
        if (msgPath.roaming_stamp.reverse) {
            data.reverse()
        }
        if (runtimeData.stickerCache == undefined) {
            runtimeData.stickerCache = data
        } else if (runtimeData.jsonMap.roaming_stamp.pagerType == 'full') {
            // 全量分页模式下不追加
            if (getCount > runtimeData.stickerCache.length + 48) {
                // 已经获取到所有内容了
                data.push('end')
            }
            runtimeData.stickerCache = data
        } else {
            runtimeData.stickerCache = runtimeData.stickerCache.concat(data)
        }
    },

    /**
     * 保存群补充信息
     * @deprecated 功能在后期更新中未被重构检查，可能存在问题
     */
    getMoreGroupInfo: (_: string, msg: { [key: string]: any }) => {
        runtimeData.chatInfo.info.group_info = msg.data.data
    },

    /**
     * 保存好友补充信息
     * @deprecated 功能在后期更新中未被重构检查，可能存在问题
     */
    getMoreUserInfo: (_: string, msg: { [key: string]: any }) => {
        // runtimeData.chatInfo.info.user_info =
        //     msg.data.data.result.buddy.info_list[0]
        const data = getMsgData('friend_info', msg, msgPath.friend_info)[0]
        if(data) {
            runtimeData.chatInfo.info.user_info = data
        }
    },

    /**
     * 获取群通知
     */
    getGroupNotices: (_: string, msg: { [key: string]: any }) => {
        const list = getMsgData('group_notices', msg, msgPath.group_notices)
        if (list != undefined) {
            runtimeData.chatInfo.info.group_notices = list
        }
    },

    /**
     * 获取群文件列表
     */
    getGroupFiles: (_: string, msg: { [key: string]: any }) => {
        const list = getMsgData('group_files', msg, msgPath.group_files) as (GroupFileElem & GroupFileFolderElem)[]
        // 排序；文件夹在前，文件在后
        const folderList = list.filter((item) => {
            return item.folder_id
        })
        const fileList = list.filter((item) => {
            return item.file_id
        })
        // 对它们各自排序，文件夹按照 create_time 降序，文件按照 upload_time 降序
        folderList.sort((a, b) => {
            return b.create_time - a.create_time
        })
        fileList.sort((a, b) => {
            return b.upload_time - a.upload_time
        })
        // 合并
        runtimeData.chatInfo.info.group_files = folderList.concat(fileList)
    },

    /**
     * 获取群文件文件夹文件
     */
    getGroupDirFiles: (_: string, msg: { [key: string]: any }, echoList: string[]) => {
        // TODO: 有分页

        // 默认使用主目录相同的结构，如果存在子目录结构的定义则使用子目录的结构
        let map = msgPath.group_files
        if(msgPath.group_folder_files.source) {
            map = msgPath.group_folder
        }
        const list = getMsgData('group_files', msg, map) as (GroupFileElem & GroupFileFolderElem)[]
        // 排序；文件夹在前，文件在后
        const folderList = list.filter((item) => {
            return item.folder_id
        })
        const fileList = list.filter((item) => {
            return item.file_id
        })
        // 对它们各自排序，文件夹按照 create_time 降序，文件按照 upload_time 降序
        folderList.sort((a, b) => {
            return b.create_time - a.create_time
        })
        fileList.sort((a, b) => {
            return b.upload_time - a.upload_time
        })
        // 寻找 item
        const folderId = echoList[1]
        const folder = runtimeData.chatInfo.info.group_files.find((item) => {
            return item.folder_id == folderId
        })
        if (folder) {
            folder.items = fileList
        }
    },

    /**
     * 下载文件（群文件）
     */
    downloadGroupFile: (_: string, msg: { [key: string]: any }, echoList: string[]) => {
        const data = getMsgData('get_file_url', msg, msgPath.file_download)[0]
        const url = data.file_url

        const fileId = echoList[1]
        const fileName = decodeURIComponent(atob(echoList[2]))

        const fileList = runtimeData.chatInfo.info.group_files as (GroupFileElem & GroupFileFolderElem)[]

        let listItem = undefined as GroupFileElem | undefined
        // 寻找文件列表位置
        fileList.forEach((item, index) => {
            if (item.file_id == fileId) {
                listItem = fileList[index]
            }
            if (item.items) {
                item.items.forEach((subItem, subIndex) => {
                    if (subItem.file_id == fileId && fileList[index]?.items) {
                        listItem = fileList[index].items[subIndex]
                    }
                })
            }
        })

        // 下载事件
        const onProcess = function (event: ProgressEvent): undefined {
            if (!event.lengthComputable) return
            const percent = Math.floor((event.loaded / event.total) * 100)
            if(listItem) {
                if(listItem.download_percent == undefined) {
                    listItem.download_percent = 0
                }
                listItem.download_percent = percent
            }
        }

        // 下载文件
        downloadFile(url, fileName, onProcess, () => {
            if(listItem) {
                listItem.download_percent = undefined
            }
        })
    },

    /**
     * 保存精华消息
     */
    getJin: (_: string, msg: { [key: string]: any }) => {
        const jinList = getMsgData('group_essence', msg, msgPath.group_essence)
        const is_end = getMsgData(
            'is_end',
            msg,
            msgPath.group_essence.is_end,
        ) ?? [true]
        if (jinList && is_end) {
            if (runtimeData.chatInfo.info.jin_info.list.length == 0) {
                runtimeData.chatInfo.info.jin_info.list = jinList
            } else {
                const now_page = runtimeData.chatInfo.info.jin_info.pages ?? 0

                runtimeData.chatInfo.info.jin_info.list =
                    runtimeData.chatInfo.info.jin_info.list.concat(jinList)
                runtimeData.chatInfo.info.jin_info.pages = now_page + 1
            }
            runtimeData.chatInfo.info.jin_info.is_end = is_end[0]
        }
    },

    /**
     * 获取群成员更多信息
     */
    getGroupMemberInfo: (_: string, msg: { [key: string]: any }) => {
        if (msg.data != undefined) {
            const data = msg.data
            const pointInfo = msg.echo.split('_')
            data.x = pointInfo[1]
            data.y = pointInfo[2]
            runtimeData.chatInfo.info.now_member_info = data
        }
    },

    /**
     * 设置消息已读
     */
    readMemberMessage: (_: string, msg: { [key: string]: any }) => {
        const data = msg.data[0]
        const msgName = runtimeData.jsonMap.set_message_read.private_name
        let private_name = runtimeData.jsonMap.set_message_read.private_name
        if (!private_name) private_name = msgName
        if (data.group_id != undefined) {
            Connector.send(
                msgName,
                {
                    message_id: data.message_id,
                    group_id: data.group_id,
                },
                'setMessageRead',
            )
        } else {
            Connector.send(
                private_name,
                {
                    message_id: data.message_id,
                    user_id: data.self_id,
                },
                'setMessageRead',
            )
        }
        // 关闭所有通知
        new Notify().closeAll(data.group_id ?? data.self_id)
    },

    /**
     * 系统通知后处理
     */
    setFriendAdd: updateSysInfo,
    setGroupAdd: updateSysInfo,

    /**
     * 获取会话历史
     */
    getRecentContact: (_: string, data: any) => {
        const list = getMsgData('recent_contact', data, msgPath.recent_contact)
        if (list != undefined) {
            // user_id: /peerUin
            // time: /msgTime
            // chat_type: /chatType
            // 过滤掉 chatType 不是 1 和 2 的
            let back = list.filter((item) => {
                return item.chat_type == 1 || item.chat_type == 2
            })
            // 排除掉在置顶列表里的
            const topList = runtimeData.sysConfig.top_info as {
                [key: string]: number[]
            } | null
            if (topList != null) {
                const top = topList[runtimeData.loginInfo.uin]
                if (top != undefined) {
                    back = back.filter((item) => {
                        return top.indexOf(Number(item.user_id)) == -1
                    })
                }
            }
            // 去重
            back = back.filter((item, index, arr) => {
                return (
                    arr.findIndex((item2) => {
                        return item2.user_id == item.user_id
                    }) == index
                )
            })
            back.forEach((item) => {
                // 去消息列表里找一下它
                const user = runtimeData.userList.find((user) => {
                    return user.user_id == item.user_id || user.group_id == item.user_id
                })
                if (user) {
                    runtimeData.baseOnMsgList.set(Number(item.user_id), user)
                    updateLastestHistory(user)
                }
            })
        }
    },

    /**
     * 表情回应后处理
     */
    SendRespondBack: (
        _: string,
        __: { [key: string]: any },
        echoList: string[],
    ) => {
        const msgId = echoList[1]
        const id = Number(echoList[2])
        // 从消息列表中找到这条消息
        runtimeData.messageList.forEach((item, index) => {
            if (item.message_id === msgId) {
                if (runtimeData.messageList[index].emoji_like) {
                    // 寻找有没有 emoji_id 相同的
                    let hasAdd = false
                    runtimeData.messageList[index].emoji_like.forEach(
                        (item: { emoji_id: number; count: number }) => {
                            if (item.emoji_id == id) {
                                item.count++
                                hasAdd = true
                            }
                        },
                    )
                    if (!hasAdd) {
                        runtimeData.messageList[index].emoji_like.push({
                            emoji_id: id,
                            count: 1,
                        })
                    }
                } else {
                    runtimeData.messageList[index].emoji_like = [
                        { emoji_id: id, count: 1 },
                    ]
                }
            }
        })
    },

    /**
     * 获取 cookie
     * @deprecated 暂时没用到他
     */
    getCookies: (
        _: string,
        msg: { [key: string]: any },
        echoList: string[],
    ) => {
        // 拆分 cookie
        const cookieObject = {} as { [key: string]: string }
        msg.data.cookies.split('; ').forEach((item: string) => {
            const key = item.split('=')[0]
            const value = item.split('=')[1]
            cookieObject[key] = value
        })
        // 计算 bkn
        const skey = cookieObject['skey'] || ''
        let hash = 5381

        for (let i = 0; i < skey.length; i++) {
            hash += (hash << 5) + skey.charCodeAt(i)
        }
        // 保存 cookie 和 bkn
        const domain = echoList[1]
        if (!runtimeData.loginInfo.webapi) runtimeData.loginInfo.webapi = {}
        if (!runtimeData.loginInfo.webapi[domain])
            runtimeData.loginInfo.webapi[domain] = {}
        runtimeData.loginInfo.webapi[domain].cookie = cookieObject
        runtimeData.loginInfo.webapi[domain].bkn = (
            hash & 0x7fffffff
        ).toString()
    },

    /**
     * 设置消息已读回调
     */
    setMessageRead() {
        // do nothing
    },
} as {
    [key: string]: (
        name: string,
        msg: { [key: string]: any },
        echoList?: string[],
    ) => void
}

const handlers: Record<string, (payload: any, metaArgs?: string[]) => void> = {
  ...(Object.entries(msgFunctions).reduce((acc, [key, fn]) => ({
    ...acc,
    [key]: (payload: any, metaArgs?: string[]) => fn(key, payload, metaArgs)
  }), {})),
  ...(Object.entries(noticeFunctions).reduce((acc, [key, fn]) => ({
    ...acc,
    [key]: (payload: any) => fn(key, payload)
  }), {}))
};

// ==========================================

function saveUser(msg: { [key: string]: any }, type: string) {
    listLoadTimes++
    let list: any[] | undefined
    if (msgPath.user_list)
        list = getMsgData('user_list', msg, msgPath.user_list)
    else {
        switch (type) {
            case 'friend':
                list = getMsgData('friend_list', msg, msgPath.friend_list)
                if (list)
                    // 根据 user_id 去重
                    list = list.filter((item, index, arr) => {
                        return (
                            arr.findIndex((item2) => {
                                return item2.user_id == item.user_id
                            }) == index
                        )
                    })
                break
            case 'group':
                list = getMsgData('group_list', msg, msgPath.group_list)
                if (list)
                    // 根据 group_id 去重
                    list = list.filter((item, index, arr) => {
                        return (
                            arr.findIndex((item2) => {
                                return item2.group_id == item.group_id
                            }) == index
                        )
                    })
                break
        }
    }
    if (list != undefined) {
        const groupNames = {} as { [key: number]: string }
        list.forEach((item, index) => {
            if(item.group_name  == null || item.group_name == undefined) {
                item.group_name = ''
            }
            // 为所有项目追加拼音名称
            let py_name = ''
            if (item.group_id) {
                py_name = pinyin.convertToPinyin(item.group_name)
            } else {
                py_name =
                    pinyin.convertToPinyin(item.nickname) +
                    ',' +
                    pinyin.convertToPinyin(item.remark)
            }
            if (list && list[index]) {
                list[index].py_name = py_name.toLowerCase()
                list[index].py_start = py_name.substring(0, 1).toUpperCase()
            }
            // 构建分类
            if (type == 'friend') {
                if (item.class_id != undefined && item.class_name) {
                    if (typeof item.class_name == 'string') {
                        groupNames[item.class_id] = item.class_name
                    } else {
                        groupNames[item.class_id] = item.class_name[0]
                    }
                }
                delete item.group_name
            } else {
                delete item.class_id
                delete item.class_name
            }
        })
        if (Object.keys(groupNames).length > 0) {
            // 把 groupNames 处理为 { class_id: number, class_name: string }[]
            const groupNamesList = [] as {
                class_id: number
                class_name: string
            }[]
            for (const key in groupNames) {
                groupNamesList.push({
                    class_id: Number(key),
                    class_name: groupNames[key],
                })
            }
            saveClassInfo(groupNamesList)
        }
        // 按照首字母排序
        list.sort((a, b) => {
            if (a.py_start && b.py_start) {
                return a.py_start.charCodeAt(0) - b.py_start.charCodeAt(0)
            }
            return 0
        })
        runtimeData.userList = runtimeData.userList.concat(list)
        // 刷新置顶列表
        const info = runtimeData.sysConfig.top_info as {
            [key: string]: number[]
        } | null
        if (info != null) {
            const topList = info[runtimeData.loginInfo.uin]
            if (topList !== undefined) {
                list.forEach((item) => {
                    const id = Number(
                        item.user_id ? item.user_id : item.group_id,
                    )
                    if (topList.indexOf(id) >= 0) {
                        item.always_top = true
                        // 判断它在不在消息列表里
                        if (runtimeData.baseOnMsgList.get(id) == undefined) {
                            runtimeData.baseOnMsgList.set(id, item)
                            // 给它获取一下最新的一条消息
                            // 给置顶的用户刷新最新一条的消息用于显示
                            runtimeData.userList.forEach((item) => {
                                if (item.always_top) {
                                    updateLastestHistory(item)
                                }
                            })
                        }
                    }
                })
            }
        }
        // 更新菜单
        updateMenu({
            parent: 'account',
            id: 'userList',
            action: 'label',
            value: app.config.globalProperties.$t('用户列表（{count}）', {
                count: runtimeData.userList.length,
            }),
        })
    }
    // 如果获取次数大于 0 并且是双数，刷新一下历史会话
    if (listLoadTimes > 0 && listLoadTimes % 2 == 0) {
        // 获取最近的会话
        if (runtimeData.jsonMap.recent_contact)
            Connector.send(
                runtimeData.jsonMap.recent_contact.name,
                {},
                'getRecentContact',
            )
    }
    // 如果是分离式的好友列表，继续获取分类信息
    if (type == 'friend' && runtimeData.jsonMap.friend_category) {
        Connector.send(
            runtimeData.jsonMap.friend_category.name,
            {},
            'getFriendCategory',
        )
    }
}

function saveClassInfo(
    list: { class_id: number; class_name: string; sort_id?: number }[],
) {
    if (list[0].sort_id != undefined) {
        // 如果有 sort_id，按 sort_id 排序，从小到大
        list.sort((a, b) => {
            if (a.sort_id && b.sort_id) return a.sort_id - b.sort_id
            else return 0
        })
    } else {
        // 按 class_id 排序
        list.sort((a, b) => {
            return a.class_id - b.class_id
        })
    }

    runtimeData.tags.classes = list
}

function saveMsg(msg: any, append = undefined as undefined | string) {
    let list = getMsgData('message_list', msg, msgPath.message_list)
    list = getMessageList(list)
    if (list != undefined) {
        // 检查消息是否是当前聊天的消息
        const firstMsg = list[0]
        const infoList = getMsgData(
            'message_info',
            firstMsg,
            msgPath.message_info,
        )
        if (infoList != undefined) {
            const info = infoList[0]
            const id = info.group_id ?? info.private_id
            if (id != undefined && id != runtimeData.chatInfo.show.id) {
                return
            }
        }
        // 将消息中 message 字段为空数组的消息过滤掉
        list = list.filter((item: any) => {
            return item.message.length > 0
        })
        // 如果分页不是增量的，就不使用追加
        if (
            append == 'top' &&
            runtimeData.jsonMap.message_list?.pagerType == 'full'
        ) {
            append = undefined
        }
        // 追加处理
        if (append != undefined) {
            // 没有更旧的消息能加载了，禁用允许加载标志
            if (list.length < 1) {
                runtimeData.tags.canLoadHistory = false
                return
            }
            if (append == 'top') {
                // 判断 list 的最后一条消息是否和 runtimeData.messageList 的第一条消息 id 相同
                if (runtimeData.messageList.length > 0 && list.length > 0) {
                    if (
                        runtimeData.messageList[0].message_id ==
                        list[list.length - 1].message_id
                    ) {
                        list.pop() // 去掉重复的消息
                    }
                }
                runtimeData.messageList = list.concat(runtimeData.messageList)
            } else if (append == 'bottom') {
                runtimeData.messageList = runtimeData.messageList.concat(list)
            }
        } else {
            runtimeData.messageList = []
            runtimeData.messageList = list
        }
        // 消息后处理
        // PS: 部分消息类型可能需要获取附加内容，在此处进行处理
        runtimeData.messageList.forEach((item) => {
            sendMsgAppendInfo(item)
        })
        // 将消息列表的最后一条 raw_message 保存到用户列表中
        const lastMsg =
            runtimeData.messageList[runtimeData.messageList.length - 1]
        if (lastMsg) {
            const user = runtimeData.userList.find((item) => {
                return (
                    item.group_id == runtimeData.chatInfo.show.id ||
                    item.user_id == runtimeData.chatInfo.show.id
                )
            })
            if (user) {
                if (runtimeData.chatInfo.show.type == 'group') {
                    user.raw_msg =
                        lastMsg.sender.nickname + ': ' + getMsgRawTxt(lastMsg)
                } else {
                    user.raw_msg = getMsgRawTxt(lastMsg)
                }
                user.time = getViewTime(Number(lastMsg.time))
            }
        }
    }
}

// TODO list不接受undefined,使用处自行处理获取列表失败
export function getMessageList(list: any[] | undefined): Msg[] {
    list = parseMsgList(
        list,
        msgPath.message_list.type,
        msgPath.message_value,
    )
    // 倒序处理
    if (msgPath.message_list.order === 'reverse') {
        list.reverse()
    }
    // 检查必要字段
    list.forEach((item: any) => {
        if (!item.post_type) {
            item.post_type = 'message'
        }
    })
    return list
}

function revokeMsg(_: string, msg: any) {
    const notice = new RevokeNotice(msg)
    if (!notice.session || !notice.message_id) throw new Error('撤回通知缺少必要信息')
    const chatId = notice.session.id
    const msgId = notice.message_id
    // 寻找消息
    let matchMsg: undefined | Msg
    let matchMsgId: undefined | number
    for (const [ id, msg ] of runtimeData.messageList.entries()) {
        if (msg.message_id === String(msgId)) {
            matchMsg = msg as Msg
            matchMsgId = id
            break
        }
    }
    if (!matchMsg || !matchMsgId) {
        logger.error(null, '没有找到这条被撤回的消息 ……')
        return
    }
    matchMsg.revoke = true

    // 只有在当前群才会显示
    if (notice.session.id === runtimeData.chatInfo.show.id)
        runtimeData.messageList.push(notice)

    // 撤回通知
    new Notify().closeAll(String(chatId))

    // 别人撤销的消息不删除
    if (runtimeData.sysConfig.show_revoke_msg &&
        notice.operator_id !== runtimeData.loginInfo.uin) return
    runtimeData.messageList.splice(matchMsgId, 1)
}

let qed_try_times = 0
async function newMsg(_: string, data: any) {
    const { $t } = app.config.globalProperties
    // 没有对频道的支持计划
    if (data.detail_type == 'guild') {
        return
    }

    // 消息基础信息 ============================================
    const msg = createMsg(data)

    if (!msg) {
        logger.error(data, '消息解析失败')
        return
    }

    if (!msg.session) {
        logger.error(null, '消息没有 session 信息，无法处理消息')
        return
    }
    if (!msg.message_id) {
        logger.error(null, '消息没有 message_id 信息，无法处理消息')
        return
    }
    const id = msg.session.id
    const loginId = runtimeData.loginInfo.uin
    const showId = runtimeData.chatInfo.show.id
    const sender = msg.sender.user_id
    // 在好友列表里找一下他
    const senderInfo = runtimeData.userList.find((item) => {
        return item.user_id == msg.sender.user_id
    })
    const isImportant = senderInfo?.class_id == 9999

    // 自己发送消息拦截 ============================================
    if (sender === loginId) {
        if (await SelfMsg.isSendMsg(msg)) return
    }

    // 显示消息 ============================================
    if (id === showId) {
        // 如果有正在输入的提示，清除它
        runtimeData.chatInfo.show.appendInfo = undefined
        // 保存消息
        saveMsg(buildMsgList([data]), 'bottom')
        // 抽个签 (什么鬼？业务逻辑而还没抽签多)
        const num = randomNum(0, 10000)
        if (num >= 4500 && num <= 5500) {
            logger.add(
                LogType.INFO,
                num.toString() + '，这只是个神秘的数字...',
                undefined,
                true,
            )
        }
        if (num === 495) {  // QED怎么能和芙兰无关？(◣_◢)吃我一发 QED [495年的波纹] 
            const popInfo = {
                html: qed,
                button: [
                    {
                        text: '确定(O)',
                        fun: () => {
                            runtimeData.popBoxList.shift()
                        },
                    },
                ],
            }
            runtimeData.popBoxList.push(popInfo)
            Umami.trackEvent('show_qed', { times: qed_try_times })
        }
        qed_try_times++
    }

    // 通知判定预处理 ============================================
    // 检查群组有没有开启通知
    let isGroupNotice = false
    if (msg.session.type === 'group') {
        const noticeInfo = Option.get('notice_group') ?? {}
        const list = noticeInfo[runtimeData.loginInfo.uin]
        if (list) {
            isGroupNotice = list.indexOf(id) >= 0
        }
    }

    // 群收纳箱 ============================================
    if(runtimeData.sysConfig.bubble_sort_user) {
        // 刷新群收纳箱列表
        let getGroup = runtimeData.baseOnMsgList.get(Number(id))
        // ( 如果 是群组消息 && 群组没有开启通知 && 不是置顶的 ) 这种情况下将群消息添加到群收纳盒中
        if (!getGroup) {
            const getList = runtimeData.userList.filter((item) => {
                return item.group_id === id
            })
            getGroup = getList[0]
        }
        if (getGroup) {
            getGroup.message_id = msg.message_id
            getGroup.raw_msg = msg.preMsg
            getGroup.raw_msg_base = getMsgRawTxt(msg)
            getGroup.time = getViewTime(Number(msg.time))
            runtimeData.baseOnMsgList.set(Number(id), getGroup)
        }
    }

    const get = [...runtimeData.baseOnMsgList.keys()].filter((item) => {
        return (
            Number(id) === item
        )
    })

    // 通知判定 ============================================
    // eslint-disable-next-line max-len
    // (发送者不是自己 && (在特别关心列表里 || 发送者不是群组 || 开启了群组通知模式 || 群组 AT || 群组 AT 全体 || 群组开启了通知)) 这些情况需要进行新消息处理
    if (
        sender != loginId &&
        sender != 0 &&
        (isImportant ||
            msg.session.type !== 'group' ||
            runtimeData.sysConfig.group_notice_type != 'none' ||
            msg.atme ||
            msg.atall ||
            isGroupNotice)
    ) {
        logger.add(LogType.DEBUG, '通知判定：', {
            notShow: id !== showId,
            notFocus: !document.hasFocus(),
            hidden: document.hidden,
            isImportant: isImportant
        })
        // (发送者没有被打开 || 窗口没有焦点 || 窗口被最小化 || 在特别关心列表里) 这些情况需要进行消息通知
        if (
            runtimeData.sysConfig.group_notice_type == 'all' ||
            id !== showId ||
            !document.hasFocus() ||
            document.hidden ||
            isImportant
        ) {
            // 准备消息内容
            let raw = getMsgRawTxt(msg)
            raw = raw === '' ? msg.raw_message : raw
            logger.add(LogType.INFO, '新消息通知：' + raw, undefined, true)
            let groupName: string|undefined
            // 检查消息内是否有群名，去列表里寻找
            for (const item of runtimeData.userList) {
                if (item.group_id == msg.session.id) {
                    groupName = item.group_name
                    break
                }
            }
            const msgInfo = {
                base_type: 'msg',

                title: groupName ?? msg.sender.name,
                body:
                    msg.session.type === 'group'? msg.sender.name + ':' + raw: raw,
                tag: `${id}/${msg.message_id}`,
                icon:
                    msg.session.type === 'group'? `https://p.qlogo.cn/gh/${id}/${id}/0`: `https://q1.qlogo.cn/g?b=qq&s=0&nk=${id}`,
                image: undefined as any,
                type: msg.session.type,
                is_important: isImportant,
            } as NotifyInfo
            if (msg.imgList.length > 0) {
                msgInfo.image = msg.imgList[0]
            }
            // 发送消息
            if (Option.get('close_notice') !== true) {
                new Notify().notify(msgInfo)
            }
        }
        // 如果发送者不在消息列表里，将它添加到消息列表里
        if (get) {
            // 如果消息子类是 group，那么是临时消息，需要进行特殊处理
            if (msg.sub_type === 'group') {
                // 手动创建一个用户信息，因为临时消息的用户不在用户列表里
                const user = {
                    user_id: sender,
                    // 因为临时消息没有返回昵称
                    nickname: app.config.globalProperties.$t('临时会话'),
                    remark: String(msg.sender.user_id),
                    new_msg: true,
                    message_id: msg.message_id,
                    raw_msg: msg.raw_message,
                    time: msg.time,
                    group_id: msg.session.group_id,
                    group_name: '',
                } as UserFriendElem & UserGroupElem
                runtimeData.baseOnMsgList.set(Number(sender), user)
            } else {
                const getList = runtimeData.userList.filter((item) => {
                    return item.user_id === id || item.group_id === id
                })

                const showUser = getList[0]
                const formatted = formatMessageData(msg)
                Object.assign(showUser, formatted)
                runtimeData.baseOnMsgList.set(Number(id), showUser)
            }
        }
        if(id !== showId) {
            const user = runtimeData.baseOnMsgList.get(id)
            if (user) {
                user.new_msg = true
                runtimeData.baseOnMsgList.set(id, user)
            }
        }
    }



    // 消息列表 ============================================
    // 刷新消息列表
    if(!runtimeData.sysConfig.bubble_sort_user && msg.session.type === 'group') {
        const getList = runtimeData.userList.filter((item) => {
            return item.group_id === id
        })
        if (getList.length === 1) {
            const showGroup = getList[0]
            const formatted = formatMessageData(msg)
            Object.assign(showGroup, formatted)
            runtimeData.baseOnMsgList.set(Number(id), showGroup)
        }
    }
    // 刷新消息
    if(get) {
        const item = runtimeData.baseOnMsgList.get(Number(id))
        if(item) {
            item.message_id = msg.message_id
            item.raw_msg = msg.preMsg
            if(id != showId) {
                if(data.atme) { item.highlight = $t('[有人@你]') }
                if(data.atall) { item.highlight = $t('[@全体]') }
                if(isImportant) { item.highlight = $t('[特別关心]') }
            }
            runtimeData.baseOnMsgList.set(Number(id), item)
        }
    }
}

/**
 * 刷新系统通知和其他内容，给系统通知响应用的
 */
function updateSysInfo(
    _: string,
    __: { [key: string]: any },
    echoList: string[],
) {
    const flag = echoList[1]
    // 从系统通知列表里删除这条消息
    if (flag !== undefined) {
        const index = runtimeData.systemNoticesList?.findIndex((item: any) => {
            return item.flag == flag
        })
        if (index !== -1) {
            runtimeData.systemNoticesList?.splice(index, 1)
        }
    }
}

async function joinGroup(_: string, msg: { [key: string]: any }){
    const notice = new JoinNotice(msg as any)

    if (!notice.session) throw new Error('入群通知解析失败')

    const groupId = notice.session.id

    // 如果的当前打开的会话
    if (groupId == runtimeData.chatInfo.show.id) {
        // 刷新群成员列表
        const data = await Connector.callApi('get_group_member_list', { group_id: groupId, no_cache: true })
        msgFunctions['getGroupMemberList']('', { data: data })

        // 插入消息
        runtimeData.messageList.push(notice)
    }
}

async function leaveGroup(_: string, msg: { [key: string]: any }) {
    const notice = new LeaveNotice(msg as any)

    if (!notice.session) throw new Error('退群通知解析失败')

    const groupId = notice.session.id

    // 如果的当前打开的会话
    if (groupId == runtimeData.chatInfo.show.id) {
        // 刷新群成员列表
        const data = await Connector.callApi('get_group_member_list', { group_id: groupId, no_cache: true })
        msgFunctions['getGroupMemberList']('', { data: data })

        // 插入消息
        runtimeData.messageList.push(notice)
    }
}

// ==============================================================

function formatMessageData(msg: Msg) {
    return {
      message_id: msg.message_id,
      raw_msg: msg.preMsg,
      time: getViewTime(Number(msg.time)),
      raw_msg_base: getMsgRawTxt(msg)
    }
}

const baseRuntime = {
    plantform: {} as any,
    tags: {
        firstLoad: false,
        canLoadHistory: true,
        openSideBar: true,
        viewer: { index: 0 },
        msgType: BotMsgType.Array,
        isElectron: false,
        isCapacitor: false,
        clientType: 'web' as const,
        platform: undefined,
        release: undefined,
        connectSsl: false,
        classes: [],
        darkMode: false,
    },
    watch: {
        backTimes: 0,
    },
    chatInfo: {
        show: { type: 'group' as 'group' | 'user' | 'temp', id: 0, name: '', avatar: '', temp: 0 },
        info: {
            group_info: {},
            user_info: {},
            me_info: {},
            group_members: [],
            group_files: {},
            group_sub_files: {},
            jin_info: {
                list: [] as { [key: string]: any }[],
                pages: 0,
            },
            me_infotimestamp: 0
        },
    },
    pageView: {
        chatView: markRaw(
            defineAsyncComponent(() => import('@renderer/pages/Chat.vue')),
        ),
        msgView: markRaw(
            defineAsyncComponent(
                () => import('@renderer/components/MsgBody.vue'),
            ),
        ),
    },
    userList: [],
    showList: [],
    systemNoticesList: undefined,
    baseOnMsgList: new Map<number, UserFriendElem & UserGroupElem>(),
    onMsgList: [],
    groupAssistList: [],
    loginInfo: {},
    botInfo: {},
    sysConfig: {},
    messageList: [],
    popBoxList: [],
    mergeMsgStack: [],
    inch: getInch()
}

export const runtimeData: RunTimeDataElem = reactive(baseRuntime)

// 重置 Runtime，但是保留应用设置之类已经加载好的应用内容
export function resetRimtime(resetAll = false) {
    runtimeData.botInfo = reactive([])
    runtimeData.watch = reactive(baseRuntime.watch)
    firstHeartbeatTime = -1
    heartbeatTime = -1
    if (resetAll) {
        runtimeData.tags = reactive(baseRuntime.tags)
        runtimeData.chatInfo = reactive(baseRuntime.chatInfo)
        runtimeData.userList = reactive([])
        runtimeData.showList = reactive([])
        runtimeData.systemNoticesList = reactive([])
        runtimeData.baseOnMsgList = reactive(new Map())
        runtimeData.onMsgList = reactive([])
        runtimeData.groupAssistList = reactive([])
        runtimeData.loginInfo = reactive([])
        runtimeData.messageList = reactive([])
    }
}
