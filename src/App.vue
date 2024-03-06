<script setup>
import { onMounted, ref, provide } from 'vue'
import { useBasketStore } from './stores/BasketStore'
import HeaderView from './components/HeaderView.vue'
import ItemsCategoryMenu from './components/ItemsCategoryMenu.vue'
import ItemsList from './components/ItemsList.vue'
import DividerWindow from './components/DividerWindow.vue'
import BasketList from './components/BasketList.vue'
import { fetchItems } from './components/utils/api'
import NotificationView from './components/NotificationView.vue'

const items = ref([])
const isShowMakeOrder = ref(false)
const basketStore = useBasketStore()
const IsShowBasket = ref(false)
const isNotification = ref(false)
onMounted(async () => {
  items.value = await fetchItems()
})

const showBasket = () => {
  if (basketStore.basketItems.length > 0) {
    IsShowBasket.value = !IsShowBasket.value
    isShowMakeOrder.value = false
  }
}

const showMakeOrder = () => {
  isShowMakeOrder.value = !isShowMakeOrder.value
}

const listenerNotification = () => {
  isNotification.value = true
  setTimeout(() => {
    isNotification.value = false
  }, 6000)
}

provide('items', items)
provide('isShowBasket', IsShowBasket)
provide('isShowMakeOrder', isShowMakeOrder)
</script>

<template>
  <div class="wrapper flex items-center justify-center relative overflow-hidden">
    <NotificationView v-if="isNotification" />
    <DividerWindow v-if="IsShowBasket" @click="showBasket" />
    <BasketList
      @show-basket="showBasket"
      @show-make-order="showMakeOrder"
      @listener-notification="listenerNotification"
    />
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
