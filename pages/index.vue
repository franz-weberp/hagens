<template>
  <NuxtLayout name="layout-default">
    <template #main class="column-content">
      <C-Banner :content="contentBanner" :button="contentButtonBanner"/>

      <C-Enterprise :content="contentEnterprise" :highlight="contentEnterpriseHighlight" :carousel="contentEnterpriseCarousel"/>

      <C-Location :content="contentLocation" :button="contentButtonLocation" :location="contentPlacesLocation"/>

      <C-More :content="contentMore"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { contentBanner, contentButtonBanner } from '@data/contentBanner'
import { contentEnterpriseHighlight, contentEnterprise, contentEnterpriseCarousel } from '@data/contentEnterprise'
import { contentLocation, contentButtonLocation, contentPlacesLocation } from '@data/contentLocation'
import { contentMore } from '@data/contentMore'

import CBanner from '@components/C-Banner.vue'
import CEnterprise from '@components/C-Enterprise.vue'
import CLocation from '@components/C-Location.vue'
import CMore from '@components/C-More.vue'
</script>

<style scoped>
</style>