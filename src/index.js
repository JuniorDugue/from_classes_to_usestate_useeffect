import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
