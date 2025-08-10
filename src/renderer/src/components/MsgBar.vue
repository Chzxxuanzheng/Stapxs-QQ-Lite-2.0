<!--
 * @FileDescription: 消息栏，用于绘制 MsgBody 和 NoticeBody
 * @Author: Mr.Lee
 * @Date: 2025/07/07
 * @Version: 1.0
-->
<template>
    <TransitionGroup
        :name="runtimeData.sysConfig.opt_fast_animation ? '' : 'msglist'"
        class="message-body-container"
        :class="{
            'disable-interaction': !allowInteraction || multiselectMode,
        }"
        tag="div">
        <template v-for="(msgIndex, index) in msgs">
            <!-- 时间戳 -->
            <NoticeBody
                v-if="msgIndex.time && isShowTime(msgs.at(index - 1)?.time?.time, msgIndex.time.time)"
                :key="'notice-time-' + (msgIndex.time.time / ( 4 * 60 )).toFixed(0)"
                :data="SystemNotice.time(msgIndex.time.time)" />
            <!-- [已删除]消息 -->
            <!-- <NoticeBody
                v-if="isDeleteMsg(msgIndex)"
                :key="'delete-' + msgIndex.uuid"
                :data="SystemNotice.delete()" /> -->
            <!-- 消息体 -->
            <MsgBody v-if="msgIndex instanceof Msg"
                :key="'msg-' + msgIndex.uuid"
                :selected="isSelected(msgIndex)"
                :data="msgIndex"
                :config="config"
                :user-info-pan="userInfoPan"
                @click="msgClick($event, msgIndex)"
                @scroll-to-msg="arg=>$emit('scrollToMsg', arg)"
                @image-loaded="arg=>$emit('imageLoaded', arg)"
                @show-msg-menu="(eventData, msg) => openMsgMenu(eventData, msg)"
                @show-user-menu="(eventData, user) => openUserMenu(eventData, user)"
                @left-move="arg => $emit('leftMove', arg)"
                @right-move="arg => $emit('rightMove', arg)"
                @sender-double-click="arg => $emit('senderDoubleClick', arg)"
                @emoji-click="(id, msg) => $emit('emojiClick', id, msg)" />
            <!-- 其他通知消息 -->
            <NoticeBody v-else-if="msgIndex instanceof Notice"
                :id="msgIndex.uuid"
                :key="'notice-' + index"
                :user-info-pan="userInfoPan"
                :data="msgIndex" />
        </template>
    </TransitionGroup>
</template>
<script lang="ts">
// TODO: 重构成setup式，标as Reactive的地方改成ref
import { defineComponent, type PropType, Reactive } from 'vue'
import MsgBody, { MsgBodyConfig } from './MsgBody.vue'
import NoticeBody from './NoticeBody.vue'

import { isShowTime } from '@renderer/function/utils/msgUtil';
import { runtimeData } from '@renderer/function/msg';
import { Msg } from '@renderer/function/model/msg';
import { Message } from '@renderer/function/model/message';
import { Notice, SystemNotice } from '@renderer/function/model/notice';
import { IUser } from '@renderer/function/model/user';
import { MenuEventData } from '@renderer/function/elements/information';
import app from '@renderer/main';
import { UserInfoPan } from '@renderer/pages/Chat.vue';

export interface Config extends MsgBodyConfig {
    canInteraction?: boolean
}

