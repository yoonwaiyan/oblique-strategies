import React from "react";
import ReactDOM from "react-dom";
import ObliqueStrategy from "./components/ObliqueStrategy";

import "./css_reset.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Oblique Strategies</h1>
      <ObliqueStrategy />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
