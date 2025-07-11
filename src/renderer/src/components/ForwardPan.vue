<template>
    <Transition>
        <div v-if="show" class="forward-pan">
            <div class="ss-card card">
                <header>
                    <span>{{ $t('转发消息') }}</span>
                    <font-awesome-icon :icon="['fas', 'xmark']" @click="close" />
                </header>
                <input :placeholder="$t('搜索 ……')" @input="searchForward">
                <div>
                    <div v-for="data in chatList"
                        :key=" 'forwardList-' + data.user_id ? data.user_id : data.group_id"
                        @click="clickChat(data)">
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
import { getMsgRawTxt, getShowName, sendMsgRaw } from '@renderer/function/utils/msgUtil'
import { defineComponent, markRaw } from 'vue'
import MsgBody from './MsgBody.vue'

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
        },
        /**
         * 逐条发送消息
         * @param msgs 消息列表
         */
        forward(msgs: any[]){
            this.init()
            this.msgs = msgs
            this.type = 'single'
            this.show = true
        },
        /**
         * 合并转发消息
         * @param msgs 消息列表
         */
        mergeForward(msgs: any[]){
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
            let previewMsg: any
            let title: string
            let sendMsg: any[]
            if (this.type === 'single') {
                title = this.$t('转发消息')
                previewMsg = this.msgs[0]  // TODO支持多消息转发预览框
                sendMsg = this.createSingleSendMsgs(this.msgs)
            } else {
                title = this.$t('合并转发消息')
                previewMsg = this.createMergePreview(this.msgs)
                sendMsg = [this.createMergeSendMsg(this.msgs)]
            }
            const popInfo = {
                title: title,
                template: markRaw(MsgBody),
                templateValue: markRaw({ data: previewMsg, type: 'forward' }),
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
                            this.sendForward(sendMsg)
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
        sendForward(msgs: any[]){
            this.selected.forEach((chat: Chat)=>{
                let targetId: number
                let targetType: string
                if (chat.group_id) {
                    targetId = chat.group_id
                    targetType = 'group'
                } else {
                    targetId = chat.user_id
                    targetType = 'private'
                }
                msgs.forEach((msg: any)=>{
                    sendMsgRaw(
                        String(targetId),
                        targetType,
                        msg,
                        targetId == runtimeData.chatInfo.show.id,
                )
                })
            })
        },
        close(){
            this.show = false
        },
        /**
         * 搜索转发列表
         * @param value 搜索内容
         */
        searchForward(event: Event) {
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
         * 创建合并转发消息预览
         * @param msg 
         */
        createMergePreview(msgs: any[]): any{
            // 构造 titleList
            const jsonMsg = {
                app: 'com.tencent.multimsg',
                meta: {
                    detail: {
                        source: this.$t('合并转发消息'),
                        news: [
                            ...msgs.slice(0, 3).map((item) => {
                                const name =
                                    item.sender.card &&
                                    item.sender.card != ''? item.sender.card: item.sender.nickname
                                return {
                                    text:
                                        name +
                                        ': ' +
                                        getMsgRawTxt(item),
                                }
                            }),
                        ],
                        summary: this.$t('查看 {count} 条转发消息', { count: this.msgs.length }),
                        resid: '',
                    },
                },
            }
            return {
                message: [
                    { type: 'json', data: JSON.stringify(jsonMsg), id: '' },
                ],
                sender: {
                    user_id: runtimeData.loginInfo.uin,
                    nickname: runtimeData.loginInfo.nickname,
                }
            }
        },
        /**
         * 创建合并转发消息发送内容
         * @param msgs 
         */
        createMergeSendMsg(msgs: any[]): any{
            return msgs.map((item) => {
                return {
                    type: 'node',
                    id: item.message_id,
                    user_id: item.sender.user_id,
                    nickname: item.sender.nickname,
                    content: item.message,
                }
            })
        },
        createSingleSendMsgs(msgs: any[]): any[]{
            return msgs.map((item) => {
                return item.message
            })
        },
        clickChat(chat: Chat) {
            if(!this.multiselectMode){
                this.selected = [chat]
                this.runForward()
            }
        }
    }
})
</script>