<template>
  <header class="header -gradient">
    <C-Logo :class="'column-content -rounded -logo'"/>
  </header>
  
</template>

<script setup lang="ts">
import CLogo from '@components/common/C-Logo.vue'
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 90px;

  @include responsive($xxs-desktop) { height: 150px; }
}

.-gradient {
  background-image: linear-gradient(to right, $color-red2 , $color-purple2);
}
</style>