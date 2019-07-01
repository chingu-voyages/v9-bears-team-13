import React, { useState } from "react";
import { Col, Form, Input, Button } from "reactstrap";
import { withRouter } from "react-router";

import axios from "axios";

const AddWordForm = props => {
  const [word, setWord] = useState("");

  const onSubmitWord = e => {
    e.preventDefault();
    if (props.words.map(element => element.word).includes(word)) {
      let result = props.words.filter(element => element.word === word);
      result = result[0];
      axios
        .put(
          `https://bears-api.andrew-horn-portfolio.life/api/v1/${result.id}/`,
          {
            author: result.author,
            word: result.word,
            times_seen: result.times_seen + 1
          },
          {
            headers: {
              Authorization: `Token  ${localStorage.getItem("authToken")}`
            }
          }
        )
        .then(resp => {
          props.getWords();
        })
        .catch(err => console.log(err));
    } else {
      axios
        .post(
          `https://bears-api.andrew-horn-portfolio.life/api/v1/`,
          {
            author: props.pkValue,
            word,
            times_seen: 1
          },
          {
            headers: {
              Authorization: `Token  ${localStorage.getItem("authToken")}`
            }
          }
        )
        .then(resp => {
          props.getWords();
        })
        .catch(err => console.log(err));
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

export default withRouter(AddWordForm);
