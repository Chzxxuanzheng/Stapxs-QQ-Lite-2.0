/*
 * @FileDescription: Session 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 *           2.0
 * @Description: 聊天上下文模型,目前仅用在提供消息信息上了
 *               用于会话，而非单纯的消息来源
 */

import app from '@renderer/main'
import option from '../option'
import { shallowRef, ShallowRef } from 'vue'
import { stdUrl } from '../utils/systemUtil'
import { Name } from './data'
import { Message } from './message'
import { EssenceMsg, Msg } from './msg'
import { reactive } from 'vue'
import { getMessageList, runtimeData } from '../msg'
import { Connector } from '../connect'
import { SystemNotice } from './notice'
import { Logger, PopInfo, PopType } from '../base'
import { isDeleteMsg } from '../utils/msgUtil'
import { BaseUser, Member, Role, IUser, User } from './user'
import { Ann } from './ann'
import { GroupFile, GroupFileFolder } from './file'
import { SessionBox } from './box'

/**
 * 会话基类
 * 早期写的代码，对响应式对象理解不到位
 * @TODO 改为浅层式响应对象...这不太优雅
 */
export abstract class Session {
    // 基本信息
    abstract type: 'group' | 'user' | 'temp'
    abstract sessionClass: SessionClass
    id: number
    _name: Name
    // 消息列表相关
    messageList: Message[] = []
    imgList: {url: string, id: string}[] = []
    imgListUpdateTime: number = 0
    newMsg: number = 0
    headMsg?: Msg
    preMessage?: Message
    // 设置
    alwaysTop: boolean = false
    // 额外信息
    appendInfo?: string
    // 高亮信息
    highlightInfo: string[] = []
    showNotice: boolean = false
    // 分组盒子
    boxs: SessionBox[] = []

    // 内部信息
    // 已有会话列表
    /**
     * 是否激活
     * 激活会在message里显示，且会调用获取历史记录等API
     */
    isActive = false
    // 缓存
    /**
     * 会话列表
     */
    static sessionList: Session[] = reactive([])
    /**
     * 置顶列表
     */
    static alwaysTopSessions: Set<Session> = reactive(new Set()) as unknown as Set<Session>
    /**
     * 激活会话列表
     */
    static activeSessions: Set<Session> = reactive(new Set()) as unknown as Set<Session>

    constructor(id: number, name: string) {
        this.id = id
        this._name = new Name(name)
        Session.sessionList.push(this)
    }

    //#region == 激活会话 ==============================================================
    private activePromise?: Promise<void>
    /**
     * 激活会话
     */
    activate(): Promise<void> {
        if (this.activePromise) return this.activePromise
        this.activePromise = this._activate()
        return this.activePromise
    }
    private async _activate() {
        if (this.isActive) return

        await this.prepareActive()
        await this.runHook('prepareActiveHook')

        this.isActive = true
        Session.activeSessions.add(this)
    }
    /**
     * 准备激活会话
     */
    abstract prepareActive(): Promise<void>
    /**
     * 卸载
     */
    unactive() {
        this.messageList.length = 0
        this.imgList.length = 0
        this.headMsg = undefined
        this.preMessage = undefined
        this.highlightInfo = []
        this.isActive = false
        this.activePromise = undefined
        this.newMsg = 0
        this.showNotice = false
        Session.activeSessions.delete(this)
        this.runHook('unactiveHook')
    }
    abstract prepareUnactive(): void
    //#endregion

    //#region == 抽象方法 ==============================================================
    /**
     * 是否在搜索时被匹配
     * @param str 搜索内容
     */
    abstract match(str: string): boolean
    /**
     * 获取群头像
     * @returns 群头像链接
     */
    abstract getFace(): string
    /**
     * 通过id获取用户
     * @param id 用户id
     */
    abstract getUserById(id: number): IUser | undefined
    //#endregion

    //#region == 静态工具 ==============================================================
    /**
     * 通过id获取会话
     * @param id 会话id
     * @returns 会话实例
     */
    static getSessionById(id: number): Session | undefined {
        return Session.sessionList.find(item => item.id === id)
    }

