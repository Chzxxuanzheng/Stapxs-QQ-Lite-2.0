/*
 * @FileDescription: v 指令封装
 * @Author: Mr.Lee
 * @Date: 2025/08/18
 * @Version: 1.0
 * @Description: 封装的一些v指令
 */

import { Directive, ref, watchEffect, shallowReactive, watch, WatchHandle } from 'vue'
import { Role } from '../adapter/enmu'
import { MenuEventData } from '../elements/information'
import { shouldAutoFocus } from './appUtil'
import { useStayEvent } from './vuse'

/**
 * 根据用户角色设置元素的 class 属性
 */
export const vUserRole: Directive<HTMLSpanElement, Role> = {
    mounted(el: HTMLElement, binding: DirectiveBinding<Role>) {
        const role = binding.value
        if (!role) return
        // 设置 class
        el.classList.add('user-title')
        switch (role) {
            case Role.Owner:
                el.classList.add('owner')
                break
            case Role.Admin:
                el.classList.add('admin')
                break
            case Role.Bot:
                el.classList.add('robot')
                break
        }
    }
}
/**
 * 创建一个右键菜单指令
 * 用于闭包公用停留事件控制器
 * @returns
 */
function createVMenu(): Directive<HTMLElement, (event: MenuEventData) => void> {
    // 右键菜单事件数据类型
    type Binding = DirectiveBinding<(event: MenuEventData) => void> & { modifiers: { prevent?: boolean, stop?: boolean } }

    // 右键菜单事件数据类型
    const {
        handle: menuTouchHandle, handleEnd: menuTouchEnd,
    } = useStayEvent(
        (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0]
                return { x: touch.clientX, y: touch.clientY }
            }
            return undefined
        },
        {
            onFit: (data: MenuEventData, binding: Binding) => {
                // 触发右键菜单事件
                binding.value(data)
            }
        },
        400
    )

    // 创建指令
    return {
        mounted(el: HTMLElement, binding: Binding) {
            // 创建变量
            const prevent = binding.modifiers.prevent || false
            const stop = binding.modifiers.stop || false
            const controller = new AbortController()
            const options = { signal: controller.signal }

            // 添加监听
            el.addEventListener('contextmenu', (event) => {
                if (prevent) event.preventDefault()
                if (stop) event.stopPropagation()
                const data: MenuEventData = {
                    x: event.clientX,
                    y: event.clientY,
                    target: event.target as HTMLElement,
                }
                binding.value(data)
            }, options)
            el.addEventListener('touchstart', (event) => {
                if (prevent) event.preventDefault()
                if (stop) event.stopPropagation()
                menuTouchHandle(event, binding)
            }, options)
            el.addEventListener('touchmove', (event) => {
                if (prevent) event.preventDefault()
                if (stop) event.stopPropagation()
                menuTouchHandle(event, binding)
            }, options)
            el.addEventListener('touchend', (event) => {
                if (prevent) event.preventDefault()
                if (stop) event.stopPropagation()
                menuTouchEnd(event)
            }, options)
            ;(el as any)._vMenuController = controller
        },
        unmounted(el: HTMLElement) {
            const controller = (el as any)._vMenuController
            if (!controller) return

            controller.abort()
            delete (el as any)._vMenuController
        },
    }
}
/**
 * 创建一个右键菜单指令
 * @example v-menu="(data: MenuEventData) =>  打开菜单函数(data, 其他参数)"
 */
export const vMenu: Directive<HTMLElement, (event: MenuEventData) => void, 'prevent' | 'stop'> = createVMenu()
/**
 * 挂在时如果设备支持,自动聚焦输入框
 */
export const vAutoFocus: Directive<HTMLInputElement | HTMLTextAreaElement, undefined> = {
    mounted(el: HTMLInputElement | HTMLTextAreaElement) {
        // 判断是否支持聚焦
        if (!shouldAutoFocus()) return

        // 检查元素是否可见
        const isVisible = () => {
            const style = window.getComputedStyle(el)
            return style.display !== 'none' &&
                style.visibility !== 'hidden' &&
                Number(style.opacity) > 0
        }

        if (!isVisible()) return

        el.focus()
    }
}

export const vFocus: Directive<HTMLElement, boolean | undefined> = {
    mounted(el: HTMLElement, binding: DirectiveBinding<boolean | undefined>) {
        if (binding.value === false) return

        // 检查元素是否可见
        const isVisible = () => {
            const style = window.getComputedStyle(el)
            return style.display !== 'none' &&
                style.visibility !== 'hidden' &&
                Number(style.opacity) > 0
        }

        if (!isVisible()) return

        el.focus()
    }
}

