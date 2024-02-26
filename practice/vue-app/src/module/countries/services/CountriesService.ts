import { FilterType } from '../types/Countries';

export interface Filter {
  value: string;
  type: FilterType;
}

class CountriesService {
  static URL = 'https://restcountries.com/v3.1';

  async fetch({ filter: { value, type } }: { filter: Filter }) {
    const pathToFilter = [type, value].join('/');

    const data = await fetch(`${CountriesService.URL}/${pathToFilter}`)
      .then((Response) => Response.json())
      .then((data) => data);

    return {
      data: Array.isArray(data) ? data : [],
    };
  }
}

export default new CountriesService();
