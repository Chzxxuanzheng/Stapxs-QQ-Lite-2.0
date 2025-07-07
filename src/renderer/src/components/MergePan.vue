<template>
    <div :class="'merge-pan' + (runtimeData.mergeMsgStack.length > 0 ? ' show' : '')">
        <div @click="closeMergeMsg" />
        <div class="ss-card">
            <div>
                <font-awesome-icon style="margin-top: 5px" :icon="['fas', 'message']" />
                <span>{{ $t('合并消息') }}</span>
                <font-awesome-icon :icon="['fas', 'xmark']" @click="exitMergeMsg" />
            </div>
            <div v-if="nowData === undefined && runtimeData.mergeMsgStack.length === 0">
                <!-- 无内容 -->
            </div>
            <div v-else-if="nowData === undefined || !nowData.ready" :class=" 'loading show'">
                <font-awesome-icon :icon="['fas', 'spinner']" />
                <span>{{ $t('加载中') }}</span>
            </div>
            <div v-else>
                <MsgBar
                    :msgs="nowData.messageList"
                    :key="'merge-' + nowData.forwardMsg.message[0].id"
                    type="merge"
                    />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { v4 as uuid } from 'uuid'

    import MsgBar from './MsgBar.vue';

    import { defineComponent, ref, type Ref } from 'vue';
    import { runtimeData } from '@renderer/function/msg';
    import { type MergeStackData } from '@renderer/function/elements/information';
    import { isDeleteMsg, isShowTime } from '@renderer/function/utils/msgUtil';

    export default defineComponent({
        name: 'MergePan',
        components: { MsgBar },
        data() {
            const stack = runtimeData.mergeMsgStack
            const nowData: Ref<MergeStackData|undefined> = ref()
            return {
                uuid,
                runtimeData,
                stack,
                nowData,
                isShowTime,
                isDeleteMsg
            }
        },
        mounted() {
            this.$watch(
                () => runtimeData.mergeMsgStack.length,
                () => {
                    // 最后一个保留下来做展开关闭动画
                    if(this.stack.length === 0) {
                        // 清理下垃圾
                        runtimeData.mergeMessageImgList = undefined
                    }
                    else this.nowData = this.stack.at(-1)
                }
            )
            this.$watch(
                () => this.nowData?.forwardMsg.message[0].content,
                () => {
                    if(this.nowData === undefined || this.nowData.forwardMsg.message[0].content === undefined) return
                    const seg = this.nowData.forwardMsg.message[0]
                    this.nowData.ready = true
                    this.nowData.messageList = seg.content
                    // 提取合并转发中的消息图片列表
                    const imgList = [] as {
                        index: number
                        img_url: string
                    }[]
                    let index = 0
                    this.nowData.messageList.forEach((item) => {
                        item.message.forEach((msg) => {
                            if (msg.type == 'image') {
                                imgList.push({
                                    index: index,
                                    img_url: msg.url,
                                })
                                index++
                            }
                        })
                    })
                    this.nowData.imageList = imgList
                }
            )
            this.$watch(
                () => this.nowData?.imageList,
                () => {
                    if(runtimeData.mergeMsgStack.length === 0 || this.nowData?.imageList === undefined) return
                    runtimeData.mergeMessageImgList = this.nowData.imageList
                }
            )
        },
        methods: {
            /**
             * 退出一层合并转发弹窗
             */
            exitMergeMsg() {
                this.stack.length --
            },

            /**
             * 关闭合并转发弹窗
             */
            closeMergeMsg() {
                this.stack.length = 0
            },
        }
    })
</script>
