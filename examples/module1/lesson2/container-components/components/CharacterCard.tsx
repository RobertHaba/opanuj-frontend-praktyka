import { Character } from '../types/Character';

export default function ({ character }: { character: Character }) {
  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-600 rounded">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
