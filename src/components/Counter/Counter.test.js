import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

describe('Counter', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const counter = renderer
      .create(<Counter initialValue='1' />)
      .toJSON();

    expect(counter).toMatchSnapshot();
  });

  //Test that component renders initial value provided in props
  it('should render initial value', () => {
    render(<Counter initialValue='1' />);

    const text = screen.getByTestId('counter-text')
    expect(text.innerHTML).toBe('1');
  });

  //Test that a click event on "decrement" button decrements the displayed value
  it('should decrement the value', () => {
    render(<Counter initialValue='1' />);

    const decrementButton = screen.getByTestId('counter-decrement');
    fireEvent.click(decrementButton);

    const text = screen.getByTestId('counter-text')
    expect(text.innerHTML).toBe('0');
  });

  //Test that a click event on "increment" button increments the displayed value
  it('should increment the value', () => {
    render(<Counter initialValue='1' />);

    const incrementButton = screen.getByTestId('counter-increment');
    fireEvent.click(incrementButton);

    const text = screen.getByTestId('counter-text')
    expect(text.innerHTML).toBe('2');
  });

});
