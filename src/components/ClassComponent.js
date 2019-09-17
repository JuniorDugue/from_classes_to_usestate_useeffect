import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <button onClick={this.incrementCount}>Add</button>
        <br />
        <br />
        <button onClick={this.decrementCount}>Subtract</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default ClassComponent;
