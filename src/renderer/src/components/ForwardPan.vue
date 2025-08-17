<!--
 * @FileDescription: 转发栏组件
 * @Author: Stapxs
 * @Date: 2025/07/31
 *        2025/07/27
 * @Version: 1.0
-->
<template>
    <Transition>
        <Teleport to="body">
            <div v-if="show" class="forward-pan">
                <div class="ss-card card">
                    <header>
                        <span>{{ $t('转发消息') }}</span>
                        <font-awesome-icon :icon="['fas', 'xmark']" @click="close" />
                    </header>
                    <div>
                        <input
                            v-search="searchInfo"
                            :placeholder="$t('搜索 ……')">
                        <button v-if="!multiselectMode"
                            @click="multiselectMode=true">
                            多选
                        </button>
                        <button v-if="multiselectMode"
                            @click="runForward">
                            发送
                        </button>
                    </div>
                    <div>
                        <TinySessionBody v-for="session in displaySession"
                            :key="session.id"
                            :session="session"
                            :selected="selected.includes(session)"
                            @click="clickChat(session)" />
                    </div>
                </div>
                <div class="bg" @click="close" />
            </div>
        </Teleport>
    </Transition>
</template>
<script setup lang="ts">
import MsgBar from './MsgBar.vue'
import TinySessionBody from './TinySessionBody.vue'

import { runtimeData } from '@renderer/function/msg'
import { markRaw } from 'vue'
import { Msg, SelfMsg, SelfPreMergeMsg, SelfPreMsg } from '@renderer/function/model/msg'
import { Session } from '@renderer/function/model/session'
import {
    shallowRef,
    ShallowRef,
    shallowReactive,
    computed,
} from 'vue'
import { delay } from '@renderer/function/utils/systemUtil'
import app from '@renderer/main'
import { changeSession } from '@renderer/function/utils/msgUtil'
import { vSearch } from '@renderer/function/utils/appUtil'
import { popBox } from '@renderer/function/utils/popBox'

//#region == 声明/导出变量 ===========================================================
// 变量
const { $t } = app.config.globalProperties
const show: ShallowRef<boolean> = shallowRef(false)
const selected: ShallowRef<Session[]> = shallowRef([])
const msgs: ShallowRef<Msg[]> = shallowRef([])
const type: ShallowRef<'single' | 'merge'> = shallowRef('single')
const multiselectMode: ShallowRef<boolean> = shallowRef(false)
const reflashDisplaySession = shallowRef(0)
const searchInfo = shallowReactive({
    originList: shallowReactive<Session[]>([]),
    query: shallowReactive([]),
    isSearch: false,
})
const displaySession = computed(() => {
    reflashDisplaySession.value
    const headSession = selected.value
    const mainSession = searchInfo.isSearch ?searchInfo.query :searchInfo.originList
    return [...headSession, ...mainSession]
})
// 导出
defineExpose({
    show,
    singleForward,
    mergeForward,
})
//#endregion

//#region == 方法函数 ====================================================================
/**
 * 初始化乱七八糟的参数
 */
function init(){
    const activeChat = Array.from(Session.activeSessions).sort((a, b) => {
        if (!a.preMessage?.time) return 1
        if (!b.preMessage?.time) return -1
        return b.preMessage.time.time - a.preMessage.time.time
    })
    const allChat = Session.sessionList.filter(item => !activeChat.includes(item))

    searchInfo.originList = shallowReactive([...activeChat, ...allChat])
    searchInfo.query = []
    searchInfo.isSearch = false
    multiselectMode.value = runtimeData.sysConfig.default_multiselect_forward ?? false
    selected.value = []
}
/**
* 逐条发送消息
* @param msgs 消息列表
*/
function singleForward(forwardMsgs: Msg[]){
    init()
    msgs.value = forwardMsgs
    type.value = 'single'
    show.value = true
}
/**
* 合并转发消息
* @param msgs 消息列表
*/
function mergeForward(forwardMsgs: Msg[]){
    init()
    msgs.value = forwardMsgs
    type.value = 'merge'
    show.value = true
}
/**
 * 运行发送消息确认框
 */
function runForward(){
    close()
    let previewMsg: SelfPreMsg[]
    let title: string
    let whileSendMsg: SelfMsg[]
    if (type.value === 'single') {
        title = $t('转发消息')
        previewMsg = createSinglePreview(msgs.value)
        whileSendMsg = createSingleSendMsgs(msgs.value)
    } else {
        title = $t('合并转发消息')
        previewMsg = createMergePreview(msgs.value)
        whileSendMsg = createMergeSendMsg(msgs.value)
    }

    popBox({
        title: title,
        template: markRaw(MsgBar),
        templateValue: markRaw({ msgs: previewMsg, config: {
            canInteraction: false,
            showIcon: false,
            dimNonExistentMsg: false,
        } }),
        button: [{
            text: $t('取消'),
        }, {
            text: $t('确定'),
            master: true,
            fun: () => sendMsg(whileSendMsg),
        },],
    })

    if(!runtimeData.sysConfig.jump_forward)return
    if(selected.value.length > 1)return
    const chat = selected.value[0]
    nextTick(() => {changeSession(chat)})
}
/**
 * 直接发送消息的函数
 * @param msgs
 */
async function sendMsg(msgs: SelfMsg[]){
    for (const msg of msgs) {
        msg.session.addMessage(msg)
        msg.send()
        await delay(300) // 避免发的太快了,乱序...
    }
}
function close(){
    show.value = false
}
/**
 * 创建单条转发消息预览
 * @param msgs
 */
function createSinglePreview(msgs: Msg[]): SelfPreMsg[]{
    // 构造 titleList
    const out: SelfPreMsg[] = []
    msgs.forEach((msg: Msg)=>{
        out.push(new SelfPreMsg(msg.message))
    })
    return out
}
/**
 * 创建合并转发消息预览
 * @param msg
 */
function createMergePreview(msgs: Msg[]): SelfPreMergeMsg[]{
    // 构造 titleList
    const Msg = new SelfPreMergeMsg(msgs)
    return [Msg]
}
/**
 * 创建合并转发消息发送内容
 * @param msgs
 */
function createMergeSendMsg(msgs: Msg[]): SelfMsg[]{
    const out: SelfMsg[] = []
    for (const chat of selected.value) {
        out.push(SelfMsg.createMerge(msgs, chat))
    }
    return out
}
function createSingleSendMsgs(msgs: Msg[]): SelfMsg[]{
    const out: SelfMsg[] = []
    for (const chat of selected.value) {
        for (const msg of msgs) {
            out.push(SelfMsg.create(msg.message, chat))
        }
    }
    return out
}
function clickChat(chat: Session) {
    if(!multiselectMode.value){
        selected.value = [chat]
        runForward()
    }else {
        const index = selected.value.indexOf(chat)
        if (index > -1) {
            selected.value.splice(index, 1)
            searchInfo.originList.unshift(chat)
        }
        else {
            selected.value.push(chat)
            const index = searchInfo.originList.indexOf(chat)
            if (index > -1)
                searchInfo.originList.splice(index, 1)
        }
        reflashDisplaySession.value ++
    }
}
//#endregion
</script>
