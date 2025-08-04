<!--
 * @FileDescription: 搜索列表用的会话本体
 * @Author: Mr.Lee
 * @Date:
 *      2025/08/02
 * @Version:
 *      1.0 - 初始版本
 * @Description:
 *      该组件用于展示会话列表的元素。转发和收纳盒设置需要用。直接套用FriendBody开销太大，这个更轻量级
-->
<template>
    <div :key=" 'tiny-' + String(session.id)"
        class="tiny-session-body"
        :class="{selected: selected}">
        <div />
        <font-awesome-icon
            v-if="session instanceof SessionBox"
            :icon="['fas', session.icon]"
            :style="{'--color':session.color}" />
        <img v-else loading="lazy"
            :title="session.showName"
            :src="session.getFace()">
        <div>
            <p>
                {{ session.showName }}
            </p>
            <span v-if="session.type === 'group'">{{ $t('群组') }}</span>
            <span v-else-if="session.type === 'user'">{{ $t('好友') }}</span>
            <span v-else-if="session.type === 'temp'">{{ $t('临时会话') }}</span>
            <span v-else-if="session.type === 'box'">{{ $t('收纳盒') }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SessionBox } from '@renderer/function/model/box'
import { Session } from '@renderer/function/model/session'

const { session, selected = false } = defineProps<{
    session: Session | SessionBox,
    selected?: boolean
}>()
</script>
