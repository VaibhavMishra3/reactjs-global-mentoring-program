import React from "react";
import MovieForm from "./MovieForm";

export default {
  title: "Components/MovieForm",
  component: MovieForm,
};

const mockMovieData = {
  title: "Moana",
  releaseDate: "2016-11-14",
  movieUrl: "https://www.moana.com",
  rating: "7.6",
  genre: "Action",
  runtime: "1h 47min",
  overview: "Moana is a sea voyaging enthusiast...",
};

export const AddMovieForm = () => (
  <MovieForm
    onSubmit={(data) => alert(`Movie added: ${JSON.stringify(data)}`)}
  />
);

export const EditMovieForm = () => (
  <MovieForm
    initialMovie={mockMovieData}
    onSubmit={(data) => alert(`Movie edited: ${JSON.stringify(data)}`)}
  />
);
