<script setup lang="ts">
interface Props {
  name: string;
  flag: { alt: string; svg: string };
  population: number;
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex justify-between p-4 items-center bg-zinc-800 border border-zinc-600 rounded-lg"
  >
    <div class="flex gap-4 items-center">
      <span
        class="w-6 h-6 bg-no-repeat bg-center bg-contain"
        :style="{ 'background-image': `url(${flag.svg})` }"
      />
      <h2 class="text-lg font-semibold">{{ name }}</h2>
    </div>

    <span class="text-sm text-zinc-400">{{ population }}</span>
  </div>
</template>
