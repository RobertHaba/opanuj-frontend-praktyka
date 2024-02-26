export enum FilterType {
  All = 'all',
  Name = 'name',
  Currency = 'currency',
  Language = 'lang',
  Capital = 'capital',
}

export enum SortOption {
  NameAsc = 'name-asc',
  NameDesc = 'name-desc',
  PopulationAsc = 'population-asc',
  PopulationDesc = 'population-desc',
}

// part of Country
export interface Country {
  name: { common: string };
  flags: { alt: string; svg: string };
  population: number;
  capital?: string[];
}
