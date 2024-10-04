import React from "react";
import GenreSelect from "./GenreSelect";

export default {
  title: "Components/GenreSelect",
  component: GenreSelect,
};

const genres = ["Action", "Comedy", "Drama"];

export const Default = () => (
  <GenreSelect
    genres={genres}
    selectedGenre="Comedy"
    onSelect={(genre) => alert(`Selected genre: ${genre}`)}
  />
);
