import React from "react";
import Link from "next/link";
import { TableCell, TableRow } from "@mui/material";
import { ICharacter } from "@/types/characters/character.type";
import styles from "../styles.module.scss";
import { useCharacterStore } from "../../../context/zustand/character/useCharacterStore";

interface Props {
  character: ICharacter;
}

const Character: React.FC<Props> = ({ character }) => {
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
        <Link
          href={`/characters/${character?.id}`}
          className={styles.link_redirect}
          onClick={() => addVisitedCharacter(character)}
        >
          Ver detalles
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default Character;
