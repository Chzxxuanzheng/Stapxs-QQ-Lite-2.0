<!--
 * @FileDescription: 联系人列表页面
 * @Author: Stapxs
 * @Date:
 *      2022/08/14
 *      2022/12/12
 *      2025/07/27
 * @Version:
 *      1.0 - 初始版本
 *      1.5 - 重构为 ts 版本，代码格式优化
 *      2.0 - 将会话重构为类+setup式API（Mr.Lee）
-->

<template>
    <div class="friend-view">
        <div id="friend-list" :class="'friend-list' + (runtimeData.tags.openSideBar ? ' open' : '')">
            <div>
                <div class="base">
                    <span>{{ $t('联系人') }}</span>
                    <div style="flex: 1" />
                    <font-awesome-icon :icon="['fas', 'rotate-right']" @click="reloadUsers(false)" />
                </div>
                <div
                    id="friend-small-search"
                    class="small">
                    <label>
                        <input
                            v-model="searchInfo"
                            v-auto-focus type="text"
                            :placeholder="$t('搜索 ……')" @input="search">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </label>
                    <div class="reload" @click="reloadUsers(false)">
                        <font-awesome-icon :icon="['fas', 'rotate-right']" />
                    </div>
                    <div @click="openLeftBar">
                        <font-awesome-icon :icon="['fas', 'bars-staggered']" />
                    </div>
                </div>
                <label>
                    <input
                        v-model="searchInfo"
                        v-auto-focus type="text"
                        :placeholder="$t('搜索 ……')" @input="search">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </label>
            </div>
            <div class="session-body-container" :class="runtimeData.tags.openSideBar ? 'open' : ''">
                <template v-if="!isSearch">
                    <template v-for="class_ in SessionClass.getClasses()"
                        :key="'class-' + class_.id">
                        <div class="list exp-body" :class="{'open': class_.open}">
                            <header :title="class_.name"
                                :class="'exp-header' +
                                    (runtimeData.tags.openSideBar ? ' open' : '')"
                                @click="class_.open = !class_.open">
                                <div />
                                <span>{{ class_.name }}</span>
                                <a>{{ class_.content.length }}</a>
                            </header>
                            <div :id="'class-' + class_.id">
                                <FriendBody v-for="item in class_.content"
                                    :key=" 'fb-' + item.id "
                                    v-menu.prevent="event => {
                                        console.log(menu, menu === undefined)
                                        menu!.open('friend', item, event)
                                    }"
                                    :data="item"
                                    from="friend"
                                    @click="userClick(item as Session)" />
                            </div>
                        </div>
                    </template>
                </template>
                <!-- 搜索用的 -->
                <div v-else class="list">
                    <div>
                        <FriendBody v-for="item in searchList"
                            :key="'fb-' + item.id"
                            v-menu.prevent="event => menu?.open('friend', item, event)"
                            :data="item as Session"
                            from="friend"
                            @click="userClick(item as Session)" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'friend-list-space' + (runtimeData.tags.openSideBar ? ' open' : '')">
            <div v-if="!driver.isConnected() || !runtimeData.nowChat" class="ss-card">
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
    shallowRef,
    type ShallowRef,
    inject,
} from 'vue'
import { runtimeData } from '@renderer/function/msg'
import { reloadUsers } from '@renderer/function/utils/appUtil'
import { vMenu } from '@renderer/function/utils/vcmd'
import { SessionClass, Session } from '@renderer/function/model/session'
import { vAutoFocus } from '@renderer/function/utils/vcmd'
import driver from '@renderer/function/driver'
import { backend } from '@renderer/runtime/backend'

const emit = defineEmits<{
    userClick: [session: Session],
}>()

const isSearch: ShallowRef<boolean> = shallowRef(false)
const searchList: ShallowRef<Session[]> = shallowRef([])
const searchInfo: ShallowRef<string> = shallowRef('')

const menu: undefined | InstanceType<typeof FriendMenu> = inject('friendMenu')

/**
 * 联系人被点击事件
 * @param session 联系人信息
 * @param event 点击事件
 */
function userClick(session: Session) {
    if (runtimeData.tags.openSideBar) {
        openLeftBar()
    }
    // 重置搜索信息
    isSearch.value = false
    searchList.value = []
    searchInfo.value = ''
    // 更新聊天框
    emit('userClick', session)
    // 切换标签卡
    const barMsg = document.getElementById('bar-msg')
    if (barMsg !== null) {
        barMsg.click()
    }
}

/**
 * 列表搜索
 * @param event 输入事件
 */
function search(event: Event) {
    const value = (event.target as HTMLInputElement).value
    if (value !== '') {
        isSearch.value = true
        searchList.value = Session.sessionList.filter(
            session => session.match(value)
        )
    } else {
        isSearch.value = false
        searchList.value = []
    }
    // macOS: 刷新 TouchBar
    if(backend.isDesktop()) {
        // list 只需要 id 和 name
        backend.call(undefined, 'sys:flushFriendSearch', false,
            searchList.value.map((item) => {
                return {
                    id: item.id,
                    name: item.showName,
                }
            }
        ))
    }
}

/**
 * 切换侧边栏状态
 */
function openLeftBar() {
    runtimeData.tags.openSideBar = !runtimeData.tags.openSideBar
}
</script>

<style scoped>
    .exp-body > div {
        transform: scaleY(0);
        height: 0;
    }
    .exp-body.open > div {
        transform: scaleY(1);
        height: unset;
    }
    .exp-body > header > div {
        transition:
            margin-right 0.3s,
            transform 0.3s;
        transform: scaleY(0);
        margin-right: 0;
        width: 0;
    }
    .exp-body.open > header > div {
        transform: scaleY(1);
        margin-right: 10px;
        width: 5px;
    }

    .exp-header {
        color: var(--color-font);
        align-items: center;
        border-radius: 7px;
        cursor: pointer;
        margin: 0 10px;
        padding: 10px;
        display: flex;
    }
    .exp-header:hover {
        background: var(--color-card-2);
    }
    .exp-header > div {
        background: var(--color-main);
        margin-right: 10px;
        border-radius: 7px;
        height: 1rem;
        width: 5px;
    }
    .exp-header > span {
        flex: 1;
    }
    .exp-header > a {
        color: var(--color-font-2);
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        .exp-header:not(.open) {
            display: none;
        }
    }
    @media (max-width: 500px) {
        .exp-header > span {
            display: block !important;
        }
    }
</style>
