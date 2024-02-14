<script setup>
import ItemsCounter from './items-counter.vue'
defineProps({
  item: Object
})
const STYLE_BASKET_CARD_CONTAINER =
  'flex flex-row justify-between w-[528px] h-[112px] mt-3 bg-slate-100 border-slate-200 border-2 shadow-2xl rounded-xl'
const STYLE_BASKET_CARD_IMAGE = 'flex w-20 h-20'
const STYLE_BASKET_CARD_BLOCK_TEXT = 'flex flex-col justify-between w-[220px] relative'
const STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON = 'flex w-3 h-3 absolute top-1 right-0 rounded-full'
const STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT = 'text-[0.8rem] leading-[0.8rem] text-slate-400'
const STYLE_BASKET_CARD_BLOCK_CALCULATION = 'flex flex-col justify-around items-center w-[130px]'
const STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE = 'text-sm text-slate-800'
const STYLE_BASKET_CARD_BLOCK_CALCULATION_BOX_COUNTER = 'flex flex-row items-center gap-2 w-[100px]'
</script>
<template>
  <div :class="STYLE_BASKET_CARD_CONTAINER">
    <button :class="STYLE_BASKET_CARD_IMAGE">
      <img :src="item.image_link" alt="roll" class="m-auto" />
    </button>
    <div :class="STYLE_BASKET_CARD_BLOCK_TEXT">
      <button :class="STYLE_BASKET_CARD_BLOCK_TEXT_LIKE_BUTTON">
        <img src="../assets/icons/like-1.png" alt="dis like" class="m-auto" />
      </button>
      <h3 class="text-sm font-bold uppercase">{{ item.title }}</h3>
      <p class="text-[0.8rem] leading-[0.8rem] text-slate-400">{{ item.description }}</p>
      <p :class="STYLE_BASKET_CARD_BLOCK_TEXT_WEIGHT">({{ item.weight }} г)</p>
    </div>
    <div :class="STYLE_BASKET_CARD_BLOCK_CALCULATION">
      <p :class="STYLE_BASKET_CARD_BLOCK_CALCULATION_PRICE">Цена {{ item.price }} ₽</p>
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
