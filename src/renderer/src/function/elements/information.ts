import { Component, Raw } from 'vue'
import { AdapterInterface, LoginInfo } from '../adapter/interface'
import { SessionBox } from '../model/box'
import { ForwardSeg } from '../model/seg'
import { Session } from '../model/session'
import { User } from '../model/user'
import { optDefault } from '../option'

export interface RunTimeDataElem {
    sysConfig: Record<keyof typeof optDefault, any | null>
    loginInfo: LoginInfo,
    selfInfo?: User
    onMsgList: (UserFriendElem & UserGroupElem)[]
    systemNoticesList?: { [key: string]: any }
    pageView: {
        chatView: any
        msgView: any
    }
    plantform: {[key: string]: any},
    tags: {
        firstLoad: boolean
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
        backTimes: number
    }
    mergeMsgStack: ForwardSeg[]
    mergeMessageImgList?: any[] | undefined
    stickerCache?: any[]
    nowChat?: Session
    nowBox?: SessionBox  // 当前的会话盒子
    nowAdapter?: AdapterInterface // 当前适配器
    img_list: {url: string, id: string}[]
    color_mod: 'light' | 'dark'
    popBoxList: { id: string, data: PopBoxData }[],
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

export interface MenuEventData {
    x: number
    y: number
    target: HTMLElement
}

export interface PopBoxData {
    // 通用弹窗
    svg?: string // 弹窗图标
    title?: string // 弹窗标题（缺省将没有标题栏和关闭按钮）
    template: Raw<Component> // 填充模板
    templateValue?: any // 模板 props
    templateModel?: any // 模板 v-model
    full?: boolean // 是否填充整个页面
    button?: {
        // 按钮
        master?: boolean // 是否高亮（主按钮）
        fun?: (() => void | Promise<void>)
            | ((event: Event) => void | Promise<void>) // 按钮回调
        text: string // 按钮文本
        noClose?: boolean // 是否不退出弹窗
    }[]
    allowAutoClose?: boolean // 是否允许自带的关闭操作
    onClose?: () => void // 关闭回调
}
