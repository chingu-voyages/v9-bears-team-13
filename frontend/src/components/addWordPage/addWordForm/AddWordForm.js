import React, { useState } from "react";
import { Col, Form, Input, Button } from "reactstrap";
import { withRouter } from "react-router";

const AddWordForm = props => {
  const [word, setWord] = useState("");

  const onSubmitWord = e => {
    e.preventDefault();

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

export default withRouter(AddWordForm);
