import React, { useState, useEffect } from "react";
import LoginModal from "./loginModal/LoginModal";
import RegisterModal from "./registerModal/RegisterModal";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = props => {
  const [loginIsOpen, setLogin] = useState(false);
  const [signupIsOpen, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setEerrorMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) props.getUser();
  });

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
    clearFields();
    setLogin(!loginIsOpen);
  };

  const toggleSignup = () => {
    clearFields();
    setSignup(!signupIsOpen);
  };

  const handleClick = () => {
    clearFields();
    setLogin(!loginIsOpen);
    props.history.push("/resetpassword");
  };

  const handleError = str => {
    setEerrorMsg(str);
    setTimeout(() => {
      setEerrorMsg("");
      setLoading(false);
    }, 5000);
    return;
  };

  const handleSignUp = e => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      handleError("Passwords do not match");
      return;
    }
    let obj = {
      username: username,
      email: email,
      password1: password,
      password2: confirmPassword
    };
    // console.log(obj);
    axios
      .post(
        "https://bears-api.andrew-horn-portfolio.life/api/v1/rest-auth/registration/",
        obj
      )
      .then(resp => {
        // console.log(resp);
        localStorage.setItem("authToken", resp.data.key);
        clearFields();
        setLoading(false);
        props.getUser();
        setSignup(false);
        props.history.push("/add-word");
      })
      .catch(err => {
        handleError(
          "Something went wrong, please comfirm your email and password then try again"
        );
      });
  };

  const handleLogout = () => {
    axios
      .post(
        "https://bears-api.andrew-horn-portfolio.life/api/v1/rest-auth/logout/",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
          }
        }
      )
      .then(resp => resp)
      .catch(err => console.log(err));
    localStorage.removeItem("authToken");
    props.wipeState();
    props.history.push("/");
  };

  const clearFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoading(false);
    setEerrorMsg("");
  };

  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);
    let obj = {
      username: username,
      password: password
    };
    axios
      .post(
        "https://bears-api.andrew-horn-portfolio.life/api/v1/rest-auth/login/",
        obj
      )
      .then(resp => {
        localStorage.setItem("authToken", resp.data.key);
        clearFields();

        // document.location.reload();
        setLogin(false);
        props.getUser();
        props.history.push("/add-word");
        //console.log(props.history);
      })
      .catch(err => {
        //  console.log(err);

        handleError(
          "Something went wrong, please comfirm your email and password then try again"
        );
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/add-word">
          WordList
        </Link>

        <div className="navbar-collapsee" id="navbarSupportedContent">
          <ul className=" mr-auto d-flex justify-content-end nav-style">
            {!localStorage.getItem("authToken") ? (
              <>
                {" "}
                <div className="authentication_items">
                  <li className="nav-item ">
                    <button
                      onClick={() => toggleLogin()}
                      type="button"
                      className="btn curve-button  btn-primary"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => toggleSignup()}
                      type="button"
                      className="btn curve-button  btn-danger"
                    >
                      Signup
                    </button>
                  </li>
                </div>
              </>
            ) : (
              <>
                <div className="successful_greeting">
                  <p>Hi, {props.name}</p>
                </div>
                <Link
                  className="successful_greeting"
                  style={{ color: "black" }}
                  to="/settings"
                >
                  settings
                </Link>
                <button
                  onClick={() => handleLogout()}
                  type="button"
                  className="btn curve-button  btn-danger"
                >
                  Logout
                </button>
              </>
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
        errorMsg={errorMsg}
        handleClick={handleClick}
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
        handleSignUp={handleSignUp}
        errorMsg={errorMsg}
      />
    </>
  );
};

export default React.memo(withRouter(Nav));
