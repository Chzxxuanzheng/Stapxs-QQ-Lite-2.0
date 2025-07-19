/*
 * @FileDescription: 数据结构相关模型
 * @Author: Mr.Lee
 * @Date: 2025/07/18
 * @Version: 1.0
 * @Description: 定义数据结构
 */

export class TimeoutSet<T> {
    private data: Map<T, number> = new Map()
    private timeout: number

    constructor(timeout: number = 600) {
        this.timeout = timeout
    }

    add(item: T): void {
        if (this.data.has(item)) {
            throw new Error(`${item}重复存在`)
        }
        const rm = setTimeout(() => {
            this.data.delete(item)
        }, this.timeout)
        this.data.set(item, rm as unknown as number)
    }

    has(item: T): boolean {
        return this.data.has(item)
    }

    delete(item: T): boolean {
        if (!this.data.has(item)) return false
        clearTimeout(this.data.get(item) as unknown as number)
        return this.data.delete(item)
    }

    get length(): number {
        return this.data.size
    }
}