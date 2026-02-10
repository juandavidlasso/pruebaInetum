import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { ICharacter } from "@/types/characters/character.type";
import styles from "../styles.module.scss";
import { ILocation } from "@/types/location/location.type";

interface Props {
  character: ICharacter;
  location: {
    origin: ILocation | null;
    location: ILocation | null;
  };
}

const CharacterDetail: React.FC<Props> = ({ character, location }) => {
  return (
    <Box className={styles.container_character_detail}>
      <Typography variant="h1" component={"h1"}>
        Detalle del personaje
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 24 }}>
                  Datos Personales
                </Typography>
                <Typography>Nombre: {character?.name}</Typography>
                <Typography>Estado: {character?.status}</Typography>
                <Typography>Especie: {character?.species}</Typography>
                <Typography>Tipo: {character?.type}</Typography>
                <Typography>Género: {character?.gender}</Typography>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 24 }}>
                  Origen
                </Typography>
                <Typography>Nombre: {location?.origin?.name || ""}</Typography>
                <Typography>Tipo: {location?.origin?.type || ""}</Typography>
                <Typography>
                  Dimensión: {location?.origin?.dimension || ""}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 24 }}>
                  Ubicación
                </Typography>
                <Typography>
                  Nombre: {location?.location?.name || ""}
                </Typography>
                <Typography>Tipo: {location?.location?.type || ""}</Typography>
                <Typography>
                  Dimensión: {location?.location?.dimension || ""}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Image
                  src={character?.image}
                  alt={character?.name}
                  width={300}
                  height={300}
                  unoptimized
                  className={styles.image_character_detail}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center", p: 2 }}>
            <Link href={"/"} className={styles.button_back}>
              Regresar
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default CharacterDetail;
