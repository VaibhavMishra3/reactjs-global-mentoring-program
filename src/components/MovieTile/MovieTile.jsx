import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import MoviePoster from '../MoviePoster/MoviePoster';
import { formatGenres, formatYear } from '../../utils/formatters.js';
import { filterType, movieType } from '../../constants/types.js';
import { navigationByFilter } from '../../utils/navigation.js';

const MovieTile = ({ filter, movie }) => {
  const router = useRouter();

  return (
    <div data-testid='movie-tile' className='border'>
      <span
        data-testid='edit-movie'
        className='float-end'
        onClick={() => router.push(navigationByFilter(`/${movie.id}/edit`, filter))}
      >
        Edit
      </span>
      <Link href={navigationByFilter(`/${movie.id}`, filter)}>
        <div>
          <MoviePoster
            testId={'movie-tile-poster'}
            src={movie.poster_path}
            alt={movie.title}
          />
        </div>
      </Link>
      <div>
        <div>
          <span data-testid='movie-tile-title' className='h5 float-begin'>{movie.title}</span>
          {movie.release_date && <span data-testid='movie-tile-year' className='h5 m-2 border border-2 rounded float-begin'>{formatYear(movie.release_date)}</span>}
        </div>
        {movie.genres && <div data-testid='movie-tile-genres'>{formatGenres(movie.genres)}</div>}
      </div>
    </div>
  )
}

MovieTile.propTypes = {
  filter: filterType.isRequired,  
  movie: movieType.isRequired
};

export default MovieTile;
