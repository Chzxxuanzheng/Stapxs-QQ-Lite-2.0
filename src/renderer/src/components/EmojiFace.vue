<!--
 * @FileDescription: Emoji 表情
 * @Author: Mr.Lee
 * @Date: 2025/08/30
 * @Version: 1.0
-->
<template>
    <img class="emoji-face" v-if="emoji.type === 'apng'" loading="lazy" :src="emoji.value" />
    <span class="emoji-face" v-else>{{ emoji.value }}</span>
</template>

<script setup lang="ts">
import Emoji from '@renderer/function/model/emoji';

const { emoji } = defineProps<{
    emoji: Emoji
}>()
</script>
