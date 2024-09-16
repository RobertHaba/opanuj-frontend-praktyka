<script setup lang="ts">
import MSelect from '@/components/ui/form/MSelect.vue';
import { FilterType } from '../../types/Countries';
</script>

<template>
  <MSelect
    v-bind="$attrs"
    :items="[
      { value: FilterType.All, label: 'All' },
      { value: FilterType.Name, label: 'Name' },
      { value: FilterType.Language, label: 'Language' },
      { value: FilterType.Currency, label: 'Currency' },
      { value: FilterType.Capital, label: 'Capital' },
    ]"
  />
</template>
