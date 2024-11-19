import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, act, fireEvent } from '@testing-library/react'

import MovieForm from './MovieForm';
import { MOCK_MOVIES } from '../../tests/mockData.js';

describe('MovieForm', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const movieForm = renderer
      .create(
        <MovieForm
          movie={MOCK_MOVIES[0]}
          onSubmit={console.log}
        />
      )
      .toJSON();

    expect(movieForm).toMatchSnapshot();
  });

  it('should call the submit handler', async () => {
    const handleSubmitMock = jest.fn();

    render(
      <MovieForm
        movie={MOCK_MOVIES[0]}
        onSubmit={handleSubmitMock}
      />
    );

    const submitButton = screen.getAllByRole('button')[1];
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton.className).toBe('btn btn-primary');

    await act(async () => {
      await fireEvent.click(submitButton, {});
    });

    expect(handleSubmitMock).toHaveBeenCalled();
  });

});
