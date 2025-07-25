/*
 * @FileDescription: Session 相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 聊天上下文模型,目前仅用在提供消息信息上了
 */

export class Session {
    type: 'group' | 'user' | 'temp'
    id: number
    group_id?: number

    constructor(type: 'group' | 'user', id: number)
    constructor(type: 'temp', id: string)
    constructor(type: 'temp', id: number, group_id: number)
    constructor(type: 'group' | 'user' | 'temp', id: number | string)
    constructor(type: 'group' | 'user' | 'temp', id: number | string, group_id?: number) {
        this.type = type
        if (type === 'temp') {
            if (typeof id === 'string') {
                this.id = Number((id as string).split('/')[0])
                this.group_id = Number((id as string).split('/')[1])
            }else {
                this.id = Number(id)
                this.group_id = group_id
            }
            return
        }
        this.id = Number(id)
    }

    createSendParam(): { user_id?: number, group_id?: number } {
        if (this.type === 'group') {
            return { group_id: this.id }
        }
        else if (this.type === 'user') {
            return { user_id: this.id }
        } else {
            return { user_id: this.id, group_id: this.group_id }
        }
    }

    getSendApi(merge: boolean = false): string {
        if (!merge) {
            if (this.type === 'temp') return 'send_temp_msg'
            return 'send_msg'
        }else {
            if (this.type === 'group') return 'send_group_forward'
            return 'send_private_forward'
        }
    }
}
