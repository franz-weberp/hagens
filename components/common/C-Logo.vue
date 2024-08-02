<template>
  <NuxtImg :src="'/images/logo.jpg'" :format="'webp'" height="140px" width="140px" :class="props.class"/>
</template>

<script setup lang="ts">
const props = defineProps({
  class: String
})
</script>

<style lang="scss" scoped>
.family {
  height: 140px;
  width: 140px;

  @include responsive($xs-tablet) { 
    height: 200px;
    width: 200px; 
  }
}
</style>