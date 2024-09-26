import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import GenreSelect from "./GenreSelect";

test("renders all genres passed in props", () => {
  const genres = ["Comedy", "Horror", "Action"];
  render(<GenreSelect genres={genres} />);
  genres.forEach((genre) =>
    expect(screen.getByText(genre)).toBeInTheDocument()
  );
});

test("highlights selected genre passed in props", () => {
  const genres = ["Comedy", "Horror", "Action"];
  render(<GenreSelect genres={genres} selectedGenre="Horror" />);
  expect(screen.getByText("Horror")).toHaveClass("selected"); // Assuming you have a "selected" class for highlighted genres
});

test("click event on genre button calls onSelect callback with correct genre", () => {
  const genres = ["Comedy", "Horror", "Action"];
  const onSelectMock = jest.fn();
  render(<GenreSelect genres={genres} onSelect={onSelectMock} />);

  fireEvent.click(screen.getByText("Action"));
  expect(onSelectMock).toHaveBeenCalledWith("Action");
});
