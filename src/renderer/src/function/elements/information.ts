import { SessionBox } from '../model/box'
import  type { Message } from '../model/message'
import { ForwardSeg } from '../model/seg'
import { Session } from '../model/session'
import { optDefault } from '../option'

export enum BotMsgType {
    CQCode,
    Array
}

export interface RunTimeDataElem {
    sysConfig: Record<keyof typeof optDefault, any | null>
    jsonMap?: any
    botInfo: { [key: string]: any }
    loginInfo: {
        uin: number,
        nickname: string,
    }
    groupAssistList: (UserFriendElem & UserGroupElem)[]
    onMsgList: (UserFriendElem & UserGroupElem)[]
    systemNoticesList?: { [key: string]: any }
    pageView: {
        chatView: any
        msgView: any
    }
    plantform: {[key: string]: any},
    tags: {
        firstLoad: boolean
        msgType: BotMsgType
        canLoadHistory: boolean
        openSideBar: boolean
        viewer: {
            show?: boolean
            index: number
        }
        loginWaveTimer?: any
        /**
         * 客户端类型
         */
        clientType: 'electron' | 'tauri' | 'capacitor' | 'web'
        /**
         * 平台类型
         */
        platform: 'win32' | 'darwin' | 'linux' | 'android' | 'ios' | 'web' | undefined
        /**
         * 系统发行版本
         */
        release: string | undefined
        /**
         * 代理服务器端口
         */
        proxyPort?: number
        connectSsl: boolean
        classes: any[]
        sw?: boolean
        darkMode: boolean
    }
    inch: number
    watch: {
        // PS: 一些给监听器捕捉用的数据
        heartbeatTime?: number
        oldHeartbeatTime?: number
        lastHeartbeatTime?: number
        backTimes: number
    }
    messageList: Message[]
    mergeMsgStack: ForwardSeg[]
    mergeMessageImgList?: any[] | undefined
    stickerCache?: any[]
    nowChat: undefined | Session
    nowBox: undefined | SessionBox  // 当前的会话盒子
    img_list: {url: string, id: string}[]
    color_mod: 'light' | 'dark'
    popBoxList: {
        // 通用弹窗
        svg?: string // 弹窗图标
        title?: string // 弹窗标题（缺省将没有标题栏和关闭按钮）
        html?: string // 填充 html（和下面的模板必须有一个）
        template?: any // 填充模板（如果都有，优先填充 html）
        templateValue?: any // 模板 props
        data?: any // 模板的附加传参，只有这一个
        full?: boolean // 是否填充整个页面
        button?: {
            // 按钮
            master?: boolean // 是否高亮（主按钮）
            fun?: (value: any) => void // 按钮回调
            text: string // 按钮文本
        }[]
        allowQuickClose?: boolean // 是否允许快速关闭
        allowClose?: boolean // 是否允许关闭
    }[],
}


export interface BaseChatInfoElem {
    type: 'group' | 'user' | 'temp'
    id: number
    name: string
    avatar: string
    appendInfo?: string
    jump?: string
    temp: number
}

export interface UserElem {
    new_msg?: boolean
    raw_msg?: string
    time?: number
    always_top?: boolean
    message_id?: string
    highlight?: string
}

export interface UserFriendElem extends UserElem {
    group_id: number
    group_name: string
    py_name?: string
    py_start?: string
    member_count?: number
    admin_flag?: boolean
}

export interface UserGroupElem extends UserElem {
    user_id: number
    nickname: string
    remark: string
    raw_msg_base?: string       // 给群收纳箱用的
    py_name?: string
    py_start?: string
    class_id?: number
    class_name?: string
}

export interface GroupFileElem {
    file_id: string
    file_name: string
    size: number
    download_times: number
    dead_time: number
    upload_time: number
    uploader_name: string

    download_percent?: number
}

export interface GroupFileFolderElem {
    folder_id: string
    folder_name: string
    count: number
    create_time: number
    creater_name: string

    items?: GroupFileElem[]
    show_items?: boolean
}

export interface GroupMemberInfoElem {
    user_id: number
    title: string
    card: string
    join_time: number
    last_sent_time: number
    level: number
    nickname: string
    rank: string
    role: string
    sex: string
    shutup_time: number
    py_start?: string
}

export interface SQCodeElem {
    addText: boolean
    addTop?: boolean
    msgObj: MsgItemElem
}

export interface MsgItemElem {
    type: string
    [key: string]: any
}

export interface MenuEventData {
    x: number
    y: number
    target: HTMLElement
}
