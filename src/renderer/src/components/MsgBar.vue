<!--
 * @FileDescription: 消息栏，用于绘制 MsgBody 和 NoticeBody
 * @Author: Mr.Lee
 * @Date: 2025/07/07
 * @Version: 1.0
-->
<template>
    <TransitionGroup :name="runtimeData.sysConfig.opt_fast_animation ? '' : 'msglist'" tag="div">
        <template v-for="(msgIndex, index) in msgs">
            <!-- 时间戳 -->
            <NoticeBody
                v-if="msgIndex.time && isShowTime(msgs[index - 1] ? msgs[index - 1].time : undefined, msgIndex.time)"
                :key="'notice-time-' + (msgIndex.time / ( 4 * 60 )).toFixed(0)"
                :data="{ sub_type: 'time', time: msgIndex.time }" />
            <!-- [已删除]消息 -->
            <NoticeBody
                v-if="isDeleteMsg(msgIndex)"
                :key="'delete-' + msgIndex.message_id"
                :data="{ sub_type: 'delete' }" />
            <!-- 消息体 -->
            <MsgBody v-else-if="msgIndex instanceof Msg"
                :key="'msg-' + msgIndex.uuid"
                :selected="isSelected(msgIndex)"
                :data="msgIndex"
                :type="type"
                @click="$emit('msgClick', $event, msgIndex)"
                @scroll-to-msg="arg=>$emit('scrollToMsg', arg)"
                @image-loaded="arg=>$emit('imageLoaded', arg)"
                @contextmenu.prevent="$emit('showMsgMenu', $event, msgIndex)"
                @touchstart="msgStartMove($event, msgIndex)"
                @touchmove="msgOnMove($event)"
                @touchend="msgMoveEnd($event, msgIndex)"
                @send-poke="arg => $emit('sendPoke', arg)"
                />
            <!-- 其他通知消息 -->
            <NoticeBody v-else-if="msgIndex.post_type === 'notice'"
                :id="uuid()"
                :key="'notice-' + index"
                :data="msgIndex" />
        </template>
    </TransitionGroup>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MsgBody from './MsgBody.vue'
import NoticeBody from './NoticeBody.vue'

import { v4 as uuid } from 'uuid'
import { isDeleteMsg, isShowTime } from '@renderer/function/utils/msgUtil';
import { runtimeData } from '@renderer/function/msg';
import { Logger, LogType } from '@renderer/function/base';
import { Message, Msg } from '@renderer/function/model/msg';

export default defineComponent({
    components: { MsgBody, NoticeBody },
    props: {
        msgs: {
            type: Array as () => Message[],
            required: true,
        },
        multipleSelectList: {
            type: Array as () => Msg[],
            default: () => [],
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
            uuid,
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
        }
    },
    methods: {
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
        isSelected(msg: any): boolean{
            if (this.type === 'merge') return false
            return this.multipleSelectList.includes(msg.message_id) ||
                this.tags.openedMenuMsg?.id == 'chat-' + msg.message_id
        }
    }
});
</script>