import React from "react";
import { Button } from "reactstrap";

const ReadRow = ({ id, text, timesSeen, deleteWord, toggleEdit }) => (
  <tr>
    <th>{text}</th>
    <th>{timesSeen}</th>
    <th>
      <Button onClick={() => toggleEdit(id)}>Edit</Button>
    </th>
    <th>
      <Button onClick={() => deleteWord(id)}>Delete</Button>
    </th>
  </tr>
);

export default ReadRow;
