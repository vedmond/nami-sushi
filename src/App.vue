<script setup>
import HeaderBlock from './components/header-block.vue'
import MenuBlock from './components/menu-block.vue'
import ItemsList from './components/items-list.vue'
import UserCart from './components/user-cart.vue'
import { onMounted, ref, watch } from 'vue'
import { fetchItems } from './components/utils/api.js'

const items = ref([])
const itemsCart = ref(null)
const IsShowCart = ref(false)

fetchItems()

onMounted(async () => {
  items.value = await fetchItems()
})
watch(IsShowCart, () => {})
const changeCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  itemsCart.value = cart.length
}
const showCart = () => {
  IsShowCart.value = !IsShowCart.value
}
</script>

<template>
  <div class="wrapper flex items-center justify-center relative">
    <div
      v-if="IsShowCart"
      class="absolute top-0 right-0 w-full h-full bg-slate-900 opacity-30 z-10"
      @click="showCart"
    ></div>
    <user-cart :IsShowCart="IsShowCart" />
    <header-block :itemsCart="itemsCart" @show-cart="showCart" />
    <main class="flex flex-col justify-center items-center text-black">
      <MenuBlock />
      <items-list :changeCart="changeCart" :items="items" />
    </main>
    <footer></footer>
  </div>
</template>
