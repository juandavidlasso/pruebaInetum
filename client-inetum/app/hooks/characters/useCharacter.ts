import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/services/characters/character.service";
import { CharactersResponse } from "@/types/characters/character.type";
import { useDebounce } from "./useDebounce";

export const useCharacter = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    setPage(1);
  }, [debouncedName]);

  const useGetCharacter = (initialData: CharactersResponse) =>
    useQuery({
      queryKey: ["character", page, debouncedName],
      queryFn: () => fetchCharacters({ page, name: debouncedName }),
      initialData: page === 1 && !debouncedName ? initialData : undefined,
      staleTime: 5 * 60 * 1000,
      placeholderData: (previousData) => previousData,
    });

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  return {
    page,
    name,
    setName,
    useGetCharacter,
    handleChangePage,
  };
};
