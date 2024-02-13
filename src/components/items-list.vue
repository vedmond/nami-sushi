<script setup>
import ItemCard from './item-card.vue'
defineProps({
  changeCart: Function,
  items: Array
})
</script>
<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <ItemCard v-for="item in items" :key="item.id" :item="item" :changeCart="changeCart" />
  </div>
</template>