export default defineComponent({
    name: 'MsgBar',
    components: { MsgBody, NoticeBody },
    props: {
        msgs: {
            type: Array as () => Message[],
            required: true,
        },
        showMsgMenu: {
            type: Function as PropType<undefined | ((eventData: MenuEventData, msg: Msg) => (Promise<void> | void))>,
            default: () => undefined,
            required: false,
        },
        showUserMenu: {
            type: Function as PropType<undefined | ((eventData: MenuEventData, user: IUser) => (Promise<void> | void))>,
            default: () => undefined,
            required: false,
        },
        config: {
            type: Object as PropType<Config>,
            default: () => ({
                canInteraction: true,
                specialMe: true,
                showIcon: true,
                dimNonExistentMsg: true,
            }),
            required: false,
        },
        userInfoPan: {
            type: Object as PropType<UserInfoPan>,
            default: () => undefined,
            required: false,
        }
    },
    emits: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        msgClick: (_event: MouseEvent, _msg: Msg) => true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        imageLoaded: (_height: number) => true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        scrollToMsg: (_id: string) => true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        leftMove: (_msg: Msg) => true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rightMove: (_msg: Msg) => true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        senderDoubleClick: (_user: IUser) => true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        emojiClick: (_id: string, _msg: Msg) => true,
    },
    data() {
        console.log(this.msgs)
        return {
            multiselectMode: false,
            multipleSelectList: new Set as Set<Msg>,
            multipleSelectListCardNum: 0,
			isShowTime,
            runtimeData,
            selectMsg: null as null | Msg,
            Msg,
            Notice,
            SystemNotice,
            allowInteraction: true
        }
    },
    mounted() {
        this.allowInteraction = this.config.canInteraction ?? true
    },
    methods: {
        //#region ====外部开放==============================================
        /**
         * 设置是否允许交互
         * @param allow 是否允许交互
         */
        setAllowInteraction(allow: boolean) {
            this.allowInteraction = allow
        },
        /**
         * 获取是否允许交互
         * @returns {boolean} true: 允许交互，false: 不允许交互
         */
        getAllowInteraction(): boolean {
            return this.allowInteraction
        },
        //#endregion

        //#region ====消息互动相关==========================================
        msgClick(event: MouseEvent, msg: Msg) {
            if (this.multiselectMode) {
                // 如果处于多选模式，添加或移除消息到多选列表
                this.toggleMsgInMultiselectList(msg)
            } else {
                // 否则，触发单击事件
                this.$emit('msgClick', event, msg)
            }
        },
        openMsgMenu(eventData: MenuEventData, msg: Msg) {
            if (!this.showMsgMenu) return
            this.selectMsg = msg as Reactive<Msg>
            const promise = this.showMsgMenu(eventData, msg)
            if (!promise) return
            promise.then(() => {
                this.selectMsg = null
            })
        },
        openUserMenu(eventData: MenuEventData, user: IUser) {
            if (!this.showUserMenu) return
            this.showUserMenu(eventData, user)
        },
        //#endregion


        //#region ====多选模式相关==========================================
        /**
         * 开始多选模式
         */
        startMultiselect() {
            this.multiselectMode = true
        },
        /**
         * 取消多选模式
         */
        cancelMultiselect() {
            this.multiselectMode = false
            this.multipleSelectList.clear()
            this.multipleSelectListCardNum = 0
        },
        /**
         * 是否处于多选模式
         * @returns {boolean} true: 多选模式，false: 非多选模式
         */
        isMultiselectMode(): boolean {
            return this.multiselectMode
        },
        /**
         * 强制添加消息到多选列表
         * @param msg 消息对象
         */
        forceAddToMultiselectList(msg: Msg) {
            if (!this.multiselectMode) throw new Error('多选模式未开启，无法添加消息到多选列表。')
            if (!this.multipleSelectList.has(msg as Reactive<Msg>)) this.multipleSelectList.add(msg as Reactive<Msg>)
        },
        /**
         * 获取多选列表长度
         * @returns {number} 多选列表长度
         */
        getMultiselectListLength(): number {
            if (!this.multiselectMode) throw new Error('多选模式未开启，无法获取多选列表长度。')
            return this.multipleSelectList.size
        },
        /**
         * 获取多选列表
         * 该列表已经过排序,可以直接使用
         * 如果仅需要列表长度,不要用该函数,用`getMultiselectListLength`
         * @returns {Msg[]} 多选列表
         */
        getMultiselectList(): Msg[] {
            const out: Msg[] = []
            for (const msg of this.msgs) {
                if (!(msg instanceof Msg)) continue
                if (this.multipleSelectList.has(msg as Reactive<Msg>)) {
                    out.push(msg)
                }
            }
            return out
        },
        toggleMsgInMultiselectList(msg: Msg) {
            if (!this.multiselectMode) {
                throw new Error('多选模式未开启，无法添加消息到多选列表。')
            }
            if (!this.multipleSelectList.has(msg as Reactive<Msg>)) {
                this.multipleSelectList.add(msg as Reactive<Msg>)
                if (msg.hasCard()) this.multipleSelectListCardNum ++
            }
            else {
                this.multipleSelectList.delete(msg as Reactive<Msg>)
                if (msg.hasCard()) this.multipleSelectListCardNum --
            }
        },
        /**
         * 判断能否转发,并给出理由,可以转发时给出空字符串
         * @returns {string} 不可转发原因
         */
        multiCanForward(): string {
            const { $t } = app.config.globalProperties
            if (this.multipleSelectListCardNum > 0) return $t('暂不支持转发卡片消息')
            if (this.multipleSelectList.size === 0) return $t('请选择要转发的消息')
            if (this.multipleSelectList.size > 99) return $t('最多只能转发99条消息')
            return ''
        },
        //#endregion


        //#region ====工具函数==============================================
        isSelected(msg: Msg): boolean{
            return this.multipleSelectList.has(msg as Reactive<Msg>) || this.selectMsg === msg
        },
        //#endregion
    }
});
</script>
<style scoped>
.disable-interaction :deep(*) {
    pointer-events: none;
}
.disable-interaction {
    pointer-events: auto;
}
.disable-interaction > div {
    pointer-events: auto;
}
</style>
