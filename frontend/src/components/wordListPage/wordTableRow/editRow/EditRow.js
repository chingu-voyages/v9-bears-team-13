import React from "react";
import { Input, Button } from "reactstrap";

const EditRow = ({ id, author, text, timesSeen, toggleEdit, updateWord }) => {
  const onChangeText = e => {
    const text = e.target.value;
    const word = { id, author, text, timesSeen };
    updateWord(word);
  };
  const onChangeTimesSeen = e => {
    const timesSeen = e.target.value;
    const word = { id, author, text, timesSeen };
    updateWord(word);
  };
  return (
    <tr>
      <th>
        <Input value={text} onChange={e => onChangeText(e)} />
      </th>
      <th>
        <Input value={timesSeen} onChange={e => onChangeTimesSeen(e)} />
      </th>
      <th>
        <Button onClick={() => toggleEdit(id)}>Finish</Button>
      </th>
      <th></th>
    </tr>
  );
};

export default EditRow;
