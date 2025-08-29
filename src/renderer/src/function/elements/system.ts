export interface PopInfoElem {
    id: number
    svg: string
    text: string
    autoClose?: boolean
}

export interface MsgIdInfoElem {
    gid?: number
    uid?: number
    seqid?: number
}

export interface NotificationElem {
    body: string
    tag: string
    icon: string
    image?: string
    requireInteraction: boolean
}

export interface NotifyInfo {
    base_type: 'msg' | 'app',

    title: string
    body: string
    tag: string
    icon: string
    image?: string
    type: string
    is_important: boolean
}
