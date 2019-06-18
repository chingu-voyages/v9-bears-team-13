import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    WordList
  </a>
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul
      style={{width: '100%'}}
      className="navbar-nav mr-auto d-flex justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <button type="button" className="btn curve-button  btn-primary">
            Logout
          </button>
        </a>
      </li>
    </ul>
  </div>
</nav>
);

export default Nav;