import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react'

import MovieDetails from './MovieDetails';
import { MOCK_MOVIES } from '../../tests/mockData.js';

describe('MovieDetails', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const movieDetails = renderer
      .create(
        <MovieDetails
          movie={MOCK_MOVIES[0]}
        />
      )
      .toJSON();

    expect(movieDetails).toMatchSnapshot();
  });

  it('render correctly', () => {
    const movie = MOCK_MOVIES[0];

    render(
      <MovieDetails
        movie={movie}
      />
    );

    const image = screen.getByTestId('movie-details-poster');
    expect(image.getAttribute('src')).toEqual('http://localhost/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FdM2w364MScsjFf8pfMbaWUcWrR.jpg&w=640&q=75');
    expect(image.getAttribute('alt')).toEqual(movie.title);

    expect(screen.getByTestId('movie-details-title')).toHaveTextContent(movie.title);
    expect(screen.getByTestId('movie-details-vote')).toHaveTextContent(movie.vote_average);
    expect(screen.getByTestId('movie-details-genres')).toHaveTextContent('Thriller, Crime');
    expect(screen.getByTestId('movie-details-year')).toHaveTextContent('1994');
    expect(screen.getByTestId('movie-details-runtime')).toHaveTextContent('2h 34min');
    expect(screen.getByTestId('movie-details-overview')).toHaveTextContent(movie.overview);
  });

});
