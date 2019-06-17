import React, {useState} from 'react';
import LoginModal from '../loginModal/LoginModal';
import './nav.css';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [loading, isLoading] = useState(false);

  const toggleLogin = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          WordList
        </a>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            style={{width: '100%'}}
            className="navbar-nav mr-auto d-flex justify-content-end">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <button onClick={()=>toggleLogin()} type="button" className="btn curve-button  btn-primary">
                  Login
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" className="btn curve-button  btn-danger">
                  Signup
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <LoginModal
        isLoading={loading}
        isOpen={isOpen}
        toggleLogin={toggleLogin}
      />
    </>
  );
};

export default Nav;

