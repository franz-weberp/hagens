<template>
  <div class="location column-content">
    <div class="-left">
      <C-Title :level="4" :class="'spacer'">{{ props.content.title }}</C-Title>
      <p class="subtitle">{{ props.content.subtitle }}</p>
      <C-Paragraph :paragraphs="props.content.paragraphs" :class="'-location'"/>
      <C-Button :button="props.button" :class="'cta -btn -waze'"/>
    </div>
    <div class="-right">
      <C-Map />
    </div>
    <div class="places">
      <C-Places :content="props.location" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Text } from '@interfaces/text'
import type { Button } from '@interfaces/button'
import type { Location } from '@interfaces/location'

import CTitle from '@components/common/C-Title.vue'
import CParagraph from '@components/common/C-Paragraph.vue'
import CButton from '@components/common/C-Button.vue'
import CMap from '@components/common/C-Map.vue'
import CPlaces from '@components/common/C-Places.vue'

const props = defineProps<{
  content: Text,
  button: Button,
  location: Location
}>()
</script>

<style lang="scss" scoped>
.location {
  background-color: $color-white;
  color: $color-lightdark;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;

  @include padding-bt($padding-60, $padding-60);

  @include responsive($xs-tablet) {
    grid-template-columns: 1fr 1fr;
    gap: 71px;
    @include padding-bt($padding-50, $padding-50);
  }
}

.subtitle {
  padding: $padding-24 0 $padding-40 0;
  font-size: $font-size-20;
  font-weight: $font-weight-regular;
}
</style>