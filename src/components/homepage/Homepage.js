import React from 'react';

import Nav from './nav/Nav';

import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <h3>This is the Homepage</h3>
      </div>
    </div>
  );
};

export default Homepage;
