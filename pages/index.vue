<template>
  <NuxtLayout name="layout-default">
    <template #main class="column-content">
      <C-Banner :content="contentBanner" :button="contentButtonBanner"/>

      <C-Enterprise :content="contentEnterprise" :highlight="contentEnterpriseHighlight"/>

      <C-Location :content="contentLocation" />

      <C-More :content="contentMore"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { ENTERPRISES_API_ENDPOINT } from '@env/env'
// import type { Enterprise } from '@interfaces/enterprise'
// import { mapStatus } from '@data/contentStatus'
import { contentBanner, contentButtonBanner } from '@data/contentBanner'
import { contentEnterprise, contentEnterpriseHighlight } from '@data/contentEnterprise'
import { contentLocation } from '@data/contentLocation'
import { contentMore } from '@data/contentMore'

import CBanner from '@components/C-Banner.vue'
import CEnterprise from '@components/C-Enterprise.vue'
import CLocation from '@components/C-Location.vue'
import CMore from '@components/C-More.vue'

// const { status, data: enterprises = [] } = useLazyFetch<Enterprise[]>(ENTERPRISES_API_ENDPOINT)
</script>

<style scoped>
</style>