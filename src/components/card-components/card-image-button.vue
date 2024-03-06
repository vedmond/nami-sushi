<script setup>
import { inject, ref } from 'vue'
defineProps({
  style: String
})
const itemLink = ref('')
const item = inject('item')
itemLink.value = item.image_link
</script>
<template>
  <button :class="style">
    <img :src="itemLink" :alt="`${item.title}`" class="m-auto" />
  </button>
</template>
