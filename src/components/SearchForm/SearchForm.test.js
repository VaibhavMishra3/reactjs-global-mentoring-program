import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import SearchForm from './SearchForm';

const KEY_ENTER_CODE = 13;

describe('SearchForm', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const searchForm = renderer
      .create(
        <SearchForm
          initialSearchText='comedy'
          placeholderText='What do you want to watch?'
          buttonText='Search'
          handleSearch={console.log}
        />
      )
      .toJSON();

    expect(searchForm).toMatchSnapshot();
  });

  // Test that component renders an input with the value equal to initial value passed in props
  it('should render correctly', () => {
    render(
      <SearchForm
        initialSearchText='comedy'
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={console.log}
      />
    );

    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('comedy');
    expect(input).toHaveAttribute('placeholder', 'What do you want to watch?');
    expect(input).toHaveAttribute('title', 'What do you want to watch?');

    const button = screen.getByTestId('search-button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toBeEnabled();
    expect(button).toHaveTextContent('Search');
  });

  // Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value
  it('should call the handler after typing to the input and clicking on the Submit button', () => {
    const handleSearchMock = jest.fn();

    render(
      <SearchForm
        initialSearchText='comedy'
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={handleSearchMock}
      />
    );

    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'comedy' } });
    fireEvent.click(button);

    expect(handleSearchMock).toHaveBeenCalledWith('comedy');
  });

  // Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value
  it('should call the handler after typing to the input and pressing Enter key', () => {
    const handleSearchMock = jest.fn();

    render(
      <SearchForm
        initialSearchText='comedy'
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={handleSearchMock}
      />
    );

    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'comedy' } });
    fireEvent.keyDown(input, { keyCode: KEY_ENTER_CODE });

    expect(handleSearchMock).toHaveBeenCalledWith('comedy');
  });

});
