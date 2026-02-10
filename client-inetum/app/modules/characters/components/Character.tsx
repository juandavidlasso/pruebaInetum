import React from "react";
import { useRouter } from "next/navigation";
import { Button, TableCell, TableRow } from "@mui/material";
import { ICharacter } from "@/types/characters/character.type";
import styles from "../styles.module.scss";
import { useCharacterStore } from "../../../context/zustand/character/useCharacterStore";

interface Props {
  character: ICharacter;
}

const Character: React.FC<Props> = ({ character }) => {
  const router = useRouter();
  const { addVisitedCharacter } = useCharacterStore();
  return (
    <TableRow key={character?.id}>
      <TableCell align="left">{character?.id}</TableCell>
      <TableCell align="center">{character?.name}</TableCell>
      <TableCell align="center">{character?.status}</TableCell>
      <TableCell align="center">{character?.species}</TableCell>
      <TableCell align="center">{character?.gender}</TableCell>
      <TableCell align="center">{character?.location?.name}</TableCell>
      <TableCell align="center">
        <Button
          className={styles.button_redirect}
          onClick={() => {
            addVisitedCharacter(character);
            router.push(`/characters/${character?.id}`);
          }}
        >
          Ver detalles
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Character;
