import { reactive, ref, watch } from 'vue';
import { Country, FilterType } from '../types/Countries';
import CountriesService, { Filter } from '../services/CountriesService';

export default function useSearch() {
  const countries = ref<Country[]>([]);

  const filter = reactive<Filter>({ value: '', type: FilterType.All });

  const searchCountries = async () => {
    if (!filter.value) filter.type = FilterType.All;

    const { data } = await CountriesService.fetch({
      filter,
    });

    countries.value = data;
  };

  const trySetFilterTypeAsName = () => {
    if (!filter.value || filter.type !== FilterType.All) return;
    filter.type = FilterType.Name;
  };

  watch(
    () => filter.value,
    () => {
      trySetFilterTypeAsName();
    }
  );

  return { countries, searchCountries, filter };
}
