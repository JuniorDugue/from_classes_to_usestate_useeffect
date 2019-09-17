import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./components/ClassComponent";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ClassComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
