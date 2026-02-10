import { render, screen } from "@testing-library/react";
import Loader from "@/shared/Loader";

describe("Loader component", () => {
  it("renders the loader correctly", () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
