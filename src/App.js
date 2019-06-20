import React from 'react';

import Homepage from './components/homepage/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Nav';

import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      //you would render each route like below. All you have to do is first import the component, set the path you want e.g '/home' or '/addword' and pass the component as a prop.
      //all routes go below the Nav
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
