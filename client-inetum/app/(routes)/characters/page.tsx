import CharacterView from "@/modules/characters";
import { fetchCharacters } from "@/services/characters/character.service";

const CharactersPage = async () => {
  const initialData = await fetchCharacters({ page: 1 });

  return <CharacterView initialData={initialData} />;
};

export default CharactersPage;
