<template>
    <Transition>
        <div v-if="show" class="forward-pan">
            <div class="ss-card card">
                <header>
                    <span>{{ $t('转发消息') }}</span>
                    <font-awesome-icon :icon="['fas', 'xmark']" @click="close" />
                </header>
                <div>
                    <input :placeholder="$t('搜索 ……')" @input="searchChat">
                    <button v-if="!multiselectMode"
                    @click="multiselectMode=true">多选</button>
                    <button v-if="multiselectMode"
                    @click="runForward">发送</button>
                </div>
                <div>
                    <div v-for="data in chatList"
                        :key=" 'forwardList-' + data.user_id ? data.user_id : data.group_id"
                        @click="clickChat(data)"
                        :class="{
                            selected: selected.includes(data),
                        }"
                        >
                        <div />
                        <img loading="lazy"
                            :title="getShowName(data.group_name || data.nickname, data.remark)"
                            :src="data.user_id ?
                                'https://q1.qlogo.cn/g?b=qq&s=0&nk=' + data.user_id :
                                'https://p.qlogo.cn/gh/' + data.group_id + '/' + data.group_id + '/0'">
                        <div>
                            <p>
                                {{ data.group_name ?
                                    data.group_name : data.remark === data.nickname ?
                                        data.nickname : data.remark + '（' + data.nickname + '）'
                                }}
                            </p>
                            <span>{{ data.group_id ? $t('群组') : $t('好友') }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg" @click="close" />
        </div>
    </Transition>
</template>
<script lang="ts">
import { UserFriendElem, UserGroupElem } from '@renderer/function/elements/information'
import { runtimeData } from '@renderer/function/msg'
import { getShowName } from '@renderer/function/utils/msgUtil'
import { defineComponent, markRaw } from 'vue'
import { Msg, SelfMergeMsg, SelfMsg } from '@renderer/function/model/msg'
import MsgBar from './MsgBar.vue'

type Chat = UserFriendElem & UserGroupElem

export default defineComponent({
    name: 'ForwardPan',
    data() {
        return {
            show: false,
            chatList: runtimeData.userList,
            selected: [] as Chat[],
            msgs: [] as any[],
            type: 'single' as 'single' | 'merge',
            multiselectMode: false,
            getShowName
        }
    },
    methods: {
        /**
         * 初始化乱七八糟的参数
         */
        init(){
            const showList = Object.assign(runtimeData.onMsgList).reverse()
            // 将 forWardList 中 showList 之中的条目挪到最前面
            showList.forEach((item) => {
                const index = this.chatList.indexOf(item)
                if (index > -1) {
                    this.chatList.splice(index, 1)
                    this.chatList.unshift(item)
                }
            })
            this.chatList = runtimeData.userList
            this.multiselectMode = runtimeData.sysConfig.default_multiselect_forward ?? false
            this.selected = []
        },
        /**
         * 逐条发送消息
         * @param msgs 消息列表
         */
        singleForward(msgs: Msg[]){
            this.init()
            this.msgs = msgs
            this.type = 'single'
            this.show = true
        },
        /**
         * 合并转发消息
         * @param msgs 消息列表
         */
        mergeForward(msgs: Msg[]){
            this.init()
            this.msgs = msgs
            this.type = 'merge'
            this.show = true
        },
        /**
         * 运行发送消息确认框
         */
        runForward(){
            this.close()
            let previewMsg: SelfMsg[]
            let title: string
            let sendMsg: SelfMsg[]
            if (this.type === 'single') {
                title = this.$t('转发消息')
                previewMsg = this.createSinglePreview(this.msgs)
                sendMsg = this.createSingleSendMsgs(this.msgs)
            } else {
                title = this.$t('合并转发消息')
                previewMsg = this.createMergePreview(this.msgs)
                sendMsg = this.createMergeSendMsg(this.msgs)
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
                        text: this.$t('取消'),
                        fun: () => {
                            runtimeData.popBoxList.shift()
                        },
                    },
                    {
                        text: this.$t('确定'),
                        master: true,
                        fun: () => {
                            this.sendMsg(sendMsg)
                            runtimeData.popBoxList.shift()
                        },
                    },
                ],
            }
            runtimeData.popBoxList.push(popInfo)
            if(!runtimeData.sysConfig.jump_forward)return
            if(this.selected.length > 1)return
            const chat = this.selected[0]
            const id = chat.user_id ? chat.user_id : chat.group_id
            console.log(id)
            this.$nextTick(() => {
                const user = document.getElementById('user-' + id)
                if (user) {
                    user.click()
                }
            })

        },
        /**
         * 直接发送消息的函数
         * @param msgs 
         */
        async sendMsg(msgs: SelfMsg[]){
            for (const msg of msgs) {
                msg.send()
                if (msg.session?.id === runtimeData.chatInfo.show.id) {
                    runtimeData.messageList.push(msg)
                }
                await new Promise(resolve => setTimeout(resolve, 300)) // 避免发的太快了,乱序...
            }
        },
        close(){
            this.show = false
        },
        /**
         * 搜索转发列表
         * @param value 搜索内容
         */
        searchChat(event: Event) {
            const value = (event.target as HTMLInputElement).value
            this.chatList = runtimeData.userList.filter(
                (item: UserFriendElem & UserGroupElem) => {
                    const name = (
                        item.user_id? item.nickname + item.remark: item.group_name
                    ).toLowerCase()
                    const id = item.user_id ? item.user_id : item.group_id
                    return (
                        name.indexOf(value.toLowerCase()) !== -1 ||
                        id.toString() === value
                    )
                },
            )
        },
        /**
         * 创建单条转发消息预览
         * @param msgs 
         */
        createSinglePreview(msgs: Msg[]): SelfMsg[]{
            // 构造 titleList
            const out: SelfMsg[] = []
            msgs.forEach((msg: Msg)=>{
                const Msg = new SelfMsg(msg.message, 'group', 0)
                out.push(Msg)
            })
            return out
        },
        /**
         * 创建合并转发消息预览
         * @param msg 
         */
        createMergePreview(msgs: Msg[]): SelfMsg[]{
            // 构造 titleList
            const Msg = new SelfMergeMsg(msgs, 'group', 0)
            return [Msg]
        },
        /**
         * 创建合并转发消息发送内容
         * @param msgs 
         */
        createMergeSendMsg(msgs: Msg[]): SelfMsg[]{
            const out: SelfMsg[] = []
            this.selected.forEach((chat: Chat)=>{
                let targetId: number
                let targetType: 'user' | 'group' | 'temp'
                if (chat.group_id) {
                    targetId = chat.group_id
                    targetType = 'group'
                } else {
                    targetId = chat.user_id
                    targetType = 'user'
                }
                const Msg = new SelfMergeMsg(msgs, targetType, targetId)
                out.push(Msg)
            })
            return out
        },
        createSingleSendMsgs(msgs: Msg[]): SelfMsg[]{
            const out: SelfMsg[] = []
            this.selected.forEach((chat: Chat)=>{
                let targetId: number
                let targetType: 'user' | 'group' | 'temp'
                if (chat.group_id) {
                    targetId = chat.group_id
                    targetType = 'group'
                } else {
                    targetId = chat.user_id
                    targetType = 'user'
                }
                msgs.forEach((msg: Msg)=>{
                    const Msg = new SelfMsg(msg.message, targetType, targetId)
                    out.push(Msg)
                })
            })
            return out
        },
        clickChat(chat: Chat) {
            if(!this.multiselectMode){
                this.selected = [chat]
                this.runForward()
            }else {
                const index = this.selected.indexOf(chat)
                if (index > -1) {
                    this.selected.splice(index, 1)
                } else {
                    this.selected.push(chat)
                }
            }
        }
    }
})
</script>