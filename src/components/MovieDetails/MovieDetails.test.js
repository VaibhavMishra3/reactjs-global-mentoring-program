import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

// Mock data for the tests
const movie = {
  imageUrl: "https://via.placeholder.com/150",
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  duration: "2h 34min",
  description: "Jules Winnfield and Vincent Vega are hit men...",
};

describe("MovieDetails Component", () => {
  test("renders movie details correctly", () => {
    render(<MovieDetails movie={movie} />);

    expect(screen.getByText("Pulp Fiction")).toBeInTheDocument();
    expect(screen.getByText("1994")).toBeInTheDocument();
    expect(screen.getByText("8.9")).toBeInTheDocument();
    expect(screen.getByText("2h 34min")).toBeInTheDocument();
    expect(
      screen.getByText("Jules Winnfield and Vincent Vega are hit men...")
    ).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<MovieDetails movie={movie} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
