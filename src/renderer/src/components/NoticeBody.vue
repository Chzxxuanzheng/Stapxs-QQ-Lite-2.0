<!--
 * @FileDescription: 通知消息模板
 * @Author: Stapxs
 * @Date: 2022/12/04
 * @Version: 1.0
-->

<template>
    <div :id="'notice-' + id" class="note">

        <!--
        ============================
        接收到的消息
        ============================
        -->
        <!-- 撤回 -->
        <div v-if="data instanceof RevokeNotice" class="note-recall note-base">
            <template v-if="data.selfRevoke">
                <a>{{ data.user }}</a>
                <span>{{ $t('撤回了一条消息') }}</span>
                <div />
            </template>
            <template v-else>
                <a>{{ data.operator }}</a>
                <span>{{ $t('撤回了') }}</span>
                <a>{{ data.user }}</a>
                <span>{{ $t('的消息') }}</span>
            </template>
        </div>
        <!-- 禁言 -->
        <div v-else-if="data instanceof BanNotice" class="note-ban note-base">
            <a>{{ data.operator }}</a>
            <span>{{ data.tome ? $t('禁言了你') : data.user }}</span>
            <span>{{ data.fTime }}</span>
        </div>
        <!-- 解除禁言 -->
        <div v-else-if="data instanceof BanLiftNotice" class="note-ban note-base">
            <a>{{ data.operator }}</a>
            <span>{{ $t('解除了') }}</span>
            <a>{{ data.tome ? $t('你') : data.user }}</a>
            <span>{{ $t('的禁言') }}</span>
        </div>
        <!-- 戳一戳 -->
        <div v-else-if="data instanceof PokeNotice" class="note-notify note-base">
            <span>{{ data.user }}</span>
            <img :src="data.img">
            <a>{{ data.action }}</a>
            <span>{{ data.target }}</span>
            <a>{{ data.suffix }}</a>
            <div class="space" />
        </div>
        <div v-else-if="data instanceof JoinNotice" class="note-notify note-base">
            <template v-if="data.join_type === 'approve'">
                <span>{{ data.operator }}</span>
                <a>{{ $t('通过了') }}</a>
                <span>{{ data.user }}</span>
                <a>{{ $t('的入群申请') }}</a>
            </template>
            <template v-else-if="data.join_type === 'invite'">
                <span>{{ data.operator }}</span>
                <a>{{ $t('邀请') }}</a>
                <span>{{ data.user }}</span>
                <a>{{ $t('加入了群聊') }}</a>
            </template>
            <template v-else-if="data.join_type === 'self'">
                <span>{{ data.user }}</span>
                <a>{{ $t('加入了群聊') }}</a>
            </template>
        </div>
        <div v-else-if="data instanceof LeaveNotice" class="note-notify note-base">
            <template v-if="data.kick">
                <span>{{ data.operator }}</span>
                <a>{{ $t('将') }}</a>
                <span>{{ data.user }}</span>
                <a>{{ $t('移出群聊') }}</a>
            </template>
            <template v-else>
                <span>{{ data.user }}</span>
                <a>{{ $t('离开了群聊') }}</a>
            </template>
        </div>


        <!--
        ============================
        内部系统消息
        ============================
        -->
        <!-- 缺失消息 -->
        <div v-else-if="data instanceof DeleteNotice" class="note-base">
            <span>{{ $t('这条消息迷失在虚空里了') }}</span>
        </div>
        <!-- 时间 -->
        <div v-else-if="data instanceof TimeNotice && data.time != undefined"
            class="note-time note-base">
            <a>{{ data.formatTime() }}</a>
        </div>
        <!-- 通知 -->
        <div v-else-if="data instanceof InfoNotice" class="note-base">
            <a>{{ data.message }}</a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { runtimeData } from '@renderer/function/msg'
    import {
        getTimeConfig,
        getTrueLang,
        callBackend,
    } from '@renderer/function/utils/systemUtil'
    import { pokeAnime } from '@renderer/function/utils/msgUtil'
    import { BanNotice, DeleteNotice, BanLiftNotice, Notice, PokeNotice, RevokeNotice, TimeNotice, LeaveNotice, JoinNotice, InfoNotice } from '@renderer/function/model/notice'

    export default defineComponent({
        name: 'NoticeBody',
        props: {
            data: {
                type: Object as () => Notice,
                required: true,
            },
            id: {
                type: String as () => string|undefined,
            },
        },
        data() {
            return {
                trueLang: getTrueLang(),
                getTimeConfig,
                info: ref(this.data) as { [key: string]: any },
                RevokeNotice,
                PokeNotice,
                TimeNotice,
                DeleteNotice,
                BanNotice,
                BanLiftNotice,
                LeaveNotice,
                JoinNotice,
                InfoNotice,
            }
        },
        async mounted() {
            let windowInfo = null as {
                x: number
                y: number
                width: number
                height: number
            } | null
            // 补全撤回者信息
            if (runtimeData.chatInfo.show.type === 'group') {
                this.data.initUserInfo(runtimeData.chatInfo.info.group_members)
            }else {
                this.data.initUserInfo(runtimeData.chatInfo.show.name, runtimeData.chatInfo.show.id)
            }
            // poke 通知创建对应的动画
            // PS：只有最后一条 poke 通知会触发动画，避免反复触发动画
            windowInfo = await callBackend(undefined, 'win:getWindowInfo', true)
            if (this.data instanceof PokeNotice && this.data.tome &&
                this.info == runtimeData.messageList.at(-1)) {
                    let item = document.getElementById('app')
                    if (['electron', 'tauri'].includes(runtimeData.tags.clientType)) {
                        item = document.getElementById('notice-' + this.id)?.getElementsByClassName('space')[0] as HTMLElement
                    }
                    pokeAnime(item, windowInfo)
            }
        },
    })
</script>
