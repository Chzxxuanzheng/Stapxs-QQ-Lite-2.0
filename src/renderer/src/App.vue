<template>
    <div v-if="dev" :class="'dev-bar' + (runtimeData.tags.platform == 'win32' ? ' win' : '')">
        Stapxs QQ Lite Development Mode
        {{ ' / platform: ' + runtimeData.tags.platform }}
        {{ ' / client: ' + runtimeData.tags.clientType }}
        {{ ' / fps: ' + fps.value }}
    </div>
    <div v-if="['linux', 'win32'].includes(runtimeData.tags.platform ?? '')"
        :class="'top-bar' + ((runtimeData.tags.platform == 'win32' && dev) ? ' win' : '')"
        name="appbar"
        data-tauri-drag-region="true">
        <!-- TODO: 诸如hyprland等窗口管理器不支持最小化和全屏按钮(其实关闭按钮虽然能用但也是不合法的...) -->
        <div class="bar-button" @click="barMainClick()" />
        <div class="space" />
        <div class="controller">
            <div class="min" @click="controllWin('minimize')">
                <font-awesome-icon :icon="['fas', 'minus']" />
            </div>
            <div class="close" @click="controllWin('close')">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </div>
        </div>
    </div>
    <div v-if="runtimeData.tags.platform == 'darwin'" class="controller mac-controller"
        data-tauri-drag-region="true" />
    <div id="base-app">
        <div class="main-body">
            <ul :style="get('fs_adaptation') > 0 ? `padding-bottom: ${get('fs_adaptation')}px;` : ''">
                <li id="bar-home" :class="{
                    'active': tags.page === 'Home',
                    'hiden-home': driver.isConnected(),
                }"
                    @click="changeTab('主页', 'Home', false)">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <span>{{ $t('主页') }}</span>
                </li>
                <li id="bar-msg" :class="{'active': tags.page === 'Messages'}"
                    @click="changeTab('信息', 'Messages', true)">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <span>{{ $t('信息') }}</span>
                </li>
                <li id="bar-friends" :class="{'active': tags.page === 'Friends'}"
                    @click="changeTab('列表', 'Friends', true)">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <span>{{ $t('列表') }}</span>
                </li>
                <li id="bar-box" :class="{'active': tags.page == 'Box'}"
                    @click="changeTab('收纳盒', 'Box', true)">
                    <font-awesome-icon :icon="['fas', 'fa-box']" />
                    <span>{{ $t('收纳盒') }}</span>
                </li>
                <div class="side-bar-space" />
                <li :class="tags.page == 'Options' ? 'active' : ''" @click="changeTab('设置', 'Options', false)">
                    <font-awesome-icon :icon="['fas', 'gear']" />
                    <span>{{ $t('设置') }}</span>
                </li>
            </ul>
            <div :style="get('fs_adaptation') > 0 ? `height: calc(100% - ${75 + Number(get('fs_adaptation'))}px);` : ''">
                <div v-if="tags.page == 'Home'" :name="$t('主页')">
                    <div class="home-body">
                        <div class="login-pan-card ss-card">
                            <font-awesome-icon :icon="['fas', 'circle-nodes']" />
                            <p>{{ $t('连接到 协议端') }}</p>
                            <form @submit.prevent @submit="connect">
                                <template v-if="loginInfo.quickLogin == null || loginInfo.quickLogin.length == 0">
                                    <label v-if="!sse">
                                        <font-awesome-icon :icon="['fas', 'link']" />
                                        <input id="sev_address" v-model="loginInfo.address" :placeholder="$t('连接地址')"
                                            class="ss-input" autocomplete="off">
                                    </label>
                                </template>
                                <div v-else class="ss-card quick-login">
                                    <div class="title">
                                        <font-awesome-icon :icon="['fas', 'link']" />
                                        <span>{{ $t('来自局域网的服务') }}</span>
                                        <a @click="cancelQUickLogin">{{ $t('取消') }}</a>
                                    </div>
                                    <div class="list">
                                        <div v-for="item in loginInfo.quickLogin" :key="item.address + ':' + item.port"
                                            :class="(tags.quickLoginSelect == item.address + ':' + item.port) ? 'select' : ''"
                                            @click="selectQuickLogin(item.address + ':' + item.port)">
                                            <span>{{ item.address }}:{{ item.port }}</span>
                                            <div><div /></div>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    <font-awesome-icon :icon="['fas', 'lock']" />
                                    <input id="access_token" v-model="loginInfo.token" :placeholder="$t('连接密钥')"
                                        class="ss-input" type="password" autocomplete="off">
                                </label>
                                <div style="display: flex">
                                    <label class="default">
                                        <input id="in_" v-model="tags.savePassword" type="checkbox"
                                            name="save_password"
                                            @click="savePassword">
                                        <a>{{ $t('记住密码') }}</a>
                                    </label>
                                    <div style="flex: 1" />
                                    <label class="default" style="justify-content: flex-end">
                                        <input v-model="runtimeData.sysConfig.auto_connect" type="checkbox"
                                            name="auto_connect" @click="saveAutoConnect">
                                        <a>{{ $t('自动连接') }}</a>
                                    </label>
                                </div>
                                <button id="connect_btn" class="ss-button" type="submit"
                                    :disabled="driver.isConnecting()"
                                    @mousemove="afd">
                                    <template v-if="!driver.isConnecting()">
                                        {{ $t('连接') }}
                                    </template>
                                    <template v-else>
                                        <font-awesome-icon :icon="['fas', 'spinner']" spin />
                                    </template>
                                </button>
                            </form>
                            <a href="https://github.com/Stapxs/Stapxs-QQ-Lite-2.0#%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8"
                                target="_blank" style="margin-bottom: -20px">{{ $t('如何连接') }}</a>
                            <div class="wave-pan" style="margin-left: -30px">
                                <svg id="login-wave" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 170 70"
                                    preserveAspectRatio="none" shape-rendering="auto">
                                    <defs>
                                        <path id="gentle-wave" d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z" />
                                    </defs>
                                    <g class="parallax">
                                        <use xlink:href="#gentle-wave" x="83" y="0" />
                                        <use xlink:href="#gentle-wave" x="135" y="3" />
                                        <use xlink:href="#gentle-wave" x="185" y="5" />
                                        <use xlink:href="#gentle-wave" x="54" y="7" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="tags.page == 'Messages'" id="messageTab">
                    <Messages @user-click="changeSession" />
                </div>
                <div v-else-if="tags.page == 'Friends'">
                    <Friends @user-click="changeSession" />
                </div>
                <div v-else-if="tags.page == 'Box'">
                    <Boxes @user-click="changeSession" />
                </div>
                <div class="opt-main-tab" style="opacity: 0">
                    <Options :show="tags.page == 'Options'" :class="tags.page == 'Options' ? 'active' : ''"
                        :config="runtimeData.sysConfig" />
                </div>
            </div>
        </div>
        <component
            :is="runtimeData.pageView.chatView"
            v-if="driver.isConnected() && runtimeData.nowChat"
            v-show="tags.showChat"
            ref="chat"
            :chat="markRaw(runtimeData.nowChat)"
            @user-click="changeSession" />
        <!-- 通知列表 -->
        <TransitionGroup class="app-msg" name="appmsg" tag="div">
            <div v-for="msg in appMsgs" :key="'appmsg-' + msg.id">
                <div><font-awesome-icon :icon="['fas', msg.svg]" /></div>
                <a>{{ msg.text }}</a>
                <div v-if="!msg.autoClose" @click="popInfo.remove(msg.id)">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
        </TransitionGroup>
        <!-- 弹窗列表 -->
        <div
            v-hide="runtimeData.popBoxList.length === 0"
            class="pop-box-background" />
        <TransitionGroup name="pop-box">
            <template v-for="pop in runtimeData.popBoxList" :key="'pop-box-' + pop.id">
                <PopBox :props="pop" />
            </template>
        </TransitionGroup>
        <!-- 全局搜索栏 -->
        <GlobalSessionSearchBar />
        <Viewer ref="viewer" />
        <FriendMenu ref="friendMenu" />
        <div id="mobile-css" />
    </div>
