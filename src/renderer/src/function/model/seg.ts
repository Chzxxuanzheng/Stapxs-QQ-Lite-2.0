import app from '@renderer/main'
import { getSizeFromBytes } from '../utils/systemUtil'
import { MsgBodyFuns } from './msg-body'
import { getFace } from '../utils/msgUtil'
import { PopInfo, PopType } from '../base'
import { downloadFile } from '../utils/appUtil'
import { ForwardMsg, Msg } from './msg'
import type { AtAllSegData, AtSegData, FaceSegData, FileSegData, ForwardSegData, ImgSegData, MdSegData, MfaceSegData, PokeSegData, ReplySegData, SegData, TextSegData, UnknownSegData, VideoSegData } from '../adapter/interface'
import { Resource } from './ressource'
import { Img } from './img'
import { toRaw } from 'vue'
import { ProxyUrl } from './proxyUrl'

export const segType = {}
type SegCon<T extends Seg> = { new(...args: any[]): T; type: string };
function registerSegType<T extends Seg>(segClass: SegCon<T>): void {
    segType[segClass.type] = segClass
}


export abstract class Seg {
    declare static readonly type: string

    abstract get plaintext(): string;

    init?(): void | Promise<void>
    getImgData?(): {url: string, id: string} | undefined

	static parse(data: SegData): Seg {
		const type = data.type
		const SegClass = segType[type] || UnknownSeg
		return new SegClass(data)
	}

    get type(): string {
        return (this.constructor as typeof Seg).type
    }

    toString(): string {
        return this.plaintext
    }
}

@registerSegType
export class TxtSeg extends Seg {
    static readonly type = 'text'
    text: string
    praseMsg: string
    links: string[]
    constructor(text: string)
    constructor(data: TextSegData)
    constructor(data: string | TextSegData) {
        super()
        if (typeof data === 'string')
            this.text = data
        else
            this.text = data.text
        const { text, links } = MsgBodyFuns.parseTextMsg(this.text)
        this.praseMsg = text
        this.links = links
    }

    get plaintext(): string {
        return this.text
    }
}

@registerSegType
export class MdSeg extends Seg {
    static readonly type = 'markdown'
    content: string
    constructor(data: MdSegData) {
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
    _url: Resource
    summary?: string
    isFace: boolean = false
    imgData: Img
    constructor(url: string, isFace?: boolean)
    constructor(data: ImgSegData)
    constructor(arg1: string | ImgSegData, arg2: boolean = false) {
        super()
        if (typeof arg1 === 'string') {
            // constructor(url: string, isFace ?: boolean)
            const { $t } = app.config.globalProperties
            const url = arg1 as string
            const isFace = arg2 as boolean | undefined
            this._url = Resource.fromUrl(url)
            this.isFace = isFace || false
            this.summary = $t('[图片]')
        }else {
            // constructor(data: ImgSegData)
            const data = arg1 as ImgSegData
            this._url = data.url
            this.summary = data.summary
            this.isFace = data.isFace
        }
        this.imgData = new Img(this.src)
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return this.summary ?? '[' + $t('图片') + ']'
    }

    get url(): string {
        return this._url.url
    }

    get rawUrl(): string {
        return this._url.rawUrl
    }

    get src(): string {
        if (this.url.startsWith('base64:')) return 'data:image/png;base64,' + this.url.substring(9)
        return this.url
    }
}

@registerSegType
export class MfaceSeg extends Seg {
    static readonly type = 'mface'
    _url: ProxyUrl
    summary: string
    packageId: number
    id: string
    key: string
    imgData: Img

    constructor(data: MfaceSegData) {
        super()
        this._url = new ProxyUrl(data.url)
        this.summary = data.summary
        this.packageId = data.packageId
        this.id = data.id
        this.key = data.key
        this.imgData = new Img(this.src)
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return this.summary ?? '[' + $t('表情') + ']'
    }

    get url(): string {
        return this._url.url
    }

    get rawUrl(): string {
        return this._url.raw
    }

    get src(): string {
        return this.url
    }
}

@registerSegType
export class FaceSeg extends Seg {
    static readonly type = 'face'
    text?: string
    id: number
    src?: string
    constructor(id: number)
    constructor(data: FaceSegData)
    constructor(arg: number | FaceSegData) {
        super()
        if (typeof arg === 'number') {
            this.id = arg
        }else {
            this.text = arg.text
            this.id = arg.id
        }
        this.src = getFace(this.id)
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        if (this.text) return '[' + this.text + ']'
        else return '[' + $t('表情') + ']'
    }
}

@registerSegType
export class AtSeg extends Seg {
    static readonly type = 'at'
    user_id: number
    text?: string
    constructor(user_id: number)
    constructor(data: AtSegData)
    constructor(arg: AtSegData | number) {
        super()
        if (typeof arg === 'number')
            this.user_id = arg
        else
            this.user_id = Number(arg.user_id)
    }

