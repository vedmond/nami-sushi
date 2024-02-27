<script setup>
import { inject } from 'vue'
defineProps({
  style: String
})
const item = inject('item')
const isBasket = inject('isBasket')
</script>
<template>
  <p :class="[style, isBasket ? 'text-slate-400' : '']">{{ item.price }} ₽</p>
</template>
