import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';

import MovieTile from '../../components/MovieTile/MovieTile';
import { navigation } from '../../utils/navigation.js';
import styles from './styles.module.css';

const MovieListPage = ({ movies }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className={styles.grid}>
      {movies &&
        movies.map(movie => (
          <MovieTile
            key={movie.id}
            movie={movie}
            handleClick={() => navigate(navigation(`/${movie.id}`, searchParams))}
          />
        ))}
    </div>
  )
}

MovieListPage.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieListPage;
