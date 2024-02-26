<script setup lang="ts">
const value = defineModel();
</script>

<template>
  <input
    v-model="value"
    class="bg-zinc-800 h-10 px-4 border border-zinc-600 rounded-lg text-white"
  />
</template>

<style lang="scss" scoped></style>
