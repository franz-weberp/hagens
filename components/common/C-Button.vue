<template>
  <NuxtLink
    type="button"
    :href="props.button.link"
    :target="props.button.target"
    :title="props.button.description"
    :altTitle="props.button.description"
    :class="props.class"
  >
    {{ props.button.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Button } from '@interfaces/button'
const props = defineProps<{
  button: Button,
  class: string
}>()
</script>

<style lang="scss" scoped>
.cta {
  border: 0;
  border-radius: 8px;
  padding: $padding-20 $padding-60;
}
</style>