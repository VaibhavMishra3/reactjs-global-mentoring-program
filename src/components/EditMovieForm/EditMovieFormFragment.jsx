import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { MovieService } from '../../services/MovieService';
import { filterType, movieType } from '../../constants/types.js';
import { navigationByFilter } from '../../utils/navigation.js';

const EditMovieForm = dynamic(() => import('./EditMovieForm'), { ssr: false });

const EditMovieFormFragment = ({ filter, movie }) => {
  const router = useRouter();

  const handleSubmit = async (movie) => {
    const response = await MovieService.editMovie(movie);
    router.push(navigationByFilter(`/${response.id}`, filter));
  }

  return (
    <EditMovieForm
      movie={movie}
      handleClose={() => router.push(navigationByFilter(`/${movie.id}`, filter))}
      handleSubmit={(movie) => handleSubmit(movie)}
    />
  );
}

EditMovieFormFragment.propTypes = {
  filter: filterType.isRequired,
  movie: movieType.isRequired
};

export default EditMovieFormFragment;
