import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import styled from "styled-components";
import "./styles.css";

const BorderBox = styled.div`
  border: 1px solid red;
`

function App() {
  return (
    <div className="App">
      <BorderBox>
        <ClassComponent />
      </BorderBox>
      <BorderBox>
        <FunctionComponent/>
      </BorderBox>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

