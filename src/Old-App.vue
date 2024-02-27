<script setup>
import HeaderBlock from './components/header-block.vue'
import MenuBlock from './components/menu-block.vue'
import ItemsList from './components/items-list.vue'
import UserCart from './components/user-cart.vue'
import DividerWindow from './components/divider-window.vue'
import { onMounted, provide, ref, watch } from 'vue'
import { fetchItems } from './components/utils/api.js'
import { useBasketStore } from './stores/BasketStore'
const basketStore = useBasketStore()

const items = ref([])
const itemsCart = ref(null)
const IsShowCart = ref(false)

fetchItems()

onMounted(async () => {
  items.value = await fetchItems()
  basketStore.changeItemsBasket()
})
watch(IsShowCart, () => {})
const changeCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  itemsCart.value = cart.length
}
const showCart = () => {
  IsShowCart.value = !IsShowCart.value
}
provide('isShowCart', IsShowCart)
</script>

<template>
  <div class="wrapper flex items-center justify-center relative">
    <divider-window v-if="IsShowCart" @click="showCart" />

    <user-cart :IsShowCart="IsShowCart" :changeCart="changeCart" />
    <header-block :itemsCart="itemsCart" @show-cart="showCart" />
    <main class="flex flex-col justify-center items-center text-black">
      <MenuBlock />
      <items-list :changeCart="changeCart" :items="items" />
    </main>
    <footer></footer>
  </div>
</template>
