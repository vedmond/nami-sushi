<script setup>
defineProps({
  style: String,
  weight: Number
})
</script>
<template>
  <p :class="style">{{ weight }} г</p>
</template>