    /**
     * 获得会话。没有的临时会话会创建，群聊和私聊会抛异常
     * @param type
     * @param id
     * @param group_id
     */
    static getSession(type: 'group' | 'user' | 'temp', id: number, group_id?: number): Session {
        let session: Session | undefined
        switch (type) {
            case 'group':
                session = GroupSession.getSessionById(id)
                if (!session) throw new Error(`群组 ${id} 不存在`)
                break
            case 'user':
                session = UserSession.getSessionById(id)
                if (!session) throw new Error(`用户 ${id} 不存在`)
                break
            case 'temp':
                session = TempSession.getSessionById(id)
                if (!session) {
                    if (group_id === undefined) throw new Error('临时会话需要指定群组id')
                    session = new TempSession(id, group_id)
                }
                break
            default:
                throw new Error(`未知的会话类型 ${type}`)
        }
        return session
    }

    /**
     * 清空会话列表
     */
    static clear(): void {
        // 取消激活
        for (const session of Session.activeSessions)
            session.unactive()

        Session.sessionList.length = 0
        Session.alwaysTopSessions.clear()
        GroupSession.sessionList.length = 0
        UserSession.sessionList.length = 0
        TempSession.sessionList.length = 0
        SessionClass.clear()
    }
    //#endregion

    //#region == 设置相关 ==============================================================

    /**
     * 设置置顶
     * @param flag 是否置顶
     * @param saveCfg 是否写入配置
     */
    setAlwaysTop(flag: boolean, saveCfg: boolean = true): void {
        this.alwaysTop = flag

        // 更新置顶列表
        if (flag && !Session.alwaysTopSessions.has(this))
            Session.alwaysTopSessions.add(this)
        else if(!flag && Session.alwaysTopSessions.has(this))
            Session.alwaysTopSessions.delete(this)

        if (!saveCfg) return

        const id = runtimeData.loginInfo.uin
        const upId = this.id
        // 完整的设置 JSON
        let topInfo = runtimeData.sysConfig.top_info as {
            [key: string]: number[]
        }
        if (topInfo === null) topInfo = {}
        // 本人的置顶信息
        let topList = topInfo[id]
        // 操作
        if (flag) {
            if (topList) {
                if (topList.indexOf(this.id) < 0) topList.push(upId)
            } else {
                topList = [upId]
            }
        } else {
            if (topList) topList.splice(topList.indexOf(upId), 1)
        }
        // 刷新设置
        if (topList) {
            topInfo[id] = topList
            option.save('top_info', topInfo)
        }
    }
    //#endregion

    //#region == 消息相关 ==============================================================
    private msgQueue: Message[] = []
    /**
     * 新增消息
     * @param msg 消息
     */
    async addMessage(msg: Message) {
        this.msgQueue.push(msg)

        // 阻塞前面消息
        await new Promise(resolve => {
            const selfId = setInterval(() => {
                if (this.msgQueue.at(0) !== msg) return
                clearInterval(selfId)
                resolve(true)
            }, 100)
        })

        // 消息其他处理
        try {
            let timeout: ReturnType<typeof setTimeout>
            const timeoutPromise = new Promise<void>((_, reject) => {
                timeout = setTimeout(() => reject(new Error('添加消息超时')), 10000)
            })

            const mainPromise = (async ()=>{
                if (!this.isActive) await this.activate()
                this.imgFromNewMsg(msg)
                this.runHook('newMessageHook', msg)
                clearTimeout(timeout)
            })
            await Promise.race([mainPromise(), timeoutPromise])
        }catch (e) {
            new Logger().error(e as Error, '添加消息失败')
        }

        // 保存消息
        this.messageList.push(msg)
        this.refushPreMsg()
        if(msg instanceof Msg && msg.sender.user_id !== runtimeData.loginInfo.uin)
            this.newMsg ++
        this.msgQueue.shift()

        // 刷新收纳盒
        for (const box of this.boxs) {
            box.sessionNewMessage(this, msg)
        }
    }

