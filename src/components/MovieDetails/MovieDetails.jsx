import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { formatGenres, formatYear, formatRuntime } from '../../utils/formatters.js';
import { movieType } from '../../constants/types.js';
import posterNotAvailable from '../../assets/images/poster-not-available.jpg';

const MovieDetails = ({ movie }) => {

  const handleImageError = ({ target }) => {
    target.src = posterNotAvailable;
    target.alt = 'Poster not available';
  };

  return (
    <Container data-testid='movie-details'>
      <Row>
        <Col md={3}>
          <img
            data-testid='movie-details-poster'
            className='img-fluid'
            src={movie.poster_path}
            alt={movie.title}
            onError={handleImageError}
          />
        </Col>
        <Col md={9}>
          <div className='d-flex'>
            <span data-testid='movie-details-title' className='h3'>{movie.title}</span>
            {movie.vote_average && <span data-testid='movie-details-vote' className='h5 ms-4 border border-2 rounded-circle'>{movie.vote_average}</span>}
          </div>
          {movie.genres && <div data-testid='movie-details-genres' className='d-flex mb-4'>{formatGenres(movie.genres)}</div>}
          <div className='d-flex'>
            {movie.release_date && <span data-testid='movie-details-year' className='h5 text-danger'>{formatYear(movie.release_date)}</span>}
            {movie.runtime && <span data-testid='movie-details-runtime' className='h5 ms-4 text-danger'>{formatRuntime(movie.runtime)}</span>}
          </div>
          <div data-testid='movie-details-overview' className='d-flex h5 mt-4 text-start'>{movie.overview}</div>
        </Col>
      </Row>
    </Container>
  )
}

MovieDetails.propTypes = {
  movie: movieType.isRequired
};

export default MovieDetails;
