import React, { useState } from "react";
import axios from "axios";

import "./settings.css";

const Settings = props => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMsg] = useState("");
  const [isLoading, setLoading] = useState(false);

  const updatePassword = val => {
    setPassword(val);
  };

  const updateNewPassword = val => {
    setNewPassword(val);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        "/api/v1/rest-auth/password/change/",
        {
          headers: {
            Authorization: `Token  ${localStorage.getItem("authToken")}`
          }
        },
        {
          new_password1: password,
          new_password2: newPassword
        }
      )
      .then(resp => {
        console.log(resp.data);
        setLoading(false);
        setMessage("Password successfully changed");
        setTimeout(() => {
          setMessage("");
        }, 10000);
      })
      .catch(err => {
        setErrMsg("something went wrong, please try again");
        setTimeout(() => {
          setMessage("");
        }, 10000);
      });
  };
  return (
    <div className="container">
      <p id="herald" className="herald_message">
        Update Credentials
      </p>
      <form onSubmit={e => handleSubmit(e)} autoComplete="off">
        <p style={{ color: "green", marginTop: "0" }}>
          <em>{<small>{message}</small>}</em>
        </p>
        <input
          disabled
          autoComplete="off"
          value={props.name}
          type="text"
          className="form-control"
        />

        <br />

        <input
          autoComplete="off"
          value={password}
          type="text"
          className="form-control"
          placeholder="New Password"
          onChange={e => updatePassword(e.target.value)}
        />

        <br />
        <input
          autoComplete="off"
          autoComplete="password"
          value={newPassword}
          type="password"
          className="form-control"
          placeholder="Comfirm New Password"
          onChange={e => updateNewPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>
          <em>{<small>{errMessage}</small>}</em>
        </p>
        <br />
        <button type="submit" className="btn btn-teal mb-4">
          Update{" "}
          {isLoading && (
            <div className="spinner-border spinner-border-sm " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default Settings;
