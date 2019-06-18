import React, {useState} from 'react';
import LoginModal from '../loginModal/LoginModal';
import RegisterModal from '../registerModal/RegisterModal'
import './nav.css';

const Nav = () => {
  const [loginIsOpen, setLogin] = useState(false);
  const [signupIsOpen, setSignup] = useState(false)
  const [loading, isLoading] = useState(false);

  const toggleLogin = () => {
    setLogin(!loginIsOpen);
  };

  const toggleSignup = () => {
    setSignup(!signupIsOpen);
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
                <button onClick={()=>toggleSignup()} type="button" className="btn curve-button  btn-danger">
                  Signup
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <LoginModal
        isLoading={loading}
        isOpen={loginIsOpen}
        toggleLogin={toggleLogin}
      />
      <RegisterModal
        isLoading={loading}
        isOpen={signupIsOpen}
        toggleSignup={toggleSignup}
      />
    </>
  );
};

export default Nav;

