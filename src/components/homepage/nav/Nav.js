import React from 'react';

import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      

    
        <div className="collapse navbar-collapse " id="navbarSupportedContent">

          <ul style={{width: '100%'}} className="navbar-nav mr-auto d-flex justify-content-end">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" class="btn btn-danger">
                  Signup
                </button>
              </a>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};

export default Nav;

// <div>
//   <ul className="nav justify-content-end">
//     <li className="nav-item">
//       <button type="button" className="btn btn-primary">Login</button>
//     </li>
//     <li className="nav-item">
//       <button type="button" class="btn btn-danger">Signup</button>
//     </li>
//   </ul>
// </div>
