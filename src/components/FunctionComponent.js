import React, { useState } from "react";

const FunctionComponent = () => {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>Functional Component</h2>
      <button onClick={incrementCount}>Add</button><br/><br/>
      <button onClick={decrementCount}>Subtract</button>
      <p>{count}</p>
    </div>
  );
}

export default FunctionComponent;