    private loadHistoryLock: boolean = false
    private lastLoadFaileFlag: boolean = false
    canLoadMoreHistory: boolean = true
    /**
     * 加载历史
     * @returns 是否加载成功
     */
    async loadHistory(): Promise<boolean> {
        if (this.loadHistoryLock) return false
        if (!this.canLoadMoreHistory) return false
        this.loadHistoryLock = true

        const { $t } = app.config.globalProperties
        try {
            if (this.lastLoadFaileFlag) this.messageList.shift()
            // 添加提示词
            this.messageList.unshift(SystemNotice.info($t('获取历史记录ing')))

            // 组装参数
            const apiName = this.type == 'group' ? 'get_group_msg_history' : 'get_private_msg_history'
            const params = {
                group_id: this.id,
                user_id: this.id,
                message_id: this.headMsg?.message_id,
                count: 20,
            }

            // 调API
            const data = await Connector.callApi(apiName, params)

            // 删除提示
            this.messageList.shift()

            // 处理消息
            if (!data) throw new Error('获取历史记录失败')
            let msgs: Message[]
            if (data.length === 0) {
                this.canLoadMoreHistory = false
                msgs = [SystemNotice.info($t('没有更多历史消息'))]
            }else {
                msgs = getMessageList(data)
                const startId = msgs.findIndex(item => item.message_id === this.headMsg?.message_id)
                if (startId >= 0) {
                    // 如果开始的消息在列表中，则截断
                    msgs.splice(startId, 99)
                }
            }

            this.imgFromHistory(msgs)
            // 合并消息列表
            this.messageList.unshift(...msgs)

            // 重设headMsg
            this.headMsg = <Msg>msgs[0]
        } catch (e) {
            this.lastLoadFaileFlag = true
            this.messageList.unshift(SystemNotice.info($t('获取历史记录失败')))
            new PopInfo().add(
                PopType.ERR,
                app.config.globalProperties.$t('获取历史记录失败'),
            )
            this.loadHistoryLock = false
            return false
        }
        this.loadHistoryLock = false
        return true
    }

    get isLoadingHistory(): boolean {
        return this.loadHistoryLock
    }

    /**
     * 刷新预览消息
     */
    refushPreMsg(): void {
        for (let i= this.messageList.length - 1; i >= 0; i--) {
            const msg = this.messageList[i]
            // 启用预览通知
            if (runtimeData.sysConfig.preview_notice) {
                if (msg instanceof SystemNotice) continue
            } else if (!(msg instanceof Msg)) continue
            if (isDeleteMsg(msg)) continue
            this.preMessage = msg
            break
        }
    }

    /**
     * 设为已读消息set_message_read
     * @param msgId 消息id
     */
    async setRead(msgId?: string): Promise<void> {
        // 避免频繁调用...昨天吃警告了.tx竟然没给我踹下去
        if (!this.newMsg) return
        if (!msgId) {
            for (const msg of this.messageList) {
                if (msg instanceof Msg) {
                    msgId = msg.message_id
                    break
                }
            }
        }
        // api
        this.newMsg = 0
        this.showNotice = false
        this.highlightInfo = []
        let api: string
        const params: {
            group_id?: number,
            user_id?: number,
            message_id?: string
        } = this.createSendParam()
        if (this.type === 'group') {
            api = 'set_group_message_read'
        }else {
            api = 'set_user_message_read'
        }
        params.message_id = msgId

        // 更新收纳盒
        for (const box of this.boxs) {
            box.sessionSetReaded()
        }

        await Connector.callApi(api, params)
    }

    /**
     * 删除消息
     */
    async removeMsg(msg: Msg) {
        const index = this.messageList.indexOf(msg)
        if (index < 0) return
        this.messageList.splice(index, 1)
        this.removeImgList(msg.imgList)
        await this.runHook('rmMessageHook', msg)
    }

    //#endregion

