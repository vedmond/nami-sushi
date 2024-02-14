<script setup>
defineProps({
  style: String,
  isBasket: Boolean,
  price: Number
})
</script>
<template>
  <p :class="[style, isBasket ? 'text-slate-400' : '']">{{ price }} ₽</p>
</template>
