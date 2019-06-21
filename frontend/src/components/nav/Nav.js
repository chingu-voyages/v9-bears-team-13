import React, { useState } from "react";
import LoginModal from "./loginModal/LoginModal";
import RegisterModal from "./registerModal/RegisterModal";
import axios from "axios";
import "./nav.css";

const Nav = () => {
  const [loginIsOpen, setLogin] = useState(false);
  const [signupIsOpen, setSignup] = useState(false);
  const [loading, isLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updateUsername = val => {
    setUsername(val);
  };

  const updateEmail = val => {
    setEmail(val);
  };

  const updatePassword = val => {
    setPassword(val);
  };

  const updateComfirmPassword = val => {
    setConfirmPassword(val);
  };

  const toggleLogin = () => {
    setLogin(!loginIsOpen);
  };

  const toggleSignup = () => {
    setSignup(!signupIsOpen);
  };

  const handleSignUp = () => {
    let obj = {
      username: username,
      email: email,
      password1: "",
      password2: ""
    };
  };

  const handleLogin = () => {
    let obj = {
      username: username,
      email: email,
      password: password
    };
    axios
      .post("/api/v1/rest-auth/login/", obj)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          WordList
        </a>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            style={{ width: "100%" }}
            className="navbar-nav mr-auto d-flex justify-content-end"
          >
            {localStorage.getItem("authToken") ? (
              <>
                {" "}
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    <button
                      onClick={() => toggleLogin()}
                      type="button"
                      className="btn curve-button  btn-primary"
                    >
                      Login
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button
                      onClick={() => toggleSignup()}
                      type="button"
                      className="btn curve-button  btn-danger"
                    >
                      Signup
                    </button>
                  </a>
                </li>
              </>
            ) : (
              <p>jj</p>
            )}
          </ul>
        </div>
      </nav>
      <LoginModal
        isLoading={loading}
        isOpen={loginIsOpen}
        toggleLogin={toggleLogin}
        username={username}
        email={email}
        password={password}
        updateUsername={updateUsername}
        updateEmail={updateEmail}
        updatePassword={updatePassword}
        handleLogin={handleLogin}
      />
      <RegisterModal
        isLoading={loading}
        isOpen={signupIsOpen}
        toggleSignup={toggleSignup}
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        updateUsername={updateUsername}
        updateEmail={updateEmail}
        updatePassword={updatePassword}
        updateComfirmPassword={updateComfirmPassword}
      />
    </>
  );
};

export default Nav;
