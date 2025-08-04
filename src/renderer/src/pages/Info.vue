<!--
 * @FileDescription: 群 / 好友信息页面
 * @Author: Stapxs
 * @Date: missing
 * @Version: 1.0
-->

<template>
    <div class="chat-info-pan">
        <div class="ss-card chat-info">
            <header>
                <span v-if="chat.type === 'group'">{{ $t('群资料') }}</span>
                <span v-if="chat.type === 'user'">{{ $t('好友') }}</span>
                <font-awesome-icon :icon="['fas', 'xmark']" @click="closeChatInfoPan" />
            </header>
            <div :class="'chat-info-base ' + chat.type">
                <div>
                    <img :src="chat.face">
                    <div>
                        <a>{{ chat.showName }}</a>
                        <span>{{ chat.id }}</span>
                    </div>
                    <div style="display: flex;align-items: center;justify-content: center;cursor: pointer;"
                        @click="copyText(chat.id)">
                        <font-awesome-icon :icon="['fas', 'copy']" />
                    </div>
                </div>
                <div v-if="chat.type === 'group'"
                    v-show="false">
                    <!-- <header>
                        <span>{{ $t('介绍') }}</span>
                    </header>
                    <span v-html=" chat.info.group_info.gIntro === undefined || chat.info.group_info.gIntro === '' ?
                        $t('群主很懒，还没有群介绍哦～') : chat.info.group_info.gIntro" />
                    <div class="tags">
                        <div v-for="item in chat.info.group_info.tags" :key="item.md">
                            {{ item.tag }}
                        </div>
                    </div> -->
                </div>
                <div v-else-if="chat instanceof UserSession && userInfo">
                    <header>
                        <span>QID</span>
                    </header>
                    <span>{{ userInfo.qid }}</span>
                    <header>
                        <span>{{ $t('等级') }}</span>
                    </header>
                    <span>{{ userInfo.level }}</span>
                    <header v-if="userInfo.regTime">
                        <span>{{ $t('注册时间') }}</span>
                    </header>
                    <span>{{ userInfo.regTime.format('year', 'year') }}</span>
                    <header>
                        <span>{{ $t('签名') }}</span>
                    </header>
                    <span>{{ userInfo.longNick ? userInfo.longNick : $t("这个人很懒什么都没有写～") }}</span>
                    <header>
                        <span>{{ $t('其他信息') }}</span>
                    </header>
                    <div class="outher">
                        <span v-if="userInfo.birthday_year">{{ $t('生日') }}:
                            <span>
                                {{ Intl.DateTimeFormat(trueLang, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                }).format(new Date(
                                    `${userInfo.birthday_year}-${
                                        userInfo.birthday_month}-${
                                        userInfo.birthday_day}`,
                                )) }}
                            </span>
                        </span>
                        <span v-if="userInfo.country">{{ $t('地区') }}:
                            <span>
                                {{
                                    `${userInfo.country}-
                                    ${userInfo.province}-
                                    ${userInfo.city}`
                                }}
                            </span>
                        </span>
                    </div>
                    <!-- <template v-if="!chat.show.temp">
                        <header>
                            <span>{{ $t('设置') }}</span>
                        </header>
                        <OptInfo
                            :type="'number'"
                            :chat="chat" />
                    </template> -->
                </div>
            </div>
            <BcTab v-if="chat instanceof GroupSession"
                class="chat-info-tab">
                <div :name="$t('成员')">
                    <div class="chat-info-tab-member">
                        <div class="search-view">
                            <input :placeholder="$t('搜索 ……')" @input="search">
                        </div>
                        <div v-for="member in searchList.length > 0 ? searchList : chat.memberList"
                            :key="'chatinfomlist-' + member.user_id" class="edit">
                            <img alt="nk" loading="lazy"
                                :src="member.face">
                            <div>
                                <a @click="startChat(member as Member)">{{ member.name }}</a>
                                <font-awesome-icon v-if="member.role === 'owner'" :icon="['fas', 'crown']" />
                                <font-awesome-icon v-if="member.role === 'admin'" :icon="['fas', 'star']" />
                            </div>
                            <!-- 在手机端戳 id 就能触发 -->
                            <span @click="clickMember(member as Member)">{{ member.user_id }}</span>
                            <font-awesome-icon v-if="canEditMember(member.role)" :icon="['fas', 'wrench']" @click="clickMember(member as Member)" />
                            <font-awesome-icon v-else :icon="['fas', 'copy']" @click="clickMember(member as Member)" />
                        </div>
                    </div>
                </div>
                <div :name="$t('公告')">
                    <div class="bulletins">
                        <!-- {{ anns }} -->
                        <BulletinBody
                            v-for="(item, index) in anns"
                            :key="'bulletins-' + index"
                            :data="item as Ann"
                            :index="index" />
                    </div>
                </div>
                <div :name="$t('文件')">
                    <div
                        class="group-files">
                        <template v-if="fileInfo">
                            <div v-for="item in fileInfo"
                                :key="'file-' + item.id">
                                <FileBody :item="item" />
                            </div>
                        </template>
                        <div v-else class="loading" style="opacity: 0.9;">
                            <font-awesome-icon :icon="['fas', 'spinner']" />
                            {{ $t('加载中') }}
                        </div>
                    </div>
                </div>
                <div :name="$t('设置')">
                    <div style="padding: 0 20px">
                        <OptInfo :type="'group'" :chat="chat"
                            @update_member_card="updateMemberCard" />
                    </div>
                </div>
            </BcTab>
            <div v-if="showUserConfig && chat instanceof GroupSession" class="ss-card user-config show">
                <div>
                    <img alt="nk" :src="showUserConfig.face">
                    <div>
                        <a>{{ showUserConfig.name }}</a>
                        <span>{{ showUserConfig.user_id }}</span>
                    </div>
                    <font-awesome-icon
                        style="margin-right: 20px;"
                        :icon="['fas', 'copy']"
                        @click="copyText(showUserConfig.user_id)" />
                    <font-awesome-icon :icon="['fas', 'angle-down']" @click="showUserConfig = null" />
                </div>
                <div>
                    <header>{{ $t('成员信息') }}</header>
                    <div class="opt-item">
                        <font-awesome-icon :icon="['fas', 'clipboard-list']" />
                        <div>
                            <span>{{ $t('成员昵称') }}</span>
                            <span>{{
                                $t('啊吧啊吧……')
                            }}</span>
                        </div>
                        <input v-model="showUserConfigRaw.card"
                            style="width: 50%"
                            class="ss-input"
                            type="text"
                            @change="updateMemberCard(showUserConfig as Member, showUserConfigRaw.card)">
                    </div>
                    <div v-if="chat.getMe().role === 'owner'" class="opt-item">
                        <font-awesome-icon :icon="['fas', 'clipboard-list']" />
                        <div>
                            <span>{{ $t('成员头衔') }}</span>
                            <span>{{
                                $t('猪咪猪咪')
                            }}</span>
                        </div>
                        <input v-model="showUserConfigRaw.title"
                            style="width: 50%"
                            class="ss-input"
                            type="text"
                            @change="updateMemberTitle($event, showUserConfig as Member)">
                    </div>
                    <template v-if="canEditMember(showUserConfig.role)">
                        <header>{{ $t('操作') }}</header>
                        <div class="opt-item">
                            <font-awesome-icon :icon="['fas', 'clipboard-list']" />
                            <div>
                                <span>{{ $t('禁言成员') }}</span>
                                <span>{{
                                    $t('要让小猫咪不许说话几分钟呢？')
                                }}</span>
                            </div>
                            <input v-model="memberInfo.banMin"
                                style="width: 50%"
                                class="ss-input"
                                type="text"
                                @input="checkNumber"
                                @change="banMumber($event, showUserConfig as Member)">
                        </div>
                        <button class="ss-button"
                            @click="removeUser(showUserConfig as Member, chat.id)">
                            {{ $t('移出群聊') }}
                        </button>
                    </template>
                </div>
            </div>
        </div>
        <div class="card-info-pan-bg" />
    </div>
