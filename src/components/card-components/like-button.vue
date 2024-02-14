<script setup>
defineProps({
  style: String,
  isBasket: Boolean
})
</script>
<template>
  <button :class="[style, isBasket ? 'bg-slate-200' : '']">
    <img src="../../assets/icons/like-1.png" alt="dis like" class="m-auto" />
  </button>
</template>
