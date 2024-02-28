<script setup>
import { inject, ref } from 'vue'
import { useBasketStore } from '@/stores/BasketStore'
import ItemCardBasket from './ItemCardBasket.vue'
import MakeOrder from './MakeOrderView.vue'

const isShowMakeOrder = ref(false)
const basketStore = useBasketStore()
const isShowBasket = inject('isShowBasket')

const showMakeOrder = () => {
  isShowMakeOrder.value = !isShowMakeOrder.value
}
const emits = defineEmits(['show-basket'])
</script>
<template>
  <div
    class="absolute top-0 w-[600px] h-full bg-[#d6c2b3] z-20"
    :class="{ active: isShowBasket, dis_active: !isShowBasket }"
  >
    <div v-if="!isShowMakeOrder" class="flex flex-col items-center">
      <div class="flex flex-row gap-4 mt-10">
        <span class="text-black text-3xl font-bold pt-[3px]">·</span>
        <h2 class="text-black text-4xl text-uppercase">корзина</h2>
        <span class="text-black text-3xl font-bold pt-[3px]">·</span>
      </div>
      <div class="mt-10">
        <item-card-basket v-for="item in basketStore.basketItems" :key="item.id" :item="item" />
      </div>
      <div v-if="basketStore.basketItems.length > 0" class="mt-10 h-12 w-[500px]">
        <div class="text-xl font-bold mt-6">Итого: {{ basketStore.totalPrice() }} ₽</div>
        <p class="text-md mt-6">
          * Сумма заказа для доставки курьером должна составлять не менее 500 ₽
        </p>
        <div class="flex flex-row text-md mt-6 gap-4">
          <button
            class="bg-white px-3 py-2 rounded-xl text-black hover:transform hover:scale-105 hover:duration-200"
            @click="() => emits('show-basket')"
          >
            Вернуться к покупкам
          </button>
          <button
            @click="showMakeOrder"
            class="bg-black px-3 py-2 rounded-xl text-white hover:transform hover:scale-105 hover:duration-200"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
    <make-order v-else />
  </div>
</template>

<style scoped>
.active {
  right: 0;
  transition: 0.5s;
}
.dis_active {
  right: -650px;
}
</style>
