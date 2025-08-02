import app from '@renderer/main'
import { delay, getSizeFromBytes, stdUrl } from '../utils/systemUtil'
import { MsgBodyFuns } from './msg-body'
import { createMsg, getFace } from '../utils/msgUtil'
import { Connector } from '../connect'
import { PopInfo, PopType } from '../base'
import { downloadFile } from '../utils/appUtil'
import { Msg } from './msg'
import { autoReactive } from './utils'
import { v4 as uuid } from 'uuid'

export const segType = {}
type SegCon<T extends Seg> = { new(...args: any[]): T; type: string };
function registerSegType<T extends Seg>(segClass: SegCon<T>): void {
    segType[segClass.type] = segClass;
}


export abstract class Seg {
    declare static readonly type: string;

    abstract get plaintext(): string;

    init?(): void | Promise<void>
    getImgData?(): {url: string, id: string} | undefined

    get type(): string {
        return (this.constructor as typeof Seg).type;
    }

    static parse(data: any): Seg {
        const con = segType[data.type] ?? UnknownSeg;
        return new con(data);
    }

    /**
     * 序列化为 CQ 码
     * @returns CQ 码
     */
    toCq(): string {
        const params = Object.entries(this.serializeData())
            .map(([key, value]) => `${key}=${value}`)
            .join(',');
        return `[CQ:${this.type},${params}]`;
    }

    /**
     * 序列化为数组
     * @returns 序列化后的数组节点
     */
    toArray(): object {
        return {
            type: this.type,
            data: this.serializeData(),
        };
    }

    abstract serializeData(): any;

    toString(): string {
        return this.plaintext;
    }
}


@registerSegType
export class TxtSeg extends Seg {
    static readonly type = 'text'
    text: string
    praseMsg: string
    links: string[]
    constructor(data: { text: string }) {
        super()
        this.text = data.text
        const { text, links } = MsgBodyFuns.parseTextMsg(this.text)
        this.praseMsg = text
        this.links = links
    }

    get plaintext(): string {
        return this.text
    }

    serializeData(): any {
        return {
            text: this.text,
        }
    }

    toCq(): string {
        return this.text.replace('[', '&#91;').replace(']', '&#93;')
    }
}

@registerSegType
export class MdSeg extends Seg {
    static readonly type = 'markdown'
    content: string
    constructor(data: { content: string }) {
        super()
        this.content = data.content
    }

    get plaintext(): string {
        // TODO 消 # 一帮md符号
        return this.content
    }

    serializeData(): any {
        return {
            text: this.content,
        }
    }
}

@registerSegType
export class ImgSeg extends Seg {
    static readonly type = 'image'
    file: string
    url: string
    summary?: string
    asface: boolean
    imgId: string = uuid()
    constructor(data: { file: string, url?: string, summary?: string, asface?: boolean }) {
        super()
        if (!data.file) throw new Error('图片文件缺失')
        this.file = data.file
        if (data.url) this.url = stdUrl(data.url)
        else this.url = stdUrl(data.file)
        this.summary = data.summary
        this.asface = data.asface ?? false
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return this.summary ?? '[' + $t('图片') + ']'
    }

    get src(): string {
        if (this.url.startsWith('base64:')) return 'data:image/png;base64,' + this.url.substring(9)
        return this.url
    }

    getImgData(): {url: string, id: string} {
        return {
            url: this.src,
            id: this.imgId
        }
    }

    serializeData(): any {
        return {
            file: this.file,
        }
    }
}

@registerSegType
export class FaceSeg extends Seg {
    static readonly type = 'face'
    text?: string
    id: number
    src?: string
    constructor(data: { text?: string, id: number }) {
        super()
        this.text = data.text
        this.id = data.id
        this.src = getFace(this.id)
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        if (this.text) return '[' + this.text + ']'
        else return '[' + $t('表情') + ']'
    }

    serializeData() {
        return {
            id: this.id
        }
    }
}

@registerSegType
export class AtSeg extends Seg {
    static readonly type = 'at'
    qq: string
    text?: string
    constructor(data: { qq: string, text?: string }) {
        super()
        this.qq = data.qq
        this.text = data.text
    }

    get plaintext(): string {
        return `@${this.text ?? this.qq}`
    }

    serializeData() {
        return {
            qq: this.qq
        }
    }
}

@registerSegType
export class FileSeg extends Seg {
    static readonly type = 'file'
    name: string
    file_id?: string
    file_url?: string
    size?: number
    ext: string
    download_percent?: number
    static viewerSupport = [
        'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp',
        'mp4', 'avi', 'mkv', 'flv',
        'txt', 'md',
    ]
    constructor(file: string, name: string, size: number)
    constructor(data: { file_id?: string, name?: string, file_name?: string, url?: string, size?: number, file_size: number })
    constructor(
        arg1: string | { file_id?: string, name?: string, file_name?: string, url?: string, size?: number, file_size: number },
        arg2?: string,
        arg3?: number
    ) {
        super()
        if (typeof arg1 === 'string') {
            const file = arg1
            const name = arg2 as string
            const size = arg3 as number
            this.file_url = file
            this.name = name
            this.ext = name.split('.').pop() || 'unknown'
            this.size = size
        } else {
            const data = arg1 as { file_id?: string, name?: string, file_name?: string, url: string, size?: number, file_size: number }
            if (!data.file_id) throw new Error('文件ID缺失')
            this.file_id = data.file_id
            this.name = data.name ?? data.file_name ?? '未知文件'
            this.size = data.size ?? data.file_size
            this.ext = this.name.split('.').pop() || 'unknown'
            if (data.url) this.file_url = stdUrl(data.url)
        }
    }

