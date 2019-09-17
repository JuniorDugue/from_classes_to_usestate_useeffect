import React, { Component } from "react";
import styled from "styled-components";

const CounterStyled = styled.div`
  border: 1px solid blue;
  width: 90%;
  max-width: 200px;
  margin: 0 auto;
`;

class ClassComponent extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <CounterStyled>
          <h3>Counter App</h3>
          <button onClick={this.incrementCount}>Add</button>
          <br />
          <br />
          <button onClick={this.decrementCount}>Subtract</button>
          <p>{this.state.count}</p>
        </CounterStyled>
        <div className="toggleLight">
          <h3>Toggle Light App</h3>
          <div
            style={{
              height: "50px",
              width: "50px",
              background: this.state.isOn ? "yellow" : "grey",
              margin: "0 auto"
            }}
            onClick={this.toggleLight}
          />
        </div>
        <div className="toggleLight">
          <h3>Toggle Light App</h3>
          <img
            src={
              this.isOn
                ? "https://icon.now.sh/hightlight/fd0"
                : "https://icon.now.sh/hightlight/aaa"
            }
            style={{
              height: "50px",
              width: "50px",
              margin: "0 auto"
            }}
            alt="FlashLight"
            onClick={this.toggleLight}
          />
        </div>
      </div>
    );
  }
}

export default ClassComponent;
