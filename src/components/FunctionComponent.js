import React, { useState } from "react";
import styled from "styled-components";

const CounterStyled = styled.div`
  border: 1px solid blue;
  width: 90%;
  max-width: 200px;
  margin: 0 auto;
`;

const FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

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
    </div>
  );
};

export default FunctionComponent;