    //#region == 钩子相关 ==============================================================
    // 我为啥要写这东西?我自己也不知道...照着nb抄着抄着就有这东西了...
    static prepareActiveHook: ((session: Session) => void|Promise<void>)[] = []
    prepareActiveHook: ((session: Session) => void|Promise<void>)[] = []
    static unactiveHook: ((session: Session) => void|Promise<void>)[] = []
    unactiveHook: ((session: Session) => void|Promise<void>)[] = []
    static newMessageHook: ((session: Session, msg: Message) => void|Promise<void>)[] = []
    newMessageHook: ((session: Session, msg: Message) => void|Promise<void>)[] = []
    static loadHistoryHook: ((session: Session, state: 'success' | 'fail' | 'end', msgs: Msg[]) => Promise<boolean>)[] = []
    loadHistoryHook: ((session: Session, state: 'success' | 'fail' | 'end', msgs: Msg[]) => Promise<boolean>)[] = []
    static rmMessageHook: ((session: Session, msg: Msg) => void|Promise<void>)[] = []
    rmMessageHook: ((session: Session, msg: Msg) => void|Promise<void>)[] = []
    /**
     * 执行钩子
     * @param hookList 钩子列表
     * @param args 参数
     */
    async runHook(
        hookNames: 'prepareActiveHook' | 'unactiveHook' | 'newMessageHook' | 'loadHistoryHook' | 'rmMessageHook',
        ...args: any[]
    ): Promise<void> {
        const tasks: Promise<any>[] = []
        const hooks: ((...args: any[]) => void | Promise<void>)[]
            = [...this[hookNames], ...Session[hookNames]] as any
        for (const hook of hooks) {
            const task = hook(this, ...args)
            if (task instanceof Promise) tasks.push(task)
        }
        await Promise.all(tasks)
    }
    //#endregion

    //#region == 发送相关 ==============================================================
    /**
     * 组装发送参数
     */
    abstract createSendParam(): { user_id?: number, group_id?: number }
    /**
     * 获取发送API
     * @param merge 是否拿去合并转发api
     */
    abstract getSendApi(merge?:boolean): string
    //#endregion

    //#region == 图片更新 ==============================================================
    private imgFromNewMsg(msg: Message): void {
        if (!(msg instanceof Msg)) return
        const imgList = msg.imgList
        if (imgList.length === 0) return
        this.imgList.push(...imgList)
        this.imgListUpdateTime ++
    }
    private imgFromHistory(msgs: Message[]): void {
        const imgList: {url: string, id: string}[] = []
        for (const msg of msgs) {
            if (!(msg instanceof Msg)) continue
            if (msg.imgList.length === 0) continue
            imgList.push(...msg.imgList)
        }
        this.imgList = imgList.concat(this.imgList)
        this.imgListUpdateTime ++
    }
    /**
     * 自身消息更新图片列表用
     */
    updateImgList(
        oldData: {url: string, id: string}[],
        newData: {url: string, id: string}[],
    ): void {
        if (oldData.length === 0) throw new Error('旧数据不能为空')
        const startId = this.imgList.findIndex(item => item.id === oldData[0].id)
        if (startId < 0) throw new Error('旧数据不在图片列表中')
        // 替换
        this.imgList.splice(startId, oldData.length, ...newData)
        this.imgListUpdateTime ++
    }
    /**
     * 删除图片
     * @param imgs 消息段
     * @returns
     */
    removeImgList(imgs: {url: string, id: string}[]): void {
        if (imgs.length === 0) return
        const index = imgs[0].id
        const startId = this.imgList.findIndex(item => item.id === index)
        if (startId < 0) return
        this.imgList.splice(startId, imgs.length)
        this.imgListUpdateTime ++
    }
    //#endregion

    /**
     * 获取自身成员对象(群组未激活返回 undefined)
     * @returns 自身成员对象
     */
    getMe(): IUser {
        return BaseUser.createMe()
    }

    /**
     * 获取用户信息,拿不到拿id创建一个BaseUser保底
     * @param id
     */
    getUserByIdWithBu(id: number): IUser {
        const user = this.getUserById(id)
        if (user) return user
        return BaseUser.createById(id)
    }

    /**
     * 加入到收纳盒
     * @param box
     * @returns
     */
    addBox(box: SessionBox): void {
        if (this.boxs.includes(box)) return
        this.boxs.push(box)
    }

