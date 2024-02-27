<script setup>
import { inject } from 'vue'
defineProps({
  style: String
})
const item = inject('item')
</script>
<template>
  <button :class="style">
    <img :src="item.image_link" :alt="`${item.title}`" class="m-auto" />
  </button>
</template>
