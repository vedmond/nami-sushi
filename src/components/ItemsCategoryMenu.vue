<script setup>
import { ref } from 'vue'
const active = ref(true)
</script>
<template>
  <div class="flex flex-row gap-4 mt-10">
    <span class="text-black text-3xl font-bold pt-[3px]">·</span>
    <h2 class="text-black text-4xl text-uppercase">меню</h2>
    <span class="text-black text-3xl font-bold pt-[3px]">·</span>
  </div>
  <ul class="flex flex-row gap-x-6 mt-7 text-lg cursor-pointer uppercase">
    <li class="px-2 py-1 rounded-xl hover:bg-black hover:text-white" :class="{ active: active }">
      роллы
    </li>
    <li class="px-2 py-1 rounded-xl hover:bg-black hover:text-white">суши и гуканы</li>
    <li class="px-2 py-1 rounded-xl hover:bg-black hover:text-white">лапша и рис</li>
    <li class="px-2 py-1 rounded-xl hover:bg-black hover:text-white">салаты</li>
    <li class="px-2 py-1 rounded-xl hover:bg-black hover:text-white">горячие блюда</li>
  </ul>
</template>

<style scoped>
.active {
  background-color: black;
  color: white;
}
</style>
