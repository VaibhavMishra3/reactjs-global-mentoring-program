import React from 'react';

export const CounterContainer = (children) => {
  return React.createElement(
    'div',
    {},
    ...children
  );
}

export default CounterContainer;
