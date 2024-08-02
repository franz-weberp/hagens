<template>
  <div v-if="status === 'pending'">
    <p>Loading...</p>
  </div>

  <div v-else-if="enterprises?.length === 0">
    <p>No data available.</p>
  </div>
  
  <div v-else>
    <UCarousel 
      v-slot="{ item }"
      :items="enterprises?.imoveis?.imovel" 
      :ui="{ 
        item: 'basis-full md:basis-1/2 lg:basis-1/3', 
        container: 'gap-4' 
      }"
    >
      <C-CardCarousel :item="item"/>
      
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ENTERPRISES_API_ENDPOINT } from '@env/env'
import type { Enterprise } from '@interfaces/enterprise'

import CCardCarousel from '@components/common/C-CardCarousel.vue'

const { status, data: enterprises = ref<Enterprise[]> } = useLazyFetch<Enterprise[]>(ENTERPRISES_API_ENDPOINT) || {}
</script>

<style lang="scss" scoped>

</style>