<script setup>
defineProps({
  count: Number,
  flag: Boolean
})

const emit = defineEmits(['handler-counter'])
</script>

<template>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': flag }"
    @click="() => emit('handler-counter', 'minus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': flag, 'text-slate-900': !flag }"
      >-</span
    >
  </button>
  <p class="text-lg text-white m-auto pb-1" :class="{ 'text-slate-900': flag }">
    {{ count }}
  </p>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': flag }"
    @click="() => emit('handler-counter', 'plus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': flag, 'text-slate-900': !flag }"
      >+</span
    >
  </button>
</template>
