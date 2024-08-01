<template>
  
  <div class="banner">
    <div class="columns column-content">
      <div class="-left">
        <p class="text">{{ props.content.text }}</p>
        <C-Title :level="1" :class="'spacer'">{{ props.content.title }}</C-Title>
        <p class="subtitle">{{ props.content.subtitle }}</p>
        <C-Paragraph :paragraphs="props.content.paragraphs" :class="'-banner'"/>
        <C-Button :button="props.button" :class="'cta -btn-banner'"/>
      </div>

      <div class="-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Text } from '@interfaces/text'
import type { Button } from '@interfaces/button'

import CTitle from '@components/common/C-Title.vue'
import CParagraph from '@components/common/C-Paragraph.vue'
import CButton from '@components/common/C-Button.vue'

const props = defineProps<{
  content: Text
  button: Button
}>()
</script>

<style lang="scss" scoped>
.banner {
  // background-image: linear-gradient($color-black , $color-black), url("/images/banner.jpg");
  color: $color-white;

  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/banner.jpg");
  background-position: 30% 60%;
  background-repeat: no-repeat;
  
  position: relative;

  @include padding-bt($padding-100, $padding-135);

  @include responsive($xs-tablet) {
    background-position: center 60%;
    background-size: cover;
    @include padding-bt($padding-145, $padding-145);
  }
}
.columns {
  display: grid;

  @include responsive($xs-tablet) {
    grid-template-columns: 1fr 1fr;
  }
}

.text {
  font-size: $font-size-12;
  font-weight: $font-weight-bold;
  padding: 0 0 $padding-24 0;

  @include responsive($xs-tablet) { padding: 0 0 $padding-30 0; }
}

.subtitle {
  font-size: $font-size-20;
  font-weight: $font-weight-bold;
  padding: $padding-24 0 $padding-24 0;
}
</style>
