<script setup>
defineProps({
  description: String
})
</script>
<template>
  <p class="text-[0.8rem] leading-[0.8rem] text-slate-400">
    {{ description }}
  </p>
</template>
