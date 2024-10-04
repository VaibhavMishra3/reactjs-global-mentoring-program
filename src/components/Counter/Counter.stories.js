import React from 'react';
import Counter from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
};

export const Default = () => <Counter initialValue={0} />;
