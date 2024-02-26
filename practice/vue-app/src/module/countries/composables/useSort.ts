import { Ref, computed, ref } from 'vue';
import { Country, SortOption } from '../types/Countries';

export default function useSort(countries: Ref<Country[]>) {
  const { NameAsc, NameDesc, PopulationAsc, PopulationDesc } = SortOption;

  const sortOption = ref(SortOption.NameAsc);

  const sortedCountries = computed(() => {
    const sortName = (a: Country, b: Country) =>
      a.name.common.localeCompare(b.name.common);

    const sortPopulation = (a: Country, b: Country) =>
      a.population - b.population;

    return [...countries.value].sort((a, b) => {
      if (sortOption.value === NameAsc) return sortName(a, b);
      if (sortOption.value === NameDesc) return sortName(b, a);
      if (sortOption.value === PopulationAsc) return sortPopulation(a, b);
      if (sortOption.value === PopulationDesc) return sortPopulation(b, a);
      return 0;
    });
  });

  return { sortOption, sortedCountries };
}
