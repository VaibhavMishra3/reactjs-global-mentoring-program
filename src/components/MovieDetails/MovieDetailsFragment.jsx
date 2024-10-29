import React from 'react';
import { Outlet, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';

import MovieDetails from './MovieDetails';
import { navigation } from '../../utils/navigation.js';

const MovieDetailsFragment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const movie = useLoaderData();

  return (
    <div>
      <span
        data-testid='close-movie-details'
        className='float-end'
        onClick={() => navigate(navigation('/', searchParams))}
      >
        <CloseButton />
      </span>
      <MovieDetails movie={movie} />
      <Outlet />
    </div>
  );
}

export default MovieDetailsFragment;
