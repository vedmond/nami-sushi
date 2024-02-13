<script setup>
import { ref } from 'vue'
import ItemsCounter from './items-counter.vue'
// import { handlerCounter } from './utils/utils'

const props = defineProps({
  item: Object,
  changeCart: Function
})
const basket = ref(JSON.parse(localStorage.getItem('cart')) || [])
const isBasket = ref(false)
const count = ref(1)
const itemId = basket.value.find((item) => item.id === props.item.id)

const addCart = () => {
  count.value = 1
  const itemId = {
    id: props.item.id,
    title: props.item.title,
    description: props.item.description,
    image_link: props.item.image_link,
    price: props.item.price,
    weight: props.item.weight,
    type: props.item.type,
    count: count.value
  }
  const items = JSON.parse(localStorage.getItem('cart')) || []
  items.push(itemId)
  localStorage.setItem('cart', JSON.stringify(items))
  isBasket.value = true
  props.changeCart()
}

if (itemId) {
  isBasket.value = true
  props.changeCart()
  count.value = itemId.count
}

const handlerCounter = (value) => {
  const store = JSON.parse(localStorage.getItem('cart'))
  if (value === 'plus' && count.value < 99) {
    count.value++
  } else if (count.value > 0 && value === 'minus') {
    count.value--
  }
  store.map((item) => {
    if (item.id === props.item.id) {
      item.count = count.value
      if (count.value === 0) {
        isBasket.value = false
      }
    }
  })
  const newStore = store.filter((item) => item.count > 0)
  localStorage.setItem('cart', JSON.stringify(newStore))
  props.changeCart()
}
</script>

<template>
  <div
    class="flex flex-col items-center relative border-4 border-slate-200 w-[270px] h-[390px] shadow-2xl rounded-xl hover:transform hover:scale-105 hover:duration-300"
    :class="{ 'bg-slate-900': isBasket, 'bg-white': !isBasket }"
  >
    <button
      class="flex w-6 h-6 absolute top-2 right-3 rounded-full"
      :class="{ 'bg-slate-200': isBasket }"
    >
      <img src="../assets/icons/like-1.png" alt="dis like" class="m-auto" />
    </button>
    <button class="flex w-32 h-32">
      <img :src="item.image_link" alt="roll" class="m-auto" />
    </button>
    <div class="flex flex-row justify-between items-center w-44">
      <h3 class="text-md font-bold uppercase" :class="{ 'text-slate-200': isBasket }">
        {{ item.title }}
      </h3>
      <p class="text-sm text-slate-400">{{ item.weight }} г</p>
    </div>
    <div class="w-44 h-24">
      <p class="text-[0.8rem] leading-[0.8rem] text-slate-400">
        {{ item.description }}
      </p>
    </div>
    <div class="flex flex-row justify-between items-center w-10/12">
      <p class="text-lg" :class="{ 'text-slate-400': isBasket }">{{ item.price }} ₽</p>
      <div v-if="isBasket" class="flex flex-row items-center gap-2">
        <items-counter @handler-counter="handlerCounter" :count="count" />
      </div>
      <button v-else class="bg-black px-3 py-2 rounded-xl text-xs text-white" @click="addCart">
        В корзину
      </button>
    </div>
  </div>
</template>
