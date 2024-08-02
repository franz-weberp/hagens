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
.-banner {
  @include responsive($xs-tablet) {
    @include line-height-10($font-size-14);
  }
}

.-enterprise {
  padding: $padding-16 0;
}

.-location {
  padding: 0;
  font-size: $font-size-20;
  font-weight: $font-weight-semibold;

  @include responsive($xs-tablet) { padding: 0 0 $padding-60 0; }
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
