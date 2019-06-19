import React from 'react';

import Homepage from './components/homepage/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
    </div>
  );
}

export default App;
