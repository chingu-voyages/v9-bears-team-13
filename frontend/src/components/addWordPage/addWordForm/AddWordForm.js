import React, { useState } from "react";
import { Col, Form, Input, Button } from "reactstrap";
import { withRouter } from "react-router";

import axios from "axios";

const AddWordForm = props => {
  const [word, setWord] = useState("");

  const onSubmitWord = async e => {
    e.preventDefault();
    if (props.words.map(prop => prop.word).includes(word)) {
      const { id, author, word: text, times_seen } = props.words.filter(
        prop => prop.word === word
      )[0];
      try {
        await axios.put(
          `https://bears-api.andrew-horn-portfolio.life/api/v1/${id}/`,
          {
            author,
            word: text,
            times_seen: times_seen + 1
          },
          {
            headers: {
              Authorization: `Token  ${localStorage.getItem("authToken")}`
            }
          }
        );
        props.getWords();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await axios.post(
          `https://bears-api.andrew-horn-portfolio.life/api/v1/`,
          {
            author: props.userId,
            word,
            times_seen: 1
          },
          {
            headers: {
              Authorization: `Token  ${localStorage.getItem("authToken")}`
            }
          }
        );
        props.getWords();
      } catch (e) {
        console.log(e);
      }
    }
    setWord("");
  };

  return (
    <Col
      xs="12"
      sm={{ size: 8, offset: 2 }}
      md={{ size: 6, offset: 3 }}
      lg={{ size: 4, offset: 4 }}
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
