import React, { useState } from "react";
import styled from "styled-components";

const CounterStyled = styled.div`
  border: 1px solid blue;
  width: 90%;
  max-width: 200px;
  margin: 0 auto;
`;

const FunctionComponent = () => {
  // for the counter app
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  // for the toggle light app
  const [isOn, setIsOn] = useState(false)
  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  return (
    <div>
      <h2>Functional Component</h2>
      <CounterStyled>
        <h3>Counter App</h3>
        <button onClick={incrementCount}>Add</button>
        <br />
        <br />
        <button onClick={decrementCount}>Subtract</button>
        <p>{count}</p>
      </CounterStyled>
      <div className="toggleLight">
        <h3>Toggle Light App</h3>
          <div
            style={{
              height: "50px",
              width: "50px",
              background: isOn ? "yellow" : "grey",
              margin: "0 auto"
            }}
            onClick={toggleLight}
            />
          </div>
      </div>
  );
};

export default FunctionComponent;
