import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MoviePoster from '../MoviePoster/MoviePoster';
import { formatGenres, formatYear, formatRuntime } from '../../utils/formatters.js';
import { movieType } from '../../constants/types.js';

const MovieDetails = ({ movie }) => {
  return (
    <Container data-testid='movie-details'>
      <Row>
        <Col md={3}>
          <MoviePoster
            testId={'movie-details-poster'}
            src={movie.poster_path}
            alt={movie.title}
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
