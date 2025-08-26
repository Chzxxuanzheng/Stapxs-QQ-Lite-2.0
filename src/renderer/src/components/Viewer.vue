<template>
    <Teleport to="body">
        <Transition name="global-session-search-bar">
            <div v-if="currentImg" class="mask-background"
                v-esc="escClose"
                @click="closeClick"
                @mousemove="mouseMoveCheck">
                <!-- 工具扩展设置 -->
                <TransitionGroup class="viewer-bar viewer-tool-config-bar"
                    name="viewer-tool-config" tag="div">
                    <template v-if="currentTool !== 'hand'">
                        <div v-for="(color, key) in colorMap"
                            :style="{'--color': color}"
                            :key="key"
                            :class="{'active': currentColor === key}"
                            @click.stop="selectColor(key)" />
                    </template>
                    <template v-if="currentTool === 'rect'">
                        <font-awesome-icon v-if="toolConfig.rect.fill" :icon="['fas', 'square']"
                            @click.stop="toolConfig.rect.fill = false" />
                        <font-awesome-icon v-else :icon="['far', 'square']"
                            @click.stop="toolConfig.rect.fill = true" />
                    </template>
                </TransitionGroup>
                <!-- 按钮栏 -->
                <div>
                    <Transition name="viewer-button" mode="out-in">
                        <div v-if="!edit"
                            class="viewer-bar viewer-button-bar"
                            :class="{
                                'force-show': forceShowButton || moveTimeout
                            }"
                            key="1">
                            <font-awesome-icon :icon="['fas', 'angle-left']"
                                v-hide="!prev"
                                @click.stop="prevImg"/>
                            <font-awesome-icon :icon="['fas', 'share']" style="transform: rotateY(180deg);"
                                @click.stop="rotate(-90)"/>
                            <hr />
                            <font-awesome-icon :icon="['fas', 'pen-to-square']"
                                @click.stop="editImg"/>
                            <font-awesome-icon :icon="['fas', 'undo']"
                                @click.stop="resetModify"/>
                            <font-awesome-icon :icon="['fas', 'download']"
                                @click.stop="download"/>
                            <font-awesome-icon :icon="['fas', 'clipboard']"
                                @click.stop="copy"/>
                            <hr />
                            <font-awesome-icon :icon="['fas', 'share']"
                                @click.stop="rotate(90)"/>
                            <font-awesome-icon :icon="['fas', 'angle-right']"
                                v-hide="!next"
                                @click.stop="nextImg"/>
                        </div>
                        <div v-else
                            class="viewer-bar viewer-button-bar force-show"
                            key="2">
                            <font-awesome-icon :icon="['fas', 'hand']"
                                :class="{ active: currentTool === 'hand' }"
                                @click.stop="switchTool('hand')"/>
                            <font-awesome-icon :icon="['fas', 'pencil']"
                                :class="{ active: currentTool === 'pen' }"
                                @click.stop="switchTool('pen')"/>
                            <font-awesome-icon :icon="['fas', 'object-group']"
                                :class="{ active: currentTool === 'rect' }"
                                @click.stop="switchTool('rect')"/>
                            <hr />
                            <font-awesome-icon :icon="['fas', 'share']" style="transform: rotateY(180deg);"
                                @click.stop="rotate(-90)"/>
                            <font-awesome-icon :icon="['fas', 'share']"
                                @click.stop="rotate(90)"/>
                            <hr />
                            <font-awesome-icon :icon="['fas', 'undo']"
                                @click.stop="editUndo"/>
                            <hr />
                            <font-awesome-icon :icon="['fas', 'download']"
                                @click.stop="downloadCanvas"/>
                            <font-awesome-icon :icon="['fas', 'clipboard']"
                                @click.stop="editCopy"/>
                            <hr />
                            <font-awesome-icon :icon="['fas', 'xmark']"
                                @click.stop="editExit"/>
                        </div>
                    </Transition>
                </div>
                <Transition mode="out-in"
                    :name="`viewer-change-img-${changeViewerCssName}`">
                    <div :key="currentImg?.src">
                        <div v-if="loading" class="viewer loading">
                            <font-awesome-icon :icon="['fas', 'spinner']" />
                            {{ $t('加载ing') }}
                        </div>
                        <div v-else
                            :class="{
                                'viewer-img': true,
                                'grab': mouseMoveInfo,
                                'zooming': zoomTimeout
                            }">
                            <!-- 水平滚动条 -->
                            <div v-hide="!showScrollbarX" class="scrollbar x"
                                @wheel.stop.prevent="onScrollbarWheel('x', $event)">
                                <div class="scrollbar-thumb" :style="scrollbarThumbXStyle"></div>
                            </div>
                            <!-- 垂直滚动条 -->
                            <div v-hide="!showScrollbarY" class="scrollbar y"
                                @wheel.stop.prevent="onScrollbarWheel('y', $event)">
                                <div class="scrollbar-thumb" :style="scrollbarThumbYStyle"></div>
                            </div>
                            <img v-show="!edit"
                                :src="currentImg?.src"
                                :style="{
                                    '--x': modify.x + 'px',
                                    '--y': modify.y + 'px',
                                    '--rotate': modify.rotate + 'deg',
                                    '--scale': modify.scale,
                                    '--width': currentImgInfo?.width + 'px',
                                    '--height': currentImgInfo?.height + 'px',
                                    '--cursor': 'grab',
                                }"
                                :key="currentImg?.src"
                                @wheel.stop.prevent="onWheel"
                                @click.stop.prevent="onClick"
                                @mousedown="onMouseDown"
                                @mousemove="onMouseMove"
                                @mouseup="onMouseUp"
                                @mouseleave="mouseMoveInfo=undefined;" />
                            <canvas v-show="edit" ref="canvas"
                                :style="{
                                    '--x': modify.x + 'px',
                                    '--y': modify.y + 'px',
                                    '--rotate': modify.rotate + 'deg',
                                    '--scale': modify.scale,
                                    '--width': currentImgInfo?.width + 'px',
                                    '--height': currentImgInfo?.height + 'px',
                                    '--cursor': getCursorByTool(),
                                }"
                                @wheel.stop.prevent="onWheel"
                                @click.stop="onClick"
                                @mousedown.stop.prevent="onMouseDown"
                                @mousemove.stop.prevent="onMouseMove"
                                @mouseup.stop.prevent="onMouseUp"
                                @mouseout.stop="onMouseout"
                                @mouseleave="mouseMoveInfo=undefined;" />
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { Img } from '@renderer/function/model/img'
import { useKeyboard, useViewportUnits } from '@renderer/function/utils/vuse'
import { i18n } from '@renderer/main'
import { vEsc, vHide } from '@renderer/function/utils/vcmd'
import {
    shallowRef,
    computed,
    shallowReactive,
    toRaw,
    useTemplateRef,
    TransitionGroup,
} from 'vue'
import { downloadFile } from '@renderer/function/utils/appUtil'
import { PopInfo, PopType } from '@renderer/function/base'

