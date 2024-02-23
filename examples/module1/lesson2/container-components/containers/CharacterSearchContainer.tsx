import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/form/SearchForm';
import SearchTitle from '../components/SearchTitle';
import useCharacterSearch from '../hooks/useCharacterSearch';
import useCharacterSort from '../hooks/useCharacterSort';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const characters = useCharacterSearch({ name, gender });

  const { sortedCharacters, setSortOption, sortOption } = useCharacterSort({
    characters,
  });

  return (
    <>
      <div className="pt-20" />
      <SearchTitle text="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
