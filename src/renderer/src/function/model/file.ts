/*
 * @FileDescription: 文件相关的模型
 * @Author: Mr.Lee
 * @Date: 2025/07/28
 * @Version: 1.0
 * @Description: 文件和文件夹模型
 */

import app from '@renderer/main'
import { PopInfo, PopType } from '../base'
import { downloadFile } from '../utils/appUtil'
import { Time } from './data'
import { getSizeFromBytes } from '../utils/systemUtil'
import { shallowRef, ShallowRef } from 'vue'
import { runtimeData } from '../msg'
import { GroupFileData, GroupFolderData } from '../adapter/interface'

export class GroupFile {
    type: string = 'file'

    groupId: number
    id: string
    name: string
    size: number
    downloadTimes: number
    deadTime?: number
    createrName: string
    createTime?: Time
    url?: string

    downloadPercent: ShallowRef<number|undefined> = shallowRef()

    constructor(data: GroupFileData, groupId: number) {
        this.id = data.file_id
        this.name = data.file_name
        this.size = data.size
        this.downloadTimes = data.download_times
        if(data.dead_time) this.deadTime = data.dead_time
        this.createrName = data.uploader_name
        if(data.upload_time) this.createTime = new Time(data.upload_time)
        this.groupId = groupId
    }

    /**
     * 下载文件
     * @returns 文件是否下载成功
     */
    async download(): Promise<boolean> {
        this.downloadPercent.value = 0

        // 如果没有url，则获取url
        if (!this.url) {
            const re = await this.getUrl()
            this.downloadPercent.value = undefined
            if (!re) return false
        }

        let re: boolean | undefined

        downloadFile(this.url as string, this.name, (event: ProgressEvent) => {
            if (!event.lengthComputable) return
            const percent = Math.floor((event.loaded / event.total) * 100)
            this.downloadPercent.value = percent
            if (percent >= 100) re = true
        },
        ()=>{
            this.downloadPercent.value = undefined
            re = false
        })

        return await new Promise((resolve) => {
            const timer = setInterval(() => {
                if (re !== undefined) {
                    clearInterval(timer)
                    resolve(false)
                }
            }, 100)
        })
    }

    /**
     * 获取url
     * @returns 获取url是否成功
     */
    async getUrl() {
        const { $t } = app.config.globalProperties
        if (!runtimeData.nowAdapter) return

        const data = await runtimeData.nowAdapter.getGroupFileUrl!(this)

        if (!data) {
            new PopInfo().add(PopType.ERR, $t('获取下载连接失败'))
            return false
        }

        this.url = data
        return true
    }

    get deadTimeFormat(): string | undefined {
        if (!this.deadTime) return
        return (this.deadTime - Date.now() / 86400 - 1).toFixed(0)
    }

    get formatSize(): string {
        return getSizeFromBytes(this.size)
    }
}

export class GroupFileFolder {
    type: string = 'folder'

    groupId: number
    id: string
    name: string
    count: number
    createTime?: Time
    createrName: string

    items: ShallowRef<(GroupFile | GroupFileFolder)[] | undefined> = shallowRef(undefined)
    isOpen: ShallowRef<boolean> = shallowRef(false)
    constructor(data: GroupFolderData, groupId: number) {
        this.id = data.folder_id
        this.name = data.folder_name
        this.count = data.count
        if(data.create_time) this.createTime = new Time(data.create_time)
        this.createrName = data.creater_name
        this.groupId = groupId
    }

    async open(): Promise<boolean> {
        this.isOpen.value = !this.isOpen.value

        if (this.items.value !== undefined) return true

        const { $t } = app.config.globalProperties

        if (!runtimeData.nowAdapter) return false

        const data = await runtimeData.nowAdapter.getGroupFolderFile!(this.groupId, this.id)
        if (!data) {
            new PopInfo().add(PopType.ERR, $t('获取文件夹内容失败'))
            return false
        }

        const sort = (a, b) => {
            if (!a.createTime) return -1
            if (!b.createTime) return 1
            return b.createTime.time - a.createTime.time
        }

        const out: (GroupFile | GroupFileFolder)[] = [
            ...data.folders.map(folder => new GroupFileFolder(folder, this.groupId)).sort(sort),
            ...data.files.map(file => new GroupFile(file, this.groupId)).sort(sort),
        ]

        this.items.value = out

        return true
    }
}
