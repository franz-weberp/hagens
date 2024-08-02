<template>
  <div class="card">
    <div class="image">
      <div class="status">
        <C-SvgRender
          :width="16"
          :height="16"
          :iconViewBox="iconStar.iconViewBox" 
          :iconPath="iconStar.iconPath"
          :class="'icon'"
        />
        <div class="current">{{ mapStatus(props.item.status) }}</div>
      </div>

      <img :src="'/images/preview.jpg'" draggable="false" class="radius-t8 w-full" />
    </div>

    <div class="content radius-b8">
      <div class="price"><span class="from">a partir de </span> <span class="currency">R$</span> {{ formattedValue(props.item.Valor) }}</div>
      <span class="name">{{ props.item.Nome }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSvgRender from '@components/common/C-SvgRender.vue'
import { star as iconStar } from '@assets/icons/star'

import { mapStatus } from '@data/contentStatus'

import { formatPrice } from '@composables/formatPrice'
const formattedValue = (value: number) => formatPrice(value)

const props = defineProps<{
  item: any
}>()

</script>

<style lang="scss" scoped>
.image {
  position: relative;
  display: flex;
  justify-content: center;
}

.status {
  display: flex;
  position: absolute;
  background-color: $color-lightdark;
  border-radius: 32px;
  margin: $margin-16 auto;
  padding: $padding-10 $padding-30;

  .current {
    margin: 0 0 0 $margin-10;
  }
}

.price {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: $color-deeppurple;
  top: 0;
  left: 0;
  right: 0;
  padding: $padding-20 0;
  border-radius: 8px;
  margin: 0 $margin-24;
  line-height: 24px;
  transform: translateY(-32px);
  gap: 4px;

  .currency { font-weight: $font-weight-regular; }

  .from {
    font-weight: $font-weight-regular;
    font-size: $font-size-14;
  }
}

.content {
  position: relative;
  background-color: $color-white;
  padding: 72px 0 $padding-40 0;

  font-weight: $font-weight-extrabold;

  @include responsive($xs-tablet) {
    font-size: $font-size-24;
    font-weight: $font-weight-extrabold;
  }
  
}

.name {
  display: flex;
  color: $color-lightdark;
  padding: 0 $padding-32;
  position: relative;
  left: 0;
  right: 0;
}
</style>