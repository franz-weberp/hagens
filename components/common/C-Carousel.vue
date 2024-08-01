<template>
  <div v-if="status === 'pending'">
    <p>Loading...</p>
  </div>

  <div v-else-if="enterprises.length === 0">
    <p>No data available.</p>
  </div>
  
  <div v-else>
    <ul>
      <li v-for="(enterprise, index) in enterprises" :key="index">
        <div v-for="item in enterprise.imovel" :key="item.id">
          {{ item.Nome }} - {{ mapStatus(item.status) }} - R$ {{ item.Valor }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ENTERPRISES_API_ENDPOINT } from '@env/env'
import type { Enterprise } from '@interfaces/enterprise'
import { mapStatus } from '@data/contentStatus'

const { status, data: enterprises = [] } = useLazyFetch<Enterprise[]>(ENTERPRISES_API_ENDPOINT)  
</script>

<style scoped>

</style>