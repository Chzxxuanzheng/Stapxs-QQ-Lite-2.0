/*
 * @FileDescription: 定义模型用的工具
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 仅仅是些平平无奇的工具啦~
 */

import { reactive } from 'vue';

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