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
                        <input v-model="searchContent" :placeholder="$t('搜索 ……')" @input="searchChat">
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
                        <div v-for="session in searchList ?? chatList"
                            :key=" 'forwardList-' + session.id"
                            :class="{
                                selected: selected.includes(session),
                            }"
                            @click="clickChat(session)">
                            <div />
                            <img loading="lazy"
                                :title="session.showName"
                                :src="session.getFace()">
                            <div>
                                <p>
                                    {{ session.showName }}
                                </p>
                                <span v-if="session.type === 'group'">{{ $t('群组') }}</span>
                                <span v-else-if="session.type === 'user'">{{ $t('好友') }}</span>
                                <span v-else-if="session.type === 'temp'">{{ $t('临时会话') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg" @click="close" />
            </div>
        </Teleport>
    </Transition>
</template>
<script setup lang="ts">
import MsgBar from './MsgBar.vue'
import { runtimeData } from '@renderer/function/msg'
import { markRaw } from 'vue'
import { Msg, SelfMergeMsg, SelfMsg, SelfPreMergeMsg, SelfPreMsg } from '@renderer/function/model/msg'
import { Session } from '@renderer/function/model/session'
import { shallowRef, type ShallowRef } from 'vue'
import { delay } from '@renderer/function/utils/systemUtil'
import app from '@renderer/main'
import { changeSession } from '@renderer/function/utils/msgUtil'

//#region == 声明/导出变量 ===========================================================
// 变量
const { $t } = app.config.globalProperties
const show: ShallowRef<boolean> = shallowRef(false)
const chatList: ShallowRef<Session[]> = shallowRef([])
const searchList: ShallowRef<Session[]|undefined> = shallowRef(undefined)
const searchContent: ShallowRef<string> = shallowRef('')
const selected: ShallowRef<Session[]> = shallowRef([])
const msgs: ShallowRef<Msg[]> = shallowRef([])
const type: ShallowRef<'single' | 'merge'> = shallowRef('single')
const multiselectMode: ShallowRef<boolean> = shallowRef(false)
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

    chatList.value = [...activeChat, ...allChat] as Session[]
    searchList.value = chatList.value
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
    const popInfo = {
        title: title,
        template: markRaw(MsgBar),
        templateValue: markRaw({ msgs: previewMsg, config: {
            canInteraction: false,
            showIcon: false,
            dimNonExistentMsg: false,
        } }),
        button: [
            {
                text: $t('取消'),
                fun: () => {
                    runtimeData.popBoxList.shift()
                },
            },
            {
                text: $t('确定'),
                master: true,
                fun: () => {
                    sendMsg(whileSendMsg)
                    runtimeData.popBoxList.shift()
                },
            },
        ],
    }
    runtimeData.popBoxList.push(popInfo)
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
 * 搜索转发列表
 * @param value 搜索内容
 */
function searchChat() {
    if (searchContent.value === '')
        searchList.value = chatList.value
    else searchList.value = chatList.value.filter(item => item.match(searchContent.value))
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
        out.push(new SelfMergeMsg(msgs, chat))
    }
    return out
}
function createSingleSendMsgs(msgs: Msg[]): SelfMsg[]{
    const out: SelfMsg[] = []
    for (const chat of selected.value) {
        for (const msg of msgs) {
            out.push(new SelfMsg(msg.message, chat))
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
        if (index > -1) selected.value.splice(index, 1)
        else selected.value = [...selected.value, chat]
    }
}
//#endregion
</script>
