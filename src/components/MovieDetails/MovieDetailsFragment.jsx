import React from 'react';
import Link from 'next/link';

import MovieDetails from './MovieDetails';
import { filterType, movieType } from '../../constants/types.js';
import { navigationByFilter } from '../../utils/navigation.js';

const MovieDetailsFragment = ({ filter, movie }) => {
  return (
    <div>
      <Link
        data-testid='close-movie-details'
        className='btn-close float-end'
        href={navigationByFilter('/', filter)}
      />
      <MovieDetails movie={movie} />
    </div>
  );
}

MovieDetailsFragment.propTypes = {
  filter: filterType.isRequired,
  movie: movieType.isRequired
};

export default MovieDetailsFragment;
