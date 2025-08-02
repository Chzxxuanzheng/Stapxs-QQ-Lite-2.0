<!--
 * @FileDescription: 联系人 / 消息列表项模板
 * @Author: Stapxs
 * @Date: 2022/08/14
 *        2025/07/27
 * @Version: 1.0
 *           2.0 - 将会话重构为类 和 setup式（Mr.Lee）
-->

<template>
    <div :id="'user-' + data.id"
        class="friend-body"
        :class="{
            'active': runtimeData.nowChat === data,
            'onmenu': runtimeData.nowChat !== data && isSelected(),
        }"
        :data-name="data.name"
        :data-nickname="data instanceof UserSession ? data.name : ''"
        :data-type="data.type">
        <div :class="{'new': data.showNotice}" />
        <font-awesome-icon v-if="data.id == -10000" :icon="['fas', 'bell']" />
        <font-awesome-icon v-else-if="data.id == -10001" :icon="['fas', 'user-group']" />
        <img v-else loading="lazy" :title="data.showName"
            :src="data.getFace()">
        <div>
            <div>
                <p>{{ data.showName }}</p>
                <div style="flex: 1" />
                <a v-if="data.preMessage?.time" class="time">{{
                    data.preMessage?.time.format('hour')
                }}</a>
            </div>
            <div>
                <a v-for="(item, index) in data.highlightInfo.slice(0, 2)" :key="index" class="highlight">
                    [{{ item }}]
                </a>
                <!-- 不敢乱掉获取个性签名的api,先注释了 -->
                <!-- <a :class="from == 'friend' ? 'nick' : ''">{{
                    from == 'friend' ? (data.longNick ?? '') : data.raw_msg
                }}</a> -->
                <a :class="from == 'friend' ? 'nick' : ''">{{
                    from == 'friend' ? '' : data.preMessage?.preMsg ?? ''
                }}</a>
                <div style="margin-left: 10px; display: flex">
                    <font-awesome-icon v-if="data.alwaysTop" :icon="['fas', 'thumbtack']" />
                    <font-awesome-icon v-if="shouldShowNotice()" :icon="['fas', 'bell']" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GroupSession, Session, UserSession } from '@renderer/function/model/session'
import { runtimeData } from '@renderer/function/msg'
import { inject } from 'vue'
import FriendMenu from './FriendMenu.vue';

const {
    data,
    from='message'
} = defineProps<{
    data: Session,
    from?: 'message' | 'friend'
}>()

const menu = inject<Ref<InstanceType<typeof FriendMenu> | undefined>>('friendMenu')

function shouldShowNotice(): boolean {
    if (!(data instanceof GroupSession)) return false
    if (runtimeData.sysConfig.group_notice_type === 'all')  return false
    return data.notice
}
function isSelected(): boolean {
    if (!menu?.value) return false
    if (!menu.value.selectSession) return false
    return menu.value.selectSession.id === data.id
}
</script>