type EditToolType = 'hand' | 'pen' | 'rect'

const colorMap = {
    'red': '#F0534C',
    'yellow': '#FDC700',
    'green': '#04C160',
    'blue': '#0EAFFF',
    'purple': '#6566F4',
    'black': '#000000',
    'white': '#ffffff',
}

type Color = keyof typeof colorMap

const currentImg = shallowRef<Img | undefined>()
const modify = shallowReactive({
    rotate: 0,
    scale: 1,
    x: 0,
    y: 0,
})
const { vw, vh } = useViewportUnits()

const canvas = useTemplateRef('canvas')
const prev = computed(() => currentImg.value?.prev)
const next = computed(() => currentImg.value?.next)
const currentColor = computed(() => toolConfig[currentTool.value].color)
const loading = shallowRef(true)
const edit = shallowRef(false)
let currentImgInfo = shallowRef<{
    width: number,
    height: number,
    dom: HTMLImageElement,
} | undefined>(undefined)
const mouseMoveInfo = shallowRef<{
    x: number,
    y: number,
    modifyX: number,
    modifyY: number
} | undefined>(undefined)
const zoomTimeout = shallowRef<ReturnType<typeof setTimeout> | undefined>()
const moveTimeout = shallowRef<ReturnType<typeof setTimeout> | undefined>()
const changeViewerCssName = shallowRef('next')

