class CharacterService {
  static URL = 'https://rickandmortyapi.com/api/character/';

  async fetch({ name, gender }: { name: string; gender: string }) {
    const data = await fetch(
      `${CharacterService.URL}?name=${name}&gender=${gender}`
    )
      .then((response) => response.json())
      .then(({ results }) => results || [])
      .catch((error) => console.error('Error fetching data:', error));

    return { data };
  }
}

export default new CharacterService();
