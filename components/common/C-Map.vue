<template>
  <div class="not-prose">
    <iframe
      height="450"
      width="100%"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src='mapSrc'>
    </iframe>
  </div>
</template>


<script setup lang="ts">
import { GOOGLE_MAPS_API_KEY } from '@env/env'
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Jabaquara,São+Paulo+SP`
</script>

