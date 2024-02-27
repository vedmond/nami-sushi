<script setup>
import { inject } from 'vue'
import { useBasketStore } from '@/stores/BasketStore'
const basketStore = useBasketStore()

const emits = defineEmits(['listener-counter-item-basket', 'listener-counter-item-basic'])

const item = inject('item')
const isShowBasket = inject('isShowBasket')
</script>

<template>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': isShowBasket }"
    @click="() => basketStore.changeCount(item.id, 'minus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': isShowBasket, 'text-slate-900': !isShowBasket }"
      >-</span
    >
  </button>
  <p class="text-lg m-auto pb-1" :class="[isShowBasket ? 'text-slate-600' : 'text-slate-200']">
    {{
      basketStore.getCount(item.id) === 0
        ? emits(isShowBasket ? 'listener-counter-item-basket' : 'listener-counter-item-basic')
        : basketStore.getCount(item.id)
    }}
  </p>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': isShowBasket }"
    @click="() => basketStore.changeCount(item.id, 'plus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': isShowBasket, 'text-slate-900': !isShowBasket }"
      >+</span
    >
  </button>
</template>
