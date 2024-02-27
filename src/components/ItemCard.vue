<script setup>
import { provide, ref } from 'vue'
import { useBasketStore } from '@/stores/BasketStore'
import LikeButton from './card-components/card-like-button.vue'
import ImageButton from './card-components/card-image-button.vue'
import ItemTitle from './card-components/card-item-title.vue'
import ItemDescription from './card-components/card-item-description.vue'
import ItemPrice from './card-components/card-item-price.vue'
import ItemWeight from './card-components/card-item-weight.vue'
import ItemCounter from './card-components/card-item-counter.vue'
import {
  STYLE_ITEMS_CARD_CONTAINER,
  STYLE_ITEMS_CARD_BLOCK_TEXT_LIKE_BUTTON,
  STYLE_ITEMS_CARD_BLOCK_TEXT_WEIGHT,
  STYLE_ITEMS_CARD_BLOCK_CALCULATION,
  STYLE_ITEMS_CARD_BLOCK_CALCULATION_PRICE,
  STYLE_ITEMS_CARD_IMAGE,
  STYLE_ITEMS_CARD_BLOCK_CALCULATION_BOX_COUNTER
  // STYLE_BASKET_CARD_CONTAINER,
  // STYLE_BASKET_CARD_BLOCK_CALCULATION,
  // STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE,
  // STYLE_BASKET_CARD_BLOCK_TEXT,
  // STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON,
  // STYLE_BASKET_CARD_IMAGE,
  // STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT,
  // STYLE_BASKET_CARD_BLOCK_CALCULATION_BOX_COUNTER
} from './card-components/card-styles'

const props = defineProps({
  item: Object
})

const isBasket = ref(false)

const basketStore = useBasketStore()

const basket = JSON.parse(localStorage.getItem('cart')) || []
const isItemInBasket = basket.find((item) => item.id === props.item.id)
// const isShowBasket = inject('isShowBasket')

if (isItemInBasket) {
  isBasket.value = true
}

const addBasket = () => {
  basketStore.addToBasket(props.item)
  isBasket.value = true
}

const listenerCounterItemBasic = () => {
  isBasket.value = false
  basketStore.deleteItem(props.item.id)
}

provide('item', props.item)
provide('isBasket', isBasket)
</script>

<template>
  <div :class="[STYLE_ITEMS_CARD_CONTAINER, isBasket ? 'bg-slate-900' : 'bg-white']">
    <like-button :style="STYLE_ITEMS_CARD_BLOCK_TEXT_LIKE_BUTTON" />
    <image-button :style="STYLE_ITEMS_CARD_IMAGE" />
    <div class="flex flex-row justify-between items-center w-44">
      <item-title />
      <item-weight :style="STYLE_ITEMS_CARD_BLOCK_TEXT_WEIGHT" />
    </div>
    <div class="w-44 h-24">
      <item-description />
    </div>
    <div :class="STYLE_ITEMS_CARD_BLOCK_CALCULATION">
      <item-price :style="STYLE_ITEMS_CARD_BLOCK_CALCULATION_PRICE" />
      <div v-if="isBasket" :class="STYLE_ITEMS_CARD_BLOCK_CALCULATION_BOX_COUNTER">
        <item-counter @listener-counter-item-basic="listenerCounterItemBasic" />
      </div>
      <button v-else class="bg-black px-3 py-2 rounded-xl text-xs text-white" @click="addBasket">
        В корзину
      </button>
    </div>
  </div>
</template>