</template>

<script lang="ts">
// TODO: 改setup式，把as Reactive的变量改成ref
    import app from '@renderer/main'
    import BulletinBody from '@renderer/components/BulletinBody.vue'
    import FileBody from '@renderer/components/FileBody.vue'
    import OptInfo from './options/OptInfo.vue'
    import BcTab from 'vue3-bcui/packages/bc-tab'

    import { Connector } from '@renderer/function/connect'
    import { PopInfo, PopType } from '@renderer/function/base'
    import { defineComponent, Reactive, ShallowRef, shallowRef } from 'vue'
    import { delay, getTrueLang } from '@renderer/function/utils/systemUtil'
    import { runtimeData } from '@renderer/function/msg'
    import { GroupSession, Session, UserSession } from '@renderer/function/model/session'
    import { Member, Role, User } from '@renderer/function/model/user'
    import { Ann } from '@renderer/function/model/ann'
    import { changeSession } from '@renderer/function/utils/msgUtil'
    import { GroupFile, GroupFileFolder } from '@renderer/function/model/file'

    export default defineComponent({
        name: 'ViewInfo',
        components: { BulletinBody, FileBody, OptInfo, BcTab },
        props: {
            chat: {
                type: Object as () => Session,
                required: true,
            }
        },
        emits: ['close'],
        data() {
            let userInfo: User | undefined
            if (this.chat instanceof UserSession)
                userInfo = this.chat.useUserInfo()
            let anns: ShallowRef<Ann[]>
            if (this.chat instanceof GroupSession)
                anns = this.chat.useAnn()
            else
                anns = shallowRef([])
            let fileInfo: ShallowRef<(GroupFileFolder | GroupFile)[] | undefined>
            if (this.chat instanceof GroupSession)
                fileInfo = this.chat.useFile()
            else
                fileInfo = shallowRef(undefined)
            return {
                runtimeData: runtimeData,
                trueLang: getTrueLang(),
                isTop: false,
                searchList: [] as Member[],
                showUserConfig: null as Member | null,
                showUserConfigRaw: {
                    card: '',
                    title: '',
                },
                memberInfo: {
                    banMin: 0,
                },
                GroupSession,
                UserSession,
                userInfo,
                anns,
                fileInfo,
            }
        },
        methods: {
            /**
             * 移出群聊
             */
            removeUser(mem: Member, group_id: number) {
                const popInfo = {
                    title: this.$t('提醒'),
                    html: `<span>${this.$t('真的要将 {user} 移出群聊吗', { user: mem.name })}</span>`,
                    button: [
                        {
                            text: app.config.globalProperties.$t('确定'),
                            fun: async() => {
                                await Connector.callApi('group_kick',{
                                    group_id: group_id,
                                    user_id: mem.user_id,
                                    reject_add_request: false,
                                })
                                runtimeData.popBoxList.shift()
                                await this.checkSetMemInfoResult()
                            },
                        },
                        {
                            text: app.config.globalProperties.$t('取消'),
                            master: true,
                            fun: () => {
                                runtimeData.popBoxList.shift()
                            },
                        },
                    ],
                }
                runtimeData.popBoxList.push(popInfo)
            },

            copyText(text: any) {
                const popInfo = new PopInfo()
                app.config.globalProperties.$copyText(String(text)).then(
                    () => {
                        popInfo.add(PopType.INFO, this.$t('复制成功'), true)
                    },
                    () => {
                        popInfo.add(PopType.ERR, this.$t('复制失败'), true)
                    },
                )
            },

            banMumber(event: Event, mem: Member) {
                const value = (event.target as HTMLInputElement).value
                if (value !== '') {
                    const num = parseInt(value)
                    if (num > 0) {
                        const popInfo = {
                            title: this.$t('操作'),
                            html: `<span>${this.$t('确认禁言？')}</span>`,
                            button: [
                                {
                                    text: this.$t('确认'),
                                    fun: async () => {
                                        runtimeData.popBoxList.shift()
                                        this.closeChatInfoPan()
                                        await Connector.callApi('ban_member', {
                                            group_id: this.chat.id,
                                            user_id: mem.user_id,
                                            duration: num * 60,
                                        })
                                    },
                                },
                                {
                                    text: this.$t('取消'),
                                    master: true,
                                    fun: () => {
                                        runtimeData.popBoxList.shift()
                                    },
                                },
                            ],
                        }
                        runtimeData.popBoxList.push(popInfo)
                    }
                }
            },

            updateMemberCard(mem: Member, newValue: string) {
                const popInfo = {
                    title: this.$t('操作'),
                    html: `<span>${this.$t('确认修改昵称？')}</span>`,
                    button: [
                        {
                            text: this.$t('确认'),
                            fun: async () => {
                                runtimeData.popBoxList.shift()
                                this.closeChatInfoPan()
                                await Connector.callApi('set_group_nickname', {
                                    group_id: this.chat.id,
                                    user_id: mem.user_id,
                                    card: newValue,
                                })
                                await this.checkSetMemInfoResult()
                            },
                        },
                        {
                            text: this.$t('取消'),
                            master: true,
                            fun: () => {
                                this.showUserConfigRaw.card = mem.card?.toString() ?? ''
                                runtimeData.popBoxList.shift()
                            },
                        },
                    ],
                }
                runtimeData.popBoxList.push(popInfo)
            },

            updateMemberTitle(event: Event, mem: Member) {
                const value = (event.target as HTMLInputElement).value
                if (mem.title?.toString() !== value) {
                    const popInfo = {
                        title: this.$t('操作'),
                        html: `<span>${this.$t('确认修改头衔？')}</span>`,
                        button: [
                            {
                                text: this.$t('确认'),
                                fun: async () => {
                                    runtimeData.popBoxList.shift()
                                    this.closeChatInfoPan()
                                    await Connector.callApi('set_group_title', {
                                        group_id: this.chat.id,
                                        user_id: mem.user_id,
                                        special_title: value,
                                    })
                                    await this.checkSetMemInfoResult()
                                },
                            },
                            {
                                text: this.$t('取消'),
                                master: true,
                                fun: () => {
                                    this.showUserConfigRaw.title = mem.title?.toString() ?? ''
                                    runtimeData.popBoxList.shift()
                                },
                            },
                        ],
                    }
                    runtimeData.popBoxList.push(popInfo)
                }
            },

            getBanTimeMin(endTime: number) {
                // endTime 可能是精确到秒的时间戳
                if(endTime < 10000000000) {
                    endTime *= 1000
                }
                const now = new Date().getTime()
                const time = endTime - now
                if (time > 0) {
                    return Math.floor(time / 1000 / 60)
                } else {
                    return 0
                }
            },

            checkNumber(event: Event) {
                const value = (event.target as HTMLInputElement).value
                if (value !== '') {
                    const num = parseInt(value)
                    if (isNaN(num)) {
                        (event.target as HTMLInputElement).value = ''
                    } else if (num < 0) {
                        (event.target as HTMLInputElement).value = '0'
                    }
                }
            },

            /**
             * 关闭面板
             */
            closeChatInfoPan() {
                this.showUserConfig = null
                this.$emit('close', null)
            },

            /**
             * 发起聊天
             */
            startChat(mem: Member) {
                // 如果是自己的话就忽略
                if (mem.user_id == runtimeData.loginInfo.uin) return

                // 检查这个人是不是好友
                let session: Session | undefined = mem?.user

                // 没了创建一个临时聊天
                if (!session)
                    session = Session.getSession('temp', mem.user_id, this.chat.id)

                // 激活会话
                if (!session.activate) session.activate()
                // 切换到这个聊天
                this.$nextTick(() => {
                    changeSession(session)
                })
            },

            openMoreConfig(mem: Member) {
                this.showUserConfig = mem as Reactive<Member>
                // 初始化一些内容
                this.showUserConfigRaw = {
                    card: mem.card?.toString() ?? '',
                    title: mem.title?.toString() ?? '',
                }
                // this.memberInfo.banMin = this.getBanTimeMin(mem.shut_up_timestamp)

            },
            clickMember(mem: Member) {
                if(this.canEditMember(mem.role)) {
                    this.openMoreConfig(mem)
                } else {
                    this.copyText(mem.user_id)
                }
            },

            search(event: Event) {
                const value = (event.target as HTMLInputElement).value
                if (value !== '') {
                    this.searchList = (this.chat as GroupSession).memberList.filter(
                        (mem: Member) => mem.match(value),
                    ) as Reactive<Member>[]
                } else {
                    this.searchList = [] as any[]
                }
            },

            canEditMember(role: string) {
                const me = (this.chat as GroupSession).getMe()
                return me?.canAdmin(role as Role)
            },

            async checkSetMemInfoResult() {
                const popInfo = {
                    title: this.$t('操作'),
                    html: `<span>${this.$t('正在确认操作……')}</span>`
                }
                runtimeData.popBoxList.push(popInfo)
                await delay(1000)
                await (this.chat as GroupSession).reloadUserList(false)
                runtimeData.popBoxList.shift()
            },
        },
    })
</script>

<style scoped>
    .search-view {
        background: transparent !important;
        margin-top: -10px;
    }
    .search-view > input {
        background: var(--color-card-1);
        border-radius: 7px;
        margin: 0 -10px;
        padding: 0 10px;
        height: 35px;
        width: 100%;
        border: 0;
    }
</style>
