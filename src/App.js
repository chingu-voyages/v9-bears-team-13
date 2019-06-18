import React from 'react';

import Homepage from './components/homepage/Homepage';

import './App.css';
import AddWordPage from './components/addWordPage/AddWordPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AddWordPage />
    </div>
  );
}

export default App;