</template>

<script setup lang="ts">
import Spacing from 'spacingjs/src/spacing'
import app from '@renderer/main'
import Option from '@renderer/function/option'
import Umami from '@stapxs/umami-logger-typescript'
import * as App from './function/utils/appUtil'

import {
    defineComponent,
    defineAsyncComponent,
    useTemplateRef,
    provide,
    markRaw,
} from 'vue'
import { Logger, popList, PopInfo, LogType, PopType } from '@renderer/function/base'
import { runtimeData } from '@renderer/function/msg'
import { Notify } from './function/notify'
import { changeSession } from './function/utils/msgUtil'
import { getDeviceType, callBackend } from './function/utils/systemUtil'
import { uptime } from '@renderer/main'
import { Session } from './function/model/session'
import driver from './function/driver'
import { login, loginInfo } from './function/login'
import PopBox from './components/PopBox.vue'
import { ensurePopBox, noticePopBox } from './function/utils/popBox'
import { vHide } from './function/utils/vcmd'

import Options from '@renderer/pages/Options.vue'
import Friends from '@renderer/pages/Friends.vue'
import Messages from '@renderer/pages/Messages.vue'
import Boxes from '@renderer/pages/Boxes.vue'
import FriendMenu from '@renderer/components/FriendMenu.vue'
import GlobalSessionSearchBar from './components/GlobalSessionSearchBar.vue'
import Viewer from './components/Viewer.vue'

