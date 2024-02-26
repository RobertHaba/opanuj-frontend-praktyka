<script setup lang="ts">
import { Country } from '../types/Countries';

interface Props {
  country: Country;
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex justify-between p-4 items-center bg-zinc-800 border border-zinc-600 rounded-lg"
  >
    <div class="flex flex-col">
      <div class="flex gap-4 items-center">
        <span
          class="w-6 h-6 bg-no-repeat bg-center bg-contain"
          :style="{ 'background-image': `url(${country.flags.svg})` }"
        />

        <h2 class="text-lg font-semibold">{{ country.name.common }}</h2>
      </div>

      <span v-if="country.capital" class="text-sm text-zinc-400">
        {{ country.capital?.[0] }}
      </span>
    </div>

    <span class="text-sm text-zinc-400">{{ country.population }}</span>
  </div>
</template>
