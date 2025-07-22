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
            'disable-interaction': multiselectMode,
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
                @contextmenu.prevent="$emit('showMsgMenu', $event, msgIndex)"
                @touchstart="msgStartMove($event, msgIndex)"
                @touchmove="msgOnMove($event)"
                @touchend="msgMoveEnd($event, msgIndex)"
                @send-poke="arg => $emit('sendPoke', arg)"
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
import { defineComponent } from 'vue'
import MsgBody from './MsgBody.vue'
import NoticeBody from './NoticeBody.vue'

import { isDeleteMsg, isShowTime } from '@renderer/function/utils/msgUtil';
import { runtimeData } from '@renderer/function/msg';
import { Logger, LogType } from '@renderer/function/base';
import { Msg } from '@renderer/function/model/msg';
import { Message } from '@renderer/function/model/message';
import { Notice, SystemNotice } from '@renderer/function/model/notice';

export default defineComponent({
    components: { MsgBody, NoticeBody },
    props: {
        msgs: {
            type: Array as () => Message[],
            required: true,
        },
        tags: {
            type: Object as () => { [key: string]: any },
            default: () => ({}),
        },
        type: {
            type: String,
        },
    },
    emits: ['msgClick', 'showMsgMenu', 'forward', 'scrollToMsg', 'imageLoaded', 'sendPoke', 'replyMsg'],
    data() {
        return {
            multiselectMode: false,
            multipleSelectList: new Set as Set<Msg>,
			isDeleteMsg,
			isShowTime,
            runtimeData,
            msgTouch: {
                x: -1,
                y: -1,
                msgOnTouchDown: false,
                onMove: 'no',
            },
            Msg,
            Notice,
            SystemNotice,
        }
    },
    methods: {
        //#region ====消息互动相关==========================================
        /**
         * 消息触屏开始
         * @param event 触摸事件
         */
        msgStartMove(event: TouchEvent, msg: any) {
            const logger = new Logger()
            logger.add(LogType.UI, '消息触屏点击事件开始 ……')
            this.msgTouch.msgOnTouchDown = true
            this.msgTouch.x = event.targetTouches[0].pageX
            this.msgTouch.y = event.targetTouches[0].pageY

            // PS：保存这个只是在 Safari 下菜单事件无法获取到
            this.tags.openedMenuMsg = {
                msg: event.currentTarget as HTMLDivElement,
                x: event.targetTouches[0].pageX,
                y: event.targetTouches[0].pageY,
            }

            // 消息长按事件，计时判定长按
            setTimeout(() => {
                logger.add(
                    LogType.UI,
                    '消息触屏长按判定：' +
                        this.msgTouch.msgOnTouchDown,
                )
                if (this.msgTouch.msgOnTouchDown === true) {
                    this.$emit('showMsgMenu', event, msg)
                }
            }, 400)
        },

        /**
         * 消息触屏移动
         * @param event 触摸事件
         */
        msgOnMove(event: TouchEvent) {
            const logger = new Logger()
            const sender = event.currentTarget as HTMLDivElement
            const msgPan = document.getElementById('msgPan')
            // 开始点击的位置
            const startX = this.msgTouch.x
            const startY = this.msgTouch.y
            // TODO: 懒得写了，移动的允许范围，用来防止按住了挪出控件范围导致无法触发 end
            // const maxTop = sender.
            if (startX > -1 && startY > -1 && msgPan) {
                // 计算移动差值
                const dx = Math.abs(startX - event.targetTouches[0].pageX)
                const dy = Math.abs(startY - event.targetTouches[0].pageY)
                const x = startX - event.targetTouches[0].pageX
                // 如果 dy 大于 10px 则判定为用户在滚动页面，打断长按消息判定
                if (dy > 10) {
                    this.tags.chatTouch.onScroll = true
                }
                if (dy > 10 || dx > 5) {
                    if (this.msgTouch.msgOnTouchDown) {
                        logger.add(LogType.UI, '用户正在滑动，打断长按判定。')
                        this.msgTouch.msgOnTouchDown = false
                    }
                }
                if (dy < sender.offsetHeight / 3 && dy < 40) {
                    this.msgTouch.onMove = 'on'
                    if (x > 10) {
                        // 右滑
                        if (dx >= sender.offsetWidth / 3) {
                            this.msgTouch.onMove = 'left'
                            logger.add(
                                LogType.UI,
                                '触发左滑判定 ……（回复）',
                            )
                        } else {
                            sender.style.transform =
                                'translate(-' + (Math.sqrt(dx) + 5) + 'px)'
                            sender.style.transition = 'transform 0s'
                        }
                    }
                } else {
                    this.msgTouch.onMove = 'no'
                    sender.style.transform = 'translate(0px)'
                }
            }
        },

        /**
         * 消息触屏结束
         * @param event 触摸事件
         * @param msg 消息对象
         */
        msgMoveEnd(event: Event, msg: any) {
            const sender = event.currentTarget as HTMLDivElement
            sender.style.transform = 'translate(0px)'
            // 判断操作
            if (this.msgTouch.onMove == 'left') {
                // 左滑回复
                this.$emit('replyMsg', msg)
            } else if (this.msgTouch.onMove == 'right') {
                // 右滑转发
                this.$emit('forward', msg)
            }
            // 重置数据
            const data = (this as any).$options.data(this)
            this.msgTouch = data.msgTouch
        },
        msgClick(event: MouseEvent, msg: Msg) {
            if (this.multiselectMode) {
                // 如果处于多选模式，添加或移除消息到多选列表
                this.toggleMsgInMultiselectList(msg)
            } else {
                // 否则，触发单击事件
                this.$emit('msgClick', event, msg)
            }
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
            if (this.type === 'merge') return false
            return this.multipleSelectList.has(msg) ||
                this.tags.openedMenuMsg?.id == 'chat-' + msg.message_id
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