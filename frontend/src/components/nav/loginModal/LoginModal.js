import React from "react";
import ReactModal from "react-modal";

const LoginModal = props => {
  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        className="Modal"
        contentLabel="Login"
        /* onRequestClose={props.handleRequestClose} */
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
        <div className="modal-header-section">
          <button
            onClick={() => props.toggleLogin()}
            className="btn btn-link nav-link text-light close-button"
            /*onClick={props.handleRequestClose} */
          >
            <i className="fas fa-times" />
          </button>
          <h2 className="font-weight-light">Log In</h2>
        </div>
        <div className="content">
          <form onSubmit={e => props.handleLogin(e)}>
            <input
              value={props.username}
              type="text"
              className="form-control"
              onChange={e => props.updateUsername(e.target.value)}
              placeholder="Username"
            />

            <br />
            <input
              autoComplete="username"
              value={props.email}
              type="email"
              className="form-control"
              onChange={e => props.updateEmail(e.target.value)}
              placeholder="Email"
            />

            <br />
            <input
              autoComplete="current-password"
              value={props.password}
              type="password"
              className="form-control"
              onChange={e => props.updatePassword(e.target.value)}
              placeholder="Password"
            />
            <p style={{ color: "red" }}>
              <em>{<small>{props.errorMsg}</small>}</em>
            </p>
            <br />
            <button type="submit" className="btn btn-teal mb-4">
              Log in{" "}
              {props.isLoading && (
                <div
                  className="spinner-border spinner-border-sm "
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
};

export default LoginModal;
