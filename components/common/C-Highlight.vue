<template>
  <div class="container">
    <div
      v-for="item in props.content" :key="item.description"
      class="highlight"
    >
      <C-SvgRender
        :width="16"
        :height="16"
        :colorMode="'rgba(97, 97, 97, 0.7)'"
        :iconViewBox="item.icon.iconViewBox" 
        :iconPath="item.icon.iconPath"
      />
      <div class="content">
        <p :class="'title'">{{ item.title }}</p>
        <p v-if="hasContent(item.description)" :class="'description'">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HighlightArray } from '@interfaces/highlight'

import CSvgRender from '@components/common/C-SvgRender.vue'
import CTitle from '@components/common/C-Title.vue'
import CParagraph from '@components/common/C-Paragraph.vue'

import { conditionalRendering } from '@composables/conditionalRendering'
const { hasContent } = conditionalRendering()

const props = defineProps<{
  content: HighlightArray
}>()
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $gap-16;
  margin: 0 0 $margin-24 0;

  @include responsive($xs-tablet) { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: $gap-24;
    margin: 0 0 $margin-100 0;
  }
}

.highlight:first-of-type .content .title {
  padding: 0 $padding-16;
  @include responsive($xs-tablet) { max-width: 180px; }
}

.highlight {
  border-radius: $border-radius-8;
  background-color: $color-white;

  text-align: center;
  
  align-content: center;
  height: 200px;

  @include responsive($xs-tablet) { height: 180px; }
}

.content { 
  font-size: $font-size-14;
  font-weight: $font-weight-bold;
  color: $color-purple;
  padding: $padding-16 0 0 0;
}

.title {
  max-width: 110px;
  margin: 0 auto;
}

.description {
  font-size: $font-size-14;
  font-weight: $font-weight-light;
  color: $color-darkgrey;
  padding: $padding-16 0 0 0;
}
</style>