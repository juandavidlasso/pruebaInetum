"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { useCharacter } from "@/hooks/characters/useCharacter";
import Loader from "@/shared/Loader";
import { CharactersResponse } from "@/types/characters/character.type";
import FilterInput from "./components/FilterInput";
import CharacterTable from "./components/CharacterTable";
import CharacterVisited from "./components/CharacterVisited";

interface Props {
  initialData: CharactersResponse;
}

const CharactersView: React.FC<Props> = ({ initialData }) => {
  const { page, name, setName, handleChangePage, useGetCharacter } =
    useCharacter();
  const { data, isLoading, isError, error } = useGetCharacter(initialData);

  useEffect(() => {
    if (isError)
      toast.error(error?.message || "Error al cargar los personajes");
  }, [isError, error]);

  if (isLoading) return <Loader />;

  return (
    <Box className={styles.container_characters}>
      <CharacterVisited />

      <Typography variant="h2" component={"h2"} className={styles.title}>
        Listado de personajes
      </Typography>
      <FilterInput value={name} onChange={setName} />

      <CharacterTable
        data={data}
        page={page}
        handleChangePage={handleChangePage}
      />
    </Box>
  );
};

export default CharactersView;
