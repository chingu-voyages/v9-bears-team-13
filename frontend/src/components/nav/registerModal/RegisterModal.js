import React from "react";
import ReactModal from "react-modal";

const RegisterModal = props => {
  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        className="Modal"
        contentLabel="Sign Up"
        /* onRequestClose={props.handleRequestClose} */
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
        <div className="modal-header-section">
          <button
            onClick={() => props.toggleSignup()}
            className="btn btn-link nav-link text-light close-button"
            /*onClick={props.handleRequestClose} */
          >
            <i className="fas fa-times" />
          </button>
          <h2 className="font-weight-light">Sign Up</h2>
        </div>
        <div className="content">
          <form onSubmit={e => props.handleSignUp(e)}>
            <input
              autoComplete="name"
              value={props.name}
              type="text"
              className="form-control"
              onChange={e => props.updateUsername(e.target.value)}
              placeholder="username"
            />
            <br />
            <input
              autoComplete="email"
              value={props.email}
              type="email"
              className="form-control"
              onChange={e => props.updateEmail(e.target.value)}
              placeholder="email"
            />
            <br />
            <input
              autoComplete="password"
              value={props.password}
              type="password"
              className="form-control"
              onChange={e => props.updatePassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <input
              autoComplete="off"
              value={props.confirmPassword}
              type="password"
              className="form-control"
              onChange={e => props.updateComfirmPassword(e.target.value)}
              placeholder="Comfirm Password"
            />
            <p style={{ color: "red" }}>
              <em>{<small>{props.errorMsg}</small>}</em>
            </p>
            <br />
            <button type="submit" className="btn btn-teal mb-4">
              Sign up{" "}
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

export default RegisterModal;
