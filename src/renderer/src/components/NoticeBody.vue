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
        <!-- #region == 接收到的消息 ========================================== -->
        <!-- 撤回 -->
        <div v-if="data instanceof RevokeNotice" class="note-recall note-base">
            <template v-if="data.selfRevoke">
                <a v-user="data.user" />
                <span>{{ $t('撤回了一条消息') }}</span>
                <div />
            </template>
            <template v-else>
                <a v-user="data.operator" />
                <span>{{ $t('撤回了') }}</span>
                <a v-user="data.user" />
                <span>{{ $t('的消息') }}</span>
            </template>
        </div>
        <!-- 禁言 -->
        <div v-else-if="data instanceof BanNotice" class="note-ban note-base">
            <a v-user="data.operator" />
            <span>{{ $t('禁言了') }}</span>
            <span v-if="data.tome">{{ $t('你') }}</span>
            <a v-else v-user="data.user" />
            <span>{{ data.fTime }}</span>
        </div>
        <!-- 解除禁言 -->
        <div v-else-if="data instanceof BanLiftNotice" class="note-ban note-base">
            <a v-user="data.operator" />
            <span>{{ $t('解除了') }}</span>
            <span v-if="data.tome">{{ $t('你') }}</span>
            <a v-else v-user="data.user" />
            <span>{{ $t('的禁言') }}</span>
        </div>
        <!-- 戳一戳 -->
        <div v-else-if="data instanceof PokeNotice" class="note-notify note-base">
            <a v-user="data.user" />
            <img :src="data.img">
            <span>{{ data.action }}</span>
            <a v-user="data.target" />
            <span>{{ data.suffix }}</span>
            <div class="space" />
        </div>
        <div v-else-if="data instanceof JoinNotice" class="note-notify note-base">
            <template v-if="data.join_type === 'approve'">
                <a v-user="data.operator" />
                <span>{{ $t('通过了') }}</span>
                <a v-user="data.user" />
                <span>{{ $t('的入群申请') }}</span>
            </template>
            <template v-else-if="data.join_type === 'invite'">
                <a v-user="data.operator" />
                <span>{{ $t('邀请') }}</span>
                <a v-user="data.user" />
                <span>{{ $t('加入了群聊') }}</span>
            </template>
            <template v-else-if="data.join_type === 'self'">
                <a v-user="data.user" />
                <span>{{ $t('加入了群聊') }}</span>
            </template>
        </div>
        <div v-else-if="data instanceof LeaveNotice" class="note-notify note-base">
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
        </div>
        <!-- #endregion -->

        <!-- #region == 内部系统消息 ========================================== -->
        <!-- 缺失消息 -->
        <div v-else-if="data instanceof DeleteNotice" class="note-base">
            <span>{{ $t('这条消息迷失在虚空里了') }}</span>
        </div>
        <!-- 时间 -->
        <div v-else-if="data instanceof TimeNotice && data.time != undefined"
            class="note-time note-base">
            <span>{{ pastTime }}</span>
        </div>
        <!-- 通知 -->
        <div v-else-if="data instanceof InfoNotice" class="note-base">
            <span>{{ data.message }}</span>
        </div>
        <!-- #endregion -->
    </div>
</template>

<script setup lang="ts">
import {
    Notice,
    BanNotice,
    DeleteNotice,
    BanLiftNotice,
    PokeNotice,
    RevokeNotice,
    TimeNotice,
    LeaveNotice,
    JoinNotice,
    InfoNotice
} from '@renderer/function/model/notice'
import { IUser } from '@renderer/function/model/user'
import { runtimeData } from '@renderer/function/msg'
import { usePasttime, useStayEvent } from '@renderer/function/utils/appUtil'
import app from '@renderer/main'
import { UserInfoPan } from '@renderer/pages/Chat.vue'
import {
    Directive,
    ComputedRef
} from 'vue'
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
