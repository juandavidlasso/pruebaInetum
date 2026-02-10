import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles.module.scss";
import { useCharacterStore } from "../../../context/zustand/character/useCharacterStore";

const CharacterVisited = () => {
  const { visitedCharacters } = useCharacterStore();

  return (
    <Box className={styles.container_visited}>
      <Typography variant="h2" component={"h2"} className={styles.title}>
        Últimos personajes visitados
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        {visitedCharacters.length === 0 ? (
          <Typography
            variant="h4"
            component={"h4"}
            sx={{ fontSize: 20, mt: 4 }}
          >
            No has visitado ningún personaje aún
          </Typography>
        ) : (
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className={styles.carousel}
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {visitedCharacters?.map((character) => (
              <Box className={styles.slide} key={character?.id}>
                <Box className={styles.card}>
                  <Grid container spacing={1}>
                    <Grid size={12}>
                      <Typography variant="h3" component={"h3"}>
                        {character?.name}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Image
                        src={character?.image}
                        alt={character?.name}
                        width={100}
                        height={100}
                      />
                    </Grid>
                    <Grid
                      size={{ xs: 12, md: 8 }}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <Typography>Estado: {character?.status}</Typography>
                      <Typography>Especie: {character?.species}</Typography>
                      <Typography>Tipo: {character?.type}</Typography>
                      <Typography>Género: {character?.gender}</Typography>
                    </Grid>
                    <Grid size={12} mt={1}>
                      <Link
                        href={`/characters/${character?.id}`}
                        className={styles.link_redirect}
                      >
                        Ver detalles
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ))}
          </Carousel>
        )}
      </Box>
    </Box>
  );
};

export default CharacterVisited;
