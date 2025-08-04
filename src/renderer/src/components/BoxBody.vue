<!--
 * @FileDescription: 收纳盒本体
 * @Author: Mr.Lee
 * @Date:
 *      2025/08/02
 * @Version:
 *      1.0 - 初始版本
-->

<template>
    <div :id="'box-' + data.id"
        :class="{
            'box-body': true,
            'open': open,
            'active': active,
            'onmenu': !active && (onmenu || open),
            'unmounted': from === 'message' && !data.isActive
        }"
        :style="{'--box-color': data.color}"
        @click="data.length ? open = !open : undefined">
        <div>
            <div :class="{'new': data.showNotice}" />
            <font-awesome-icon :icon="['fas', data.icon]" />
            <div>
                <div>
                    <p>{{ data.showName }}</p>
                    <div style="flex: 1" />
                    <a v-if="data.preMessage?.time" class="time">{{
                        data.preMessage?.time.format('hour')
                    }}</a>
                </div>
                <div>
                    <template v-if="from === 'message'">
                        <a v-for="(item, index) in data.highlightInfo.slice(0, 2)" :key="index" class="highlight">
                            [{{ item }}]
                        </a>
                        <a>
                            {{ data.preMsg }}
                        </a>
                    </template>
                    <template v-else-if="from === 'friend'">
                        <a v-if="data.length > 0">
                            {{ $t('收纳了') + data.length + $t('个会话') }}
                        </a>
                        <a v-else>
                            {{ $t('可恶——这里面为什么什么都没有！') }}
                        </a>
                    </template>
                    <template v-else>
                        <a>{{ cialloMsg }}</a>
                    </template>
                    <div style="margin-left: 10px; display: flex">
                        <font-awesome-icon v-if="data.alwaysTop" :icon="['fas', 'thumbtack']" />
                    </div>
                </div>
            </div>
        </div>
        <div />
        <Transition name="box-content">
            <div
                v-if="open && from !== 'new'"
                class="session-body-container"
                :style="{'--content-num': data.length}">
                <div v-if="from === 'message'"
                    class="box-content">
                    <TransitionGroup
                        name="onmsg"
                        tag="div">
                        <FriendBody v-for="item in data.sortContentByTime"
                            :key="item.id"
                            v-menu.prevent.stop="event => menu?.open('message', item, event, data)"
                            :data="item"
                            :from="from"
                            :box="data"
                            @click.stop="emit('userClick', item)" />
                    </TransitionGroup>
                </div>
                <div v-else
                    class="box-content">
                    <FriendBody v-for="item in data.sortContentByName"
                        :key="item.id"
                        v-menu.prevent.stop="event => menu?.open('friend', item, event, data)"
                        :data="item"
                        :from="from"
                        :box="data"
                        @click.stop="emit('userClick', item)" />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { SessionBox } from '@renderer/function/model/box'
import {
    ref,
    inject,
    watch,
    computed,
} from 'vue'

import FriendMenu from './FriendMenu.vue'
import FriendBody from './FriendBody.vue'
import { randomChoice, randomNum } from '@renderer/function/utils/systemUtil'
import { i18n } from '@renderer/main'
import { runtimeData } from '@renderer/function/msg'
import { Session } from '@renderer/function/model/session'
import { vMenu } from '@renderer/function/utils/appUtil'
const $t = i18n.global.t
//#region == 彩蛋相关 ============================================================
const cialloList = [
    '拟吼哇.欧四与个会所话读后组～',
    '听说给stapxs-qq-lite给star会有好运发生',
    '你就是我的新主人吗？请多多指教～',
    '我的眼里只有你，亿万星辰犹不及',
    '电动的，来自拉格让日点牛奶',
    '爱丽丝·妈个陀螺仪的',
    'NoneBot，是一个用于工业级单片机通讯的框架',
    'await mathcer.send(\'ciallo world\')',
    '(...args: any[]) => \'ciallo world\'',
    'await UniMessage(\'ciallo world\').send()',
].map(item => $t(item))
const flanAge = Math.floor(
    (Date.now() - new Date('2002-07-04').getTime()) / (365.25 * 24 * 60 * 60 * 1000)
) + 495

// 我也来搞个抽签
// @Stapxs 可以试试把这个扔umami上
let cialloMsg = randomChoice(...cialloList)
const random = randomNum(0, 5000)
if (random === flanAge)
    cialloMsg = $t('{arg} 这是某个吸血鬼少女的年龄', { arg: flanAge })
//#endregion

//#region == 变量生命 ============================================================
const {
    data,
    from = 'message',
} = defineProps<{
    data: SessionBox,
    from?: 'message' | 'friend' | 'new'
}>()
const emit = defineEmits<{
    userClick: [session: Session],
}>()

const open = ref(false)
const menu = inject<Ref<InstanceType<typeof FriendMenu> | undefined>>('friendMenu')
//#endregion

watch(()=>runtimeData.nowBox?.id, ()=>{
    if (!runtimeData.nowBox) return
    if(runtimeData.nowBox.id === data.id) {
        open.value = true
    } else {
        open.value = false
    }
})

const onmenu = computed(()=>{
    if (!menu?.value) return false
    if (!menu.value.selectBox) return false
    return menu.value.selectBox.id === data.id
})
const active = computed(() => {
    return runtimeData.nowBox?.id === data.id
})
</script>
