import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, fireEvent } from '@testing-library/react'

import Dialog from './Dialog';

describe('Dialog', () => {

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, _node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
    cleanup();
  });

  it('should match snapshot', () => {
    const dialog = renderer
      .create(
        <Dialog
          title='Title'
          children='children'
          handleClose={console.log}
        />
      )
      .toJSON();

    expect(dialog).toMatchSnapshot();
  });

  it('render correctly', () => {
    render(
      <Dialog
        title='Title'
        children='children'
        handleClose={console.log}
      />
    );

    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton.tagName).toBe('BUTTON');
    expect(closeButton.className).toBe('btn-close');

    const title = screen.getByText('Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('DIV');
    expect(title.className).toBe('modal-title h4');

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
    expect(children.tagName).toBe('DIV');
    expect(children.className).toBe('');
  });

  it('should call the close handler', () => {
    const handleCloseMock = jest.fn();

    render(
      <Dialog
        title='Title'
        children='children'
        handleClose={handleCloseMock}
      />
    );
    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton, {});

    expect(handleCloseMock).toHaveBeenCalled();
  });

});
