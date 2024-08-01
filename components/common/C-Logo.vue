<template>
  <C-Image 
    :preset="'logo'"
    :preload="true"
    :src="'/images/logo.jpg'"
    :placeholder="[1920, 560, 10, 10]"
    :sizes="'(min-width: 768px) 200px, 140px'"
    :srcset="'/images/logo-140w.jpg 140w, /images/logo-200w.jpg 200w'"
    :class="props.class"
  />
</template>

<script setup lang="ts">
import CImage from '@components/common/C-Image.vue'

const props = defineProps({
  class: String
})
</script>

<style scoped>

</style>