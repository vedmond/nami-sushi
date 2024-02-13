<script setup>
import { ref } from 'vue'
const props = defineProps({
  flag: Boolean
})
const count = ref(1)

const handlerCounter = (value) => {
  const store = JSON.parse(localStorage.getItem('cart'))
  if (value === 'plus' && count.value < 99) {
    count.value++
  } else if (count.value > 0 && value === 'minus') {
    count.value--
  }
  store.map((item) => {
    if (item.id === props.item.id) {
      item.count = count.value
      // if (count.value === 0) {
      //   isBasket.value = false
      // }
    }
  })
  const newStore = store.filter((item) => item.count > 0)
  localStorage.setItem('cart', JSON.stringify(newStore))
}
</script>

<template>
  <button
    class="flex border-2 border-slate-200 bg-slate-300 w-6 h-6 rounded-full text-black"
    :class="{ ' bg-slate-900': flag }"
    @click="() => handlerCounter('minus')"
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
    @click="() => handlerCounter('plus')"
  >
    <span
      class="m-auto scale-150 pb-[10px]"
      :class="{ 'text-white': flag, 'text-slate-900': !flag }"
      >+</span
    >
  </button>
</template>
