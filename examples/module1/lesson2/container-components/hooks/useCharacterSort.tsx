import { useState } from 'react';
import { Character } from '../types/Character';

export enum SortCharacterBy {
  name = 'name',
  created = 'created',
}

export default function ({ characters }: { characters: Character[] }) {
  const [sortOption, setSortOption] = useState('');

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === SortCharacterBy.name) {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === SortCharacterBy.created) {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });

  return { sortedCharacters, setSortOption, sortOption };
}