    get plaintext(): string {
        return `@${this.user_id}`
    }
}

@registerSegType
export class AtAllSeg extends Seg {
    static readonly type = 'atall'
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(_: AtAllSegData) {
        super()
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return '@' + $t('所有人')
    }
}

@registerSegType
export class FileSeg extends Seg {
    static readonly type = 'file'
    name: string
    file_id?: string
    _url: ProxyUrl
    size: number
    ext: string
    download_percent?: number
    static viewerSupport = [
        'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp',
        'mp4', 'avi', 'mkv', 'flv',
        'txt', 'md',
    ]
    constructor(file: string, name: string, size: number)
    constructor(data: FileSegData)
    constructor(
        arg1: string | FileSegData,
        arg2?: string,
        arg3?: number
    ) {
        super()
        if (typeof arg1 === 'string') {
            const file = arg1
            const name = arg2 as string
            const size = arg3 as number
            this._url = new ProxyUrl(file)
            this.name = name
            this.ext = name.split('.').pop() || 'unknown'
            this.size = size
        } else {
            const data = arg1 as FileSegData
            if (!data.file_id) throw new Error('文件ID缺失')
            this.file_id = data.file_id
            this.name = data.name
            this.size = data.size
            this.ext = this.name.split('.').pop() || 'unknown'
            this._url = new ProxyUrl(data.url)
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

    get url(): string {
        return this._url.url
    }

    get rawUrl(): string {
        return this._url.raw
    }

    get fileView(): { url: string, ext: string, txt?: string } | undefined {
        if (!this.url) return undefined
        if (!FileSeg.viewerSupport.includes(this.ext)) return undefined
        return {
            url: this.url,
            ext: this.ext,
        }
    }

    download(): void {
        const { $t } = app.config.globalProperties
        if (!this.url) {
            new PopInfo().add(PopType.INFO, $t('文件信息还没加载完呢，你是拿铁丝上网的吗？'))
            return
        }
        if (this.download_percent !== undefined) {
            new PopInfo().add(PopType.INFO, $t('别催了，已经在下了(>_<)'))
            return
        }
        this.download_percent = 0
        downloadFile(this.url, this.name, (event: ProgressEvent) => {
            if (!event.lengthComputable) return
            const percent = Math.floor((event.loaded / event.total) * 100)
            this.download_percent = percent
        }, () => {
            this.download_percent = undefined
        })
    }
}

@registerSegType
export class VideoSeg extends Seg {
    static readonly type = 'video'
    file: string
    _url: Resource
    constructor(data: VideoSegData) {
        super()
        this.file = data.file
        this._url = data.url
    }
    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return '[' + $t('视频') + ']'
    }
    get url(): string {
        return this._url.url
    }
    get rawUrl(): string {
        return this._url.rawUrl
    }
}

@registerSegType
export class ForwardSeg extends Seg {
    static readonly type = 'forward'
	id?: string
    content: Msg[]
    constructor(msgs?: Msg[])
    constructor(data: ForwardSegData)
    constructor(arg1?: Msg[] | ForwardSegData) {
        if (Array.isArray(arg1)) {
            const msgs = arg1 as Msg[]
            super()
            this.content = msgs
        } else {
            super()
            const data = arg1 as ForwardSegData
            this.id = data.id
			this.content = data.content.map(item => new ForwardMsg(item))
            // 图片拼装
            let tail: undefined | Img
            for (const msg of this.content) {
                if (msg.imgList.length === 0) continue
                const imgList = toRaw(msg.imgList)
                if (tail) {
                    tail.concatNext(imgList.at(-1)!)
                }
                tail = imgList.at(0)
            }
        }
    }

    get plaintext(): string {
        const { $t } = app.config.globalProperties
        return '[' + $t('合并转发') + ']'
    }

	get sending(): boolean {
		return this.id === undefined
	}
}

@registerSegType
export class ReplySeg extends Seg {
    static readonly type = 'reply'
    id: string
	msg?: Msg
    constructor(msgId: string)
    constructor(data: ReplySegData)
    constructor(data: ReplySegData | string) {
        super()
        if (typeof data === 'string')
            this.id = data
        else this.id = data.id
    }

    get plaintext(): string {
        return ''
    }
}

@registerSegType
export class PokeSeg extends Seg {
    static readonly type = 'poke'
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	constructor(_: PokeSegData) {super()}
    get plaintext(): string {
        return '戳了戳你'
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
	data: object
    constructor(data: UnknownSegData) {
        super()
        this._type = data.segType
        this.data = data.data
    }

    get type(): string {
        return this._type
    }

    get plaintext(): string {
        return `[不支持的消息类型: ${this._type}]`
    }
}
