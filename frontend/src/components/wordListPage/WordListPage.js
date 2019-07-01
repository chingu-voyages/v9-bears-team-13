import React, { useState } from "react";
import { Col, Table } from "reactstrap";
import { Link } from "react-router-dom";

import WordTableRow from "./wordTableRow/WordTableRow";
import isEditModeOn from "./isEditModeOn";

const WordListPage = props => {
  const [wordList, setWordList] = useState(sampleWordData);

  const deleteWord = id => {
    const newWordList = wordList.filter(word => word.id !== id);
    setWordList(newWordList);
  };

  const updateWord = ({ id, text, timesSeen }) => {
    const newWordList = wordList.map(word => {
      if (word.id === id) {
        word.text = text;
        word.timesSeen = timesSeen;
        return word;
      }
      return word;
    });
    setWordList(newWordList);
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

  console.log(props.words);

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
        <h2>Word list</h2>
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
              ? wordList.map(({ id, text, timesSeen, editMode }) => (
                  <WordTableRow
                    id={id}
                    text={text}
                    timesSeen={timesSeen}
                    deleteWord={deleteWord}
                    toggleEdit={toggleEdit}
                    editMode={editMode}
                    updateWord={updateWord}
                  />
                ))
              : wordList
                  .sort((a, b) => a.timesSeen < b.timesSeen)
                  .map(({ id, text, timesSeen, editMode }) => (
                    <WordTableRow
                      id={id}
                      text={text}
                      timesSeen={timesSeen}
                      deleteWord={deleteWord}
                      toggleEdit={toggleEdit}
                      editMode={editMode}
                      updateWord={updateWord}
                    />
                  ))}
          </tbody>
        </Table>
      </Col>
    </>
  );
};

const sampleWordData = [
  {
    id: 0,
    text: "老子",
    timesSeen: 3,
    editMode: false
  },
  {
    id: 1,
    text: "庄子",
    timesSeen: 10,
    editMode: false
  },
  {
    id: 2,
    text: "孔子",
    timesSeen: 2,
    editMode: false
  }
];

export default WordListPage;
