<template>
  <div class="more -text-center column-content">
    <C-Title :level="5">{{ props.content.title }}</C-Title>
    <C-Paragraph :paragraphs="props.content.paragraphs" :class="'-more'"/>
  </div>
</template>

<script setup lang="ts">
import type { Text } from '@interfaces/text'
import CTitle from '@components/common/C-Title.vue'
import CParagraph from '@components/common/C-Paragraph.vue'

const props = defineProps<{
  content: Text
}>()
</script>

<style lang="scss" scoped>
.more {
  background-color: black;
  color: $color-white;

  background-image: url("/images/background.jpg");
  background-position: 30% 60%;
  background-repeat: no-repeat;
  
  position: relative;

  @include padding-bt($padding-121, $padding-121);
  @include responsive($xxs-desktop) { @include padding-bt($padding-145, $padding-145); }
}
</style>