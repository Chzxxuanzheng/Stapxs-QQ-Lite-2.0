<!--
 - @FileDescription: 设置页面（账号子页面）
 - @Author: Stapxs
 - @Date: 2022/9/29
          2022/12/9
 - @Version: 1.0 - 初始版本
             1.5 - 重构为 ts 版本，代码格式优化
-->

<template>
    <div class="opt-page">
        <template v-if="Object.keys(runtimeData.loginInfo).length > 0">
            <div class="ss-card account-info">
                <img :src="'https://q1.qlogo.cn/g?b=qq&s=0&nk=' + runtimeData.loginInfo.uin">
                <div>
                    <div>
                        <span>{{ runtimeData.loginInfo.nickname }}</span>
                        <span>{{ runtimeData.loginInfo.uin }}</span>
                    </div>
                    <span>{{
                        runtimeData.loginInfo.info &&
                            Object.keys(runtimeData.loginInfo.info).length > 0
                            ? runtimeData.loginInfo.info.lnick : ''
                    }}</span>
                </div>
                <font-awesome-icon :icon="['fas', 'right-from-bracket']" @click="exitConnect" />
            </div>
            <div class="ss-card">
                <header>{{ $t('账号设置') }}</header>
                <div class="opt-item">
                    <font-awesome-icon :icon="['fas', 'address-card']" />
                    <div>
                        <span>{{ $t('昵称') }}</span>
                        <span>{{ $t('就只是个名字而已 ……') }}</span>
                    </div>
                    <input v-model="runtimeData.loginInfo.nickname"
                        class="ss-input"
                        style="width: 150px"
                        type="text"
                        @keyup="setNick">
                </div>
                <div v-if="runtimeData.loginInfo.info && Object.keys(runtimeData.loginInfo.info).length > 0"
                    class="opt-item">
                    <font-awesome-icon :icon="['fas', 'pen']" />
                    <div>
                        <span>{{ $t('签名') }}</span>
                        <span>{{ $t('啊吧啊吧（智慧的眼神）') }}</span>
                    </div>
                    <input v-model="runtimeData.loginInfo.info.lnick"
                        class="ss-input"
                        style="width: 150px"
                        type="text"
                        @keyup="setLNick">
                </div>
            </div>
        </template>
        <template v-else>
            <div class="ss-card account-not-login">
                <font-awesome-icon :icon="['fas', 'fish']" />
                <span>{{ $t('还没有连接到 协议段 耶') }}</span>
                <button class="ss-button" @click="goLogin">
                    {{ $t('去连接') }}
                </button>
            </div>
        </template>
        <div v-if="Object.keys(implBar).length > 0"
            class="ss-card">
            <header>{{ $t('适配器信息') }}</header>
            <div class="l10n-info">
                <font-awesome-icon :icon="['fas', 'robot']" />
                <div>
                    <span>{{ nowAdapter.name }}
                        <a>{{ nowAdapter.version }}</a>
                    </span>
                    <span>{{ $t('这是你连接的 QQ Bot 的相关信息') }}</span>
                </div>
            </div>
            <component :is="implBar" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    markRaw
} from 'vue'
import { remove } from '@renderer/function/option'
import { resetRuntime, runtimeData } from '@renderer/function/msg'
import { PopInfo, PopType } from '@renderer/function/base'
import { i18n } from '@renderer/main'
import { AdapterInterface } from '@renderer/function/adapter/interface'

const nowAdapter = computed(() => runtimeData.nowAdapter as AdapterInterface)
const implBar = computed(()=>{
    return markRaw(runtimeData.nowAdapter?.optInfo() ?? {})
})

function $t(value: string, option: any = {}) {
    return i18n.global.t(value, option)
}

/**
 * 断开连接
 */
function exitConnect() {
    remove('auto_connect')
    runtimeData.nowAdapter?.close()
    resetRuntime(true)
}

function goLogin() {
    document.getElementById('bar-home')?.click()
}

/**
 * 设置昵称
 * @param event 事件
 */
async function setNick(event: KeyboardEvent) {
    // TODO: 这玩意的返回好像永远是错误的 …… 所以干脆不处理返回了
    if (event.key === 'Enter' && runtimeData.loginInfo.nickname !== '') {
        if (!runtimeData.nowAdapter?.setNickname) {
            new PopInfo().add(PopType.ERR, $t('当前适配器不支持设置昵称'))
            return
        }
        const re = await runtimeData.nowAdapter?.setNickname(runtimeData.loginInfo.nickname)
        if (re) {
            new PopInfo().add(PopType.INFO, $t('昵称设置成功'))
        }else {
            new PopInfo().add(PopType.ERR, $t('昵称设置失败'))
        }
    }
}

/**
 * 设置签名
 * @param event 事件
 */
async function setLNick(event: KeyboardEvent) {
    // TODO: 这玩意的返回好像永远是错误的 …… 所以干脆不处理返回了
    if (event.key === 'Enter' && runtimeData.loginInfo.info.lnick !== '') {
        if (!runtimeData.nowAdapter?.setNickname) {
            new PopInfo().add(PopType.ERR, $t('当前适配器不支持设置个性签名'))
            return
        }
        const re = await runtimeData.nowAdapter?.setSign(runtimeData.loginInfo.info.lnick)
        if (re) {
            new PopInfo().add(PopType.INFO, $t('个性签名设置成功'))
        }else {
            new PopInfo().add(PopType.ERR, $t('个性签名设置失败'))
        }
    }
}
</script>
