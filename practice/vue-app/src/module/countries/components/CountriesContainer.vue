<script setup lang="ts">
import useSort from '../composables/useSort';
import useSearch from '../composables/useSearch';

import CountriesFilterSelect from './form/CountriesFilterSelect.vue';
import AInput from '@/components/ui/form/AInput.vue';
import AButton from '@/components/ui/button/AButton.vue';
import CountriesList from './CountriesList.vue';
import CountriesSortSelect from './form/CountriesSortSelect.vue';
import AHeaderForm from '@/components/ui/header/AHeaderForm.vue';

const { countries, filter, searchCountries } = useSearch();

const { sortOption, sortedCountries } = useSort(countries);
</script>

<template>
  <div class="flex relative flex-col gap-8 p-4">
    <AHeaderForm>
      <form class="flex gap-2" role="search" @submit.prevent="searchCountries">
        <CountriesFilterSelect v-model="filter.type" />
        <AInput
          type="search"
          :name="`country-${filter.type}`"
          class="w-full"
          v-model="filter.value"
        />
        <AButton @click="searchCountries" label="Search" />
      </form>

      <CountriesSortSelect v-model="sortOption" />
    </AHeaderForm>

    <CountriesList :countries="sortedCountries" />
  </div>
</template>
