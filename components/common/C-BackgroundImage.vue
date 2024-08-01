<template>
  <div class="background-image">
    <C-Image />
    <div class="content">
      <p>Lorem Ipsum</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CImage from '@components/common/C-Image.vue'

const sizes = ref('100vw');
// const srcset = ref({
//   '320w': '/images/banner-small.jpg',
//   '640w': '/images/banner-medium.jpg',
//   '1280w': '/images/banner-large.jpg',
// });

// const computedSrcset = computed(() => {
//   return Object.entries(srcset.value)
//     .map(([size, url]) => `${url} ${size}`)
//     .join(', ');
// });
</script>

<style scoped>
.background-image {
  position: relative;
  width: 100%;
  height: 550px; /* ou qualquer outra altura desejada */
  overflow: hidden;
}

.background-picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 550px;
  object-fit: cover;
  z-index: -1; /* Coloque a imagem atrás do conteúdo */
}

.content {
  position: relative;
  z-index: 1;
  /* Outros estilos para seu conteúdo */
}
</style>
