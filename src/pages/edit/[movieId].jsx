import React from 'react';

import Home from '../../components/Home/Home';
import MovieDetailsFragment from '../../components/MovieDetails/MovieDetailsFragment';
import EditMovieFormFragment from '../../components/EditMovieForm/EditMovieFormFragment';
import { MovieService } from '../../services/MovieService';
import { createFilter } from '../../utils/filter.js';

const EditMoviePage = ({ filter, movies, movie }) => {
  return (
    <Home
      filter={filter}
      movies={movies}
      children={
        <div>
          <MovieDetailsFragment filter={filter} movie={movie} />
          <EditMovieFormFragment filter={filter} movie={movie} />
        </div>
      }
    />
  );
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

export default EditMoviePage;
