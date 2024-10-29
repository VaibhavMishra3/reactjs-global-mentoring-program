import React from 'react';

const CounterText = (value) => {
  return React.createElement(
    'div',
    {
      'data-testid': 'counter-text',
    },
    value
  );
}

export default CounterText;
