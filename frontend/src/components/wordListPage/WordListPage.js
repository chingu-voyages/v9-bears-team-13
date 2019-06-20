import React, { useState } from "react";
import { Col, Table } from "reactstrap";
import { Link } from "react-router-dom";

import WordTableRow from "./wordTableRow/WordTableRow";

const WordListPage = () => {
  const [wordList, setWordList] = useState(sampleWordData);

  const deleteWord = id => {
    const newWordList = wordList.filter(word => word.id !== id);
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
            {wordList
              .sort((a, b) => a.timesSeen < b.timesSeen)
              .map(({ id, text, timesSeen }) => (
                <WordTableRow
                  id={id}
                  text={text}
                  timesSeen={timesSeen}
                  deleteWord={deleteWord}
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
    timesSeen: 3
  },
  {
    id: 1,
    text: "庄子",
    timesSeen: 10
  },
  {
    id: 2,
    text: "孔子",
    timesSeen: 2
  }
];

export default WordListPage;
