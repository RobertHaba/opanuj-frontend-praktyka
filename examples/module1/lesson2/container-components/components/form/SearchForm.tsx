import React from 'react';
import InputSearch from './InputSearch';
import SelectGender from './SelectGender';
import SelectSortBy from './SelectSortOption';

type SearchFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <InputSearch value={name} onChange={setName} />
      <SelectGender gender={gender} setGender={setGender} />
      <SelectSortBy sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
