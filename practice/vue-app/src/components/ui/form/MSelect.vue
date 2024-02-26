<script setup lang="ts">
interface Props {
  items: { value: string; label: string }[];
}

defineProps<Props>();
const value = defineModel();
</script>

<template>
  <select
    v-model="value"
    class="px-4 bg-zinc-800 h-10 border border-zinc-600 rounded-lg text-white"
  >
    <option v-for="item in items" :key="item.label" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
