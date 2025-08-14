/*
 * @FileDescription: 资源模型
 * @Author: Mr.Lee
 * @Date: 2025/07/15
 * @Version: 1.0
 * @Description: 对tx资源id的封装，支持主动获取资源id
 */

import { runtimeData } from '../msg'
import { stdUrl } from '../utils/systemUtil'

export class Resource {
    _id?: string
    _url: string

    protected constructor(id: string | undefined, url: string) {
        this._id = id
        this._url = url
    }

    /**
     * 通过资源id创建
     * 适配器不支持获取资源时url为空字符串
     * @param id
     * @returns
     */
    static async fromId(id: string): Promise<Resource> {
        if (!runtimeData.nowAdapter?.getRessource) return new Resource(id, '')
        const url = await runtimeData.nowAdapter.getRessource(id)
        if (!url) return new Resource(id, '')
        return new Resource(id, url)
    }

    /**
     * 通过资源url创建
     * @param url
     * @param id
     * @returns
     */
    static fromUrl(url: string, id?: string): Resource {
        return new Resource(id, url)
    }

    get url(): string {
        return stdUrl(this._url)
    }
}
