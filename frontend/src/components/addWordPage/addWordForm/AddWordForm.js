import React, { useState } from "react";
import { Col, Form, Input, Button } from "reactstrap";
import axios from "axios";

/*
  ok, what does this need to do?
  Well, it needs to add the word to the database. So. That requires
  a POST request to the Django server. That's it, no? Something like
  that?

  1. Check the Django docs for the POST request syntax.
  2. 
*/

const AddWordForm = () => {
  const [word, setWord] = useState("");

  const onSubmitWord = async e => {
    e.preventDefault();
    try {
      axios.post("/api/v1", {});
    } catch (e) {
      console.log(e);
    }
    setWord("");
  };
  return (
    <Col
      xs="12"
      sm={{ size: 8, offset: 2 }}
      md={{ size: 6, offset: 3 }}
      lg={{ size: 4, offset: 4 }}
      xl={{ size: 2, offset: 5 }}
    >
      <Form onSubmit={onSubmitWord}>
        <h1 style={{ textAlign: "center" }}>Add a word</h1>
        <br />
        <Input value={word} onChange={e => setWord(e.target.value)} />
        <br />
        <Button action="submit" color="primary">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default AddWordForm;
