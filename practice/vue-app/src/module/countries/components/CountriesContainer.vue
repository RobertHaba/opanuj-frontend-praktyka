<script setup lang="ts">
import CountriesFilterSelect from './form/CountriesFilterSelect.vue';
import AInput from '@/components/ui/form/AInput.vue';
import AButton from '@/components/ui/button/AButton.vue';
import CountriesList from './CountriesList.vue';
import CountriesSortSelect from './form/CountriesSortSelect.vue';
import AHeaderForm from '@/components/ui/header/AHeaderForm.vue';
import useSort from '../composables/useSort';
import useSearch from '../composables/useSearch';

const { countries, filter, searchCountries } = useSearch();

const { sortOption, sortedCountries } = useSort(countries);
</script>

<template>
  <div class="flex flex-col gap-8 p-4">
    <AHeaderForm>
      <form class="flex gap-2">
        @submit.prevent="searchCountries">
        <CountriesFilterSelect v-model="filter.type" />
        <AInput class="w-full" v-model="filter.value" />
        <AButton @click="searchCountries" label="Search" />
      </form>

      <div class="flex gap-2 items-center">
        <span>Sort</span>

        <CountriesSortSelect v-model="sortOption" />
      </div>
    </AHeaderForm>

    <CountriesList :countries="sortedCountries" />
  </div>
</template>
