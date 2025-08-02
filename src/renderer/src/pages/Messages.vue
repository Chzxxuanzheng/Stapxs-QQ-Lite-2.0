<!--
 * @FileDescription: 消息列表页面
 * @Author: Stapxs
 * @Date:
 *      2022/08/14
 *      2022/12/14
 *      2025/08/02
 * @Version:
 *      1.0 - 初始版本
 *      1.5 - 重构为 ts 版本，代码格式优化
 *      2.0 - 重构为 setup 语法，将右键菜单栏拆分出去
-->

<template>
    <div class="friend-view">
        <div id="message-list"
            :class="'friend-list' +
                (runtimeData.tags.openSideBar ? ' open' : '') +
                (showGroupAssist ? ' show' : '')">
            <div>
                <div class="base only">
                    <span>{{ $t('消息') }}</span>
                    <div style="flex: 1" />
                    <font-awesome-icon :icon="['fas', 'trash-can']" @click="cleanList" />
                </div>
                <div class="small">
                    <span>{{ $t('消息') }}</span>
                    <!-- <div v-if="showGroupAssist"
                        style="margin-right: -5px;margin-left: 5px;"
                        @click="showGroupAssist = !showGroupAssist">
                        <font-awesome-icon :icon="['fas', 'angle-left']" />
                    </div> -->
                    <div @click="openLeftBar">
                        <font-awesome-icon :icon="['fas', 'bars-staggered']" />
                    </div>
                </div>
            </div>
            <TransitionGroup
                id="message-list-body"
                name="onmsg"
                tag="div"
                :class="runtimeData.tags.openSideBar ? ' open' : ''"
                style="overflow-x: hidden">
                <!-- 系统信息 -->
                <!-- <FriendBody v-if="!showGroupAssist &&
                                runtimeData.systemNoticesList &&
                                Object.keys(runtimeData.systemNoticesList).length > 0"
                    key="inMessage--10000"
                    :select="chat.show.id === -10000"
                    :data="{
                        user_id: -10000,
                        always_top: true,
                        nickname: $t('系统通知'),
                        remark: $t('系统通知'),
                    }"
                    @click="systemNoticeClick" /> -->
                <!--- 群组消息 -->
                <!-- 群收纳盒 -->
                <!-- <FriendBody
                    v-if="runtimeData.groupAssistList && runtimeData.groupAssistList.length > 0"
                    key="inMessage--10001"
                    :select="chat.show.id === -10001"
                    :data="{
                        user_id: -10001,
                        always_top: true,
                        nickname: $t('群收纳盒'),
                        remark: $t('群收纳盒'),
                        time: runtimeData.groupAssistList[0].time,
                        raw_msg: runtimeData.groupAssistList[0].group_name + ': ' +
                            (runtimeData.groupAssistList[0].raw_msg_base ?? '')
                    }"
                    @click="showGroupAssistCheck" /> -->
                <!-- 其他消息 -->
                <FriendBody
                    v-for="item in showSessionList"
                    :key="'inMessage-' + item.id"
                    v-menu.prevent="event => menu?.open('message', item, event)"
                    :data="item as Session"
                    from="message"
                    @click="userClick(item as Session)" />
            </TransitionGroup>
        </div>
        <div id="group-assist-message-list"
            :class="'friend-list group-assist-message-list' +
                (runtimeData.tags.openSideBar ? ' open' : '') +
                (showGroupAssist ? ' show' : '')">
            <div>
                <div class="base only">
                    <!-- <span style="cursor: pointer;"
                        @click="showGroupAssist = !showGroupAssist">
                        <font-awesome-icon style="margin-right: 5px;" :icon="['fas', 'angle-left']" />
                        {{ $t('群收纳盒') }}
                    </span> -->
                </div>
                <div class="small">
                    <span style="cursor: pointer;">
                        {{ $t('群收纳盒') }}
                    </span>
                    <!-- <div v-if="showGroupAssist"
                        style="margin-right: -5px;margin-left: 5px;"
                        @click="showGroupAssist = !showGroupAssist">
                        <font-awesome-icon :icon="['fas', 'angle-left']" />
                    </div> -->
                    <div @click="openLeftBar">
                        <font-awesome-icon :icon="['fas', 'bars-staggered']" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'friend-list-space' + (runtimeData.tags.openSideBar ? ' open' : '')">
            <div v-if="!loginInfo.status || !runtimeData.nowChat" class="ss-card">
                <font-awesome-icon :icon="['fas', 'inbox']" />
                <span>{{ $t('选择联系人开始聊天') }}</span>
            </div>
            <div v-else class="ss-card">
                <font-awesome-icon :icon="['fas', 'angles-right']" />
                <span>(っ≧ω≦)っ</span>
                <span>{{ $t('别划了别划了被看见了啦') }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FriendBody from '@renderer/components/FriendBody.vue'
import FriendMenu from '@renderer/components/FriendMenu.vue'

import {
    onMounted,
    watch,
    shallowRef,
    inject,
} from 'vue'
import { runtimeData } from '@renderer/function/msg'
import { getRaw as getOpt, run as runOpt } from '@renderer/function/option'
import { library } from '@fortawesome/fontawesome-svg-core'
import { login as loginInfo } from '@renderer/function/connect'
import { sortActivateSession } from '@renderer/function/utils/msgUtil'

import {
    faThumbTack,
    faTrashCan,
    faCheckToSlot,
    faGripLines,
} from '@fortawesome/free-solid-svg-icons'
import { Notify } from '@renderer/function/notify'
import { Session } from '@renderer/function/model/session'
import { Message } from '@renderer/function/model/message'
import { vMenu } from '@renderer/function/utils/appUtil'

const emit = defineEmits<{
    userClick: [Session]
}>()

const showSessionList = shallowRef<Session[]>([])
// 旧群收纳盒的东西
const showGroupAssist = false
const menu: undefined | InstanceType<typeof FriendMenu> = inject('friendMenu')

onMounted(()=>{
    library.add(faCheckToSlot, faThumbTack, faTrashCan, faGripLines)
    reflashSessionList()
    // TODO: 调整置顶状况时刷新
    watch(
        () => Session.activeSessions.size,
        reflashSessionList,
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Session.newMessageHook.push((_: Session, _1: Message)=>{
        reflashSessionList()
    })
})

/**
 * 刷新会话列表
 */
function reflashSessionList() {
    // 监听激活会话列表变化,按照时间排序
    showSessionList.value = sortActivateSession()
}
/**
 * 会话点击事件
 * @param data 会话对象
 */
function userClick(data: Session) {
    const id = data.id
    if (id != runtimeData.nowChat?.id) {
        if (runtimeData.tags.openSideBar) {
            openLeftBar()
        }
        if (runtimeData.nowChat === data) return

        // 清除新消息标记
        data.setRead()
        // 关闭所有通知
        new Notify().closeAll((data.id).toString())

        // 更新聊天框
        emit('userClick', data)
        // 重置消息面板
        // PS：这儿的作用是在运行时如果切换到了特殊面板，在点击联系人的时候可以切回来
        if (
            runtimeData.sysConfig.chatview_name != '' &&
            runtimeData.sysConfig.chatview_name !=
                decodeURIComponent(getOpt('chatview_name') ?? '')
        ) {
            runtimeData.sysConfig.chatview_name =
                decodeURIComponent(getOpt('chatview_name') ?? '')
            runOpt('chatview_name', decodeURIComponent(getOpt('chatview_name') ?? ''))
        }
    }
}

// /**
//  * TODO:系统通知点击事件
//  */
// function systemNoticeClick() {
//     if (runtimeData.tags.openSideBar) {
//         openLeftBar()
//     }
//     const back = {
//         type: 'user',
//         id: -10000,
//         name: '系统消息',
//     }
//     emit('userClick', back)
//     runtimeData.sysConfig.chatview_name = 'SystemNotice'
//     runOpt('chatview_name', 'SystemNotice')
// }

/**
 * 侧边栏操作
 */
function openLeftBar() {
    runtimeData.tags.openSideBar = !runtimeData.tags.openSideBar
}

/**
 * 清空消息列表
 */
function cleanList() {
    // 卸载非置顶会话
    for (const item of Session.activeSessions) {
        if (!item.alwaysTop) item.unactive()
    }
}
</script>
<style>
    .onmsg-enter-active,
    .onmsg-leave-active,
    .onmsg-move {
        transition: transform 0.4s;
    }

    .menu div.item > a {
        font-size: 0.9rem !important;
    }
    .menu div.item > svg {
        margin: 3px 10px 3px 0 !important;
        font-size: 1rem !important;
    }

    .msg-menu-bg {
        background: transparent !important;
    }

    @media (max-width: 700px) {
        .menu {
            width: 140px !important;
        }
    }
</style>
