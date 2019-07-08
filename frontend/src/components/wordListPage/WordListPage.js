import React, { useState, useEffect } from "react";
import { Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import WordTableRow from "./wordTableRow/WordTableRow";
import isEditModeOn from "./isEditModeOn";
import getWordsFromApp from "./wordTableRow/getWordsFromApp";

const WordListPage = ({ words, ...props }) => {
  const [wordList, setWordList] = useState(getWordsFromApp(words));

  useEffect(() => {
    if (!wordList.length) {
      setWordList(getWordsFromApp(words));
    }
  }, [words]);

  const deleteWord = async id => {
    const newWordList = wordList.filter(word => word.id !== id);
    setWordList(newWordList);
    try {
      await axios.delete(
        `https://bears-api.andrew-horn-portfolio.life/api/v1/${id}/`,
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
  };

  const updateWord = async ({ id, author, text, timesSeen }) => {
    const newWordList = wordList.map(word => {
      if (word.id === id) {
        word.text = text;
        word.timesSeen = timesSeen;
        return word;
      }
      return word;
    });
    setWordList(newWordList);
    try {
      await axios.put(
        `https://bears-api.andrew-horn-portfolio.life/api/v1/${id}/`,
        {
          author,
          word: text,
          times_seen: timesSeen
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
  };

  const toggleEdit = id => {
    const newWordList = wordList.map(word => {
      if (word.id === id) {
        word.editMode = !word.editMode;
        return word;
      }
      return word;
    });
    setWordList(newWordList);
  };

  return (
    <>
      <br />
      <br />
      <Link to="/add-word">Add word</Link>
      <br />
      <br />
      <br />
      <Col
        xs="12"
        sm={{ size: 8, offset: 2 }}
        md={{ size: 6, offset: 3 }}
        lg={{ size: 4, offset: 4 }}
      >
        <h2>Word List</h2>
        
        <Table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Times Seen</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isEditModeOn(wordList)
              ? wordList.map(
                  ({ id, author, text, timesSeen, editMode }, index) => (
                    <WordTableRow
                      id={id}
                      author={author}
                      text={text}
                      timesSeen={timesSeen}
                      deleteWord={deleteWord}
                      toggleEdit={toggleEdit}
                      editMode={editMode}
                      updateWord={updateWord}
                      key={index}
                    />
                  )
                )
              : wordList
                  .sort((a, b) => b.timesSeen - a.timesSeen)
                  .map(({ id, author, text, timesSeen, editMode }, index) => (
                    <WordTableRow
                      id={id}
                      author={author}
                      text={text}
                      timesSeen={timesSeen}
                      deleteWord={deleteWord}
                      toggleEdit={toggleEdit}
                      editMode={editMode}
                      updateWord={updateWord}
                      key={index}
                    />
                  ))}
          </tbody>
        </Table>
      </Col>
    </>
  );
};

export default WordListPage;
