import React from "react";
import { Button } from "reactstrap";

const WordTableRow = ({ text, timesSeen, deleteWord }) => (
  <tr>
    <th>{text}</th>
    <th>{timesSeen}</th>
    <th>
      <Button>Edit</Button>
    </th>
    <th>
      <Button onClick={() => deleteWord(text)}>Delete</Button>
    </th>
  </tr>
);

export default WordTableRow;
