import React from 'react';

const Nav = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Signup
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav
