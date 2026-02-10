import React from "react";
import dynamic from "next/dynamic";
import { fetchCharacterById } from "@/services/characters/character.service";
import { fetchLocationById } from "@/services/location/location.service";
import SkeletonLoader from "@/shared/Skeleton";

const DynamicCharacterDetailView = dynamic(() =>
  import("@/modules/characters/components/CharacterDetail").then(
    (mod) => mod.default,
  ),
);

interface Props {
  params: {
    id: string;
  };
}

const CharacterDetailPage: React.FC<Props> = async ({ params }) => {
  const { id } = await params;
  const character = await fetchCharacterById(id);
  if (!character) return <SkeletonLoader />;

  const origin = character?.origin?.url
    ? await fetchLocationById(String(character.origin?.url?.split("/").pop()))
    : null;
  const location = character?.location?.url
    ? await fetchLocationById(String(character.location?.url?.split("/").pop()))
    : null;
  const locationObject = { origin, location };

  return (
    <DynamicCharacterDetailView
      character={character}
      location={locationObject}
    />
  );
};

export default CharacterDetailPage;
