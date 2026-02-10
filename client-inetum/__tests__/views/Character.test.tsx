import { screen } from "@testing-library/react";
import Character from "@/modules/characters";
import { CharactersResponse } from "@/types/characters/character.type";
import { renderWithProviders } from "@/lib/providers/renderProvider";

const mockResults = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
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
}));

const mockData: CharactersResponse = {
  info: { count: 826, pages: 42, next: "page2", prev: null },
  results: mockResults,
};

describe("Character component", () => {
  beforeEach(() => {
    renderWithProviders(<Character initialData={mockData} />);
  });

  it("renders the character title correctly", () => {
    const titleCharacterElement = screen.getByText("Listado de personajes");
    expect(titleCharacterElement).toBeInTheDocument();
  });

  it("renders the table correctly", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("renders 20 items in table correctly", () => {
    const rows = screen.getAllByRole("row");
    expect(rows.length - 1).toBe(20);
  });

  it("renders Next and Prev buttons", () => {
    const nextButton = screen.getByRole("button", { name: /next/i });
    const prevButton = screen.getByRole("button", { name: /prev/i });

    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });
});
