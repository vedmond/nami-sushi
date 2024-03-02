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
const isShowMakeOrder = ref(false)
const basketStore = useBasketStore()
const IsShowBasket = ref(false)
onMounted(async () => {
  items.value = await fetchItems()
})

const showBasket = () => {
  if (basketStore.basketItems.length > 0) {
    // is it need?
    setTimeout(() => {
      IsShowBasket.value = !IsShowBasket.value
      isShowMakeOrder.value = false
    }, 500)
  }
}

const showMakeOrder = () => {
  isShowMakeOrder.value = !isShowMakeOrder.value
}

provide('items', items)
provide('isShowBasket', IsShowBasket)
provide('isShowMakeOrder', isShowMakeOrder)
</script>

<template>
  <div class="wrapper flex items-center justify-center relative overflow-hidden">
    <DividerWindow v-if="IsShowBasket" @click="showBasket" />
    <BasketList @show-basket="showBasket" @show-make-order="showMakeOrder" />
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
