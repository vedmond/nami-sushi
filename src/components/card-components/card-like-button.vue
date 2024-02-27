<script setup>
import { inject } from 'vue'
defineProps({
  style: String
})
const isBasket = inject('isBasket')
</script>
<template>
  <button :class="[style, isBasket ? 'bg-slate-200' : '']">
    <img src="../../assets/icons/like-1.png" alt="dis like" class="m-auto" />
  </button>
</template>
