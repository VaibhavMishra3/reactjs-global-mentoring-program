import React from 'react';

import CounterButton from './CounterButton';
import CounterContainer from './CounterContainer';
import CounterText from './CounterText';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: +this.props.initialValue || 0
    };
  }

  render() {
    return CounterContainer([
      CounterButton('-', 'counter-decrement', this.decrement),
      CounterText(this.state.value),
      CounterButton('+', 'counter-increment', this.increment)
    ]);
  }

  decrement = () => {
    this.setState(prevState => ({
      ...prevState, value: prevState.value - 1
    }));
  }

  increment = () => {
    this.setState(prevState => ({
      ...prevState, value: prevState.value + 1
    }));
  }

}

export default Counter;