    /**
     * 离开收纳盒
     * @param box
     * @returns
     */
    leaveBox(box: SessionBox): void {
        const index = this.boxs.indexOf(box)
        if (index < 0) return
        this.boxs.splice(index, 1)
    }

    get showName(): string {
        return this._name.toString().replace(/[\u202A-\u202E\u2066-\u2069]/g, '')
    }

    get showNamePy(): string {
        return this._name.py.replace(/[\u202A-\u202E\u2066-\u2069]/g, '')
    }

    get name(): Name {
        return this._name
    }

    set name(name: string|Name) {
        if (name instanceof Name) this._name = name
        else this._name = new Name(name)
    }
}

// TODO: 群头衔
export class GroupSession extends Session {
    override type = 'group' as const
    override sessionClass: SessionClass
    static sessionList: GroupSession[] = reactive([])
    memberList: Member[] = []
    me: Member | null = null
    // 设置
    /**
     * 是否开启通知
     */
    notice: boolean = false
    // 群精华列表
    essenceList: EssenceMsg[] = []
    constructor(id: number, name: string, memberCount: number) {
        const { $t } = app.config.globalProperties
        super(id, name)
        GroupSession.sessionList.push(this)
        this.memberList = new Array(memberCount).fill(null)
        const groupClass = SessionClass.getClass(99999) ?? new SessionClass(99999, $t('群组'))
        groupClass.addSession(this)
        this.sessionClass = groupClass
    }

    override async prepareActive(): Promise<void> {
        // 加载群成员 ==============================================
        // emm, 这种高危api,还是不要刷新缓存得了...
        await this.reloadUserList()
        this.me = this.getUserById(runtimeData.loginInfo.uin) as Member

        // 加载历史记录 ============================================
        if(this.messageList.length < 20)await this.loadHistory()

        // 刷新预览消息 ============================================
        this.refushPreMsg()
    }

    async reloadUserList(useCache: boolean = true): Promise<void> {
        // 获取新数据
        const memData = await Connector.callApi('get_group_member_list', {
            group_id: this.id,
            no_cache: !useCache,
        })
        if (!memData) throw new Error('获取群成员列表失败')
        const newDataMap = new Map<number, Member>()
        for (const item of memData) {
            const newData = new Member(item)
            newDataMap.set(newData.user_id, newData)
        }
        const banData = await Connector.callApi('ban_list', {
            group_id: this.id
        })
        // 这个感觉效率好低啊...
        if (banData){
            banData.forEach(item => {
                const mem = this.getUserById(item.user_id)
                if (mem) mem.setBanTime(item.ban_time)
            })
        }

        // 比对数据
        const newMemberList: Member[] = []
        const oldDataMap = new Map<number, Member>()
        for (const item of this.memberList) {
            if (!item) continue
            oldDataMap.set(item.user_id, item)
        }
        for (const [ id, newData ] of newDataMap) {
            const oldData = oldDataMap.get(id)
            if (oldData) {
                oldData.update(newData)
                newMemberList.push(oldData)
                oldDataMap.delete(id)
            }else {
                newMemberList.push(newData)
            }
        }
        this.memberList = newMemberList.sort((a, b) => {
            if (a.role === Role.Owner) return -1
            if (b.role === Role.Owner) return 1
            if (a.role === Role.Admin && b.role !== Role.Admin) return -1
            if (b.role === Role.Admin && a.role !== Role.Admin) return 1
            if (a.role === Role.Bot && b.role !== Role.Bot) return -1
            if (b.role === Role.Bot && a.role !== Role.Bot) return 1
            return a.namePy.localeCompare(b.namePy)
        })

        // 删除不存在的成员
        for (const item of oldDataMap.values())
            item.leave = true

    }

    override prepareUnactive(): void {
        this.memberList = new Array(this.memberList.length).fill(null)
        this.annCache = undefined
        this.essenceList = []
        this.me = null
    }

    override match(str: string): boolean {
        if (this.name.matchStr(str)) return true
        if (String(this.id).includes(str)) return true
        return false
    }

