<script setup>
import { provide } from 'vue'
import { useBasketStore } from '@/stores/BasketStore'
import LikeButton from './card-components/card-like-button.vue'
import ImageButton from './card-components/card-image-button.vue'
import ItemTitle from './card-components/card-item-title.vue'
import ItemDescription from './card-components/card-item-description.vue'
import ItemPrice from './card-components/card-item-price.vue'
import ItemWeight from './card-components/card-item-weight.vue'
import ItemCounter from './card-components/card-item-counter.vue'
import {
  STYLE_BASKET_CARD_CONTAINER,
  STYLE_BASKET_CARD_BLOCK_CALCULATION,
  STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE,
  STYLE_BASKET_CARD_BLOCK_TEXT,
  STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON,
  STYLE_BASKET_CARD_IMAGE,
  STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT,
  STYLE_BASKET_CARD_BLOCK_CALCULATION_BOX_COUNTER
} from './card-components/card-styles'

const props = defineProps({
  item: Object
})

const basketStore = useBasketStore()

const listenerCounterItemBasket = () => {
  basketStore.changeCount(props.item.id, 'plus')
}

const handlerDeleteCard = () => {
  basketStore.deleteItem(props.item.id)
}

provide('isBasket', true)
provide('item', props.item)
</script>

<template>
  <div :class="STYLE_BASKET_CARD_CONTAINER">
    <image-button :style="STYLE_BASKET_CARD_IMAGE" />
    <div :class="STYLE_BASKET_CARD_BLOCK_TEXT">
      <like-button :style="STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON" />
      <item-title />
      <item-description />
      <item-weight :style="STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT" />
    </div>
    <div :class="STYLE_BASKET_CARD_BLOCK_CALCULATION">
      <item-price :style="STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE" />
      <div :class="STYLE_BASKET_CARD_BLOCK_CALCULATION_BOX_COUNTER">
        <item-counter @listener-counter-item-basket="listenerCounterItemBasket" />
      </div>
      <p class="text-sm text-slate-800">
        Сумма {{ basketStore.getCount(props.item.id) * props.item.price }} ₽
      </p>
    </div>
    <div class="flex w-[50px] bg-[url('../assets/icons/rectangle.png')] bg-no-repeat bg-right">
      <button class="w-12 h-12 m-auto ml-6" @click="handlerDeleteCard">
        <img src="../assets/icons/trash.png" alt="" />
      </button>
    </div>
  </div>
</template>
