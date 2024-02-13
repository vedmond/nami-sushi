<script setup>
defineProps({
  count: Number,
  isBasketCard: Boolean
})

const emit = defineEmits(['handler-counter'])
</script>

<template>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': isBasketCard }"
    @click="() => emit('handler-counter', 'minus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': isBasketCard, 'text-slate-900': !isBasketCard }"
      >-</span
    >
  </button>
  <p
    class="text-lg m-auto pb-1"
    :class="{ 'text-slate-900': isBasketCard, 'text-white': !isBasketCard }"
  >
    {{ count }}
  </p>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': isBasketCard }"
    @click="() => emit('handler-counter', 'plus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': isBasketCard, 'text-slate-900': !isBasketCard }"
      >+</span
    >
  </button>
</template>
