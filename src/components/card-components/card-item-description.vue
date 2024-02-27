<script setup>
import { inject } from 'vue'
defineProps({
  style: String
})
const item = inject('item')
</script>
<template>
  <p class="text-[0.8rem] leading-[0.8rem] text-slate-400">
    {{ item.description }}
  </p>
</template>