const forceShowButton = shallowRef(false)

const currentTool = shallowRef<EditToolType>('hand')
const toolConfig = {
    pen: shallowReactive({
        color: 'red',
    }),
    rect: shallowReactive({
        color: 'red',
        fill: false,
    }),
}

const $t = i18n.global.t

function open(img: Img) {
    currentImg.value = toRaw(img)
    init()
}

/**
 * 重置变形参数
 */
function resetModify() {
    modify.rotate = 0
    autoFit()
}
/**
 * 自动匹配大小
 */
function autoFit() {
    const info = currentImgInfo.value
    if (!info) return
    modify.scale = 1
    modify.x = 0
    modify.y = 0
    let scale: number
    if (modify.rotate % 180 === 0) {
        const scaleX = vw.value * 100 / (info.width * 1.2)
        const scaleY = vh.value * 100 / (info.height * 1.2)
        scale = Math.min(scaleX, scaleY)
    }else {
        const scaleX = vw.value * 100 / (info.height * 1.2)
        const scaleY = vh.value * 100 / (info.width * 1.2)
        scale = Math.min(scaleX, scaleY)
    }
    if (scale < 1)
        modify.scale = scale
}
/**
 * 初始化参数
 */
function init() {
    if (!currentImg.value) return
    const img = new Image()
    const loadFinish = () => {
        if (!currentImg.value) return
        if (currentImg.value.src !== img.src) return
        loading.value = false
        currentImgInfo.value = {
            width: img.width,
            height: img.height,
            dom: img,
        }

        resetModify()
    }
    img.crossOrigin = 'anonymous'
    img.src = currentImg.value.src
    img.onload = loadFinish
    loading.value = true
    mouseMoveInfo.value = undefined
}
function closeClick() {
    // 太容易误触了,干脆编辑模式禁止通过这样退出吧
    if(edit.value) return
    close()
}
function escClose() {
    if(edit.value) editExit()
    else close()
}
function close() {
    if (edit.value) editExit()
    currentImg.value = undefined
    forceShowButton.value = false
}
//#region == 顶部按钮 ===============================================
/**
 * 下一张图片
 */
function nextImg() {
    if (!next.value) return
    changeViewerCssName.value = 'next'
    currentImg.value = currentImg.value?.next
    init()
}
/**
 * 上一张图片
 */
function prevImg() {
    if (!prev.value) return
    changeViewerCssName.value = 'prev'
    currentImg.value = currentImg.value?.prev
    init()
}
/**
 * 下载图片
 */
async function download() {
    const data = await getBlob()
    if (!data) {
        new PopInfo().add(PopType.ERR, $t('下载失败'))
        return
    }
    downloadFile(URL.createObjectURL(data), 'img.png', () => undefined, () => undefined)
}
/**
 * 复制图片
 */
async function copy() {
    const blob = await getBlob()
    await copyBlob(blob)
}
/**
 * 设置旋转角度
 * @param deg 角度
 */
function rotate(deg: number) {
    const oldRotate = modify.rotate
    modify.rotate = oldRotate + deg
    autoFit()
}

/**
 * 编辑图片
 */
function editImg() {
    if (!currentImgInfo.value) return
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return

    edit.value = true

    canvas.value!.width = currentImgInfo.value.width
    canvas.value!.height = currentImgInfo.value.height
    ctx.drawImage(currentImgInfo.value?.dom, 0, 0)

    switchTool('pen')
}
//#endregion

//#region == 编辑按钮 ===============================================
let editHistory: ImageData[] = []
/**
 * 颜色选择
 * @param color 颜色
 */
function selectColor(color: Color) {
    if (currentTool.value === 'hand') return
    toolConfig[currentTool.value].color = color
}
/**
 * 切换编辑工具
 * @param tool
 */
