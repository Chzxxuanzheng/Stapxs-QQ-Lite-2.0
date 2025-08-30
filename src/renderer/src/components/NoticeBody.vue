<!--
 * @FileDescription: 通知消息模板
 * @Author: Stapxs
 * @Date:
 *      2022/12/04
 *      2025/08/01
 * @Version:
 *         1.0 - 初始版本
 *         2.0 - 重构为setup语法
-->

<template>
    <div :id="'notice-' + id" class="note">
        <div class="note-base">
            <!-- #region == 接收到的消息 ========================================== -->
            <!-- 撤回 -->
            <template v-if="data instanceof RecallNotice">
                <template v-if="data.selfRevoke">
                    <a v-user="data.user" />
                    <span>
                        {{ $t('撤回了一条消息') }}
                        <template v-if="data.suffix">
                            ，{{ data.suffix }}
                        </template>
                    </span>
                </template>
                <template v-else>
                    <a v-user="data.operator" />
                    <span>{{ $t('撤回了') }}</span>
                    <a v-user="data.user" />
                    <span>{{ $t('的消息') }}</span>
                </template>
            </template>
            <!-- 禁言 -->
            <template v-else-if="data instanceof BanNotice">
                <a v-user="data.operator" />
                <span>{{ $t('禁言了') }}</span>
                <span v-if="data.tome">{{ $t('你') }}</span>
                <a v-else v-user="data.user" />
                <span>{{ data.fTime }}</span>
            </template>
            <!-- 解除禁言 -->
            <template v-else-if="data instanceof BanLiftNotice">
                <a v-user="data.operator" />
                <span>{{ $t('解除了') }}</span>
                <span v-if="data.tome">{{ $t('你') }}</span>
                <a v-else v-user="data.user" />
                <span>{{ $t('的禁言') }}</span>
            </template>
            <!-- 戳一戳 -->
            <template v-else-if="data instanceof PokeNotice">
                <a v-user="data.user" />
                <img :src="data.ico">
                <span>{{ data.action }}</span>
                <a v-user="data.target" />
                <span>{{ data.suffix }}</span>
                <div class="space" />
            </template>
            <template v-else-if="data instanceof JoinNotice">
                <template v-if="data.operator">
                    <a v-user="data.operator" />
                    <span>{{ $t('通过了') }}</span>
                </template>
                <template v-if="data.invitor">
                    <a v-user="data.invitor" />
                    <span>{{ $t('邀请') }}</span>
                </template>
                <a v-user="data.user" />
                <span>{{ $t('加入了群聊') }}</span>
            </template>
            <template v-else-if="data instanceof LeaveNotice">
                <template v-if="data.kick">
                    <a v-user="data.operator" />
                    <span>{{ $t('将') }}</span>
                    <a v-user="data.user" />
                    <span>{{ $t('移出群聊') }}</span>
                </template>
                <template v-else>
                    <a v-user="data.user" />
                    <span>{{ $t('离开了群聊') }}</span>
                </template>
            </template>
            <!-- #endregion -->

            <!-- #region == 内部系统消息 ========================================== -->
            <!-- 缺失消息 -->
            <template v-else-if="data instanceof DeleteNotice">
                <span>{{ $t('这条消息迷失在虚空里了') }}</span>
            </template>
            <!-- 时间 -->
            <template v-else-if="data instanceof TimeNotice && data.time != undefined">
                <span>{{ pastTime }}</span>
            </template>
            <!-- 通知 -->
            <template v-else-if="data instanceof InfoNotice">
                <span>{{ data.message }}</span>
            </template>
            <!-- #endregion -->
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Notice,
    BanNotice,
    DeleteNotice,
    BanLiftNotice,
    PokeNotice,
    RecallNotice,
    TimeNotice,
    LeaveNotice,
    JoinNotice,
    InfoNotice
} from '@renderer/function/model/notice'
import { IUser } from '@renderer/function/model/user'
import { runtimeData } from '@renderer/function/msg'
import { usePasttime, useStayEvent } from '@renderer/function/utils/vuse'
import app from '@renderer/main'
import {
    Directive,
    ComputedRef
} from 'vue'
import { UserInfoPan } from './UserInfoPan.vue'
const { data, id, userInfoPan } = defineProps<{
    data: Notice
    id?: string
    userInfoPan?: UserInfoPan
}>()

const $t = app.config.globalProperties.$t

const {
    handle: userHoverHandle,
    handleEnd: userHoverEnd,
} = useStayEvent((event: MouseEvent) => {
        return {x: event.clientX, y: event.clientY,}
    },{
        onFit: (eventData, ctx: IUser)=>{
            userInfoPan?.open(ctx, eventData.x, eventData.y)
        },
        onLeave: ()=>{
            userInfoPan?.close()
        }
    }, 495
)

let pastTime: ComputedRef<string> | undefined
if (data instanceof TimeNotice && data.time != undefined) {
    pastTime = usePasttime(data.time.time)
}

const vUser: Directive<HTMLAnchorElement, IUser> = {
    mounted(el, binding: {value: IUser}) {
        const user = binding.value
        // 特殊处理自己 (开摆!这玩意上不了转发别表,不考虑不特殊处理自己的兼容了)
        if (user.user_id === runtimeData.loginInfo.uin) {
            el.innerText = $t('你')
            el.classList.add('me')
        }else {
            el.addEventListener('mouseenter',
            (event) => userHoverHandle(event, binding.value))
            el.addEventListener('mousemove',
            (event) => userHoverHandle(event, binding.value))
            el.addEventListener('mouseleave', userHoverEnd)
            el.innerHTML = binding.value.name
        }
    },
    unmounted(el) {
        el.removeEventListener('mouseenter', userHoverHandle)
        el.removeEventListener('mousemove', userHoverHandle)
        el.removeEventListener('mouseleave', userHoverEnd)
    }
}
</script>
