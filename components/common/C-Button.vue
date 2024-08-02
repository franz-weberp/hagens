<template>
  <NuxtLink
    type="button"
    :href="props.button.link"
    :target="props.button.target"
    :title="props.button.description"
    :altTitle="props.button.description"
    :class="props.class"
  >
    <C-SvgRender
      v-if="hasContent(props.button.icon?.iconViewBox)"
      :width="16"
      :height="16"
      :iconViewBox="props.button.icon?.iconViewBox" 
      :iconPath="props.button.icon?.iconPath"
      :class="'icon'"
    />
    <p class="text">{{ props.button.text }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Button } from '@interfaces/button'
import CSvgRender from '@components/common/C-SvgRender.vue'

import { conditionalRendering } from '@composables/conditionalRendering'
const { hasContent } = conditionalRendering()

const props = defineProps<{
  button: Button,
  class: string
}>()
</script>

<style lang="scss" scoped>
.cta {
  border: 0;
  border-radius: 8px;
  padding: $padding-20 $padding-60;
}

.text { padding: 0 0 0 $padding-8; }
</style>