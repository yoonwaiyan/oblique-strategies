import React from 'react';
import ReactDOM from 'react-dom';
import ObliqueStrategy from './components/ObliqueStrategy';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <h1 className="title">Oblique Strategies</h1>
      <ObliqueStrategy />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