function switchTool(tool: EditToolType) {
    currentTool.value = tool
}
/**
 * 撤销
 */
function editUndo() {
    const ctx = canvas.value?.getContext('2d')
    if (!ctx || editHistory.length === 0) return
    const last = editHistory.pop()
    if (last) ctx.putImageData(last, 0, 0)
}
/**
 * 下载
 */
async function downloadCanvas() {
    const data = await getBlob()
    if (!data) {
        new PopInfo().add(PopType.ERR, $t('下载失败'))
        return
    }
    downloadFile(URL.createObjectURL(data), 'img.png', () => undefined, () => undefined)
}
/**
 * 退出编辑
 */
function editExit() {
    edit.value = false
    currentTool.value = 'hand'
    editHistory = []
}
/**
 * 复制编辑结果
 */
async function editCopy() {
    // 复制到剪切板
    const blob = await getBlob()
    await copyBlob(blob)
}
//#endregion

//#region == 滚动相关 ===============================================
// 滚动条显示条件
const showScrollbarX = computed(() => {
    if (!currentImgInfo.value || loading.value) return false
    if (modify.rotate % 180 === 0)
        // 图片宽度缩放后是否超出视口宽度
        return currentImgInfo.value.width * modify.scale > vw.value * 100
    else
        return currentImgInfo.value.height * modify.scale > vw.value * 100
})
const showScrollbarY = computed(() => {
    if (!currentImgInfo.value || loading.value) return false
    if (modify.rotate % 180 === 0)
        // 图片高度缩放后是否超出视口高度
        return currentImgInfo.value.height * modify.scale > vh.value * 100
    else
        // 图片高度缩放后是否超出视口高度
        return currentImgInfo.value.width * modify.scale > vh.value * 100
})
// 滑块位置信息
const scrollbarThumbXStyle = computed(() => {
    if (!currentImgInfo.value || loading.value) return {'--thumb': 0, '--pos': 0}

    if (modify.rotate % 180 === 0) {
        const viewW = vw.value * 100
        const imgW = currentImgInfo.value.width * modify.scale
        const ratio = viewW / imgW
        // 计算滑块位置
        const head = imgW / 2 - modify.x - viewW / 2
        const pos = Math.max(0, Math.min(1 - ratio, head / imgW))
        return {'--thumb': ratio, '--pos': pos}
    }else {
        const viewW = vw.value * 100
        const imgH = currentImgInfo.value.height * modify.scale
        const ratio = viewW / imgH
        // 计算滑块位置
        const head = imgH / 2 - modify.x - viewW / 2
        const pos = Math.max(0, Math.min(1 - ratio, head / imgH))
        return {'--thumb': ratio, '--pos': pos}
    }
})
const scrollbarThumbYStyle = computed(() => {
    if (!currentImgInfo.value || loading.value) return {'--thumb': 0, '--pos': 0}

    if (modify.rotate === 0) {
        const viewH = vh.value * 100
        const imgH = currentImgInfo.value.height * modify.scale
        const ratio = viewH / imgH
        // 计算滑块位置
        const head =  imgH / 2 - modify.y - viewH / 2
        const pos = Math.max(0, Math.min(1 - ratio, head / imgH))
        return {'--thumb': ratio, '--pos': pos}
    }else {
        const viewH = vh.value * 100
        const imgW = currentImgInfo.value.width * modify.scale
        const ratio = viewH / imgW
        // 计算滑块位置
        const head =  imgW / 2 - modify.y - viewH / 2
        const pos = Math.max(0, Math.min(1 - ratio, head / imgW))
        return {'--thumb': ratio, '--pos': pos}
    }

})
/**
 * 滚动条滚动事件
 * @param axis 轴向
 * @param event 事件对象
 */
