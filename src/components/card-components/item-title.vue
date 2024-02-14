<script setup>
defineProps({
  style: String,
  isBasket: Boolean,
  title: String
})
</script>
<template>
  <h3 class="text-md font-bold uppercase" :class="[isBasket ? 'text-slate-200' : 'text-slate-800']">
    {{ title }}
  </h3>
</template>
