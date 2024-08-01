<template>
  <footer class="footer column-content -text-center">
    <C-Title :level="6">{{ contentFooter.title }}</C-Title>
  </footer>
</template>

<script setup lang="ts">
import { contentFooter } from '@data/contentFooter'
import CTitle from '@components/common/C-Title.vue'
</script>

<style lang="scss" scoped>
.footer {
  @include padding-bt($padding-34, $padding-34);
}
</style>