<template>
  <component :is="`h${props.level}`" :class="props.class">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import type { Level } from '@interfaces/level'
const props = defineProps<{
  level: Level;
  class?: String;
}>()
</script>