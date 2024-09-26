<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex gap-3 p-4 flex-col">
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <slot />
  </div>
</template>