function onScrollbarWheel(axis: 'x'|'y', event: WheelEvent) {
    if (axis === 'x') {
        // 横向滚动
        modify.x -= event.deltaY * 2
        // 限制范围
        const info = currentImgInfo.value
        if (!info) return
        if (modify.rotate % 180 === 0) {
            const maxOffset = (info.width * modify.scale - vw.value * 100) / 2
            modify.x = Math.max(-maxOffset, Math.min(modify.x, maxOffset))
        }
        else{
            const maxOffset = (info.height * modify.scale - vw.value * 100) / 2
            modify.x = Math.max(-maxOffset, Math.min(modify.x, maxOffset))
        }

    } else {
        // 纵向滚动
        modify.y -= event.deltaY * 2
        const info = currentImgInfo.value
        if (!info) return
        if (modify.rotate % 180 === 0) {
            const maxOffset = (info.height * modify.scale - vh.value * 100) / 2
            modify.y = Math.max(-maxOffset, Math.min(modify.y, maxOffset))
        }else {
            const maxOffset = (info.width * modify.scale - vh.value * 100) / 2
            modify.y = Math.max(-maxOffset, Math.min(modify.y, maxOffset))
        }
    }
}
//#endregion

//#region == 图片事件监听 ============================================
/**
 * 鼠标滚轮事件
 */
function onWheel(event: WheelEvent) {
    // 触控板方位限制
    if (!event.deltaY) return
    if (Math.abs(event.deltaX / event.deltaY) > 0.5) return

    // 阻断事件传播
    handleEvent(event)

    // 滚动缩放标志
    if (zoomTimeout.value) clearTimeout(zoomTimeout.value)
    zoomTimeout.value = setTimeout(() => {
        zoomTimeout.value = undefined
    }, 100)

    // 缩放逻辑
    const prevScale = modify.scale
    let newScale = prevScale
    if (event.deltaY > 0)
        newScale *= 0.9
    else
        newScale /= 0.9

    // 移动位置变换
    const mouseX = event.clientX - (vw.value * 50 + modify.x)
    const mouseY = event.clientY - (vh.value * 50 + modify.y)
    const movX = mouseX * (1 - newScale / prevScale)
    const movY = mouseY * (1 - newScale / prevScale)
    modify.x += movX
    modify.y += movY
    modify.scale = newScale
}
let mouseDownTime = 0
function onMouseDown(event: MouseEvent) {
    handleEvent(event)
    mouseDownTime = Date.now()

    switch (currentTool.value) {
        case 'hand':
            handMouseDown(event)
            break
        case 'pen':
            penMouseDown(event)
            break
        case 'rect':
            rectMouseDown(event)
            break
    }
}
function onMouseMove(event: MouseEvent) {
    handleEvent(event)
    mouseMoveCheck()

    switch (currentTool.value) {
        case 'hand':
            handMouseMove(event)
            break
        case 'pen':
            penMouseMove(event)
            break
        case 'rect':
            rectMouseMove(event)
            break
    }

}
function onMouseUp(event: MouseEvent) {
    handleEvent(event)

    switch (currentTool.value) {
        case 'hand':
            handMouseUp(event)
            break
        case 'pen':
            penMouseUp(event)
            break
        case 'rect':
            rectMouseUp(event)
            break
    }
}
function onClick(event: MouseEvent) {
    handleEvent(event)
    if (Date.now() -  mouseDownTime > 200) return

    forceShowButton.value = !forceShowButton.value
}
function onMouseout(event: MouseEvent) {
    handleEvent(event)

    switch (currentTool.value) {
        case 'hand':
            handMouseUp(event)
            break
        case 'pen':
            penMouseUp(event)
            break
        case 'rect':
            rectMouseUp(event)
            break
    }
}

function handMouseDown(event: MouseEvent) {
    mouseMoveInfo.value = { x: event.clientX, y: event.clientY, modifyX: modify.x, modifyY: modify.y }
}
function handMouseMove(event: MouseEvent) {
    if (!mouseMoveInfo.value) return

    const dx = event.clientX - mouseMoveInfo.value.x
    const dy = event.clientY - mouseMoveInfo.value.y
    modify.x = mouseMoveInfo.value.modifyX + dx
    modify.y = mouseMoveInfo.value.modifyY + dy
}
function handMouseUp(_: MouseEvent) {
    if (!mouseMoveInfo.value) return
    mouseMoveInfo.value = undefined
}

