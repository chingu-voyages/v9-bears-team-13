import React, { useState } from "react";
import { Col, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

import WordTableRow from "./wordTableRow/WordTableRow";

const WordListPage = () => {
  const [wordList, setWordList] = useState(sampleWordData);

  const deleteWord = text => {
    const newWordList = wordList.filter(word => word.text !== text);
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
              .map(({ text, timesSeen }) => (
                <WordTableRow
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
    text: "老子",
    timesSeen: 3
  },
  {
    text: "庄子",
    timesSeen: 10
  },
  {
    text: "孔子",
    timesSeen: 2
  }
];

export default WordListPage;
