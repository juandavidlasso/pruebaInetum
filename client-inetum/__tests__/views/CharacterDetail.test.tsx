import { screen } from "@testing-library/react";
import CharacterDetail from "@/modules/characters/components/CharacterDetail";
import { renderWithProviders } from "@/lib/providers/renderProvider";

const mockCharacterData = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

const mockLocationData = {
  origin: {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: ["https://rickandmortyapi.com/api/character/1"],
    url: "https://rickandmortyapi.com/api/location/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  location: {
    id: 2,
    name: "Citadel of Ricks",
    type: "Space Station",
    dimension: "Dimension C-137",
    residents: ["https://rickandmortyapi.com/api/character/1"],
    url: "https://rickandmortyapi.com/api/location/3",
    created: "2017-11-04T18:48:46.250Z",
  },
};

describe("CharacterDetail component", () => {
  beforeEach(() => {
    renderWithProviders(
      <CharacterDetail
        character={mockCharacterData}
        location={mockLocationData}
      />,
    );
  });

  it("renders the character title correctly", () => {
    const titleCharacterElement = screen.getByText("Detalle del personaje");
    expect(titleCharacterElement).toBeInTheDocument();
  });

  it("renders character name", () => {
    expect(screen.getByText("Nombre: Rick Sanchez")).toBeInTheDocument();
  });

  it("renders character image", () => {
    const image = screen.getByRole("img", { name: /rick sanchez/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    );
  });

  it("renders origin and location", () => {
    expect(screen.getByText(/Earth \(C-137\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
  });
});