    override getFace(): string {
        return stdUrl('https://p.qlogo.cn/gh/' + this.id + '/' + this.id + '/0')
    }

    static override getSessionById(id: number): GroupSession | undefined {
        return GroupSession.sessionList.find(item => item.id === id)
    }

    override createSendParam(): { user_id?: number; group_id?: number } {
        return { group_id: this.id }
    }

    override getSendApi(merge: boolean=false): string {
        if (merge) return 'send_group_forward'
        return 'send_msg'
    }

    /**
     * 通过id获取群成员
     * @param id 成员id
     * @returns 成员对象
     */
    getUserById(id: number): Member | undefined {
        return this.memberList.find(item => item.user_id === id)
    }

    /**
     * 获取自身成员对象
     * @returns 自身成员对象
     */
    override getMe(): Member {
        if (!this.activate) throw new Error('请先激活会话')
        return this.me as Member
    }

    /**
     * 设置是否开启通知
     * @param flag 是否开启
     * @param saveCfg 是否写入配置
     */
    setNotice(flag: boolean, saveCfg: boolean = true): void {
        this.notice = flag

        if (!saveCfg) return
        // 写入配置
        const noticeInfo = option.get('notice_group') ?? {}
        const list = noticeInfo[runtimeData.loginInfo.uin]
        if (flag) {
            if (list) {
                list.push(this.id)
            } else {
                noticeInfo[runtimeData.loginInfo.uin] = [this.id]
            }
        } else {
            if (list) {
                const index = list.indexOf(this.id)
                if (index >= 0) list.splice(index, 1)
            }
        }
        option.save('notice_group', noticeInfo)
    }

    private annCache?: Ann[]
    /**
     * 获得群公告
     */
    async getAnn(useCache: boolean = true): Promise<Ann[]> {
        if (useCache && this.annCache !== undefined) return this.annCache
        const data = await Connector.callApi('group_notices', {group_id: this.id})
        if (!data) {
            new PopInfo().add(
                PopType.ERR,
                app.config.globalProperties.$t('获取群公告失败'),
            )
            return []
        }
        const ann = data.map(item => {
            // 不知道为啥这里的数据格式不对...临时处理下吧
            const data = {}
            for (const key in item) {
                if (item[key] instanceof Array)
                    data[key] = item[key].at(0) ?? undefined
                else
                    data[key] = item[key]
            }
            return new Ann(data as any, this)
        })
        this.annCache = ann
        return ann
    }
    /**
     * 对 getAnn 的封装
     */
    useAnn(useCache: boolean = true): ShallowRef<Ann[]> {
        const annList = shallowRef<Ann[]>([])
        this.getAnn(useCache).then(data => {
            annList.value = data
        })
        return annList
    }
    private fileCache?: (GroupFile | GroupFileFolder)[]
    /**
     * 获取群文件
     * @param useCache 是否使用缓存
     */
    async getFile(useCache: boolean = true): Promise<(GroupFile | GroupFileFolder)[]> {
        if (useCache && this.fileCache) return this.fileCache
        const data = await Connector.callApi('group_files', {group_id: this.id})
        if (!data) {
            new PopInfo().add(
                PopType.ERR,
                app.config.globalProperties.$t('获取群文件失败'),
            )
            return []
        }
        const out: (GroupFile | GroupFileFolder)[] = []
        data.forEach(item => {
            if (item.file_id) out.push(new GroupFile(item, this.id))
            else out.push(new GroupFileFolder(item, this.id))
        })
        this.fileCache = out.sort((a, b) => {
            if (a.type === 'folder' && b.type === 'file') return -1
            if (a.type === 'file' && b.type === 'folder') return 1
            if (!a.createTime) return -1
            if (!b.createTime) return 1
            return b.createTime.time - a.createTime.time
        })
        return out
    }
    useFile(): ShallowRef<(GroupFile | GroupFileFolder)[] | undefined> {
        const fileList = shallowRef<(GroupFile | GroupFileFolder)[] | undefined>(undefined)
        this.getFile().then(data => {
            fileList.value = data
        })
        return fileList
    }
    /**
     * 刷新群精华列表
     */
    async reloadEssenceList(): Promise<void> {
        const data = await Connector.callApi('group_essence', {group_id: this.id})
        // 获取失败
        if (!data) return
        const list = data.map(item => new EssenceMsg(item, this))
        this.essenceList = list
    }
}