const friendMenu = useTemplateRef<InstanceType<typeof FriendMenu>>('friendMenu')
const viewer = useTemplateRef<InstanceType<typeof Viewer>>('viewer')
provide('friendMenu', friendMenu)
provide('viewer', viewer)
</script>

<script lang="ts">
export default defineComponent({
    name: 'App',
    data() {
        return {
            dev: import.meta.env.DEV,
            sse: import.meta.env.VITE_APP_SSE_MODE == 'true',
            defineAsyncComponent: defineAsyncComponent,
            save: Option.runASWEvent,
            get: Option.get,
            popInfo: new PopInfo(),
            appMsgs: popList,
            loginInfo: loginInfo,
            runtimeData: runtimeData,
            tags: {
                page: 'Home',
                showChat: false,
                isSavePwdClick: false,
                savePassword: false,
                quickLoginSelect: ''
            },
            viewerOpt: {
                inline: false,
                button: false,
                title: false,
                navbar: false,
                toolbar: {
                    prev: true,
                    rotateLeft: true,
                    reset: true,
                    rotateRight: true,
                    next: true,
                },
            },
            viewerBody: undefined as HTMLDivElement | undefined,
            fps: {
                last: Date.now(),
                ticks: 0,
                value: 0,
            },
        }
    },
    mounted() {
        const logger = new Logger()
        window.moYu = () => { return '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64' }
        // 页面加载完成后
        window.onload = async () => {
            if(import.meta.env.DEV) {
                // eslint-disable-next-line
                console.log('[ SSystem Bootloader Complete took ' + (new Date().getTime() - uptime) + 'ms, welcome to sar-dos on stapxs-qq-lite.su ]')
            } else {
                // eslint-disable-next-line
                console.log('[ SSystem Bootloader Complete took ' + (new Date().getTime() - uptime) + 'ms, welcome to ssqq on stapxs-qq-lite.user ]')
            }
            // 初始化全局参数
            runtimeData.tags.clientType = 'web'
            if(window.electron != undefined) {
                runtimeData.tags.clientType = 'electron'
                runtimeData.plantform = window.electron?.ipcRenderer
            } else if(window.__TAURI_INTERNALS__ != undefined) {
                runtimeData.tags.clientType = 'tauri'
                runtimeData.plantform = {
                    invoke: (await import('@tauri-apps/api/core')).invoke,
                    listen: (await import('@tauri-apps/api/event')).listen
                }
            } else if(window.Capacitor != undefined && window.Capacitor.isNativePlatform()) {
                runtimeData.tags.clientType = 'capacitor'
                runtimeData.plantform.capacitor = window.Capacitor
                runtimeData.plantform.pulgins = window.Capacitor.Plugins
            }

            runtimeData.tags.platform = await callBackend(undefined, 'sys:getPlatform', true)
            runtimeData.tags.release = await callBackend(undefined, 'sys:getRelease', true)

            app.config.globalProperties.$viewer = this.viewerBody
            // 初始化波浪动画
            this.waveAnimation(
                document.getElementById('login-wave'),
            )
            // AMAP：初始化高德地图
            window._AMapSecurityConfig = import.meta.env.VITE_APP_AMAP_SECRET
            // =============================================================
            // 初始化功能
            App.createMenu() // Electron：创建菜单
            App.createIpc() // Electron：创建 IPC 通信
            try {
                runtimeData.tags.proxyPort = await callBackend(undefined, 'sys:runProxy', true)
                if(runtimeData.tags.clientType == 'tauri' && !runtimeData.tags.proxyPort) {
                    logger.error(null, 'Tauri 代理服务似乎没有正常启动，此服务异常将会影响应用内的大部分外部资源的加载。')
                    this.popInfo.add(PopType.ERR, this.$t('Tauri 代理服务似乎没有正常启动'), false)
                }
            } catch (e) { /**/ }
            // 加载开发者相关功能
            if (this.dev) {
                document.title = 'Stapxs QQ Lite (Dev)'
                // 布局检查工具
                Spacing.start()
                // FPS 检查
                this.rafLoop()
            }
            // 加载设置项
            runtimeData.sysConfig = await Option.load()
            if(this.dev) {
                logger.debug('stapxs-qq-lite.su:$/mnt/boot/dawnHunt/bin/core --pour /mnt/app/bin/main', true)
                logger.system('[ dawnHuntCore Version: 1.0 Beta, dawnHuntDB: 2025-04-24 ]')
            } else {
                logger.debug('stapxs-qq-lite.user:$/mnt/app/bin/main', true)
            }
            logger.add(LogType.DEBUG, '系统配置', runtimeData.sysConfig)
            // PS：重新再应用部分需要加载完成后才能应用的设置
            Option.run('opt_dark', Option.get('opt_dark'))
            Option.run('opt_auto_dark', Option.get('opt_auto_dark'))
            Option.run('theme_color', Option.get('theme_color'))
            Option.run(
                'merge_forward_width_type',
                Option.get('merge_forward_width_type'),
            )
            if (['linux', 'win32'].includes(runtimeData.tags.platform ?? '')) {
                const app = document.getElementById('base-app')
                if (app) app.classList.add('withBar')
            }
            // 基础初始化完成
            logger.system('欢迎回来，开发者。Stapxs QQ Lite 正处于 ' + (this.dev ? 'development' : 'production') + ' 模式。正在为您加载更多功能。')
            // 加载移动平台特性
            App.loadMobile()
            // 加载额外样式
            App.loadAppendStyle()
            const baseApp = document.getElementById('base-app')
            if (baseApp) {
                baseApp.style.setProperty('--safe-area-bottom',
                    (Option.get('fs_adaptation') > 0 ? Option.get('fs_adaptation') : 0) + 'px')
                baseApp.style.setProperty('--safe-area-top', '0')
                baseApp.style.setProperty('--safe-area-left', '0')
                baseApp.style.setProperty('--safe-area-right', '0')
                // Capacitor：移动端初始化安全区域
                if (runtimeData.tags.clientType == 'capacitor') {
                    const safeArea = await callBackend('SafeArea', 'getSafeArea', true)
                    if (safeArea) {
                        logger.add(LogType.DEBUG, '安全区域：', safeArea)
                        baseApp.style.setProperty('--safe-area-top', safeArea.top + 'px')
                        baseApp.style.setProperty('--safe-area-bottom', safeArea.bottom + 'px')
                        baseApp.style.setProperty('--safe-area-left', safeArea.left + 'px')
                        baseApp.style.setProperty('--safe-area-right', safeArea.right + 'px')
                        // 图片查看器安全区域
                        document.documentElement.style.setProperty('--safe-area--viewer-top', safeArea.top + 'px')
                    }
                }
            }
            // 加载密码保存和自动连接
            loginInfo.address = runtimeData.sysConfig.address
            if (
                runtimeData.sysConfig.save_password &&
                runtimeData.sysConfig.save_password != true
            ) {
                loginInfo.token = runtimeData.sysConfig.save_password
                this.tags.savePassword = true
            }
            if (runtimeData.sysConfig.auto_connect == true) {
                this.connect()
            }
            // 服务发现
            callBackend('Onebot', 'sys:findService', false)
            callBackend('OneBot', 'sys:frontLoaded', false)
            // =============================================================
            // 初始化完成
            // 创建 popstate
            if(runtimeData.tags.platform == 'web' && (getDeviceType() === 'Android' || getDeviceType() === 'iOS')) {
                window.addEventListener('popstate', () => {
                    if(!driver.isConnected() || runtimeData.tags.openSideBar) {
                        // 离开提醒
                        ensurePopBox(
                            this.$t('离开 Stapxs QQ Lite？'),
                            this.$t('离开')
                        ).then(ensure => {
                            if (ensure) history.back()
                            else history.pushState('ssqqweb', '', location.href)
                        })
                    } else {
                        // 内部的页面返回处理，此处使用 watch backTimes 监听
                        runtimeData.watch.backTimes += 1
                        history.pushState('ssqqweb', '', location.href)
                    }
                })
                if (history.state != 'ssqqweb') {
                    history.pushState('ssqqweb', '', location.href)
                }
            }
            // UM：加载 Umami 统计功能
            if (!Option.get('close_ga') && !this.dev) {
                const config = {
                    baseUrl: import.meta.env.VITE_APP_MU_ADDRESS,
                    websiteId: import.meta.env.VITE_APP_MU_ID
                } as any
                // 给页面添加一个来源域名方便在 electron 中获取
                if(runtimeData.tags.clientType !== 'web') {
                    config.hostName = runtimeData.tags.clientType + '.stapxs.cn'
                }
                Umami.initialize(config)
            } else if (this.dev) {
                logger.system('开发者，由于 Stapxs QQ Lite 运行在调试模式下，分析组件并未初始化 …… 系统将无法捕获开发者阁下的访问状态，请悉知。')
            }
            App.checkUpdate() // 检查更新
            App.checkOpenTimes() // 检查打开次数
            App.checkNotice() // 检查公告
            // 加载愚人节附加
            if (new Date().getMonth() == 3 && new Date().getDate() == 1) {
                document.getElementById('connect_btn')?.classList.add('afd')
            }
            // 其他状态监听
            this.$watch(() => Session.activeSessions.size, () => {
                // macOS：刷新 Touch Bar 列表
                if (runtimeData.tags.clientType == 'electron') {
                    const list = [] as
                        { id: number, name: string, image?: string }[]
                    for (const session of Session.activeSessions.values()) {
                        list.push({
                            id: session.id,
                            name: session.showName,
                            image: session.face
                        })
                    }
                    callBackend(undefined, 'sys:flushOnMessage', false, list)
                }
            }, { deep: true })
            // 更新标题
            const titleList = [
                '也试试 Icalingua Plus Plus 吧！',
                '点击阅读《社交功能限制提醒》',
                '登录失败，Code 45',
                '你好世界！',
                '这只是个普通的彩蛋！'
            ]
            const title = titleList[Math.floor(Math.random() * titleList.length)]
            if(runtimeData.tags.platform == 'web') {
                document.title = title + '- Stapxs QQ Lite'
            } else {
                document.title = title
                callBackend(undefined, 'win:setTitle', false, title)
            }
        }
        // 页面关闭前
        window.onbeforeunload = () => {
            logger.system('开发者阁下—— 唔，阁下离开的太匆忙了！让我来帮开发者阁下收拾下东西吧。')
            new Notify().clear()
            if (import.meta.env.DEV) {
                driver.close()
            }
        }
    },
    methods: {
        /**
         * electron 窗口操作
         */
        controllWin(name: string) {
            callBackend(undefined, 'win:' + name, false)
        },

        /**
         * 发起连接
         */
        async connect() {
            if(this.tags.quickLoginSelect != '') {
                // PS：快速连接的地址只会是局域网,没ssl,milky没做适配,所以默认 ob 协议
                this.loginInfo.address = 'ob://' + this.tags.quickLoginSelect
            }
            // Connector.create(this.loginInfo.address, this.loginInfo.token)
            const re = await login(this.loginInfo.address, this.loginInfo.token)

            if (!re) return

            Option.save('address', this.loginInfo.address)
            if (Option.get('save_password'))
                Option.save('save_password', this.loginInfo.token)

        },
        selectQuickLogin(address: string) {
            this.tags.quickLoginSelect = address
        },
        cancelQUickLogin() {
            loginInfo.quickLogin = null
        },

        /**
         * 切换主标签卡判定
         * @param name 页面名称
         * @param view 虚拟路径名称
         * @param show 是否显示聊天面板
         */
        changeTab(_: string, view: string, show: boolean) {
            // UM：发送页面路由分析
            if (
                !Option.get('close_ga') &&
                !this.dev
            ) {
                Umami.trackPageView('/' + view)
            }
            this.tags.showChat = show
            this.tags.page = view
            // 附加操作
            const optTab = document.getElementsByClassName('opt-main-tab')[0] as HTMLDivElement
            switch (view) {
                case 'Options': {
                    if (optTab) {
                        optTab.style.opacity = '1'
                    }
                    break
                }
                case 'Home': {
                    if (optTab) {
                        optTab.style.opacity = '0'
                    }
                    break
                }
            }
        },
        barMainClick() {
            if (driver.isConnected()) {
                this.changeTab('信息', 'Messages', true)
            } else {
                this.changeTab('主页', 'Home', false)
            }
        },

        /**
         * 水波动画启动器
         * @param wave HTML 对象
         * @returns 动画循环器对象
         */
        waveAnimation(wave: HTMLElement | null) {
            if (wave) {
                const waves = wave.children[1].children
                const min = 20
                const max = 195
                const add = 1
                const timer = setInterval(() => {
                    // 遍历波浪体
                    for (let i = 0; i < waves.length; i++) {
                        const now = waves[i].getAttribute('x')
                        if (Number(now) + add > max) {
                            waves[i].setAttribute('x', min.toString())
                        } else {
                            waves[i].setAttribute(
                                'x',
                                (Number(now) + add).toString(),
                            )
                        }
                    }
                }, 50)
                return timer
            }
            return -1
        },

        /**
         * 刷新页面 fps 数据
         * @param timestamp 时间戳
         */
        rafLoop() {
            this.fps.ticks += 1
            //每30帧统计一次帧率
            if (this.fps.ticks >= 30) {
                const now = Date.now()
                const diff = now - this.fps.last
                const fps = Math.round(1000 / (diff / this.fps.ticks))
                this.fps.last = now
                this.fps.ticks = 0
                this.fps.value = fps
            }
            requestAnimationFrame(this.rafLoop)
        },

        /**
         * 移除当前的全局弹窗
         */
        removePopBox() {
            runtimeData.popBoxList.shift()
        },

        /**
         * 保存密码
         * @param event 事件
         */
        savePassword(event: Event) {
            const sender = event.target as HTMLInputElement
            const value = sender.checked
            if (value) {
                Option.save('save_password', true)
                // 创建提示弹窗
                noticePopBox(this.$t('连接密钥将以明文存储在浏览器 Cookie 中，请确保设备安全以防止密钥泄漏。'))
            } else {
                Option.remove('save_password')
            }
        },

        /**
         * 保存自动连接
         * @param event 事件
         */
        saveAutoConnect(event: Event) {
            Option.runASWEvent(event)
            // 如果自动保存密码没开，那也需要开
            if (!runtimeData.sysConfig.save_password) {
                this.savePassword(event)
            }
        },

        /**
         * 快速关闭弹窗（点击空白处关闭）
         * @param allow 是否允许快速关闭
         */
        popQuickClose(allow: boolean | undefined) {
            if (allow != false) {
                runtimeData.popBoxList.shift()
            }
        },

        afd(event: MouseEvent) {
            // 只在愚人节时生效
            if (new Date().getMonth() == 3 && new Date().getDate() == 1) {
                const sender = event.target as HTMLButtonElement
                // 获取文档整体宽高
                const docWidth = document.documentElement.clientWidth
                const docHeight = document.documentElement.clientHeight
                // 获取按钮宽高
                const senderWidth = sender.offsetWidth
                const senderHeight = sender.offsetHeight
                // 获取鼠标位置
                const mouseX = event.clientX
                const mouseY = event.clientY
                // 在宽高里随机抽一个位置，不能超出文档，不能让按钮在鼠标下
                let x, y
                do {
                    x = Math.floor(Math.random() * docWidth)
                    y = Math.floor(Math.random() * docHeight)
                } while (
                    x + senderWidth > docWidth ||
                    y + senderHeight > docHeight ||
                    (x < mouseX &&
                        x + senderWidth > mouseX &&
                        y < mouseY &&
                        y + senderHeight > mouseY)
                )
                // 设置按钮位置
                sender.style.left = x + 'px'
                sender.style.top = y + 'px'
            }
        },
    },
})
</script>

<style scoped>
/* 应用通知动画 */
.appmsg-move,
.appmsg-enter-active,
.appmsg-leave-active {
    transition: all 0.2s;
}

.appmsg-leave-active {
    position: absolute;
}

.appmsg-enter-from,
.appmsg-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

/* 标题栏变更动画 */
.appbar-enter-active,
.appbar-leave-active {
    transition: all 0.2s;
}

.appbar-enter-from,
.appbar-leave-to {
    transform: translateY(-60px);
}
</style>
