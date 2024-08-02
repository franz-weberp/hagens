<template>
  <NuxtImg
    :preset="props.preset"
    :preload="props.preload ? preload : false"
    :src="props.src"
    :placeholder="props.placeholder"
    :class="props.class"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  preset: String,
  preload: Boolean,
  src: String,
  placeholder: Array as PropType<number[]>,
  sizes: String,
  srcset: String,
  class: String
})
</script>

<style scoped>
</style>