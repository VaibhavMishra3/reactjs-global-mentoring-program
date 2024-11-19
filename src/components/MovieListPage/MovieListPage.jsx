import React from 'react';
import PropTypes from 'prop-types';

import MovieTile from '../../components/MovieTile/MovieTile';
import styles from './styles.module.css';

const MovieListPage = ({ filter, movies }) => {
  return (
    <div className={styles.grid}>
      {movies &&
        movies.map(movie => (
          <MovieTile
            key={movie.id}
            filter={filter}
            movie={movie}
          />
        ))}
    </div>
  )
}

MovieListPage.propTypes = {
  filter: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

export default MovieListPage;
