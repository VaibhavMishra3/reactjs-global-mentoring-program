import React from 'react';
import * as nextRouter from 'next/router';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react'

import MovieTile from './MovieTile';
import { createFilter } from '../../utils/filter.js';
import { MOCK_MOVIES } from '../../tests/mockData.js';

describe('MovieTile', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

    const movieTile = renderer
      .create(
        <MovieTile
          filter={createFilter(null)}
          movie={MOCK_MOVIES[0]}
          handleClick={console.log}
        />
      )
      .toJSON();

    expect(movieTile).toMatchSnapshot();
  });

  it('render correctly', () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

    const movie = MOCK_MOVIES[0];

    render(
      <MovieTile
        filter={createFilter(null)}
        movie={movie}
        handleClick={console.log}
      />
    );

    const image = screen.getByTestId('movie-tile-poster');
    expect(image.getAttribute('src')).toEqual('http://localhost/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FdM2w364MScsjFf8pfMbaWUcWrR.jpg&w=640&q=75');
    expect(image.getAttribute('alt')).toEqual(movie.title);

    expect(screen.getByTestId('movie-tile-title')).toHaveTextContent(movie.title);
    expect(screen.getByTestId('movie-tile-year')).toHaveTextContent('1994');
    expect(screen.getByTestId('movie-tile-genres')).toHaveTextContent('Thriller, Crime');
  });

});
