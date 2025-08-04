<!--
 * @FileDescription: 聊天面板页面
 * @Author: Stapxs
 * @Date:
 *      2022/08/14
 *      2022/12/12
 * @Version:
 *      1.0 - 初始版本
 *      1.5 - 重构为 ts 版本，代码格式优化
-->

<template>
    <div id="chat-pan"
        :class="'chat-pan' +
            (runtimeData.tags.openSideBar ? ' open' : '') +
            (['linux', 'win32'].includes(runtimeData.tags.platform ?? '') ? ' withBar' : '')"
        :style="`background-image: url(${runtimeData.sysConfig.chat_background});`"
        @touchstart="chatMoveStartEvent"
        @touchmove="chatMoveEvent"
        @touchend="chatMoveEndEvent"
        @wheel="chatWheelEvent">
        <!-- 聊天基本信息 -->
        <div class="info">
            <font-awesome-icon :icon="['fas', 'bars-staggered']" @click="openLeftBar" />
            <img :src="chat.face">
            <div class="info">
                <p>
                    {{ chat.showName }}
                    <template v-if="chat instanceof GroupSession">
                        ({{ chat.memberList.length }})
                    </template>
                </p>
                <span>
                    <template v-if="chat.appendInfo">
                        {{ chat.appendInfo }}
                    </template>
                    {{
                        chat.preMessage ? $t('上次消息 - {time}', {
                            time: chat.preMessage.time?.format()
                        }) : $t('暂无消息')
                    }}
                </span>
            </div>
            <div class="space" />
            <div class="more">
                <font-awesome-icon v-if="chat.isActive"
                    :icon="['fas', 'ellipsis-vertical']" @click="switchChatInfoPan" />
                <font-awesome-icon v-else
                    :icon="['fas', 'spinner']" class="loading" />
            </div>
        </div>
        <!-- 加载中指示器 -->
        <div :class=" 'loading' + (chat.isLoadingHistory && chat.canLoadMoreHistory ? ' show' : '')">
            <font-awesome-icon :icon="['fas', 'spinner']" />
            <span>{{ $t('加载中') }}</span>
        </div>
        <!-- 消息显示区 -->
        <div id="msgPan" class="chat"
            style="scroll-behavior: smooth"
            @scroll="chatScroll">
            <MsgBar
                :ref="'msgBar'"
                :key="chat.id"
                :msgs="details[3].open ? (tags.search.list as Message[]) : chat.messageList"
                :show-msg-menu="showMsgMenu"
                :show-user-menu="showUserMenu"
                :user-info-pan="userInfoPanFunc"
                @scroll-to-msg="scrollToMsg"
                @image-loaded="imgLoadedScroll"
                @left-move="replyMsg"
                @sender-double-click="(user)=>sendPoke(user.user_id)"
                @emoji-click="changeRespond" />
        </div>
        <!-- 滚动到底部悬浮标志 -->
        <div v-show="tags.showBottomButton"
            class="new-msg"
            @click="scrollBottom(true)">
            <div class="ss-card">
                <font-awesome-icon :icon="['fas', 'comment']" />
                <span v-if="chat.newMsg > 0">{{ chat.newMsg }}</span>
            </div>
        </div>
        <!-- 底部区域 -->
        <div id="send-more" class="more">
            <!-- 功能附加 -->
            <div>
                <div>
                    <!-- 表情面板 -->
                    <Transition name="pan">
                        <FacePan v-show="details[1].open"
                            @add-special-msg="addSpecialMsg" @send-msg="sendMsg" />
                    </Transition>
                    <!-- 精华消息 -->
                    <Transition v-if="chat instanceof GroupSession" name="pan">
                        <div v-show="details[2].open"
                            class="ss-card jin-pan">
                            <div>
                                <font-awesome-icon :icon="['fas', 'message']" />
                                <span>{{ $t('精华消息') }}</span>
                                <font-awesome-icon :icon="['fas', 'xmark']" @click="details[2].open = !details[2].open" />
                            </div>
                            <div class="jin-pan-body">
                                <div v-for="(item, index) in chat.essenceList"
                                    :key="'jin-' + index">
                                    <div>
                                        <img :src="item.sender.face">
                                        <div>
                                            <a>{{ item.sender.name }}</a>
                                            <span>{{ item.time?.format() }}
                                                {{ $t('发送') }}</span>
                                        </div>
                                        <span>{{
                                            $t('{time}，由 {name} 设置', {
                                                time: item.operatorTime?.format(),
                                                name: item.operator.name,
                                            })
                                        }}</span>
                                    </div>
                                    <div class="context">
                                        <template
                                            v-for="(seg, indexc) in item.message"
                                            :key="'jinc-' + index + '-' + indexc">
                                            <span v-if="seg instanceof TxtSeg">{{ seg.text }}</span>
                                            <img v-if="seg instanceof FaceSeg"
                                                class="face" :src="seg.src">
                                            <img v-if="seg instanceof ImgSeg" :src="seg.src">
                                        </template>
                                    </div>
                                </div>
                                <div v-show="tags.isJinLoading" class="jin-pan-load">
                                    <font-awesome-icon :icon="['fas', 'spinner']" />
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
                <!-- 多选指示器 -->
                <Transition name="select-tag">
                    <div v-if="tags.isMultiselectMode" class="select-tag">
                        <div v-if="refs().msgBar!.multiCanForward()">
                            <font-awesome-icon style="color: var(--color-red)" :icon="['fas', 'fa-xmark']" @click="
                                new PopInfo().add(PopType.ERR, refs().msgBar!.multiCanForward());
                            " />
                            <span>{{ $t('合并转发') }}</span>
                        </div>
                        <div v-else>
                            <font-awesome-icon :icon="['fas', 'fa-share-from-square']" @click="mergeForward" />
                            <span>{{ $t('合并转发') }}</span>
                        </div>
                        <div v-if="refs().msgBar!.multiCanForward()">
                            <font-awesome-icon style="color: var(--color-red)" :icon="['fas', 'fa-xmark']" @click="
                                new PopInfo().add(PopType.ERR, refs().msgBar!.multiCanForward());
                            " />
                            <span>{{ $t('逐条转发') }}</span>
                        </div>
                        <div v-else>
                            <font-awesome-icon :icon="['fas', 'fa-arrows-turn-right']" @click="singleForward" />
                            <span>{{ $t('逐条转发') }}</span>
                        </div>
                        <div>
                            <font-awesome-icon :icon="['fas', 'scissors']" />
                            <span>{{ $t('截图') }}</span>
                        </div>
                        <div>
                            <font-awesome-icon :icon="['fas', 'trash-can']" @click="delMsgs" />
                            <span>{{ $t('删除') }}</span>
                        </div>
                        <div>
                            <font-awesome-icon :icon="['fas', 'copy']" @click="copyMsgs" />
                            <span>{{ $t('复制') }}</span>
                        </div>
                        <div>
                            <span @click="
                                refs().msgBar!.cancelMultiselect();
                                tags.isMultiselectMode=false
                            ">{{ refs().msgBar!.getMultiselectListLength() }}</span>
                            <span>{{ $t('取消') }}</span>
                        </div>
                    </div>
                </Transition>
                <!-- 搜索指示器 -->
                <div :class="details[3].open ? 'search-tag show' : 'search-tag'">
                    <font-awesome-icon :icon="['fas', 'search']" />
                    <span>{{ $t('搜索已加载的消息') }}</span>
                    <div @click="closeSearch">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                    </div>
                </div>
                <!-- 回复指示器 -->
                <div :class="msgWhileReply ? 'reply-tag show' : 'reply-tag'">
                    <font-awesome-icon :icon="['fas', 'reply']" />
                    <span>{{
                        msgWhileReply?.preMsg
                    }}</span>
                    <div @click="cancelReply">
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                    </div>
                </div>
                <!-- At 指示器 -->
                <div
                    :class="atFindList != null ? 'at-tag show' : 'at-tag'"
                    contenteditable="true"
                    @blur="choiceAt(undefined)">
                    <div v-for="item in atFindList != null ? atFindList : []"
                        :key="'atFind-' + item.user_id"
                        @click="choiceAt(item.user_id)">
                        <img :src="item.face">
                        <span>{{ item.name }}</span>
                        <a>{{ item.user_id }}</a>
                    </div>
                    <div v-if="atFindList?.length == 0" class="emp">
                        <span>{{ $t('没有找到匹配的群成员') }}</span>
                    </div>
                </div>
                <!-- 更多功能 -->
                <div :class="tags.showMoreDetail ? 'more-detail show' : 'more-detail'">
                    <div
                        :title="$t('图片')"
                        @click="runSelectImg">
                        <font-awesome-icon :icon="['fas', 'image']" />
                        <input id="choice-pic" type="file" style="display: none"
                            @change="selectImg">
                    </div>
                    <div
                        :title="$t('文件')"
                        @click="runSelectFile">
                        <font-awesome-icon :icon="['fas', 'folder']" />
                        <input id="choice-file" type="file"
                            style="display: none" @change="selectFile">
                    </div>
                    <div
                        :title="$t('表情')"
                        @click="(details[1].open = !details[1].open),
                                (tags.showMoreDetail = false)">
                        <font-awesome-icon :icon="['fas', 'face-laugh']" />
                    </div>
                    <div v-if="chat instanceof UserSession"
                        :title="$t('戳一戳')"
                        @click="sendPoke(chat.id)">
                        <font-awesome-icon :icon="['fas', 'fa-hand-point-up']" />
                    </div>
                    <div v-if="chat instanceof GroupSession"
                        :title="$t('精华消息')" @click="showJin">
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <div class="space" />
                    <div :title="$t('搜索消息')" @click="openSearch">
                        <font-awesome-icon :icon="['fas', 'search']" />
                    </div>
                </div>
            </div>
            <!-- 消息发送框 -->
            <div>
                <div @click="moreFunClick(runtimeData.sysConfig.quick_send)" @contextmenu="moreFunClick()">
                    <font-awesome-icon v-if="runtimeData.sysConfig.quick_send == 'default'" :icon="['fas', 'plus']" />
                    <font-awesome-icon v-if="runtimeData.sysConfig.quick_send == 'img'" :icon="['fas', 'image']" />
                    <font-awesome-icon v-if="runtimeData.sysConfig.quick_send == 'file'" :icon="['fas', 'folder']" />
                    <font-awesome-icon v-if="runtimeData.sysConfig.quick_send == 'face'" :icon="['fas', 'face-laugh']" />
                </div>
                <div>
                    <form @submit.prevent="mainSubmit">
                        <input v-if="!Option.get('use_breakline')"
                            id="main-input"
                            v-model="msg"
                            type="text"
                            autocomplete="off"
                            :disabled="runtimeData.tags.openSideBar || getMeBan() !== undefined"
                            :placeholder="
                                getMeBan()
                                    ? $t('已被禁言至：{time}', {
                                        time: getMeBan()?.format(),
                                    }) : ''"
                            @paste="addImg"
                            @keyup="mainKeyUp"
                            @click="selectSQIn()"
                            @input="searchMessage">
                        <textarea v-else id="main-input"
                            v-model="msg"
                            type="text"
                            :disabled="runtimeData.tags.openSideBar"
                            @paste="addImg"
                            @keydown="mainKey"
                            @keyup="mainKeyUp"
                            @click="selectSQIn()"
                            @input="searchMessage" />
                    </form>
                    <div @click="sendMsg">
                        <font-awesome-icon v-if="details[3].open" :icon="['fas', 'search']" />
                        <font-awesome-icon v-else :icon="['fas', 'angle-right']" />
                    </div>
                </div>
            </div>
            <div />
        </div>
        <!-- 合并转发消息预览器 -->
        <MergePan ref="mergePan" />
        <!-- At 信息悬浮窗 -->
        <UserInfoPanComponent :data="userInfoPanData" />
        <!-- 消息右击菜单 -->
        <Menu ref="msgMenu" name="chat-menu">
            <div class="ss-card msg-menu-body">
                <div v-if="chat instanceof GroupSession"
                    v-show="tags.menuDisplay.showRespond"
                    :class="'ss-card respond' + (tags.menuDisplay.respond ? ' open' : '')">
                    <template v-for="(num, index) in respondIds" :key="'respond-' + num">
                        <img v-if="getFace(num) != ''" loading="lazy"
                            :src="getFace(num) as any" @click="
                                menuSelectedMsg ?
                                    changeRespond(String(num), menuSelectedMsg as Msg): ''">
                        <font-awesome-icon v-if="index == 4" :icon="['fas', 'angle-up']" @click="tags.menuDisplay.respond = true" />
                    </template>
                </div>
                <span id="anchor" />
                <div v-show="tags.menuDisplay.add" @click="forwardSelf()">
                    <div><font-awesome-icon :icon="['fas', 'plus']" /></div>
                    <a>{{ $t('+ 1') }}</a>
                </div>
                <div v-show="tags.menuDisplay.reply" @click="menuReplyMsg(true)">
                    <div><font-awesome-icon :icon="['fas', 'message']" /></div>
                    <a>{{ $t('回复') }}</a>
                </div>
                <div v-show="tags.menuDisplay.forward" @click="showForWard()">
                    <div><font-awesome-icon :icon="['fas', 'share']" /></div>
                    <a>{{ $t('转发') }}</a>
                </div>
                <div v-show="tags.menuDisplay.select" @click="intoMultipleSelect()">
                    <div><font-awesome-icon :icon="['fas', 'circle-check']" /></div>
                    <a>{{ $t('多选') }}</a>
                </div>
                <div v-show="tags.menuDisplay.copy" @click="copyMsg">
                    <div><font-awesome-icon :icon="['fas', 'clipboard']" /></div>
                    <a>{{ $t('复制') }}</a>
                </div>
                <div v-show="tags.menuDisplay.copySelect" @click="copySelectMsg">
                    <div><font-awesome-icon :icon="['fas', 'code']" /></div>
                    <a>{{ $t('复制选中文本') }}</a>
                </div>
                <div v-show="tags.menuDisplay.downloadImg != false" @click="downloadImg">
                    <div><font-awesome-icon :icon="['fas', 'floppy-disk']" /></div>
                    <a>{{ $t('下载图片') }}</a>
                </div>
                <div v-show="tags.menuDisplay.revoke" @click="revokeMsg">
                    <div><font-awesome-icon :icon="['fas', 'xmark']" /></div>
                    <a>{{ $t('撤回') }}</a>
                </div>
                <div v-show="tags.menuDisplay.jumpToMsg" @click="jumpSearchMsg">
                    <div><font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" /></div>
                    <a>{{ $t('跳转到消息') }}</a>
                </div>
            </div>
        </Menu>
        <Menu ref="userMenu" name="chat-menu">
            <div class="ss-card msg-menu-body">
                <div v-show="tags.menuDisplay.at"
                    @click="menuSelectedUser ? addSpecialMsg({ msgObj: { type: 'at', qq: String(menuSelectedUser!.user_id) }, addText: true, }): '';
                            toMainInput();
                            closeUserMenu();">
                    <div><font-awesome-icon :icon="['fas', 'at']" /></div>
                    <a>{{ $t('提及') }}</a>
                </div>
                <div v-show="tags.menuDisplay.poke" @click="menuSelectedUser ? sendPoke(menuSelectedUser!.user_id) : ''">
                    <div><font-awesome-icon :icon="['fas', 'fa-hand-point-up']" /></div>
                    <a>{{ $t('戳一戳') }}</a>
                </div>
                <div v-show="tags.menuDisplay.remove" @click="removeUser">
                    <div><font-awesome-icon :icon="['fas', 'trash-can']" /></div>
                    <a>{{ $t('移出群聊') }}</a>
                </div>
                <div v-if="menuSelectedUser instanceof Member" v-show="tags.menuDisplay.config"
                    @click="switchChatInfoPan();
                            refs().infoRef?.openMoreConfig(menuSelectedUser);
                            closeUserMenu();">
                    <div><font-awesome-icon :icon="['fas', 'cog']" /></div>
                    <a>{{ $t('成员设置') }}</a>
                </div>
            </div>
        </Menu>
        <!-- 群 / 好友信息弹窗 -->
        <Transition>
            <Info v-if="tags.openChatInfo" ref="infoRef" :chat="chat"
                @close="switchChatInfoPan" />
        </Transition>
        <!-- 图片发送器 -->
        <Transition>
            <div v-show="imgCache.length > 0" class="img-sender">
                <div class="card ss-card">
                    <div class="hander">
                        <span>{{ $t('发送图片') }}</span>
                        <button class="ss-button" @click="sendMsg">
                            {{ $t('发送') }}
                        </button>
                    </div>
                    <div class="imgs">
                        <div v-for="(img64, index) in imgCache" :key="'sendImg-' + index">
                            <div @click="deleteImg(index)">
                                <font-awesome-icon :icon="['fas', 'xmark']" />
                            </div>
                            <img :src="img64">
                        </div>
                    </div>
                    <div class="sender">
                        <font-awesome-icon :icon="['fas', 'image']" @click="runSelectImg" />
                        <input v-model="msg"
                            type="text"
                            :disabled="runtimeData.tags.openSideBar"
                            @paste="addImg"
                            @click="toMainInput">
                    </div>
                </div>
                <div class="bg" @click="imgCache = []" />
            </div>
        </Transition>
        <!-- 转发面板 -->
        <ForwardPan ref="forwardPan" />
        <div class="bg" :style=" runtimeData.sysConfig.chat_background ?
            `backdrop-filter: blur(${runtimeData.sysConfig.chat_background_blur}px);` : ''" />
    </div>
