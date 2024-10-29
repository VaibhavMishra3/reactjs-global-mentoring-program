import React from 'react';
import PropTypes from 'prop-types';

const MovieCounter = ({ count }) => {
  return (
    <div data-testid='movie-counter' className='d-flex'>
      {count} {count === 1 ? 'movie' : 'movies'} found
    </div>
  )
}

MovieCounter.propTypes = {
  count: PropTypes.number.isRequired
};

export default MovieCounter;
