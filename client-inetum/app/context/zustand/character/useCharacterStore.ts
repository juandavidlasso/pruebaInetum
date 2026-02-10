import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ICharacter } from "@/types/characters/character.type";

type CharacterState = {
  visitedCharacters: ICharacter[];
  addVisitedCharacter: (character: ICharacter) => void;
};

export const useCharacterStore = create(
  persist<CharacterState>(
    (set) => ({
      visitedCharacters: [],
      addVisitedCharacter: (character) =>
        set((state) => {
          const isAlreadyVisited = state.visitedCharacters.some(
            (c) => c.id === character.id,
          );
          if (isAlreadyVisited) return state;
          return {
            visitedCharacters: [character, ...state.visitedCharacters].slice(
              0,
              5,
            ),
          };
        }),
    }),
    {
      name: "character-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
