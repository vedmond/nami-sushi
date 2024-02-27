<script setup>
import { onMounted, ref, provide } from 'vue'
import { useBasketStore } from './stores/BasketStore'
import HeaderView from './components/HeaderView.vue'
import ItemsCategoryMenu from './components/ItemsCategoryMenu.vue'
import ItemsList from './components/ItemsList.vue'
import DividerWindow from './components/DividerWindow.vue'
import BasketList from './components/BasketList.vue'
import { fetchItems } from './components/utils/api'
const items = ref([])
const basketStore = useBasketStore()
const IsShowBasket = ref(false)
onMounted(async () => {
  items.value = await fetchItems()
})

const showBasket = () => {
  if (basketStore.basketItems.length > 0) {
    setTimeout(() => {
      IsShowBasket.value = !IsShowBasket.value
    }, 800)
  }
}

provide('items', items)
provide('isShowBasket', IsShowBasket)
</script>

<template>
  <div class="wrapper flex items-center justify-center relative">
    <DividerWindow v-if="IsShowBasket" @click="showBasket" />
    <BasketList @show-basket="showBasket" />
    <HeaderView @show-basket="showBasket" />
    <div class="main">
      <div class="flex flex-col justify-center items-center text-black">
        <ItemsCategoryMenu />
        <ItemsList />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
