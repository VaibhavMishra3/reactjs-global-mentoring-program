import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import SortControl from './SortControl';
import { SORT_OPTIONS } from '../../constants/data.js';

describe('SortControl', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const sortControl = renderer
      .create(
        <SortControl
          sortOptions={SORT_OPTIONS}
          defaultSort={SORT_OPTIONS[1].value}
          handleChange={console.log}
        />
      )
      .toJSON();

    expect(sortControl).toMatchSnapshot();
  });

  it('render correctly', () => {
    render(
      <SortControl
        sortOptions={SORT_OPTIONS}
        defaultSort={SORT_OPTIONS[1].value}
        handleChange={console.log}
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('release_date');
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Release date' }).selected).toBe(true);
  });

  it('should select value', async () => {
    const { user } = {
      user: userEvent.setup(),
      ...render(
        <SortControl
          sortOptions={SORT_OPTIONS}
          defaultSort={SORT_OPTIONS[1].value}
          handleChange={console.log}
        />
      )
    };

    expect(screen.getByRole('combobox')).toHaveValue('release_date');
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Release date' }).selected).toBe(true);

    await waitFor(async () => {
      await user.selectOptions(screen.getByRole('combobox'), 'title');
    });

    expect(screen.getByRole('combobox')).toHaveValue('title');
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(true);
    expect(screen.getByRole('option', { name: 'Release date' }).selected).toBe(false);
  });

});
