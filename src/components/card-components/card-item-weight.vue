<script setup>
import { inject } from 'vue'
defineProps({
  style: String
})
const item = inject('item')
</script>
<template>
  <p :class="style">{{ item.weight }} г</p>
</template>
