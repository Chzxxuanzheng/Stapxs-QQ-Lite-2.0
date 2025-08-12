<!--
 * @FileDescription: 表情面板模板
 * @Author: Stapxs
 * @Date: missing
 * @Version: 1.0
-->

<template>
    <div class="ss-card face-pan">
        <BcTab>
            <div icon="fa-solid fa-face-laugh-squint">
                <div class="title">
                    <span>{{ $t('小黄脸表情') }}</span>
                </div>
                <div class="base-face">
                    <div v-for="num in baseFaceMax"
                        v-show="getFace(num) != ''"
                        :key="'base-face-' + num"
                        :data-id="num"
                        @click="addBaseFace(num)">
                        <img loading="lazy"
                            :src="getFace(num) as any">
                    </div>
                </div>
            </div>
            <div icon="fa-solid fa-heart">
                <div class="title">
                    <span>{{ $t('收藏的表情') }}</span>
                    <font-awesome-icon
                        :icon="['fas', 'fa-rotate-right']"
                        @click="reloadRoamingStamp" />
                </div>
                <div class="face-stickers">
                    <template v-if="!support">
                        <div class="ss-card">
                            <font-awesome-icon :icon="['fas', 'face-dizzy']" />
                            <span>{{ $t('当前适配器不支持漫游表情') }}</span>
                        </div>
                    </template>
                    <template v-else-if="error">
                        <div class="ss-card">
                            <font-awesome-icon :icon="['fas', 'face-dizzy']" />
                            <span>{{ $t('加载漫游表情失败') }}</span>
                        </div>
                    </template>
                    <template v-else-if="loaderLock">
                        <div class="ss-card">
                            <font-awesome-icon :icon="['fas', 'spinner']" spin />
                            <span>{{ $t('正在加载漫游表情') }}</span>
                        </div>
                    </template>
                    <template v-else-if="runtimeData.stickerCache && runtimeData.stickerCache.length > 0">
                        <img v-for="(url, index) in runtimeData.stickerCache"
                            v-show="url != 'end'"
                            :key="'stickers-' + index"
                            loading="lazy"
                            :src="url"
                            @click="addImgFace(url)">
                    </template>
                    <template v-else>
                        <div v-show="runtimeData.stickerCache && runtimeData.stickerCache.length <= 0"
                            class="ss-card">
                            <font-awesome-icon :icon="['fas', 'face-dizzy']" />
                            <span>{{ $t('一无所有') }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </BcTab>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { runtimeData } from '@renderer/function/msg'
    import { getFace } from '@renderer/function/utils/msgUtil'

    import Option from '@renderer/function/option'

    import BcTab from 'vue3-bcui/packages/bc-tab'
    import { FaceSeg, ImgSeg, Seg } from '@renderer/function/model/seg'

    export default defineComponent({
        name: 'FacePan',
        components: {
            BcTab,
        },
        props: ['display'],
        emits: ['addSpecialSeg', 'sendMsg'],
        data() {
            return {
                getFace: getFace,
                Option: Option,
                runtimeData: runtimeData,
                baseFaceMax: 348,
                stickerPage: 1,
                support: true, // 是否支持漫游表情
                error: false, // 是否发生错误
                loaderLock: false, // 是否正在加载
            }
        },
        mounted() {
            // 初次加载漫游表情
            this.initRoamingStamp()
        },
        methods: {
            async initRoamingStamp() {
                if (runtimeData.stickerCache) return

                await this.loadRomaingStamp()
            },
            async reloadRoamingStamp() {
                if (this.loaderLock) return
                runtimeData.stickerCache = undefined

                await this.loadRomaingStamp()
            },

            async loadRomaingStamp() {
                if (this.loaderLock) return
                this.loaderLock = true
                if (!runtimeData.nowAdapter?.getCustomFace) {
                    this.support = false
                    this.loaderLock = false
                    return
                }

                const data = await runtimeData.nowAdapter.getCustomFace()
                if (!data) {
                    this.loaderLock = false
                    this.error = true
                    return
                }

                runtimeData.stickerCache = data
                this.loaderLock = false
            },

            addSpecialSeg(seg: Seg) {
                this.$emit('addSpecialSeg', seg)
            },
            addBaseFace(id: number) {
                this.addSpecialSeg(new FaceSeg(id))
            },
            addImgFace(url: string) {
                this.addSpecialSeg(new ImgSeg(url, true))
                // 直接发送表情
                if(runtimeData.sysConfig.send_face == true) {
                    this.$emit('sendMsg')
                }
            },
        },
    })
</script>
