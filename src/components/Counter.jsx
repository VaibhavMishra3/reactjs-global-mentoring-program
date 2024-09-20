import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("p", null, `Count: ${this.state.count}`),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}

export default Counter;
