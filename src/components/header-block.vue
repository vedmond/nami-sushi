<script setup>
defineProps({
  itemsCart: Number
})
const emit = defineEmits(['show-cart'])
</script>
<template>
  <div class="header__line"></div>
  <header>
    <div
      class="lg:w-[1024px] md:w-[768px] mx-auto py-5 px-4 flex flex-row items-center justify-between relative"
    >
      <img
        src="../assets/icons/logo.svg"
        alt="logo"
        class="w-[182px] h-[182px] absolute top-[-15px] left-0"
      />
      <ul class="flex flex-row gap-3 text-gray-200 text-xs cursor-pointer ml-36">
        <li>Меню</li>
        <li>Доставка</li>
        <li>Акция</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      </ul>
      <div class="flex flex-row items-center gap-1">
        <img src="../assets/icons/phone.svg" alt="phone" class="mt-1" />
        <span class="italic text-gray-200 text-xs">+31 123 456 789</span>
      </div>
      <button class="w-6 h-6 rounded-full bg-gray-200 flex relative" @click="emit('show-cart')">
        <img src="../assets/icons/icon-cart.svg" alt="search" class="m-auto cursor-pointer" />
        <div
          v-if="itemsCart > 0"
          class="w-5 h-5 rounded-full bg-red-500 absolute top-[-14px] left-[-10px] text-[10px] text-white flex"
        >
          <p class="m-auto">{{ itemsCart }}</p>
        </div>
      </button>
      <button class="bg-gray-200 w-16 h-6 rounded-lg text-xs">Войти</button>
    </div>
  </header>
</template>