    init(): void {
        if (!this.file_url) {
            Connector.callApi('get_file_url', { file_id: this.file_id })
                .then((url: string) => {
                    this.file_url = stdUrl(url)
                })
        }
    }

    get formatSize(): string {
        const { $t } = app.config.globalProperties

        if (!this.size) return $t('未知大小')
        return getSizeFromBytes(this.size)
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties

        return this.name ?? '[' + $t('文件') + ']'
    }

    get fileView(): { url: string, ext: string, txt?: string } | undefined {
        if (!this.file_url) return undefined
        if (!FileSeg.viewerSupport.includes(this.ext)) return undefined
        return {
            url: this.file_url,
            ext: this.ext,
        }
    }

    download(): void {
        const { $t } = app.config.globalProperties
        if (!this.file_url) {
            new PopInfo().add(PopType.INFO, $t('文件信息还没加载完呢，你是拿铁丝上网的吗？'))
            return
        }
        if (this.download_percent !== undefined) {
            new PopInfo().add(PopType.INFO, $t('别催了，已经在下了(>_<)'))
            return
        }
        this.download_percent = 0
        downloadFile(this.file_url, this.name, (event: ProgressEvent) => {
            if (!event.lengthComputable) return
            const percent = Math.floor((event.loaded / event.total) * 100)
            this.download_percent = percent
        }, () => {
            this.download_percent = undefined
        })
    }

    serializeData(): any {
        return {
            file: this.file_url,
            name: this.name,
        }
    }
}

@registerSegType
export class VideoSeg extends Seg {
    static readonly type = 'video'
    file: string
    url: string
    constructor(data: { file: string, url: string }) {
        super()
        this.file = data.file
        this.url = stdUrl(data.url)
    }
    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return '[' + $t('视频') + ']'
    }

    serializeData() {
        return {
            file: this.file,
            url: this.url
        }
    }
}

@registerSegType
@autoReactive
export class ForwardSeg extends Seg {
    static readonly type = 'forward'
    id?: string
    content?: Msg[]
    constructor(msgs?: Msg[])
    constructor(data: { id: string, content?: any })
    constructor(arg1?: Msg[] | { id: string, content?: any }) {
        if (Array.isArray(arg1)) {
            const msgs = arg1 as Msg[]
            super()
            this.content = msgs
        } else {
            super()
            const data = arg1 as { id: string, content?: any }
            this.id = data.id
            if (data.content) {
                // TODO: 我没用过nc,不知道nc发过来的数据长啥样，怎么处理
                this.content = data.content.map((item: any) => new Msg(item))
            }
        }
    }

    init(): void {
        if (!this.content) this.getContent()
    }

    async getContent(): Promise<void> {
        const { getMessageList } = await import('../msg')
        const data = await Connector.callApi('forward_msg', { id: this.id })
        this.content = getMessageList(data)
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return '[' + $t('合并转发') + ']'
    }

    serializeData() {
        if (!this.id) throw new Error('ForwardSeg id is missing')
        return {
            id: this.id,
        }
    }
}

@registerSegType
export class ReplySeg extends Seg {
    static readonly type = 'reply'
    id: string
    replyMsg?: Msg|null
    constructor(data: { id: string }) {
        super()
        this.id = data['id']
    }

    async init(): Promise<void> {
        // 不知道为啥这里有时候会失败...重试5次吧
        for (let retry = 0; retry < 5; retry++) {
            try{
                const [msgData] = await Connector.callApi('get_message', { message_id: this.id })
                if (msgData) {
                    this.replyMsg = createMsg(msgData)
                    return
                }
            } catch {
                await delay(100)
            }
        }

        this.replyMsg = null
    }

    get plaintext(): string {
        return ''
    }

    serializeData() {
        return {
            id: this.id,
        }
    }
}

@registerSegType
export class PokeSeg extends Seg {
    static readonly type = 'poke'
    get plaintext(): string {
        return '戳了戳你'
    }

    serializeData() {
        return {}
    }
}

@registerSegType
export class XmlSeg extends Seg {
    static readonly type = 'xml'
    readonly data: string
    readonly id: string
    constructor(data: object) {
        super()
        this.data = data['data']
        this.id = data['id']
    }

    get plaintext(): string {
        let name = this.data.substring(
            this.data.indexOf('<source name="') + 14,
        )
        name = name.substring(0, name.indexOf('"'))
        return '[' + name + ']'
    }

    serializeData() {
        return {
            data: this.data,
            id: this.id,
        }
    }
}

@registerSegType
export class JsonSeg extends Seg {
    static readonly type = 'json'
    readonly data: string
    constructor(data: object) {
        super()
        this.data = data['data']
    }

    get plaintext(): string {
        try {
            return JSON.parse(this.data).prompt
        } catch (error) {
            const { $t } = app.config.globalProperties
            return '[' + $t('卡片消息') + ']'
        }
    }

    serializeData() {
        return {
            data: this.data,
        }
    }
}

export class UnknownSeg extends Seg {
    static readonly type = 'unknown'
    private _type: string
    private _data: any
    constructor(data: object) {
        super()
        this._type = data['type'] || 'unknown'
        delete data['type']
        this._data = data
    }

    get type(): string {
        return this._type
    }

    get plaintext(): string {
        return `[不支持的消息类型: ${this._type}]`
    }

    serializeData() {
        return this._data
    }
}