</template>

<script setup lang="ts">
import UserInfoPanComponent from '@renderer/components/UserInfoPan.vue'
import {
    shallowReactive,
    ShallowReactive
} from 'vue'
const userInfoPanData: ShallowReactive<{
    user: undefined | IUser | number,
    x: number,
    y: number,
}> = shallowReactive({
    user: undefined,
    x: 0,
    y: 0,
})
const userInfoPanFunc: UserInfoPan = {
    open: (user: IUser | number, x: number, y: number) => {
        userInfoPanData.user = user
        userInfoPanData.x = x
        userInfoPanData.y = y
    },
    close: () => {
        userInfoPanData.user = undefined
    },
}
</script>
<script lang="ts">
    import app from '@renderer/main'
    import SendUtil from '@renderer/function/sender'
    import Option, { get } from '@renderer/function/option'
    import Info from '@renderer/pages/Info.vue'
    import MergePan from '@renderer/components/MergePan.vue'
    import ForwardPan from '@renderer/components/ForwardPan.vue'
    import MsgBar from '@renderer/components/MsgBar.vue'
    import imageCompression from 'browser-image-compression'
    import FacePan from '@renderer/components/FacePan.vue'
    import Menu from '@renderer/components/Menu.vue'

    import { defineComponent, nextTick } from 'vue'
    import { v4 as uuid } from 'uuid'
    import { downloadFile, shouldAutoFocus } from '@renderer/function/utils/appUtil'
    import {
        addBackendListener,
        delay,
        getTimeConfig,
        getTrueLang,
        getViewTime,
    } from '@renderer/function/utils/systemUtil'
    import {
        sendMsgRaw,
        getFace,
        closeSession,
    } from '@renderer/function/utils/msgUtil'
    import { scrollToMsg } from '@renderer/function/utils/appUtil'
    import { Logger, LogType, PopInfo, PopType } from '@renderer/function/base'
    import { Connector } from '@renderer/function/connect'
    import { runtimeData } from '@renderer/function/msg'
    import {
        SQCodeElem,
        MenuEventData,
    } from '@renderer/function/elements/information'
    import { Msg, SelfMsg } from '@renderer/function/model/msg'
    import { Seg, FileSeg, TxtSeg, ImgSeg, FaceSeg } from '@renderer/function/model/seg'
    import { SystemNotice } from '@renderer/function/model/notice'
    import { wheelMask } from '@renderer/function/utils/input'
    import { BaseUser, Member, Role, IUser } from '@renderer/function/model/user'
    import { GroupSession, Session, UserSession } from '@renderer/function/model/session'
    import { Message } from '@renderer/function/model/message'
    import { Time } from '@renderer/function/model/data'

    export interface UserInfoPan {
        open: (user: IUser|number, x: number, y: number) => void
        close: () => void
    }

    type ComponentRefs = {
        msgBar: InstanceType<typeof MsgBar>|undefined
        mergePan: InstanceType<typeof MergePan>|undefined
        forwardPan: InstanceType<typeof ForwardPan>|undefined
        infoRef: InstanceType<typeof Info>|undefined
        msgMenu: InstanceType<typeof Menu>|undefined
        userMenu: InstanceType<typeof Menu>|undefined
    }

    export default defineComponent({
        name: 'ViewChat',
        components: {
            Info,
            MsgBar,
            FacePan,
            MergePan,
            ForwardPan,
            Menu
        },
        props: {
            chat: {
                type: Object as () => Session,
                required: true,
            },
        },
        data() {
            return {
                uuid,
                Option: Option,
                getFace: getFace,
                Connector: Connector,
                runtimeData: runtimeData,
                getTimeConfig: getTimeConfig,
                trueLang: getTrueLang(),
                msgWhileReply: undefined as undefined | Msg,
                tags: {
                    showBottomButton: true,
                    showMoreDetail: false,
                    openChatInfo: false,
                    isJinLoading: false,
                    onAtFind: false,
                    menuDisplay: {
                        jumpToMsg: false,
                        add: true,
                        reply: true,
                        forward: true,
                        select: true,
                        copy: true,
                        copySelect: false,
                        downloadImg: false as string | false,
                        revoke: false,
                        at: true,
                        poke: false,
                        remove: false,
                        respond: false,
                        showRespond: true,
                        config: false,
                    },
                    search: {
                        userId: -1,
                        list: this.chat?.messageList ?? [],
                    },
                    chatMove: {
                        move: 0,
                        onScroll: 'none' as 'none' | 'touch' | 'wheel',
                        lastTime: null as null | number,
                        speedList: [] as number[],
                        touchLast: null as null | TouchEvent,
                    },
                    isMultiselectMode: false,
                },
                details: [
                    { open: false },
                    { open: false },
                    { open: false },
                    { open: false },
                ],
                msgMenus: [],
                msg: '',
                imgCache: [] as string[],
                sendCache: [] as Seg[],
                menuSelectedMsg: null as Msg | null,
                menuSelectedUser: null as IUser | null,
                selectCache: '',
                atFindList: null as Member[] | null,
                getImgList: [] as {
                    url: string,
                    id: string,
                }[],
                userInfoPan: {
                    user: null as null | IUser | number,
                    x: 0,
                    y: 0,
                },
                Member,
                Role,
                respondIds: [
                    4, 5, 8, 9, 10, 12, 14, 16, 21, 23, 24, 25, 26, 27, 28, 29,
                    30, 32, 33, 34, 38, 39, 41, 42, 43, 49, 53, 60, 63, 66, 74,
                    75, 76, 78, 79, 85, 89, 96, 97, 98, 99, 100, 101, 102, 103,
                    104, 106, 109, 111, 116, 118, 120, 122, 123, 124, 125, 129,
                    144, 147, 171, 173, 174, 175, 176, 179, 180, 181, 182, 183,
                    201, 203, 212, 214, 219, 222, 227, 232, 240, 243, 246, 262,
                    264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 277, 278,
                    281, 282, 284, 285, 287, 289, 290, 293, 294, 297, 298, 299,
                    305, 306, 307, 314, 315, 318, 319, 320, 322, 324, 326,
                ],
                SystemNotice,
                PopType,
                PopInfo,
                UserSession,
                GroupSession,
                TxtSeg,
                ImgSeg,
                FaceSeg,
                Message,
            }
        },
        watch: {
            chat() {
                this.init()
            },
        },
        async mounted() {
            // 初始化
            this.init()
            // 为 viewer 绑定关闭事件
            const viewer = app.config.globalProperties.$viewer
            this.$watch(
                () => viewer.hiding,
                (newVall) => {
                    if (newVall) {
                        runtimeData.img_list = this.getImgList
                    }
                },
            )
            // 图片列表
            this.$watch(
                () => this.chat.imgListUpdateTime,
                this.reflashImgList,
            )
            this.reflashImgList()
            // Capacitor：系统返回操作（Android）
            if(runtimeData.tags.clientType == 'capacitor' &&
                runtimeData.tags.platform === 'android') {
                addBackendListener('App', 'backButton', () => {
                    this.exitWin()
                })
            }
            // Web：系统返回操作
            this.$watch(() => runtimeData.watch.backTimes, () => {
                this.exitWin()
            })
            // 新消息滚动到底部
            // eslint-disable-next-line
            Session.newMessageHook.push(async (session, _msg)=>{
                if (session !== this.chat) return

                const pan = document.getElementById('msgPan')
                if (!pan) return

                // 计算当前滚动位置距离底部的距离
                const distanceToBottom = pan.scrollHeight - pan.scrollTop - pan.clientHeight
                // 计算vh的像素值
                const vh = window.innerHeight / 100
                // 如果距离底部大于20vh，则不自动滚动
                if (distanceToBottom > 20 * vh) return

                nextTick(() => {
                    // 等待下一次 DOM 更新循环
                    this.scrollBottom(true)
                })
            })
        },
        methods: {
            /**
             * 初始化自身
             */
            init() {
                // 重置部分状态数据
                const data = (this as any).$options.data(this)
                this.tags = data.tags
                this.msgMenus = data.msgMenus
                this.sendCache = []
                this.imgCache = [] as string[]
                this.details = [
                    { open: false },
                    { open: false },
                    { open: false },
                    { open: false },
                ]
                this.initMenuDisplay()
                this.reflashImgList()
                // 聚焦输入框
                // PS: 有虚拟键盘的设备会弹键盘,要做判断
                if (shouldAutoFocus()) this.toMainInput()
            },
            /**
             * 消息区滚动
             * @param event 滚动事件
             */
            chatScroll(event: Event) {
                const body = event.target as HTMLDivElement
                const bar = document.getElementById('send-more')
                // 顶部
                if (body.scrollTop === 0 && this.chat.messageList.length > 0) {
                    if (!this.details[3].open) this.loadHistory()
                }
                // 底部
                if ((body.scrollTop + body.clientHeight + 10) >= body.scrollHeight) {
                    this.chat.setRead()
                    this.tags.showBottomButton = false
                    // 去除阴影
                    if (bar) {
                        bar.style.transition = 'background .3s'
                        bar.classList.add('btn')
                    }
                }
                // 显示回到底部
                if (
                    body.scrollTop <
                        body.scrollHeight - body.clientHeight * 2 &&
                    this.tags.showBottomButton !== true
                ) {
                    this.tags.showBottomButton = true
                }
                // 添加阴影
                if (
                    body.scrollTop <
                    body.scrollHeight - body.clientHeight - 10
                ) {
                    if (bar) {
                        bar.style.transition = 'background 1s'
                        bar.classList.remove('btn')
                    }
                }
            },

            /**
             * 消息区滚动到指定位置
             * @param where 位置（px）
             * @param showAnimation 是否使用动画
             */
            scrollTo(where: number | undefined, showAnimation = true) {
                const pan = document.getElementById('msgPan')
                if (pan !== null && where) {
                    if (showAnimation === false) {
                        pan.style.scrollBehavior = 'unset'
                    } else {
                        pan.style.scrollBehavior = 'smooth'
                    }
                    pan.scrollTop = where
                    pan.style.scrollBehavior = 'smooth'
                }
            },
            scrollBottom(showAnimation = false) {
                const pan = document.getElementById('msgPan')
                if (pan !== null) {
                    this.scrollTo(pan.scrollHeight, showAnimation)
                }
            },
            scrollToMsg(id: string) {
                if (!scrollToMsg(id, true)) {
                    new PopInfo().add(PopType.INFO, this.$t('无法定位上下文'))
                }
            },
            imgLoadedScroll(height: number) {
                const pan = document.getElementById('msgPan')
                if(pan) {
                    if(this.chat.messageList.length <= 20 && !this.tags.showBottomButton) {
                        this.scrollBottom()
                    } else {
                        // 纠正滚动位置
                        this.scrollTo(pan.scrollTop + height, false)
                    }
                }
            },

            /**
             * 发送框按键事件
             * @param event 事件
             */
            mainKey(event: KeyboardEvent) {
                if (!event.shiftKey && event.keyCode == 13) {
                    // enter 发送消息
                    if (this.msg != '') {
                        this.sendMsg()
                    }
                }
            },
            mainKeyUp(event: KeyboardEvent) {
                const logger = new Logger()
                // 发送完成后输入框会遗留一个换行，把它删掉 ……
                if (
                    !event.shiftKey &&
                    event.keyCode == 13 &&
                    this.msg == '\n'
                ) {
                    this.msg = ''
                }
                if (event.keyCode != 13) {
                    // 获取最后一个输入的符号用于判定 at
                    const lastInput = this.msg.substring(this.msg.length - 1)
                    if (
                        !this.tags.onAtFind &&
                        lastInput == '@' &&
                        this.chat instanceof GroupSession
                    ) {
                        logger.add(LogType.UI, '开始匹配群成员列表 ……')
                        this.tags.onAtFind = true
                    }
                    if (this.tags.onAtFind) {
                        if (!(this.chat instanceof GroupSession)) return
                        if (this.msg.lastIndexOf('@') < 0) {
                            logger.add(LogType.UI, '匹配群成员列表被打断 ……')
                            this.tags.onAtFind = false
                            this.atFindList = null
                        } else {
                            const atInfo = this.msg
                                .substring(this.msg.lastIndexOf('@') + 1)
                                .toLowerCase()
                            if (atInfo != '') {
                                this.atFindList = this.chat.memberList
                                        .filter((item) => { return item.match(atInfo) })
                            }
                        }
                    }
                }
            },

            /**
             * 通过表单提交方式发送消息
             * PS：主要用来解决一些奇奇怪怪的回车判定导致的问题
             */
            mainSubmit() {
                if (this.msg != '') {
                    this.sendMsg()
                }
            },

            /**
             * 选择 At
             * @param id QQ 号
             */
            choiceAt(id: number | undefined) {
                if (id != undefined) {
                    // 删除输入框内的 At 文本
                    this.msg = this.msg.substring(0, this.msg.lastIndexOf('@'))
                    // 添加 at 信息
                    this.addSpecialMsg({
                        msgObj: { type: 'at', qq: id },
                        addText: true,
                    })
                }
                this.toMainInput()
                this.tags.onAtFind = false
                this.atFindList = null
            },

            /**
             * 选中光标在其内部的那个 SQLCode
             */
            selectSQIn() {
                const input = document.getElementById(
                    'main-input',
                ) as HTMLInputElement
                // 如果文本框里本来就选中着什么东西就不触发了
                if (
                    input !== null &&
                    input.selectionStart === input.selectionEnd
                ) {
                    let cursurPosition = -1
                    if (typeof input.selectionStart === 'number') {
                        cursurPosition = input.selectionStart
                    }
                    // 获取所有的 SQCode
                    const getSQCode = SendUtil.getSQList(this.msg)
                    if (getSQCode != null) {
                        // 遍历寻找 SQCode 位置区间包括光标位置的 SQCode
                        getSQCode.forEach((item) => {
                            const start = this.msg.indexOf(item)
                            const end = start + item.length
                            if (
                                start !== -1 &&
                                cursurPosition > start &&
                                cursurPosition < end
                            ) {
                                this.$nextTick(() => {
                                    input.selectionStart = start
                                    input.selectionEnd = end
                                })
                            }
                        })
                    }
                }
            },

            /**
             * 显示消息右键菜单
             * @param data 右键菜单事件数据
             * @param msg 消息对象
             * @returns 显示菜单的 Promise, 关闭菜单后完成委托
             */
            showMsgMenu(data: MenuEventData, msg: Msg): Promise<void> | undefined {
                new Logger().debug('右击消息：' + data)

                const menu = this.refs().msgMenu
                if (!menu) return
                if (menu.isShow()) return

                this.menuSelectedMsg = msg

                // 检查消息，确认菜单显示状态
                // 关闭回应功能
                if (get('close_respond') == true) {
                    this.tags.menuDisplay.showRespond = false
                }

                // 判断能不能管理这个消息
                if (this.chat instanceof GroupSession) {
                    let canAdmin = (msg.sender as Member | BaseUser).canBeAdmined(
                        this.chat.getMe().role,
                    )
                    if (msg.sender.user_id === runtimeData.loginInfo.uin) canAdmin = true

                    if (canAdmin) {
                        this.tags.menuDisplay.revoke = true
                    }
                }

                // 消息不存在,但还可以多选和转发(x)
                if (!msg.exist) {
                    // 已被撤回的自己的消息只显示复制
                    this.tags.menuDisplay.reply = false
                    this.tags.menuDisplay.revoke = false
                }
                // 如果在搜索状态，只显示跳转到消息的菜单
                if (this.details[3].open) {
                    Object.keys(this.tags.menuDisplay).forEach(
                        (name: string) => {
                            (this.tags.menuDisplay as any)[name] = false
                        },
                    )
                    this.tags.menuDisplay.jumpToMsg = true
                }
                const selection = document.getSelection()
                const textBody = selection?.anchorNode?.parentElement
                const textMsg = null as HTMLElement | null

                if (
                    textBody &&
                    textBody.className.indexOf('msg-text') > -1 &&
                    selection.focusNode == selection.anchorNode &&
                    textMsg &&
                    textMsg.id == data.target.id
                ) {
                    // 用于判定是否选中了 msg-text 且开始和结束是同一个 Node（防止跨消息复制）
                    this.selectCache = selection.toString()
                    if (this.selectCache.length > 0) {
                        this.tags.menuDisplay.copySelect = true
                    }
                }
                // 不能转发卡片消息
                // TODO: 有卡片签名的客户端适配
                if (msg.hasCard()) {
                    // 如果包含以上消息类型，不能转发
                    this.tags.menuDisplay.forward = false
                    this.tags.menuDisplay.add = false
                }
                if (data.target.nodeName == 'IMG') {
                    // 右击图片需要显示的内容，这边特例设置为链接
                    this.tags.menuDisplay.downloadImg = (
                        data.target as HTMLImageElement
                    ).src
                }

                const promise = menu.showMenu(data.x, data.y) as Promise<void>

                // 初始化菜单显示状态
                promise.then(() => {
                    setTimeout(() => {
                        this.initMenuDisplay()
                    }, 100)
                })
                return promise
            },
            /**
             * 显示消息右键菜单
             * @param data 右键菜单事件数据
             * @param msg 用户
             * @returns 显示菜单的 Promise, 关闭菜单后完成委托
             */
            showUserMenu(data: MenuEventData, user: IUser) {
                const menu = this.refs().userMenu
                if (!menu) return
                if (menu.isShow()) return

                this.menuSelectedUser = user

                this.tags.menuDisplay.showRespond = false
                this.tags.menuDisplay.at = true
                this.tags.menuDisplay.poke = true
                this.tags.menuDisplay.remove = true

                let canAdmin: boolean
                if (!(this.chat instanceof GroupSession)) canAdmin = false
                else if (!(user instanceof Member)) canAdmin = false
                else if (user.user_id === runtimeData.loginInfo.uin) canAdmin = false
                else if (user.canBeAdmined(this.chat.getMe().role)) canAdmin = true
                else canAdmin = false

                if (!canAdmin) {
                    // 自己、私聊或者没有权限的时候不显示移除
                    this.tags.menuDisplay.remove = false
                }
                // tx都可以@自己,咱们不能比tx还封闭(x)
                // if (data.sender.user_id === runtimeData.loginInfo.uin) {
                //     // 自己不显示提及
                //     this.tags.menuDisplay.at = false
                // }
                // 群成员设置
                if(canAdmin) {
                    this.tags.menuDisplay.config = true
                }

                // 显示用户菜单
                const promise = menu.showMenu(data.x, data.y) as Promise<void>

                // 初始化菜单显示状态
                promise.then(() => {
                    setTimeout(() => {
                        this.initMenuDisplay()
                    }, 100)
                })
                return promise
            },

            /**
             * 初始化菜单状态
             */
            initMenuDisplay() {
                this.menuSelectedMsg = null
                this.menuSelectedUser = null
                this.tags.menuDisplay = {
                    jumpToMsg: false,
                    add: true,
                    reply: true,
                    forward: true,
                    select: true,
                    copy: true,
                    copySelect: false,
                    downloadImg: false,
                    revoke: false,
                    at: false,
                    poke: false,
                    remove: false,
                    respond: false,
                    showRespond: true,
                    config: false,
                }
            },

            /**
             * 回复消息
             */
            replyMsg(msg: Msg) {
                if (msg.message_id) {
                    // 显示回复指示器
                    this.msgWhileReply = msg
                    // 聚焦输入框
                    this.toMainInput()
                }else {
                    new PopInfo().add(
                        PopType.ERR,
                        this.$t('无法回复该消息'),
                        true,
                    )
                }
            },

            /**
             * 取消回复消息
             */
            cancelReply() {
                this.msgWhileReply = undefined
            },

            /**
             * 发送消息回应
             * @param num
             */
            async changeRespond(id: string, msg: Msg) {
                this.closeMsgMenu()

                const hasSend = this.menuSelectedMsg?.emojis[id]?.meSend ?? false

                // lgr 贴表情不会根据是否已经有了做判断,而且我拿不到 emoji_id,不知道也没有已经贴上去了
                // 所以采用这个逻辑,添加成功按贴表情成功处理,否则尝试移除表情
                const param = { // OB是个神马玩意?得写两套参数...
                    message_id: msg.message_id,
                    emoji_id: id,
                    group_id: this.chat.id,
                    code: id,
                    is_add: !hasSend,
                    set: !hasSend,
                }
                const re = await Connector.callApi('send_respond', param)

                if (!re && !hasSend) {
                    // 可能已经发送了,改成撤回
                    param.is_add = false
                    param.set = false

                    const re = await Connector.callApi('send_respond', param)
                    if (!re) return
                    msg.setEmoji(id, false)
                }
                if (!re) return
                msg.setEmoji(id, true)
            },

            /**
             * 移出群聊
             */
            removeUser() {
                const user = this.menuSelectedUser
                if (!user) return
                const popInfo = {
                    title: this.$t('提醒'),
                    html: `<span>${this.$t('真的要将 {user} 移出群聊吗', { user: user.name })}</span>`,
                    button: [
                        {
                            text: app.config.globalProperties.$t('确定'),
                            fun: () => {
                                Connector.send(
                                    'set_group_kick',
                                    {
                                        group_id: this.chat.id,
                                        user_id: user.user_id,
                                    },
                                    'setGroupKick',
                                )
                                this.closeUserMenu()
                                runtimeData.popBoxList.shift()
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

            /**
             * 关闭消息菜单
             */
            closeMsgMenu() {
                const menu = this.refs().msgMenu
                if (menu && menu.isShow()) {
                    menu.closeMenu()
                }
            },
            /**
             * 关闭用户菜单
             */
            closeUserMenu() {
                const menu = this.refs().userMenu
                if (menu && menu.isShow()) {
                    menu.closeMenu()
                }
            },

            /**
             * 打开好友/群组信息页面
             */
            switchChatInfoPan() {
                if (!this.chat.isActive) return undefined
                this.tags.openChatInfo = !this.tags.openChatInfo
                // 加载一些需要显示的消息，有部分判断是用来防止反复加载已存在内容的
                if (!this.tags.openChatInfo) return

                // // 加载基础信息
                // TODO:
                // if (
                //     this.chat.show.type === 'group' &&
                //     this.chat.info.group_info.gc !== this.chat.show.id
                // ) {
                //     const url = `https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_info_all?gc=${this.chat.show.id}&bkn=${runtimeData.loginInfo.bkn}`
                //     Connector.send(
                //         'http_proxy',
                //         { url: url },
                //         'getMoreGroupInfo',
                //     )
                // }
            },

            /**
             * 根据 index 删除图片
             * @param { number } index 图片编号
             */
            deleteImg(index: number) {
                this.imgCache.splice(index, 1)
            },

            /**
             * 添加特殊消息结构
             * @param data obj
             */
            addSpecialMsg(data: SQCodeElem) {
                if (data !== undefined) {
                    const index = this.sendCache.length
                    this.sendCache.push(Seg.parse(data.msgObj))
                    if (data.addText === true) {
                        if (data.addTop === true) {
                            this.msg = '[SQ:' + index + ']' + this.msg
                        } else {
                            this.msg += '[SQ:' + index + ']'
                        }
                    }
                    return index
                }
                return -1
            },

            /**
             * 添加图片缓存
             * @param event 事件
             */
            addImg(event: ClipboardEvent) {
                // 判断粘贴类型
                if (!(event.clipboardData && event.clipboardData.items)) {
                    return
                }
                for (
                    let i = 0, len = event.clipboardData.items.length;
                    i < len;
                    i++
                ) {
                    const item = event.clipboardData.items[i]
                    if (item.kind === 'file') {
                        this.setImg(item.getAsFile())
                        // 阻止默认行为
                        event.preventDefault()
                    }
                }
            },

            runSelectImg() {
                const input = document.getElementById('choice-pic')
                if (input) {
                    input.click()
                }
            },
            /**
             * 手动选择图片
             */
            selectImg(event: Event) {
                this.tags.showMoreDetail = false
                const sender = event.target as HTMLInputElement
                if (sender && sender.files) {
                    this.setImg(sender.files[0])
                }
            },

            runSelectFile() {
                const input = document.getElementById('choice-file')
                if (input) {
                    input.click()
                }
            },
            /**
             * 选择文件
             */
            selectFile(event: Event) {
                this.tags.showMoreDetail = false
                const sender = event.target as HTMLInputElement
                if (sender.files != null) {
                    const file = sender.files[0]
                    const fileName = file.name
                    const size = file.size
                    // 如果文件大于 1G，提醒一下
                    if (size > 1073741824) {
                        const popInfo = {
                            title: this.$t('提醒'),
                            html: `<span>${this.$t('文件大于 1GB。发送速度可能会非常缓慢；确认要发送吗？')}</span>`,
                            button: [
                                {
                                    text: this.$t('发送'),
                                    fun: () => {
                                        runtimeData.popBoxList.shift()
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
                    } else {
                        this.sendFile(file, fileName)
                    }

                    // 清空 input
                    sender.value = ''
                }
            },
            async sendFile(file: File, fileName: string | null) {
                const arrayBuffer = await file.arrayBuffer()
                const bytes = new Uint8Array(arrayBuffer)
                const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
                const base64 = btoa(binary)

                const message = [new FileSeg(
                    base64,
                    fileName ?? this.$t('未知文件'),
                    file.size
                )]

                const selfMsg = new SelfMsg(
                    message,
                    this.chat,
                )
                runtimeData.messageList.push(selfMsg)

                // 提示
                const popInfo = {
                    title: this.$t('提醒'),
                    html: `<span>${this.$t('正在发送文件中……')}</span>`,
                    allowClose: false
                }
                runtimeData.popBoxList.push(popInfo)
                await selfMsg.send()
                runtimeData.popBoxList.shift()
            },

            /**
             * 将图片转换为 base64 并缓存
             * @param blob 文件对象
             */
            async setImg(blob: File | null) {
                const popInfo = new PopInfo()
                if (
                    blob !== null &&
                    blob.type.indexOf('image/') >= 0 &&
                    blob.size !== 0
                ) {
                    if (blob.size < 3145728) {
                        // 转换为 Base64
                        const reader = new FileReader()
                        reader.readAsDataURL(blob)
                        reader.onloadend = () => {
                            const base64data = reader.result as string
                            if (base64data !== null) {
                                if (Option.get('close_chat_pic_pan') === true) {
                                    // 在关闭图片插入面板的模式下将直接以 SQCode 插入输入框
                                    const data = {
                                        addText: true,
                                        msgObj: {
                                            type: 'image',
                                            file:
                                                'base64://' +
                                                base64data.substring(
                                                    base64data.indexOf(
                                                        'base64,',
                                                    ) + 7,
                                                    base64data.length,
                                                ),
                                        },
                                    }
                                    this.addSpecialMsg(data)
                                } else {
                                    // 记录图片信息
                                    // 只要你内存够猛，随便 cache 图片，这边就不做限制了
                                    this.imgCache.push(base64data)
                                }
                            }
                        }
                    } else {
                        // 压缩图片
                        const options = { maxSizeMB: 3, useWebWorker: true }
                        try {
                            popInfo.add(
                                PopType.INFO,
                                this.$t('正在压缩图片 ……'),
                            )
                            const compressedFile = await imageCompression(
                                blob,
                                options,
                            )
                            new Logger().add(
                                LogType.INFO,
                                '图片压缩成功，原大小：' +
                                    blob.size / 1024 / 1024 +
                                    ' MB，压缩后大小：' +
                                    compressedFile.size / 1024 / 1024 +
                                    ' MB',
                            )
                            this.setImg(compressedFile)
                        } catch (error) {
                            popInfo.add(PopType.INFO, this.$t('压缩图片失败'))
                        }
                    }
                }
            },

            /**
             * 将焦点移回主发送框
             * PS：我实在懒得再做一次回车发送了。所以当点击图片发送框的输入框后，焦点会被移动到主输入框上以方便回车发送
             */
            toMainInput() {
                const mainInput = document.getElementById('main-input')
                if (mainInput !== null) {
                    mainInput.focus()
                }
            },

            /**
             * 发送消息
             */
            sendMsg() {
                // 在搜索消息的时候不允许发送消息
                if (this.details[3].open) {
                    return
                }
                // 关闭所有其他的已打开的更多功能弹窗
                this.details.forEach((item) => {
                    item.open = false
                })
                // 为了减少对于复杂图文排版页面显示上的工作量，对于非纯文本的消息依旧处理为纯文本，如：
                // "这是一段话 [SQ:0]，[SQ:1] 你要不要来试试 Stapxs QQ Lite？"
                // 其中 [SQ:n] 结构代表着这是特殊消息以及这个消息具体内容在消息缓存中的 index，像是这样：
                // sendCache = [{type:"face",id:11},{type:"at",qq:1007028430}]
                //               ^^^^^^^ 0 ^^^^^^^   ^^^^^^^^^^ 1 ^^^^^^^^^^
                // 在发送操作触发之后，将会解析此条字符串排列出最终需要发送的消息结构用于发送。
                const msg = SendUtil.parseMsg(
                    this.msg,
                    this.sendCache,
                    this.imgCache,
                    this.msgWhileReply as Msg | undefined,
                )
                this.msgWhileReply = undefined
                sendMsgRaw(
                    this.chat,
                    msg,
                )
                // 发送后事务
                this.msg = ''
                this.sendCache = []
                this.imgCache = []
                this.cancelReply()
                nextTick(async ()=>{
                    await delay(100)
                    this.scrollBottom(true)
                })
            },
                // TODO: 虚拟列表优化
                // // 清屏重新加载消息列表（超过 n 条消息、回到底部按钮不显示）
                // // PS：也就是说只在消息底部时才会触发，以防止你是在看历史消息攒满了刷掉
                // if (
                //     this.list.length > 200 &&
                //     !this.tags.nowGetHistroy &&
                //     !this.tags.showBottomButton
                // ) {
                //     this.loadHistory(false)
                // }

            /**
             * 获取显示群精华消息
             */
            showJin() {
                this.details[2].open = !this.details[2].open
                if (!(this.chat instanceof GroupSession)) return
                if (this.chat.essenceList.length === 0 && !this.tags.isJinLoading) {
                    this.tags.isJinLoading = true
                    this.chat.reloadEssenceList()
                        .then(()=>{
                            this.tags.isJinLoading = false
                            })
                }
                this.tags.showMoreDetail = !this.tags.showMoreDetail
            },

            searchMessage(event: Event) {
                if (this.details[3].open) {
                    const value = (event.target as HTMLInputElement).value
                    if (value.length == 0) {
                        this.tags.search.list = this.chat.messageList
                    } else if (value.length > 0) {
                        this.tags.search.list = this.chat.messageList.filter(
                            (item: any) => {
                                const rawMessage = item.plaintext
                                return rawMessage.indexOf(value) !== -1
                            },
                        )
                    }
                }
            },
            openSearch() {
                this.details[3].open = !this.details[3].open
                this.tags.showMoreDetail = !this.tags.showMoreDetail
            },
            closeSearch() {
                this.details[3].open = !this.details[3].open
                this.msg = ''
                this.tags.search.list = this.chat.messageList
            },

            /**
             * 发送戳一戳
             */
            sendPoke(user_id: number) {
                if (runtimeData.jsonMap.poke) {
                    let name = runtimeData.jsonMap.poke.name
                    if (
                        this.chat.type == 'user' &&
                        runtimeData.jsonMap.poke.private_name
                    ) {
                        name = runtimeData.jsonMap.poke.private_name
                    }
                    Connector.send(
                        name,
                        {
                            user_id: user_id,
                            group_id: this.chat.id,
                        },
                        'sendPoke',
                    )
                }
                this.tags.showMoreDetail = false
                this.tags.menuDisplay.poke = false
            },

            /**
             * 更多功能按钮被点击
             */
            moreFunClick(type = 'default') {
                let hasOpen = false
                // 关闭所有其他的已打开的更多功能弹窗
                this.details.forEach((item) => {
                    if (item.open) hasOpen = true
                    item.open = false
                })
                // 如果有关闭操作，就不打开更多功能菜单
                if(!hasOpen) {
                    if (type == 'default') {
                        this.tags.showMoreDetail = !this.tags.showMoreDetail
                    } else {
                        this.tags.showMoreDetail = false
                        // 打开指定的更多功能菜单
                        switch(type) {
                            case 'img': this.runSelectImg(); break
                            case 'file': this.runSelectFile(); break
                            case 'face': this.details[1].open = !this.details[1].open; break
                        }
                    }
                }
            },

            openLeftBar() {
                runtimeData.tags.openSideBar = !runtimeData.tags.openSideBar
            },

            getMeBan(): Time | undefined {
                if (!this.chat) return undefined
                if (!this.chat.isActive) return undefined
                if (!(this.chat instanceof GroupSession)) return
                const me = this.chat.getMe()
                return me.banTime
            },

            //#region == 消息菜单相关 ==================================================
            /**
             * +1
             */
            forwardSelf() {
                if (!this.menuSelectedMsg) return
                sendMsgRaw(
                    this.chat,
                    this.menuSelectedMsg.message,
                )
                this.closeMsgMenu()
            },
            /**
             * 回复
             * @param closeMenu 是否关闭消息菜单
             */
            menuReplyMsg(closeMenu = true) {
                if (!this.menuSelectedMsg) return
                this.replyMsg(this.menuSelectedMsg as Msg)
                // 关闭消息菜单
                if (closeMenu) {
                    this.closeMsgMenu()
                }
            },
            /**
             * 转发
             */
            showForWard() {
                const forwardPan = this.refs().forwardPan
                if (!forwardPan) return
                if (!this.menuSelectedMsg) return

                forwardPan.singleForward([this.menuSelectedMsg as Msg])
                this.closeMsgMenu()
            },
            /**
             * 多选
             */
            intoMultipleSelect() {
                const msgBar = this.refs().msgBar
                msgBar?.startMultiselect()
                this.tags.isMultiselectMode = true
                if (this.menuSelectedMsg) {
                    msgBar?.forceAddToMultiselectList(this.menuSelectedMsg as Msg)
                }
                this.closeMsgMenu()
            },
            /**
             * 复制选中的消息
             */
            copyMsg() {
                const msg = this.menuSelectedMsg
                if (!msg) return

                const popInfo = new PopInfo()
                app.config.globalProperties.$copyText(msg.raw_message).then(
                    () => {
                        popInfo.add(PopType.INFO, this.$t('复制成功'), true)
                    },
                    () => {
                        popInfo.add(PopType.ERR, this.$t('复制失败'), true)
                    },
                )

                this.closeMsgMenu()
            },
            /**
             * 复制缓存的选中的文本
             */
            copySelectMsg() {
                if (this.selectCache === '') return

                const popInfo = new PopInfo()
                app.config.globalProperties.$copyText(this.selectCache).then(
                    () => {
                        popInfo.add(PopType.INFO, this.$t('复制成功'), true)
                    },
                    () => {
                        popInfo.add(PopType.ERR, this.$t('复制失败'), true)
                    },
                )

                this.closeMsgMenu()
            },
            /**
             * 下载选中的图片
             */
            downloadImg() {
                const url = this.tags.menuDisplay.downloadImg
                if (url != false) {
                    downloadFile(url as string, 'img.png', () => undefined, () => undefined)
                }
                this.closeMsgMenu()
            },
            /**
             * 撤回消息
             */
            revokeMsg() {
                const msg = this.menuSelectedMsg
                if (!msg) return
                const msgId = msg.message_id
                Connector.callApi('revoke_msg', { message_id: msgId })
                    .catch(err=>{
                        new Logger().error(err, '撤回消息失败：')
                        new PopInfo().add(PopType.ERR, this.$t('撤回失败'), true)
                    })
                // 关闭消息菜单
                this.closeMsgMenu()
            },
            jumpSearchMsg() {
                this.closeSearch()
                setTimeout(() => {
                    if (!this.menuSelectedMsg) return
                    this.scrollToMsg(`chat-${this.menuSelectedMsg.uuid}`)
                    this.closeMsgMenu()
                }, 100)
            },
            //#endregion

            //#region == 多选菜单相关 ==================================================
            /**
             * 合并转发
             */
            mergeForward(){
                const msgBar = this.refs().msgBar
                if (!msgBar) return
                const msgList = msgBar.getMultiselectList()
                if (msgList.length === 0) return
                const forwardPan = this.refs().forwardPan
                if (!forwardPan) return

                forwardPan.mergeForward(msgList)

                this.closeMultiselect()
            },
            /**
             * 逐条转发
             */
            singleForward(){
                const msgBar = this.refs().msgBar
                if (!msgBar) return
                const msgList = msgBar.getMultiselectList()
                if (msgList.length === 0) return
                const forwardPan = this.refs().forwardPan
                if (!forwardPan) return

                forwardPan.singleForward(msgList)

                this.closeMultiselect()
            },
            /**
             * 删除消息
             */
            delMsgs() {
                new PopInfo().add(
                    PopType.INFO,
                    this.$t('欸嘿，这个按钮只是用来占位置的'),
                )
            },
            /**
             * 复制消息
             */
            copyMsgs() {
                const msgBar = this.refs().msgBar
                if (!msgBar) return
                const msgList = msgBar.getMultiselectList()
                let msg = ''
                let lastDate = ''
                msgList.forEach((item: Msg) => {
                    let time: Date | undefined
                    // 去除 item.time 时间戳中的时间，只保留日期
                    if (item.time) {
                        time = new Date(getViewTime(item.time.time))
                        const date =
                            time.getFullYear() +
                            '-' +
                            (time.getMonth() + 1) +
                            '-' +
                            time.getDate()
                        if (date != lastDate) {
                            msg += '\n—— ' + date + ' ——\n'
                            lastDate = date
                        }
                    }
                    if (time) {
                        msg += item.sender.name +
                        ' ' +
                        time.getHours() +
                        ':' +
                        time.getMinutes() +
                        ':' +
                        time.getSeconds() +
                        '\n' +
                        item.plaintext +
                        '\n\n'
                    }
                    else msg += item.preMsg + '\n\n'

                })
                msg = msg.trim()
                const popInfo = new PopInfo()
                app.config.globalProperties.$copyText(msg).then(
                    () => {
                        popInfo.add(PopType.INFO, this.$t('复制成功'), true)

                        this.closeMultiselect()
                    },
                    () => {
                        popInfo.add(PopType.ERR, this.$t('复制失败'), true)
                    },
                )
            },
            closeMultiselect() {
                const msgBar = this.refs().msgBar
                if (!msgBar) return
                msgBar.cancelMultiselect()
                this.tags.isMultiselectMode = false
            },
            //#endregion

            //#region == 窗口移动相关 ==================================================
            // 滚轮滑动
            chatWheelEvent(event: WheelEvent) {
                const process = (event: WheelEvent) => {
                    // 正在触屏,不处理
                    if (this.tags.chatMove.onScroll === 'touch') return false
                    const x = event.deltaX
                    const y = event.deltaY
                    const absX = Math.abs(x)
                    const absY = Math.abs(y)
                    // 斜度过大
                    if (absY !== 0 && absX / absY < 2) return false
                    this.dispenseMove('wheel', -x / 3)
                    return true
                }
                if (!process(event)) return
                // 创建遮罩
                // 由于在窗口移动中,窗口判定箱也在移动,当指针不再窗口外,事件就断了
                // 所以要创建一个不会动的全局遮罩来处理
                wheelMask(process,()=>{
                    this.dispenseMove('wheel', 0, true)
                })
            },

            // 触屏开始
            chatMoveStartEvent(event: TouchEvent) {
                if (this.tags.chatMove.onScroll === 'wheel') return
                // 触屏开始时，记录触摸点
                this.tags.chatMove.touchLast = event
            },

            // 触屏滑动
            chatMoveEvent(event: TouchEvent) {
                if (this.tags.chatMove.onScroll === 'wheel') return
                if (!this.tags.chatMove.touchLast) return
                const touch = event.changedTouches[0]
                const lastTouch = this.tags.chatMove.touchLast.changedTouches[0]
                const deltaX = touch.clientX - lastTouch.clientX
                const deltaY = touch.clientY - lastTouch.clientY
                const absX = Math.abs(deltaX)
                const absY = Math.abs(deltaY)
                // 斜度过大
                if (absY !== 0 && absX / absY < 2) return
                // 触屏移动
                this.tags.chatMove.touchLast = event
                this.dispenseMove('touch', deltaX)
            },

            // 触屏滑动结束
            chatMoveEndEvent(event: TouchEvent) {
                if (this.tags.chatMove.onScroll === 'wheel') return
                const touch = event.changedTouches[0]
                const lastTouch = this.tags.chatMove.touchLast?.changedTouches[0]
                if (lastTouch) {
                    const deltaX = touch.clientX - lastTouch.clientX
                    const deltaY = touch.clientY - lastTouch.clientY
                    const absX = Math.abs(deltaX)
                    const absY = Math.abs(deltaY)
                    // 斜度过大
                    if (absY === 0 || absX / absY > 2) {
                        this.dispenseMove('touch', deltaX)
                    }
                }
                this.dispenseMove('touch', 0, true)
                this.tags.chatMove.touchLast = null
            },
            /**
             * 分发触屏/滚轮情况
             */
            dispenseMove(type: 'touch' | 'wheel', value: number, end: boolean = false) {
                if (!end && this.tags.chatMove.onScroll === 'none') this.startMove(type, value)
                if (this.tags.chatMove.onScroll === 'none') return
                if (end) this.endMove()
                else this.keepMove(value)
            },
            /**
             * 开始窗口移动
             */
            startMove(type: 'touch' | 'wheel', value: number) {
                // 移除不需要的css
                const target = this.getTargetWin()
                if (!target) return
                target.style.transition = 'all 0s'
                // 禁用滚动
                const chatPan = document.getElementById('chat-pan')
                if (!chatPan) return
                const chat = chatPan.getElementsByClassName('chat')[0] as HTMLDivElement
                if(chat) {
                    chat.style.overflowY = 'hidden'
                }
                this.tags.chatMove.onScroll = type
                this.tags.chatMove.move = value
                this.tags.chatMove.lastTime = Date.now()
            },
            /**
             * 保持窗口移动
             */
            keepMove(value: number){
                this.tags.chatMove.move += value
                const nowDate = Date.now()
                if (!this.tags.chatMove.lastTime) return
                const deltaTime = nowDate - this.tags.chatMove.lastTime
                this.tags.chatMove.lastTime = nowDate
                this.tags.chatMove.speedList.push(
                    value / deltaTime
                )
                if (this.tags.chatMove.move < 0) this.tags.chatMove.move = 0
                const move = this.tags.chatMove.move
                const target = this.getTargetWin()
                if (!target) return
                target.style.transform = 'translateX(' + move + 'px)'
            },
            /**
             * 结束窗口移动
             */
            endMove() {
                // 保留自己要的数据
                const move = this.tags.chatMove.move
                const speedList = this.tags.chatMove.speedList
                // 重置数据
                this.tags.chatMove.onScroll = 'none'
                this.tags.chatMove.lastTime = 0
                this.tags.chatMove.speedList = []
                this.tags.chatMove.move = 0
                // 复原css
                const chatPan = document.getElementById('chat-pan')
                const chat = chatPan?.getElementsByClassName('chat')[0] as HTMLDivElement
                if(chat) {
                    chat.style.overflowY = 'scroll'
                }
                const target = this.getTargetWin()
                if (!target) return
                target.style.transition = 'transform 0.3s'
                target.style.transform = ''
                // 移动距离大小判定
                const width = target.offsetWidth
                // 如果移动距离大于屏幕宽度的三分之一，视为关闭
                if (move > width / 3) {
                    return this.exitWin()
                }
                // 末端速度法
                // 防止误触
                if (move < runtimeData.inch * 0.5) return
                const endSpeedList = speedList.reverse().slice(0, 10)
                let endSpeed = 0
                for (const speed of endSpeedList) {
                    endSpeed += speed
                }
                endSpeed /= endSpeedList.length
                endSpeed /= runtimeData.inch
                // 如果末端速度大于 5，则视为关闭
                if (endSpeed > 5) {
                    return this.exitWin()
                }
            },
            //#endregion
            /**
             * 得到焦点窗口
             */
            getTargetWin(): HTMLDivElement | undefined {
                const chatPan = document.getElementById('chat-pan')
                if (!chatPan) return
                if(this.tags.openChatInfo) {
                    // 聊天信息面板返回
                    return chatPan.getElementsByClassName('chat-info-pan')[0] as HTMLDivElement
                } else if(this.refs().mergePan?.isMergeOpen()) {
                    // 合并转发面板返回
                    return chatPan.getElementsByClassName('merge-pan')[0] as HTMLDivElement
                } else {
                    // 聊天面板底层返回
                    return chatPan as HTMLDivElement
                }
            },
            /**
             * 退出一层窗口
             */
            exitWin() {
                if(this.tags.openChatInfo) {
                    this.switchChatInfoPan()
                } else if(this.refs().mergePan?.isMergeOpen()) {
                    this.refs().mergePan?.closeMergeMsg()
                    setTimeout(() => {
                        const chatPan = document.getElementById('chat-pan')
                        const mergePan = chatPan!.getElementsByClassName('merge-pan')[0] as HTMLDivElement
                        if(mergePan) {
                            mergePan.style.transform = ''
                        }
                    }, 500)
                } else {
                    runtimeData.tags.openSideBar = true
                    closeSession()
                    new Logger().add(LogType.UI, '右滑打开侧边栏触发完成')
                }
            },

            /**
             * 加载更多历史消息
             */
            async loadHistory() {
                if (this.chat.isLoadingHistory) return

                const pan = document.getElementById('msgPan')
                if (!pan) return
                const oldScrollHeight = pan.scrollHeight

                if (!await this.chat.loadHistory()) return

                nextTick(() => {
                    new Logger().debug(`滚动前高度：${oldScrollHeight}，当前高度：${pan.scrollHeight}，滚动位置：${pan.scrollHeight - oldScrollHeight}`)
                    pan.style.scrollBehavior = 'unset'
                    // 纠正滚动位置
                    pan.scrollTop += pan.scrollHeight - oldScrollHeight
                    pan.style.scrollBehavior = 'smooth'
                })
            },

            /**
             * 刷新图片列表
             */
            reflashImgList() {
                const viewer = app.config.globalProperties.$viewer
                this.getImgList = this.chat.imgList
                // 更新viewer图片
                if (!viewer.hiding)
                    runtimeData.img_list = this.getImgList
            },

            /**
             * 带类型的$refs
             */
            refs(): ComponentRefs {
                return this.$refs as ComponentRefs
            }
        },
    })
</script>

<style scoped>
    /* 消息动画 */
    .msglist-move {
        transition: all 0.3s;
    }

    .msglist-enter-active {
        transition: all 0.4s;
    }

    .msglist-leave-active {
        transition: all 0.2s;
    }

    .msglist-enter-from {
        transform: translateX(-20px);
        opacity: 0;
    }

    .msglist-leave-to {
        opacity: 0;
    }

    /* 更多功能面板动画 */
    .pan-enter-active,
    .pan-leave-active {
        transition: opacity 0.3s;
    }

    .pan-enter-from {
        transform: translateX(20px);
        opacity: 0;
    }

    .pan-leave-to {
        opacity: 0;
    }
</style>
