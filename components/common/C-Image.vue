<template>
  <!-- <NuxtPicture
    preset="logo" preload 
    src="/images/logo.jpg"
    :placeholder="[1920, 560, 10, 10]"
    sizes="(min-width: 768px) 200px, 140px"
    srcset="/images/logo-140w.jpg 140w, /images/logo-200w.jpg 200w"
  /> -->
  <!-- <NuxtImage
    :preset="props.preset"
    :preload="props.preload ? preload : false"
    :src="props.src"
    :placeholder="props.placeholder"
    :sizes="props.sizes"
    :srcset="props.srcset"
    :class="props.class"
  /> -->

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
  // placeholder: {
  //   type: Array as PropType<number[]>,
  //   required: true
  // },
  placeholder: Array as PropType<number[]>,
  sizes: String,
  srcset: String,
  class: String
})
</script>

<style scoped>
</style>