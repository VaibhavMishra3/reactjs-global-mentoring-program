import React from 'react';

import Home from '../components/Home/Home';
import MovieDetailsFragment from '../components/MovieDetails/MovieDetailsFragment';
import { MovieService } from '../services/MovieService';
import { createFilter } from '../utils/filter.js';

const MovieDetailsPage = ({ filter, movies, movie }) => {
  return (
    <Home
      filter={filter}
      movies={movies}
      children={
        <MovieDetailsFragment filter={filter} movie={movie} />
      }
    />
  )
}

export async function getServerSideProps(context) {
  const { movieId } = { ...context.params };
  const query = { ...context.query };

  const filter = createFilter(query);
  const movies = await MovieService.getMovies(filter);
  const movie = await MovieService.getMovie(movieId);

  return {
    props: {
      filter: filter,
      movies: movies,
      movie: movie
    }
  };
}

export default MovieDetailsPage;
