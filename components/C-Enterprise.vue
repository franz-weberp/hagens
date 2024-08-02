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
        <NuxtImg src="/images/family.jpg" :format="'webp'" class="family -rounded"/>
      </div>
    </div>

    <div class="carousel">
      <C-Title :level="3" :class="'carousel-title'">{{ props.carousel.title }}</C-Title>
      <C-Carousel />
    </div>
    
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
  highlight: HighlightArray,
  carousel: Text
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
  font-size: $font-size-28;
  font-weight: $font-weight-bold;
  
  padding: $padding-16 0 $padding-16 0;

  @include responsive($xs-tablet) {
    padding: $padding-40 0 $padding-50 0;
  }
}

.-right {
  position: relative;
  margin: 0 auto;
}

.family {
  height: 320px;
  width: 320px;

  @include responsive($xs-tablet) { 
    height: 450px;
    width: 450px; 
  }
}
</style>