import React from "react";
import { Link } from "react-router-dom";

import Spaces from "./spaces/Spaces";
import AddWordForm from "./addWordForm/AddWordForm";

const AddWordPage = props => {
  return (
    <>
      <br />
      <br />
      <Link to="/word-list">See word list</Link>
      <br />
      <Spaces />
      <AddWordForm {...props} />
    </>
  );
};

export default AddWordPage;
