import React from "react";
import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CharactersResponse } from "@/types/characters/character.type";
import styles from "../styles.module.scss";
import Character from "./Character";

interface Props {
  data: CharactersResponse | undefined;
  page: number;
  handleChangePage: (
    event: React.ChangeEvent<unknown, Element>,
    value: number,
  ) => void;
}

const CharacterTable: React.FC<Props> = ({ data, page, handleChangePage }) => {
  return (
    <Box className={styles.container_table}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>
                Nombre
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>
                Estatus
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>
                Especie
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>
                Género
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>
                Ubicación
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.results?.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </TableBody>
        </Table>
        <Stack
          spacing={2}
          sx={{
            p: 1,
            "& .MuiPagination-ul": {
              display: "flex",
              justifyContent: "flex-end",
            },
          }}
        >
          <Pagination
            count={data?.info?.count || 0}
            page={page}
            onChange={handleChangePage}
            sx={{
              "& .Mui-selected": {
                background: "#391677 !important",
                color: "#fff",
              },
            }}
          />
        </Stack>
      </TableContainer>
    </Box>
  );
};

export default CharacterTable;
