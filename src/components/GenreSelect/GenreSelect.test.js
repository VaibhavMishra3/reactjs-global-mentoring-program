import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import GenreSelect from './GenreSelect';
import { GENRES } from '../../constants/data.js';

describe('GenreSelect', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const genreSelect = renderer
      .create(
        <GenreSelect
          genres={GENRES}
          selectedGenres={[GENRES[1], GENRES[2]]}
          onSelect={console.log}
        />
      )
      .toJSON();

    expect(genreSelect).toMatchSnapshot();
  });

  // Test that component renders all genres passed in props
  it('should render correctly', () => {
    render(
      <GenreSelect
        genres={GENRES}
        selectedGenres={[GENRES[1], GENRES[2]]}
        onSelect={console.log}
      />
    );

    const genreLabels = screen.getAllByRole('label')
      .map(label => label.innerHTML);
    expect(genreLabels).toEqual(GENRES);
  });

  // Test that component highlights a selected genre passed in props
  it('should highlight a selected genre', () => {
    render(
      <GenreSelect
        genres={GENRES}
        selectedGenres={[GENRES[1], GENRES[2]]}
        onSelect={console.log}
      />
    );

    const genreCheckboxes = screen.getAllByRole('checkbox')
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    expect(genreCheckboxes).toEqual([GENRES[1], GENRES[2]]);
  });

  // Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments
  it('should call the handler', () => {
    const handleSelectMock = jest.fn();

    render(
      <GenreSelect
        genres={GENRES}
        selectedGenres={[GENRES[1], GENRES[2]]}
        onSelect={handleSelectMock}
      />
    );

    const deselectingGenre = GENRES[1];
    const deselectingCheckbox = screen.getByText(deselectingGenre);
    fireEvent.click(deselectingCheckbox, { target: { innerText: deselectingCheckbox.innerHTML } });
    expect(handleSelectMock).toHaveBeenCalledWith([GENRES[2]]);

    const selectingGenre = GENRES[3];
    const selectingCheckbox = screen.getByText(selectingGenre);
    fireEvent.click(selectingCheckbox, { target: { innerText: selectingCheckbox.innerHTML } });
    expect(handleSelectMock).toHaveBeenCalledWith([GENRES[2], GENRES[3]]);
  });

});
