<script setup>
import { ref } from 'vue'
import ItemsCounter from './items-counter.vue'
import LikeButton from './card-components/like-button.vue'
import ImageButton from './card-components/image-button.vue'
import ItemTitle from './card-components/item-title.vue'
import ItemDescription from './card-components/item-description.vue'
import ItemPrice from './card-components/item-price.vue'
import ItemWeight from './card-components/item-weight.vue'
import {
  STYLE_ITEMS_CARD_CONTAINER,
  STYLE_BASKET_CARD_CONTAINER,
  STYLE_ITEMS_CARD_BLOCK_TEXT_LIKE_BUTTON,
  STYLE_ITEMS_CARD_BLOCK_TEXT_WEIGHT,
  STYLE_ITEMS_CARD_BLOCK_CALCULATION,
  STYLE_ITEMS_CARD_BLOCK_CALCULATION_PRICE,
  STYLE_ITEMS_CARD_IMAGE,
  STYLE_ITEMS_CARD_BLOCK_CALCULATION_BOX_COUNTER,
  STYLE_BASKET_CARD_BLOCK_CALCULATION,
  STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE,
  STYLE_BASKET_CARD_BLOCK_TEXT,
  STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON,
  STYLE_BASKET_CARD_IMAGE,
  STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT,
  STYLE_BASKET_CARD_BLOCK_CALCULATION_BOX_COUNTER
} from './card-components/card-styles'
// import { handlerCounter } from './utils/utils'

const props = defineProps({
  item: Object,
  changeCart: Function,
  isShowCart: Boolean
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
    v-if="!isShowCart"
    :class="[STYLE_ITEMS_CARD_CONTAINER, isBasket ? 'bg-slate-900' : 'bg-white']"
  >
    <like-button :style="STYLE_ITEMS_CARD_BLOCK_TEXT_LIKE_BUTTON" :isBasket="isBasket" />
    <image-button :image_link="item.image_link" :style="STYLE_ITEMS_CARD_IMAGE" />
    <div class="flex flex-row justify-between items-center w-44">
      <item-title :title="item.title" :isBasket="isBasket" />
      <item-weight :style="STYLE_ITEMS_CARD_BLOCK_TEXT_WEIGHT" :weight="item.weight" />
    </div>
    <div class="w-44 h-24">
      <item-description :description="item.description" />
    </div>
    <div :class="STYLE_ITEMS_CARD_BLOCK_CALCULATION">
      <item-price
        :style="STYLE_ITEMS_CARD_BLOCK_CALCULATION_PRICE"
        :price="item.price"
        :isBasket="isBasket"
      />
      <div v-if="isBasket" :class="STYLE_ITEMS_CARD_BLOCK_CALCULATION_BOX_COUNTER">
        <items-counter @handler-counter="handlerCounter" :count="count" />
      </div>
      <button v-else class="bg-black px-3 py-2 rounded-xl text-xs text-white" @click="addCart">
        В корзину
      </button>
    </div>
  </div>
  <div v-else :class="[STYLE_BASKET_CARD_CONTAINER]">
    <image-button :image_link="item.image_link" :style="STYLE_BASKET_CARD_IMAGE" />
    <div :class="STYLE_BASKET_CARD_BLOCK_TEXT">
      <like-button :style="STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON" :isBasket="isBasket" />
      <item-title :title="item.title" />
      <item-description :description="item.description" />
      <item-weight :style="STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT" :weight="item.weight" />
    </div>
    <div :class="STYLE_BASKET_CARD_BLOCK_CALCULATION">
      <item-price
        :style="STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE"
        :price="item.price"
        :isBasket="isBasket"
      />
      <div :class="STYLE_BASKET_CARD_BLOCK_CALCULATION_BOX_COUNTER">
        <items-counter :count="item.count" :isBasketCard="true" />
      </div>
      <p class="text-sm text-slate-800">Сумма 16995 ₽</p>
    </div>
    <div class="flex w-[50px] bg-[url('../assets/icons/rectangle.png')] bg-no-repeat bg-right">
      <button class="w-12 h-12 m-auto ml-6">
        <img src="../assets/icons/trash.png" alt="" />
      </button>
    </div>
  </div>
</template>
