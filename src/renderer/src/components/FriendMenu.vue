<!--
 * @FileDescription: 会话右键菜单
 * @Author: Mr.Lee
 * @Date:
 *      2025/08/02
 * @Version:
 *      1.0 - 初始版本
 * @Description:
 *      原本的只能在Message.vue中使用的右键菜单，现在抽离出来，方便其他组件使用
-->
<template>
    <Menu ref="menu" name="chat-menu">
        <div class="ss-card msg-menu-body">
            <div v-if="displayTag.top" @click="clickTop">
                <div><font-awesome-icon :icon="['fas', 'fa-thumbtack']" /></div>
                <a>{{ $t('置顶') }}</a>
            </div>
            <div v-if="displayTag.cancelTop" @click="clickCancelTop">
                <div><font-awesome-icon :icon="['fas', 'fa-grip-lines']" /></div>
                <a>{{ $t('取消置顶') }}</a>
            </div>
            <div v-if="displayTag.remove" @click="clickRemove">
                <div><font-awesome-icon :icon="['fas', 'fa-trash-can']" /></div>
                <a>{{ $t('删除') }}</a>
            </div>
            <div v-if="displayTag.reactive" @click="clickReactive">
                <div><font-awesome-icon :icon="['fas', 'fa-undo']" /></div>
                <a>{{ $t('重新加载') }}</a>
            </div>
            <div v-if="displayTag.readed" @click="clickReaded">
                <div><font-awesome-icon :icon="['fas', 'fa-check-to-slot']" /></div>
                <a>{{ $t('标记已读') }}</a>
            </div>
            <div v-if="displayTag.read" @click="clickRead">
                <div><font-awesome-icon :icon="['fas', 'fa-flag']" /></div>
                <a>{{ $t('标记未读') }}</a>
            </div>
            <div v-if="displayTag.noticeOpen" @click="clickNoticeOpen">
                <div><font-awesome-icon :icon="['fas', 'fa-volume-high']" /></div>
                <a>{{ $t('开启通知') }}</a>
            </div>
            <div v-if="displayTag.noticeClose" @click="clickNoticeClose">
                <div><font-awesome-icon :icon="['fas', 'fa-volume-xmark']" /></div>
                <a>{{ $t('关闭通知') }}</a>
            </div>
        </div>
    </Menu>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
import {
    shallowRef,
    ShallowRef,
    shallowReactive,
    ShallowReactive,
    ref,
    Ref
} from 'vue'
import { MenuEventData } from '@renderer/function/elements/information';
import { GroupSession, Session } from '@renderer/function/model/session';

//#region == 声明变量 ================================================================
const menu: Ref<undefined|InstanceType<typeof Menu>> = ref()
const selectSession: ShallowRef<Session|undefined> = shallowRef(undefined)
const from: ShallowRef<'message' | 'friend'> = shallowRef('message')
const displayTag: ShallowReactive<{
    top: boolean,
    cancelTop: boolean,
    remove: boolean,
    reactive: boolean,
    readed: boolean,
    read: boolean,
    noticeOpen: boolean,
    noticeClose: boolean,
}> = shallowReactive({
    top: false,
    cancelTop: false,
    remove: false,
    reactive: false,
    readed: false,
    read: false,
    noticeOpen: false,
    noticeClose: false
})

// 导出
defineExpose({
    selectSession,
    open,
})
//#endregion

//#region == 方法函数 ================================================================
async function open(
    fromComponent: 'message' | 'friend',
    session: Session,
    event: MenuEventData
): Promise<void> {
    from.value = fromComponent
    selectSession.value = session
    console.log('open menu', fromComponent, session.id, event.x, event.y)
    console.log(menu.value)
    if (!menu.value) return
    if (menu.value.isShow()) return
    console.log('open menu', fromComponent, session.id, event.x, event.y)

    // 检测需要显示的菜单项
    // 置顶
    if (session.alwaysTop) {
        displayTag.top = false
        displayTag.cancelTop = true
    } else {
        displayTag.top = true
        displayTag.cancelTop = false
    }
    // 删除与刷新
    if (fromComponent === 'message') {
        if (session.alwaysTop) {
            displayTag.remove = false
            displayTag.reactive = true
        } else {
            displayTag.remove = true
            displayTag.reactive = false
        }
    } else {
        displayTag.remove = false
        displayTag.reactive = false
    }
    // 已读与未读
    if (fromComponent === 'message') {
        if (session.showNotice) {
            displayTag.readed = false
            displayTag.read = true
        } else {
            displayTag.readed = true
            displayTag.read = false
        }
    }else {
        displayTag.readed = false
        displayTag.read = false
    }
    // 通知开关
    if (session instanceof GroupSession) {
        if (session.notice) {
            displayTag.noticeOpen = false
            displayTag.noticeClose = true
        } else {
            displayTag.noticeOpen = true
            displayTag.noticeClose = false
        }
    }else {
        displayTag.noticeOpen = false
        displayTag.noticeClose = false
    }

    console.log(displayTag)

    await menu.value.showMenu(event.x, event.y)
}

function close(): void {
    if (!menu.value) return
    menu.value.closeMenu()
}

function clickTop() {
    selectSession.value?.setAlwaysTop(true)
    close()
}
function clickCancelTop() {
    selectSession.value?.setAlwaysTop(false)
    close()
}
function clickRemove() {
    selectSession.value?.unactive()
    close()
}
function clickReactive() {
    selectSession.value?.unactive()
    selectSession.value?.activate()
    close()
}
function clickReaded() {
    selectSession.value?.setRead()
    close()
}
function clickRead() {
    if (!selectSession.value) return
    selectSession.value.showNotice = true
    close()
}
function clickNoticeOpen() {
    (selectSession.value as GroupSession)?.setNotice(true)
    close()
}
function clickNoticeClose() {
    (selectSession.value as GroupSession)?.setNotice(false)
    close()
}
//#endregion
</script>
