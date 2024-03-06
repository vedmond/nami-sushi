<script setup>
import { computed, inject } from 'vue'
defineProps({
  style: String
})
const item = inject('item')
const itemLink = item.image_link
const src = computed(() => {
  return itemLink
})
</script>
<template>
  <button :class="style">
    <img :src="src" :alt="`${item.title}`" class="m-auto" />
  </button>
</template>
