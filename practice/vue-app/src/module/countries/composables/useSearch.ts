import { reactive, ref } from 'vue';
import { Country, FilterType } from '../types/Countries';
import CountriesService, { Filter } from '../services/CountriesService';

export default function useSearch() {
  const countries = ref<Country[]>([]);
  const filter = reactive<Filter>({ value: '', type: FilterType.All });

  const searchCountries = async () => {
    countries.value = await CountriesService.fetch({
      filter,
    });
  };

  return { countries, searchCountries, filter };
}
