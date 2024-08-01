<template>
  <div class="location column-content">
    <div class="-left">
      <C-Title :level="4" :class="'spacer'">{{ props.content.title }}</C-Title>
      <p class="subtitle">{{ props.content.subtitle }}</p>
      <C-Paragraph :paragraphs="props.content.paragraphs" :class="'-location'"/>
    </div>
    <div class="-right">
      <C-Map />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Text } from '@interfaces/text'
import CTitle from '@components/common/C-Title.vue'
import CParagraph from '@components/common/C-Paragraph.vue'

import CMap from '@components/common/C-Map.vue'

const props = defineProps<{
  content: Text
}>()
</script>

<style lang="scss" scoped>
.location {
  display: grid;
  grid-template-columns: 1fr;

  @include padding-bt($padding-60, $padding-60);

  @include responsive($xs-tablet) {
    grid-template-columns: 1fr 1fr;
    gap: 71px;
    @include padding-bt($padding-50, $padding-50);
  }
}
</style>