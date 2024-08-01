<template>
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg" 
    :viewBox="props.iconViewBox"
    :fill="props.colorMode"
    :width="props.width" 
    :height="props.height"
    class="svg"
  >
    <path 
      v-for="(pathIcon, index) in props.iconPath"
      :key="index"
      :d="pathIcon"
      :fill="props.iconFill[index]"
    /> 
  </svg> -->
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    :viewBox="props.iconViewBox"
    :height="props.height"
    :width="props.width" 
    class="svg"
    :class="props.customClass"
  >
    <path 
      v-for="(pathIcon, index) in props.iconPath"
      :key="index"
      :d="pathIcon"
      :fill="props.iconFill[index]"
    />    
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  iconViewBox: String,
  iconPath: Array as () => string[],
  iconFill: {
    type: Array as () => string[],
    default: () => ['#cccccc']
  },
  height: Number,
  width: Number,
  customClass: String
})
</script>