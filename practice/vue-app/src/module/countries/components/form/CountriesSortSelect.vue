<script setup lang="ts">
import MSelect from '@/components/ui/form/MSelect.vue';
import { SortOption } from '../../types/Countries';
</script>

<template>
  <label class="flex gap-2 items-center">
    Sort

    <MSelect
      v-bind="$attrs"
      :items="[
        { value: SortOption.NameAsc, label: 'Name: A-Z' },
        { value: SortOption.NameDesc, label: 'Name: Z-A' },
        { value: SortOption.PopulationAsc, label: 'Population: Low-High' },
        { value: SortOption.PopulationDesc, label: 'Population: High-low' },
      ]"
    />
  </label>
</template>
