<script setup>
import { inject } from 'vue'
defineProps({
  style: String
})
const item = inject('item')
const isBasket = inject('isBasket')
const isShowBasket = inject('isShowBasket')
</script>
<template>
  <h3
    class="text-md font-bold uppercase"
    :class="[
      isBasket && !isShowBasket ? 'text-slate-200' : 'text-slate-800',
      isShowBasket ? 'text-slate-600' : 'text-slate-200'
    ]"
  >
    {{ item.title }}
  </h3>
</template>
