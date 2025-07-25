<!--
 * @FileDescription: 消息栏，用于绘制 MsgBody 和 NoticeBody
 * @Author: Mr.Lee
 * @Date: 2025/07/07
 * @Version: 1.0
-->
<template>
    <TransitionGroup
        :name="runtimeData.sysConfig.opt_fast_animation ? '' : 'msglist'"
        :class="{
            'disable-interaction': !allowInteraction || multiselectMode,
        }"
        tag="div">
        <template v-for="(msgIndex, index) in msgs">
            <!-- 时间戳 -->
            <NoticeBody
                v-if="msgIndex.time && isShowTime(msgs[index - 1] ? msgs[index - 1].time : undefined, msgIndex.time)"
                :key="'notice-time-' + (msgIndex.time / ( 4 * 60 )).toFixed(0)"
                :data="SystemNotice.time(msgIndex.time)" />
            <!-- [已删除]消息 -->
            <NoticeBody
                v-if="isDeleteMsg(msgIndex)"
                :key="'delete-' + msgIndex.uuid"
                :data="SystemNotice.delete()" />
            <!-- 消息体 -->
            <MsgBody v-else-if="msgIndex instanceof Msg"
                :key="'msg-' + msgIndex.uuid"
                :selected="isSelected(msgIndex)"
                :data="msgIndex"
                :type="type"
                @click="msgClick($event, msgIndex)"
                @scroll-to-msg="arg=>$emit('scrollToMsg', arg)"
                @image-loaded="arg=>$emit('imageLoaded', arg)"
                @show-msg-menu="(eventData, msg) => openMsgMenu(eventData, msg)"
                @show-user-menu="(eventData, user) => openUserMenu(eventData, user)"
                @left-move="arg => $emit('leftMove', arg)"
                @right-move="arg => $emit('rightMove', arg)"
                @sender-double-click="arg => $emit('senderDoubleClick', arg)"
                />
            <!-- 其他通知消息 -->
            <NoticeBody v-else-if="msgIndex instanceof Notice"
                :id="msgIndex.uuid"
                :key="'notice-' + index"
                :data="msgIndex" />
        </template>
    </TransitionGroup>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import MsgBody from './MsgBody.vue'
import NoticeBody from './NoticeBody.vue'

import { isDeleteMsg, isShowTime } from '@renderer/function/utils/msgUtil';
import { runtimeData } from '@renderer/function/msg';
import { Msg } from '@renderer/function/model/msg';
import { Message } from '@renderer/function/model/message';
import { Notice, SystemNotice } from '@renderer/function/model/notice';
import { Sender } from '@renderer/function/model/user';
import { MenuEventData } from '@renderer/function/elements/information';

export default defineComponent({
    components: { MsgBody, NoticeBody },
    props: {
        msgs: {
            type: Array as () => Message[],
            required: true,
        },
        type: {
            type: String,
        },
        showMsgMenu: {
            type: Function as PropType<undefined | ((eventData: MenuEventData, msg: Msg) => (Promise<void> | void))>,
        },
        showUserMenu: {
            type: Function as PropType<undefined | ((eventData: MenuEventData, user: Sender) => (Promise<void> | void))>,
        },
    },
    emits: {
        msgClick: (_event: MouseEvent, _msg: Msg) => true,
        imageLoaded: (_height: number) => true,
        scrollToMsg: (_id: string) => true,
        leftMove: (_msg: Msg) => true,
        rightMove: (_msg: Msg) => true,
        senderDoubleClick: (_user: Sender) => true,
    },
    data() {
        return {
            multiselectMode: false,
            multipleSelectList: new Set as Set<Msg>,
			isDeleteMsg,
			isShowTime,
            runtimeData,
            selectMsg: null as null | Msg,
            Msg,
            Notice,
            SystemNotice,
            allowInteraction: true
        }
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
            this.selectMsg = msg
            const promise = this.showMsgMenu(eventData, msg)
            if (!promise) return
            promise.then(() => {
                this.selectMsg = null
            })
        },
        openUserMenu(eventData: MenuEventData, user: Sender) {
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
            if (!this.multipleSelectList.has(msg)) this.multipleSelectList.add(msg)
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
                if (this.multipleSelectList.has(msg)) {
                    out.push(msg)
                }
            }
            return out
        },
        toggleMsgInMultiselectList(msg: Msg) {
            if (!this.multiselectMode) {
                throw new Error('多选模式未开启，无法添加消息到多选列表。')
            }
            if (!this.multipleSelectList.has(msg)) this.multipleSelectList.add(msg)
            else this.multipleSelectList.delete(msg)
        },
        //#endregion


        //#region ====工具函数==============================================
        isSelected(msg: Msg): boolean{
            return this.multipleSelectList.has(msg) || this.selectMsg === msg
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