export class UserSession extends Session {
    override type = 'user' as const
    override sessionClass: SessionClass
    private _remark?: Name
    static sessionList: UserSession[] = reactive([])
    baseUser: BaseUser = new BaseUser(this.id, this.name.toString(), this._remark?.toString())
    constructor(
        id: number,
        name: string,
        class_id: number,
        class_name: string,
        remark?: string,
    ) {
        super(id, name)
        UserSession.sessionList.push(this)
        this._remark = remark ? new Name(remark) : undefined
        const friendClass = SessionClass.getClass(class_id) ?? new SessionClass(class_id, class_name)
        friendClass.addSession(this)
        this.sessionClass = friendClass
    }

    override async prepareActive(): Promise<void> {
        // 好友信息不做了...等查看具体信息了再说调用
        // lgr没找到好友信息api,总不能拿陌生人api拿吧?调几次封号了...
        // 加载历史记录 ============================================
        if(this.messageList.length < 20)await this.loadHistory()

        // 刷新预览消息 ============================================
        this.refushPreMsg()
    }

    override prepareUnactive(): void {/**/}

    override match(str: string): boolean {
        if (this.name.matchStr(str)) return true
        if (this._remark?.matchStr(str)) return true
        if (String(this.id).includes(str)) return true
        return false
    }

    override getFace(): string {
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.id)
    }

    override get showName(): string {
        if (!this._remark) return super.showName
        return this._remark.toString().replace(/[\u202A-\u202E\u2066-\u2069]/g, '') + `(${super.showName})`
    }

    static override getSessionById(id: number): UserSession | undefined {
        return UserSession.sessionList.find(item => item.id === id)
    }

    get remark(): Name | undefined {
        return this._remark
    }

    set remark(name: string | Name) {
        if (name instanceof Name) this._remark = name
        else this._remark = new Name(name)
    }

    override createSendParam(): { user_id?: number; group_id?: number } {
        return { user_id: this.id }
    }

    override getSendApi(merge: boolean=false): string {
        if (merge) return 'send_private_forward'
        return 'send_msg'
    }

    override getUserById(id: number): BaseUser | User | undefined {
        if (id === runtimeData.loginInfo.uin)
            return new BaseUser(runtimeData.loginInfo.uin, runtimeData.loginInfo.nickname)
        if (id !== this.id) return undefined
        if (this.userCache) return this.userCache
        return this.baseUser
    }

    private userCache?: User
    /**
     * 获取用户信息
     * @param useCache 使用缓存
     * @returns
     */
    async getUserInfo(useCache: boolean = true): Promise<User | undefined> {
        if (useCache && this.userCache) return this.userCache
        const [ data ] = await Connector.callApi('friend_info', {user_id: this.id})
        if (!data) {
            new PopInfo().add(
                PopType.ERR,
                app.config.globalProperties.$t('获取用户信息失败'),
            )
            return
        }
        data.id = this.id
        data.nickname = this.name.toString()
        data.remark = this._remark?.toString()
        const user = new User(data)
        this.userCache = user
        return user
    }
    /**
     * 获取用户信息
     * @param useCache 是否使用缓存
     * @returns
     */
    useUserInfo(useCache: boolean = true): User | undefined {
        const user = shallowRef<User | undefined>(undefined)
        this.getUserInfo(useCache).then(data => {
            user.value = data
        })
        return user as unknown as User | undefined
    }
}

