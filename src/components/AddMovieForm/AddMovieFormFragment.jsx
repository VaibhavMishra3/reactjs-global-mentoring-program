import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { MovieService } from '../../services/MovieService';
import { filterType } from '../../constants/types.js';
import { navigationByFilter } from '../../utils/navigation.js';

const AddMovieForm = dynamic(() => import('./AddMovieForm'), { ssr: false });

const AddMovieFormFragment = ({ filter }) => {
  const router = useRouter();

  const handleSubmit = async (movie) => {
    const response = await MovieService.addMovie(movie);
    router.push(navigationByFilter(`/${response.id}`, filter));
  }

  return (
    <AddMovieForm
      handleClose={() => router.push(navigationByFilter('/', filter))}
      handleSubmit={(movie) => handleSubmit(movie)}
    />
  );
}

AddMovieFormFragment.propTypes = {
  filter: filterType.isRequired
};

export default AddMovieFormFragment;
