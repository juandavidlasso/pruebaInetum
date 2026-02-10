import { httpClient } from "@/config/httpClient";
import {
  CharactersResponse,
  ICharacter,
} from "@/types/characters/character.type";

export function fetchCharacters({
  page,
  name,
}: {
  page: number;
  name?: string;
}) {
  const params = new URLSearchParams({
    page: String(page),
  });

  if (name) {
    params.append("name", name);
  }

  return httpClient.get<CharactersResponse>(`/character?${params.toString()}`);
}

export async function fetchCharacterById(id: string): Promise<ICharacter> {
  return httpClient.get<ICharacter>(`/character/${id}`);
}
