import React from "react";
import { Link } from "react-router-dom";

import AddWordForm from "./addWordForm/AddWordForm";

const AddWordPage = props => {
  return (
    <>
      <br />
      <br />
      <Link to="/word-list">See word list</Link>
      <br />
      <br />
      <br />
      <br />
      <AddWordForm {...props} />
    </>
  );
};

export default AddWordPage;
