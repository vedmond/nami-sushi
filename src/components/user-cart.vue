<script setup>
import { watch, ref } from 'vue'
// import BasketCard from './basket-card.vue'
import ItemCard from './item-card.vue'

const itemsUserCart = ref([])
const props = defineProps({
  IsShowCart: Boolean,
  changeCart: Function
})
watch(props, () => {
  if (props.IsShowCart === true) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.length > 0) {
      itemsUserCart.value = cart
    } else {
      itemsUserCart.value = []
    }
    console.log('itemsUserCart.value =', itemsUserCart.value)
  }
})
</script>
<template>
  <div
    class="absolute top-0 w-[600px] h-full bg-[#d6c2b3] z-20"
    :class="{ active: IsShowCart, disactive: !IsShowCart }"
  >
    <div class="flex flex-col items-center">
      <div class="flex flex-row gap-4 mt-10">
        <span class="text-black text-3xl font-bold pt-[3px]">·</span>
        <h2 class="text-black text-4xl text-uppercase">корзина</h2>
        <span class="text-black text-3xl font-bold pt-[3px]">·</span>
      </div>
      <div class="mt-10">
        <!-- <BasketCard v-for="item in itemsUserCart" :key="item.id" :item="item" /> -->
        <ItemCard
          v-for="item in itemsUserCart"
          :key="item.id"
          :item="item"
          :changeCart="changeCart"
          :isShowCart="IsShowCart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  right: 0;
  transition: 0.5s;
}
.disactive {
  right: -650px;
}
</style>
