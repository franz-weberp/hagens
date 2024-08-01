<template>
  <div class="enterprise column-content">
    <C-Highlight :content="props.highlight"/>

    <div class="non-carousel">
      <div class="-left">
        <C-Title :level="2" :class="'spacer'">{{ props.content.title }}</C-Title>
        <p class="subtitle">{{ props.content.subtitle }}</p>
        <C-Paragraph :paragraphs="props.content.paragraphs" :class="'-enterprise'"/>
      </div>

      <div class="-right">
        <NuxtImg src="/images/family.jpg" height="485px" width="485px" class="-rounded"/>
      </div>
    </div>

    <C-Carousel />
  </div>
</template>

<script setup lang="ts">
import type { Text } from '@interfaces/text'
import type { HighlightArray } from '@interfaces/highlight';

import CHighlight from '@components/common/C-Highlight.vue'

import CTitle from '@components/common/C-Title.vue'
import CParagraph from '@components/common/C-Paragraph.vue'

import CCarousel from '@components/common/C-Carousel.vue'

const props = defineProps<{
  content: Text,
  highlight: HighlightArray
}>()
</script>

<style lang="scss" scoped>
.enterprise {
  background-image: linear-gradient(to right, $color-deeppurple , $color-red);
  border-top: $border-8 solid $color-red;
  color: $color-white;

  @include padding-bt($padding-70, $padding-121);
}

.non-carousel {
  display: grid;
  
  @include responsive($xs-tablet) {
    grid-template-columns: 1fr 1fr;
    gap: 105px;
  }
}

.subtitle {
  padding: 16px 0 0 0;

  @include responsive($xs-tablet) {
    padding: $padding-40 0 0 0;
  }
}
</style>