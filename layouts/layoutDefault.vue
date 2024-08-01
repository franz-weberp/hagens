<template>
  <C-Header />

  <main>
    <slot name="main"></slot>
  </main>

  <C-Footer />
</template>

<script setup lang="ts">
import CHeader from '@components/C-Header.vue'
import CFooter from '@components/C-Footer.vue'
</script>

<style scoped>

</style>