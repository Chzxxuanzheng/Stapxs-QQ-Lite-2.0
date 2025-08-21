/*
 * @FileDescription: vue use组合函数封装
 * @Author: Mr.Lee
 * @Date: 2025/08/18
 * @Version: 1.0
 * @Description: 封装的一些vue组合函数
 */

import { ShallowRef, shallowRef, watch, onUnmounted, ComputedRef, ref, computed, onMounted } from 'vue'
import { MenuEventData } from '../elements/information'
import { pastTimeFormat } from './systemUtil'

/**
 * 用来封装一个停留事件的处理, 支持传递额外上下文
 * 适用于鼠标或触摸事件，停留一段时间后触发
 * 例如：长按菜单,鼠标悬浮等
 * @param getPos 从事件里提取坐标的函数
 * @param continueTime 成功的持续时间
 * @param hooks 钩子函数 支持成功时,失败时,退出时
 * @returns {
 *   acceptStartEvent: (event: T, exArg?: E) => void, // 接受开始事件
 *   acceptUpdateEvent: (event: T) => void, // 接受更新事件
 *   acceptEndEvent: (event: T) => void // 接受结束事件
 * }
 */
export function useStayEvent<T extends Event, C>(
    getPos: (event: T) => { x: number, y: number } | void,
    hooks: {
        onFit?: ((eventData: MenuEventData, ctx: C) => void) |
        ((eventData: MenuEventData) => void) |
        ((ctx: C) => void) |
        (() => void)
        onLeave?: ((ctx: C) => void) |
        (() => void)
        onFail?: ((ctx: C) => void) |
        (() => void)
    },
    continueTime: number
): {
    handle: (event: T, ctx?: C | undefined) => void
    handleEnd: (event: T) => void
} {
    // 表示结束
    let end: boolean = true
    // 表示是否符合条件
    let fit: boolean = false
    // 记录开始位置
    let startPos: { x: number, y: number } | undefined = undefined
    // settiemout
    let timeout: number
    // 开始时事件数据
    let startEventData: MenuEventData
    // 额外参数
    let ctx: C | undefined
    const handle = (event: T, _ctx?: C | undefined) => {
        if (end) _acceptStartEvent(event, _ctx)
        else _acceptUpdateEvent(event)
    }
    const handleEnd = (event: T) => {
        if (end) return
        _acceptEndEvent(event)
    }
    const _acceptStartEvent = (event: T, _ctx?: C | undefined) => {
        fit = false
        end = false
        ctx = _ctx
        startPos = getPos(event) as { x: number, y: number }
        if (!startPos) return
        startEventData = {
            x: startPos.x,
            y: startPos.y,
            target: event.target as HTMLElement,
        }
        timeout = setTimeout(() => {
            fit = true
            _callFit()
        }, continueTime) as unknown as number
    }
    const _acceptUpdateEvent = (event: T) => {
        if (end) return
        const pos = getPos(event)
        if (!pos) return
        if (!startPos) return
        // 位置改变
        if (Math.abs(pos.x - startPos.x) > 10 ||
            Math.abs(pos.y - startPos.y) > 10) {
            _setEnd()
        }
    }
    const _acceptEndEvent = (event: T) => {
        if (end) return
        _setEnd()
        if (getPos(event)) _acceptUpdateEvent(event)
    }
    // ==工具函数=====================================
    const _setEnd = () => {
        end = true
        if (fit) _callLeave()
        else _callFail()
        // 清除定时器
        clearTimeout(timeout)
    }
    const _callFit = () => {
        if (hooks.onFit?.length === 0) {
            (hooks.onFit as () => void)()
        } else if (hooks.onFit?.length === 1) {
            let arg
            if (ctx) arg = ctx
            else arg = startEventData

            ;(hooks.onFit as (arg: MenuEventData | C) => void)(arg)
        } else if (hooks.onFit?.length === 2) {
            (hooks.onFit as (eventData: MenuEventData, ctx?: C) => void)(startEventData, ctx)
        }
    }
    const _callLeave = () => {
        if (hooks.onLeave?.length === 0) {
            (hooks.onLeave as () => void)()
        } else if (hooks.onLeave?.length === 1) {
            (hooks.onLeave as (ctx?: C) => void)(ctx)
        }
    }
    const _callFail = () => {
        if (hooks.onFail?.length === 0) {
            (hooks.onFail as () => void)()
        } else if (hooks.onFail?.length === 1) {
            (hooks.onFail as (ctx?: C) => void)(ctx)
        }
    }
    return {
        handle,
        handleEnd,
    }
}

/**
 * 有延迟的但个元素的watch
 * @param getValue 获取值的函数
 * @param delay 延迟时间，默认 500ms
 * @returns 返回一个Ref对象，当尝过delay时长未更新后更新
 */
export function useBaseDebounced<T>(getValue: () => T, delay: number = 500): ShallowRef<T> {
    const result: ShallowRef<T> = shallowRef(getValue())
    let timeout: ReturnType<typeof setTimeout>
    watch(getValue, (newValue) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            result.value = newValue
        }, delay)
    })
    return result
}

/**
 * 自动卸载的定时器
 * @param callback 回调
 * @param interval 计时
 * @returns
 */
export function useInterval(
    callback: () => void,
    interval: number
): ReturnType<typeof setInterval> {
    const timer = setInterval(callback, interval)
    onUnmounted(() => {
        clearInterval(timer)
    })
    return timer
}

export function usePasttime(time: number): ComputedRef<string> {
    const trigger = ref(0)
    useInterval(() => {
        trigger.value++
    }, 1000 * 10)
    return computed(() => {
        trigger.value
        return pastTimeFormat(time)
    })
}

/**
 * 使用事件监听器
 * @param target 目标dom
 * @param event 事件
 * @param callback 回调
 */
export function useEventListener<T extends keyof DocumentEventMap>(
    target: Document,
    event: T,
    callback: (event: DocumentEventMap[T]) => void) {
    // 如果你想的话，
    // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}