export interface SearchBinding<T extends { match(query: string): boolean }> {
    originList: Iterable<T>
    isSearch: boolean
    query: T[]
    forceUpdate?: number // 强制刷新
}
/**
 * 生成一个 Search 指令
 */

export function createVSearch<T extends { match(query: string): boolean }>(): Directive<HTMLInputElement, SearchBinding<T>> {
    return {
        mounted(el, binding: DirectiveBinding<SearchBinding<T>>) {
            const controller = new AbortController()
            const queryTxt = ref('')

            el.addEventListener('input', () => {
                queryTxt.value = el.value.trim()
            }, { signal: controller.signal })

            const stopWatchEffect = watchEffect(() => {
                binding.value.forceUpdate
                if (!queryTxt.value) {
                    binding.value.isSearch = false
                    binding.value.query = []
                } else {
                    binding.value.isSearch = true
                    binding.value.query = shallowReactive(Array.from(binding.value.originList)
                        .filter(item => item.match(queryTxt.value)))
                }
            })
            const stopWatch = watch(() => binding.value.isSearch, (isSearch) => {
                if (!isSearch) {
                    binding.value.query = []
                }
            })
            ;(el as any)._vSearchController = controller
            ;(el as any)._vStopWatch = { stopWatch, stopWatchEffect }
        },
        unmounted(el) {
            const controller = (el as any)._vSearchController
            const stopWatch = (el as any)._vStopWatch
            if (controller) {
                controller.abort()
                delete (el as any)._vSearchController
            }
            if (stopWatch) {
                (stopWatch.stopWatch as WatchHandle).stop()
                ;(stopWatch.stopWatchEffect as WatchHandle).stop()
                delete (el as any)._vStopWatch
            }
        }
    }
}
/**
 * 输入时在制定列表里搜索匹配的项
 * @example v-search="{
 *     originList: 制定的列表,
 *     isSearch: 当前是否在搜索,
 *     query: 搜索结果列表，
 * }"
 * @see createVSearch
 */

export const vSearch = createVSearch<any>()
/**
 * 如果自身超出了父组件的范围，则隐藏自身
 */
export const vOverflowHide: Directive<HTMLElement, undefined> = {
    mounted(el: HTMLElement) {
        const parent = el.parentElement
        if (!parent) return

        // 检查元素是否完全在父容器内
        const update = () => {
            const pRect = parent.getBoundingClientRect()
            const eRect = el.getBoundingClientRect()
            if (eRect.left < pRect.left ||
                eRect.top < pRect.top ||
                eRect.right > pRect.right ||
                eRect.bottom > pRect.bottom) {
                el.style.opacity = '0'
            } else {
                el.style.opacity = ''
            }
        }

        // 监听窗口尺寸变化
        const controller = new AbortController()
        parent.addEventListener('resize', update, { signal: controller.signal })

        // 使用 ResizeObserver 监听大小或内容变化
        const observer = new ResizeObserver(update)
        observer.observe(el)
        observer.observe(parent)

        // 初始检查
        update()
        ;(el as any)._vOverflowHideController = { observer, controller }
    },
    unmounted(el: HTMLElement) {
        const data = (el as any)._vOverflowHideController
        if (!data) return
        data.observer.disconnect()
        data.controller.abort()
        delete (el as any)._vOverflowHideController
    }
}
/**
 * 是否隐藏元素
 * 如果值为 true，则隐藏元素（通过设置 opacity 为 0）
 * 如果值为 false，则显示元素（通过清除 opacity）
 * @example v-hide="true"
 */
export const vHide: Directive<HTMLElement, boolean> = {
    mounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
        if (binding.value)
            el.style.opacity = '0'

        else
            el.style.opacity = ''
    },
    updated(el: HTMLElement, binding: DirectiveBinding<boolean>) {
        if (binding.value)
            el.style.opacity = '0'

        else
            el.style.opacity = ''
    }
}
/**
 * 监听 Esc 键按下事件
 * 当按下 Esc 键时，执行绑定的函数
 * @example v-esc="退出函数"
 */
export const vEsc: Directive<HTMLElement, () => void> = {
    mounted(el: HTMLElement, binding: DirectiveBinding<() => void>) {
        const controller = new AbortController()
        const options = { signal: controller.signal }

        // 监听键盘事件
        const keydownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.stopPropagation()
                binding.value()
            }
        }
        document.addEventListener('keydown', keydownHandler, options)
        ;(el as any)._vEscController = controller
    },
    unmounted(el: HTMLElement) {
        const controller = (el as any)._vEscController
        if (controller) {
            document.removeEventListener('keydown', controller.signal)
            delete (el as any)._vEscController
        }
    }
}
