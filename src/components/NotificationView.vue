<script setup>
import { ref } from 'vue'
const action = ref(false)
setTimeout(() => {
  action.value = true
}, 3000)
</script>

<template>
  <div class="absolute top-0 right-0 w-full h-full bg-slate-900 opacity-60 z-10"></div>
  <div
    class="flex w-[300px] h-[150px] bg-white absolute right-[40vw] rounded-lg text-center z-20"
    :class="{ active: action, dis_active: !action }"
  >
    <p class="m-auto">Cпасибо за покупку !</p>
  </div>
</template>

<style scoped>
.active {
  top: 30vh;
  transition: 0.3s;
}
.dis_active {
  top: -250px;
}
</style>
