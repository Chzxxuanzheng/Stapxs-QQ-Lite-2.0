/*
 * @FileDescription: Message 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/20
 * @Version: 1.0
 * @Description: 直接在消息栏上展示的模型
 */

import { v4 as uuid } from 'uuid';
import { getViewTime } from '../utils/systemUtil'; 
import { Session } from './session';
import app from '@renderer/main';
import { formatTime } from './utils';

export abstract class Message {
    /**
     * 消息ID
     * @description 项目内部使用唯一标识符时优先使用这个，不要用message_id
     */
    readonly abstract type: string
    readonly uuid: string = uuid()
    sub_type?: string
    abstract session?: Session
    time?: number
    message_id?: string
    constructor(data: object) {
        if (data['time']) this.time = getViewTime(data['time'])
        if (data['message_id']) this.message_id = String(data['message_id'])
        if (data['sub_type']) this.sub_type = data['sub_type']
    }

    formatTime(config: 'year'
        | 'month'
        | 'week'
        | 'day'
        | 'hour'
        | 'minute'
        | 'second'
        | 'auto' = 'auto'): string {
        const { $t } = app.config.globalProperties
        if (!this.time) return $t('时间丢失了...')
        return formatTime(this.time, config)
    }
}