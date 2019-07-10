import React, { useState } from "react";
import axios from "axios";

const EmailPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errMessage, setErrMsg] = useState("");
  const [message, setMessage] = useState("");

  const updateEmail = val => {
    setEmail(val);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    if (!email.includes("@")) {
      setLoading(false);
      return;
    }
    axios
      .post(
        "https://bears-api.andrew-horn-portfolio.life/api/v1/rest-auth/password/reset/",
        {
          email
        },
        {
          headers: {
            Authorization: `Token  ${localStorage.getItem("authToken")}`
          }
        }
      )
      .then(resp => {
        console.log(resp.data);
        setLoading(false);
        setEmail("");
        setMessage("Password reset email sent");
        setTimeout(() => {
          setMessage("");
        }, 10000);
      })
      .catch(err => {
        setErrMsg("something went wrong, please try again");
        setTimeout(() => {
          setMessage("");
        }, 7000);
      });
  };

  return (
    <div className="container">
      <p id="herald" className="herald_message">
        Enter email to reset password
      </p>
      <form onSubmit={e => handleSubmit(e)} autoComplete="off">
        <p style={{ color: "green", marginTop: "0" }}>
          <em>{<small>{message}</small>}</em>
        </p>
        <input
          autoComplete="off"
          value={email}
          type="text"
          className="form-control"
          onChange={e => updateEmail(e.target.value)}
          placeholder="enter email"
        />

        <br />

        <p style={{ color: "red" }}>
          <em>{<small>{errMessage}</small>}</em>
        </p>
        <br />
        <button type="submit" className="btn btn-teal mb-4">
          Submit{" "}
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

export default EmailPage;
