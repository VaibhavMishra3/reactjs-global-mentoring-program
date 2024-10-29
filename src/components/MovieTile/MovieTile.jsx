import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { formatGenres, formatYear } from '../../utils/formatters.js';
import { movieType } from '../../constants/types.js';
import { navigation } from '../../utils/navigation.js';
import posterNotAvailable from '../../assets/images/poster-not-available.jpg';

const MovieTile = ({ movie, handleClick }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleImageError = ({ target }) => {
    target.src = posterNotAvailable;
    target.alt = 'Poster not available';
  };

  return (
    <div data-testid='movie-tile' className='border'>
      <span
        data-testid='edit-movie'
        className='float-end'
        onClick={() => navigate(navigation(`/${movie.id}/edit`, searchParams))}
      >
        Edit
      </span>
      <div onClick={() => handleClick(movie)}>
        <div>
          <img
            data-testid='movie-tile-poster'
            className='img-fluid'
            src={movie.poster_path}
            alt={movie.title}
            onError={handleImageError}
          />
        </div>
        <div>
          <div>
            <span data-testid='movie-tile-title' className='h5 float-begin'>{movie.title}</span>
            {movie.release_date && <span data-testid='movie-tile-year' className='h5 m-2 border border-2 rounded float-begin'>{formatYear(movie.release_date)}</span>}
          </div>
          {movie.genres && <div data-testid='movie-tile-genres'>{formatGenres(movie.genres)}</div>}
        </div>
      </div>
    </div>
  )
}

MovieTile.propTypes = {
  movie: movieType.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MovieTile;
