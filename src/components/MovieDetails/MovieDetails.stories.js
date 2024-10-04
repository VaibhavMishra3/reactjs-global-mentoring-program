import React from "react";
import MovieDetails from "./MovieDetails";

export default {
  title: "Components/MovieDetails",
  component: MovieDetails,
};

const movie = {
  imageUrl: "https://via.placeholder.com/150",
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  duration: "2h 34min",
  description: "Jules Winnfield and Vincent Vega are two hit men...",
};

export const Default = () => <MovieDetails movie={movie} />;
