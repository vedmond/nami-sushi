<script setup>
import { inject } from 'vue'
import ItemCard from './ItemCard.vue'
const items = inject('items')
</script>
<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
