import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "./MovieTile";

// Mock data for the tests
const movie = {
  imageUrl: "https://via.placeholder.com/150",
  title: "Pulp Fiction",
  year: 1994,
  genres: ["Action", "Drama"],
};

describe("MovieTile Component", () => {
  test("renders movie title, year, and genres correctly", () => {
    render(<MovieTile movie={movie} onClick={() => {}} />);

    expect(screen.getByText("Pulp Fiction")).toBeInTheDocument();
    expect(screen.getByText("1994")).toBeInTheDocument();
    expect(screen.getByText("Action, Drama")).toBeInTheDocument();
  });

  test("calls onClick callback when the tile is clicked", () => {
    const handleClick = jest.fn();
    render(<MovieTile movie={movie} onClick={handleClick} />);

    fireEvent.click(screen.getByText("Pulp Fiction"));
    expect(handleClick).toHaveBeenCalledWith(movie);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <MovieTile movie={movie} onClick={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
