/*
 * @FileDescription: 定义模型用的工具
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 仅仅是些平平无奇的工具啦~
 */

import { reactive } from 'vue'
import { getTimeConfig, getTrueLang } from '../utils/systemUtil'

export function autoReactive<T extends { new(...args: any[]): any }>(con: T): T {
    return class extends con {
        constructor(...args: any[]) {
            super(...args)
            const reactiveProxy = reactive(this)

            if (reactiveProxy.init) reactiveProxy.init()
            return reactiveProxy
        }
    } as T;
}

export function formatTime(time: number,
    config: 'year'
    | 'month'
    | 'week'
    | 'day'
    | 'hour'
    | 'minute'
    | 'second'
    | 'auto' = 'auto'): string {
        const lang = getTrueLang()
        let timeConfig: Intl.DateTimeFormatOptions = {}
        if (config === 'auto') timeConfig = getTimeConfig(new Date(time))
        else switch (config) {
            case 'year':
                timeConfig.year = 'numeric'
            // eslint-disable-next-line no-fallthrough
            case 'month':
                timeConfig.month = '2-digit'
            // eslint-disable-next-line no-fallthrough
            case 'week':
                if (config === 'week') timeConfig.weekday = 'short'
            // eslint-disable-next-line no-fallthrough
            case 'day':
                timeConfig.day = '2-digit'
            // eslint-disable-next-line no-fallthrough
            case 'hour':
                timeConfig.hour = 'numeric'
            // eslint-disable-next-line no-fallthrough
            case 'minute':
                timeConfig.minute = 'numeric'
            // eslint-disable-next-line no-fallthrough
            case 'second':
                timeConfig.second = 'numeric'
                break
        }
        return Intl.DateTimeFormat(lang, timeConfig).format(time)
}