export class TempSession extends Session {
    override type = 'temp' as const
    override sessionClass: SessionClass
    group: GroupSession|number
    member?: Member
    baseUser: BaseUser = new BaseUser(this.id, this.name.toString())
    static sessionList: TempSession[] = reactive([])
    constructor(id: number, group_id: number) {
        const group = GroupSession.getSessionById(group_id)
        super(id, `临时会话-${id}`)
        this.group = group ?? group_id
        const tempClass = SessionClass.getClass(99998) ?? new SessionClass(99998, '临时会话')
        tempClass.addSession(this)
        this.sessionClass = tempClass
        TempSession.sessionList.push(this)
        if (group) {
            group.activate()
                .then(()=>{
                    const mem = group.getUserById(id)
                    if (mem) this.name = mem.name
                    this.member = mem
                })
        }
    }

    override async prepareActive(): Promise<void> {
        throw new Error('未实现')
    }

    override prepareUnactive(): void {
        throw new Error('未实现')
    }

    override match(str: string): boolean {
        if (this.name.matchStr(str)) return true
        if (String(this.id).includes(str)) return true
        if (typeof this.group === 'number' && String(this.group).includes(str)) return true
        if (this.group instanceof GroupSession && this.group.name.matchStr(str)) return true
        return false
    }

    static override getSessionById(id: number): TempSession | undefined {
        return TempSession.sessionList.find(item => item.id === id)
    }

    override getFace(): string {
        return stdUrl('https://q1.qlogo.cn/g?b=qq&s=0&nk=' + this.id)
    }

    override get showName(): string {
        const { $t } = app.config.globalProperties
        return super.name + $t('来自群聊：{group}', {
            group: this.group instanceof GroupSession ? this.group.showName : this.group
        })
    }

    override createSendParam(): { user_id?: number; group_id?: number } {
        if (this.group instanceof GroupSession) {
            return { user_id: this.id, group_id: this.group.id }
        } else {
            return { user_id: this.id, group_id: this.group }
        }
    }

    override getSendApi(merge: boolean=false): string {
        if (merge) throw new Error('临时会话不支持合并转发')
        return 'send_temp_msg'
    }

    get group_id(): number {
        if (this.group instanceof GroupSession) return this.group.id
        return this.group as number
    }

    override getUserById(id: number): BaseUser  | Member | undefined {
        if (id === runtimeData.loginInfo.uin) {
            return new BaseUser(runtimeData.loginInfo.uin, runtimeData.loginInfo.nickname)
        }
        if (id !== this.id) return undefined
        if (this.member) return this.member
        return this.baseUser
    }

    /**
     * 获取自身成员对象
     * @returns 自身成员对象
     */
    override getMe(): BaseUser | Member {
        const uin = runtimeData.loginInfo.uin
        const mem = this.getUserById(uin)
        return mem as BaseUser | Member
    }
}

/**
 * 好友分组管理
 */
export class SessionClass {
    id: number
    name: string
    content: Session[] = reactive([])
    open: boolean = false
    private static AllFriendClass: SessionClass[] = reactive([])
    constructor(id: number, name: string) {
        if (SessionClass.getClass(id)) throw new Error(`分组 ID ${id} 已存在`)
        this.id = id
        this.name = name
        SessionClass.AllFriendClass.push(this)
    }

    addSession(session: Session): void {
        if (this.content.some(item => item.id === session.id)) {
            throw new Error(`${session.name} 已经存在于分组 ${this.name} 中`)
        }
        this.content.push(session)
    }

    removeSession(session: Session): void {
        const index = this.content.findIndex(item => item.id === session.id)
        if (index === -1) {
            throw new Error(`用户 ${session.name} 不在分组 ${this.name} 中`)
        }
        this.content.splice(index, 1)
    }

    /**
     * 获取好友分组
     * @param arg 分组id或者名称
     * @returns
     */
    static getClass(arg: number | string): SessionClass | undefined {
        if (typeof arg === 'number') {
            return SessionClass.AllFriendClass.find(item => item.id === arg)
        } else if (typeof arg === 'string') {
            return SessionClass.AllFriendClass.find(item => item.name === arg)
        }
        return undefined
    }

    static getClasses(): SessionClass[] {
        return SessionClass.AllFriendClass.sort((a, b) => a.id - b.id)
    }

    static clear(): void {
        SessionClass.AllFriendClass.length = 0
    }
}


// 加载一堆钩子
import('@renderer/function/sessionHooks')
