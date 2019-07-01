import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spaces from "./spaces/Spaces";
import AddWordForm from "./addWordForm/AddWordForm";

const AddWordPage = props => {
  useEffect(() => {
    props.getUser();
    props.getWords();
  });

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
