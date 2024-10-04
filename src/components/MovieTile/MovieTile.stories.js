import React from "react";
import MovieTile from "./MovieTile";

export default {
  title: "Components/MovieTile",
  component: MovieTile,
};

const movie = {
  imageUrl: "https://via.placeholder.com/150",
  title: "Pulp Fiction",
  year: 1994,
  genres: ["Action", "Drama"],
};

export const Default = () => (
  <MovieTile movie={movie} onClick={(m) => alert(m.title)} />
);
