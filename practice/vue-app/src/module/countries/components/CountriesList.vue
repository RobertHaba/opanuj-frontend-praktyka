<script setup lang="ts">
import { Country } from '../types/Countries';
import ASkeleton from '@/components/ui/skeleton/ASkeleton.vue';
import CountriesCard from './CountriesCard.vue';

interface Props {
  countries: Country[];
  loading: Boolean;
}

defineProps<Props>();
</script>

<template>
  <p v-if="!countries.length && !loading">List is empty.</p>

  <ul class="flex flex-col gap-4">
    <template v-if="loading">
      <li v-for="n in 6" :key="n">
        <ASkeleton class="h-20" />
      </li>
    </template>
    <template v-else>
      <li v-for="country in countries" :key="country.name.common">
        <CountriesCard :country="country" />
      </li>
    </template>
  </ul>
</template>
