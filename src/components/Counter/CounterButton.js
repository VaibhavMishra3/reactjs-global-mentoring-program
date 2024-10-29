import React from 'react';

const CounterButton = (text, testId, handleClick) => {
  return React.createElement(
    'button',
    {
      'data-testid': testId,
      onClick: () => handleClick()
    },
    text
  );
}

export default CounterButton;
