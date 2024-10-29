import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react'

import MovieTile from './MovieTile';
import { MOCK_MOVIES } from '../../constants/mockData.js';

describe('MovieTile', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const movieTile = renderer
      .create(
        <MemoryRouter>
          <MovieTile
            movie={MOCK_MOVIES[0]}
            handleClick={console.log}
          />
        </MemoryRouter>
      )
      .toJSON();

    expect(movieTile).toMatchSnapshot();
  });

  it('render correctly', () => {
    const movie = MOCK_MOVIES[0];

    render(
      <MemoryRouter>
        <MovieTile
          movie={movie}
          handleClick={console.log}
        />
      </MemoryRouter>
    );

    const image = screen.getByTestId('movie-tile-poster');
    expect(image.getAttribute('src')).toEqual(movie.poster_path);
    expect(image.getAttribute('alt')).toEqual(movie.title);

    expect(screen.getByTestId('movie-tile-title')).toHaveTextContent(movie.title);
    expect(screen.getByTestId('movie-tile-year')).toHaveTextContent('1994');
    expect(screen.getByTestId('movie-tile-genres')).toHaveTextContent('Thriller, Crime');
  });

});
