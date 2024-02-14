<script setup>
defineProps({
  style: String,
  isBasket: Boolean,
  image_link: String
})
</script>
<template>
  <button :class="style">
    <img :src="image_link" alt="roll" class="m-auto" />
  </button>
</template>
