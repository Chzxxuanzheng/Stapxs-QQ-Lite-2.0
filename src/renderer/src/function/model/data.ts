/*
 * @FileDescription: 数据结构相关模型
 * @Author: Mr.Lee
 * @Date: 2025/07/18
 * @Version: 1.0
 * @Description: 定义数据结构
 */

import pinyin from 'tiny-pinyin'
import { getTimeConfig, getTrueLang, getViewTime } from '../utils/systemUtil'

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

/**
 * 包含拼音的名称类
 * 可以通过matchStr方法来匹配字符串
 * 支持中文、拼音、首字母等匹配方式
 * @extends String
 */
export class Name extends String {
    private _name!: string
    private _pinyinName!: string
    private _pinyinShort!: string
    private _pinyinHead!: string

    constructor(name: string) {
        super(name)
        this.resetContent(name)
    }

    private resetContent(newName: string): void {
        this._name = String(newName)
        this._pinyinName = pinyin.convertToPinyin(this._name, '', true).toLowerCase()
        this._pinyinShort = pinyin.convertToPinyin(this._name, '|||', true).
            toLowerCase().
            split('|||').
            map(item => item[0] ?? '').
            join('')
        this._pinyinHead = this._pinyinName[0]
    }

    matchStr(str: string): boolean {
        if (this._name.includes(str)) return true
        if (this._pinyinName.includes(str)) return true
        if (this._pinyinShort.includes(str)) return true
        if (this._pinyinHead.includes(str)) return true
        return false
    }

    get py(): string {
        return this._pinyinName
    }
}

/**
 * 对时间的封装
 * 自动进行 getViewTime 处理
 * 自带格式化方法
 */
export class Time {
    private _time: number

    constructor(time: number|string) {
        if (typeof time === 'string') this._time = new Date(time).getTime()
        else this._time = time
        this._time = getViewTime(this._time)
    }

    format(
        start:
          'year'
        | 'month'
        | 'week'
        | 'day'
        | 'hour'
        | 'minute'
        | 'second'
        | 'auto' = 'auto',
        end:
          'year'
        | 'month'
        | 'week'
        | 'day'
        | 'hour'
        | 'minute'
        | 'second'
        | 'auto' = 'auto'
    ): string {
        const lang = getTrueLang()
        let timeConfig: Intl.DateTimeFormatOptions = {}
        if (end === 'auto') end = 'minute'
        if (start === 'auto') timeConfig = getTimeConfig(new Date(this._time))
        else switch (start) {
            case 'year':
                timeConfig.year = 'numeric'
                if (end === 'year') break
            // eslint-disable-next-line no-fallthrough
            case 'month':
                timeConfig.month = '2-digit'
                if (end === 'month') break
            // eslint-disable-next-line no-fallthrough
            case 'week':
                if (start === 'week') timeConfig.weekday = 'short'
                if (end === 'week') break
            // eslint-disable-next-line no-fallthrough
            case 'day':
                timeConfig.day = '2-digit'
                if (end === 'day') break
            // eslint-disable-next-line no-fallthrough
            case 'hour':
                timeConfig.hour = 'numeric'
                if (end === 'hour') break
            // eslint-disable-next-line no-fallthrough
            case 'minute':
                timeConfig.minute = 'numeric'
                if (end === 'minute') break
            // eslint-disable-next-line no-fallthrough
            case 'second':
                timeConfig.second = 'numeric'
                break
        }
        return Intl.DateTimeFormat(lang, timeConfig).format(this._time)
    }

    get time(): number {
        return this._time
    }
}
