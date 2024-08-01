<template>
  <p 
    v-for="paragraph in props.paragraphs" :key="paragraph"
    :class="props.class"
  >
    {{ paragraph }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  paragraphs: Array as PropType<string[]>,
  class: String
})
</script>

<style lang="scss" scoped>
// .-enterprise {
//   padding: 0;

//   @include responsive($xs-tablet) {
//     padding: $padding-40 0 0 0;
//   }
// }
.-banner {
  @include responsive($xs-tablet) {
    @include line-height-10($font-size-14);
  }
}

.-more {
  display: none;
  padding: 0;

  @include responsive($xs-tablet) {
    display: block;
    font-size: $font-size-14;
    font-weight: $font-weight-regular;
    padding: $padding-40 0 0 0;

    @include line-height-10($font-size-14);
  }
}
</style>