let penLastPoint: {x: number, y: number} | undefined
const width = 10
function penMouseDown(event: MouseEvent) {
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return

    saveEditHistory()
    const point = getPos(event.clientX, event.clientY)

    // 结尾有圆，开头再补一个圆，好看
    ctx.fillStyle = colorMap[toolConfig.pen.color]
    ctx.strokeStyle = colorMap[toolConfig.pen.color]
    ctx.lineWidth = width
    ctx.beginPath()
    ctx.arc(point.x, point.y, width / 2, 0, Math.PI * 2)
    ctx.fill()
    penLastPoint = point
}
function penMouseMove(event: MouseEvent) {
    if (!penLastPoint) return
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return
    const point = getPos(event.clientX, event.clientY)
    ctx.beginPath()
    ctx.moveTo(penLastPoint.x, penLastPoint.y)
    ctx.lineTo(point.x, point.y)
    ctx.stroke()
    // 末端整个圆，防止连接处出现裂缝
    ctx.beginPath()
    ctx.arc(point.x, point.y, width / 2, 0, Math.PI * 2)
    ctx.fill()
    penLastPoint = point
}
function penMouseUp(_: MouseEvent) {
    penLastPoint = undefined
}

let rectStartPoint: {x: number, y: number} | undefined
function rectMouseDown(event: MouseEvent) {
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return
    saveEditHistory()
    ctx.lineWidth = width
    ctx.fillStyle = colorMap[toolConfig.rect.color]
    ctx.strokeStyle = colorMap[toolConfig.rect.color]
    const point = getPos(event.clientX, event.clientY)
    rectStartPoint = point
}
function rectMouseMove(event: MouseEvent) {
    if (!rectStartPoint) return
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return
    const point = getPos(event.clientX, event.clientY)
    const lastImg = editHistory.at(-1)
    if (!lastImg) return
    ctx.putImageData(lastImg, 0, 0)
    ctx.beginPath()
    ctx.rect(rectStartPoint.x, rectStartPoint.y, point.x - rectStartPoint.x, point.y - rectStartPoint.y)
    ctx.stroke()
}
function rectMouseUp(event: MouseEvent) {
    if (!rectStartPoint) return
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return
    const point = getPos(event.clientX, event.clientY)
    ctx.beginPath()
    ctx.rect(rectStartPoint.x, rectStartPoint.y, point.x - rectStartPoint.x, point.y - rectStartPoint.y)
    if (toolConfig.rect.fill)
        ctx.fill()
    else
        ctx.stroke()
    rectStartPoint = undefined
}
//#endregion

//#region == 按键监听 ===============================================
useKeyboard('ArrowLeft', 'a', ()=>{
    if (!prev) return
    prevImg()
    return true
})
useKeyboard('ArrowRight', 'd', ()=>{
    if (!next) return
    nextImg()
    return true
})
useKeyboard('ArrowUp', 'w', ()=>{
    if (loading.value) return
    modify.scale /= 0.9
    return true
})
useKeyboard('ArrowDown', 's', ()=>{
    if (loading.value) return
    modify.scale *= 0.9
    return true
})
useKeyboard('q', ()=>{
    if (loading.value) return
    rotate(-90)
    return true
})
useKeyboard('e', ()=>{
    if (loading.value) return
    rotate(90)
    return true
})
useKeyboard('r', ()=>{
    if (loading.value) return
    resetModify()
    return true
})
useKeyboard('1', ()=>{
    if (!edit.value) return
    switchTool('hand')
    return true
})
useKeyboard('2', ()=>{
    if (!edit.value) return
    switchTool('pen')
    return true
})
useKeyboard('3', ()=>{
    if (!edit.value) return
    switchTool('rect')
    return true
})
useKeyboard('ctrl+z', ()=>{
    if (!edit.value) return
    editUndo()
    return true
})
//#endregion

function handleEvent(event: Event) {
    event.stopPropagation()
    event.preventDefault()
}

