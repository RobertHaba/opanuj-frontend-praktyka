import { useEffect, useState } from 'react';
import { Character } from '../types/Character';
import CharacterService from '../services/CharacterService';

export default function ({ name, gender }: { name: string; gender: string }) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (name || gender) {
      (async () => {
        const { data } = await CharacterService.fetch({ name, gender });
        setCharacters(data);
      })();
    }
  }, [name, gender]);

  return characters;
}
