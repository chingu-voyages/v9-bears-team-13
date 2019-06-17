import React from 'react';
import ReactModal from 'react-modal';

const LoginModal = (props) => {
 

  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        className="Modal"
        contentLabel="Edit Profile"
       /* onRequestClose={props.handleRequestClose} */
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
      <div className="modal-header-section">
      <button onClick={()=>props.toggleLogin()}
        className="btn btn-link nav-link text-light close-button"
        /*onClick={props.handleRequestClose} */
      >
        <i className="fas fa-times" />
      </button>
      <h2 className="font-weight-light">Log In</h2>
    </div>
    <div className="content">
            <input
        value={props.email}
        type="email"
        className="form-control"
      /*  onChange={e => props.updateField ('email', e.target.value)} */
        placeholder="Email"
      />
      <br />
      <input
        value={props.password}
        type="password"
        className="form-control"
       /* onChange={e => props.updateField ('password', e.target.value)} */
        placeholder="Password"
      />

      <p style={{color: 'red'}}>
        <em>
        { /* <small>{props.errorMsg}</small> */}
        </em>
      </p>
      <br />
      <button className="btn btn-teal mb-4">
        Log in{' '}
        {/*props.isLoading &&
          <div className="spinner-border spinner-border-sm " role="status">
            <span className="sr-only">Loading...</span>
        </div>*/}
      </button>
    </div>

      </ReactModal>
    </div>
  );
};

export default LoginModal;