function getCursorByTool(): string {
    switch (currentTool.value) {
        case 'hand': return 'grab'
        case 'pen': return 'default'
        case 'rect': return 'crosshair'
        default: return 'default'
    }
}

/**
 * 将dataUrl复制到剪贴板
 * @param dataUrl
 */
async function copyBlob(blob?: Blob) {
    if (!blob) {
        new PopInfo().add(PopType.ERR, $t('复制失败'))
        return
    }
    await navigator.clipboard.write([
        new window.ClipboardItem({ 'image/png': blob })
    ])
    new PopInfo().add(PopType.INFO, $t('复制成功'))
}

async function getBlob(): Promise<Blob|undefined> {
    return new Promise((resolve) => {
        let tmpUrl
        if (edit.value)
            tmpUrl = canvas.value!.toDataURL('image/png')
        else
            tmpUrl = currentImg.value?.src
        const tmpImg = new Image()
        const newCanvas = document.createElement('canvas')
        const newCtx = newCanvas.getContext('2d')
        if (!newCtx) return resolve(undefined)

        if (modify.rotate % 180 === 0) {
            newCanvas.width = currentImgInfo.value!.width
            newCanvas.height = currentImgInfo.value!.height
        } else {
            newCanvas.width = currentImgInfo.value!.height
            newCanvas.height = currentImgInfo.value!.width
        }

        tmpImg.crossOrigin = 'anonymous'
        tmpImg.src = tmpUrl
        tmpImg.onload = () => {
            newCtx.translate(newCanvas.width / 2, newCanvas.height / 2)
            newCtx.rotate(modify.rotate * Math.PI / 180)
            newCtx.drawImage(tmpImg, -tmpImg.width / 2, -tmpImg.height / 2)

            newCanvas.toBlob((blob) => {
                if (!blob) return resolve(undefined)
                resolve(blob)
            })
        }
    })
}

/**
 * 将屏幕坐标转化为图片上的坐标
 * @param x
 * @param y
 */
function getPos(x: number, y: number): {x: number, y: number} {
    if (!currentImgInfo.value) return { x: 0, y: 0 }
    const viewW = vw.value * 100
    const viewH = vh.value * 100
    const imgW = currentImgInfo.value!.width
    const imgH = currentImgInfo.value!.height
    let imgHWithScaleRotate: number
    let imgWWithScaleRotate: number
    if (modify.rotate % 180 === 0) {
        imgWWithScaleRotate = imgW * modify.scale
        imgHWithScaleRotate = imgH * modify.scale
    } else {
        imgWWithScaleRotate = imgH * modify.scale
        imgHWithScaleRotate = imgW * modify.scale
    }
    const currentWinCenterX = imgWWithScaleRotate / 2 - modify.x
    const currentWinCenterY = imgHWithScaleRotate / 2 - modify.y
    const currentMousePosX = currentWinCenterX - viewW / 2 + x
    const currentMousePosY = currentWinCenterY - viewH / 2 + y
    const posWithRotateX = currentMousePosX / modify.scale
    const posWithRotateY = currentMousePosY / modify.scale
    switch (modify.rotate % 360) {
        case 0:
            return { x: posWithRotateX, y: posWithRotateY }
        case -270:
        case 90:
            return { x: posWithRotateY, y: imgH-posWithRotateX }
        case -180:
        case 180:
            return { x: imgW-posWithRotateX, y: imgH-posWithRotateY }
        case -90:
        case 270:
            return { x: imgW-posWithRotateY, y: posWithRotateX }
        default:
            throw new Error('Invalid rotation angle')
    }
}

/**
 * 保存编辑历史
 */
function saveEditHistory() {
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return
    editHistory.push(ctx.getImageData(0, 0, canvas.value!.width, canvas.value!.height))
    if (editHistory.length > 20) editHistory.shift() // 限制历史长度
}

function mouseMoveCheck() {
    clearTimeout(moveTimeout.value)
    moveTimeout.value = setTimeout(() => {
        moveTimeout.value = undefined
    }, 100)
}

defineExpose({
    open,
})
</script>
