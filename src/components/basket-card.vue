<script setup>
import ItemsCounter from './items-counter.vue'
defineProps({
  item: Object
})
</script>
<template>
  <div
    class="flex flex-row justify-between w-[528px] h-[112px] mt-3 bg-slate-100 border-slate-200 border-2 shadow-2xl rounded-xl"
  >
    <img :src="item.image_link" alt="roll" class="w-20 h-20" />
    <div class="flex flex-col w-[220px] relative justify-between">
      <button class="flex w-3 h-3 absolute top-1 right-0 rounded-full">
        <img src="../assets/icons/like-1.png" alt="dis like" class="m-auto" />
      </button>
      <h3 class="text-sm font-bold uppercase">{{ item.title }}</h3>
      <p class="text-[0.8rem] leading-[0.8rem] text-slate-400">{{ item.description }}</p>
      <p class="text-[0.8rem] leading-[0.8rem] mb-1 text-slate-400">({{ item.weight }} г)</p>
    </div>
    <div class="flex flex-col justify-around items-center w-[130px]">
      <p class="text-sm text-slate-800">Цена {{ item.price }} ₽</p>
      <div class="flex flex-row items-center gap-2 w-[100px]">
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
