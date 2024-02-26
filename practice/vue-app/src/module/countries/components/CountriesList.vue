<script setup lang="ts">
import { Country } from '../types/Countries';
import CountriesCard from './CountriesCard.vue';

interface Props {
  countries: Country[];
}

defineProps<Props>();
</script>

<template>
  <ul class="flex flex-col gap-4" v-if="countries.length">
    <li v-for="country in countries" :key="country.name.common">
      <CountriesCard
        :name="country.name.common"
        :flag="country.flags"
        :population="country.population"
      />
    </li>
  </ul>
</template>
