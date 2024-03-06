<script setup>
const emits = defineEmits(['handler-payment'])
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row gap-4 mt-10">
      <span class="text-black text-xl font-bold pt-[4px]">·</span>
      <h2 class="text-black text-2xl text-uppercase">Оплата</h2>
      <span class="text-black text-xl font-bold pt-[4px]">·</span>
    </div>
    <div class="mt-10">
      <img src="@/assets/images/pay.jpg" alt="payment" class="rounded-xl" />
    </div>
    <button
      class="w-[460px] bg-[#0C334A] mt-10 px-2 py-2 rounded-md text-md text-slate-200 hover:transform hover:text-white hover:bg-black hover:duration-200"
      @click="() => emits('handler-payment')"
    >
      Оплатить
    </button>
  </div>
</template>
