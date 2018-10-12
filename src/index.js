import React from "react";
import ReactDOM from "react-dom";
import ObliqueStrategy from "./components/ObliqueStrategy";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Oblique Strategies</h1>
      <ObliqueStrategy edition={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
