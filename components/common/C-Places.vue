<template>
  <div
    v-for="(location, index) in props.content"
  >
    <!-- {{ location.places[index] }}
    {{ location.distances[index] }}
    <C-SvgRender
      :width="16"
      :height="16"
      :iconViewBox="location.icon.iconViewBox" 
      :iconPath="location.icon.iconPath"
      :class="'icon'"
    />
    {{ location.places }}
    {{ location.distances }}
  </div> -->
  {{ location.icon }}
  {{ location.places }}
  {{ location.distances }}
  <!-- {{ props.content  }} -->
  </div>
</template>

<script setup lang="ts">
import type { Location } from '@interfaces/location'

import CSvgRender from '@components/common/C-SvgRender.vue'

const props = defineProps<{
  content: Location
}>()
</script>

<style scoped>

</style>