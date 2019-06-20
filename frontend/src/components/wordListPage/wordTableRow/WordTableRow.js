import React from "react";
import ReadRow from "./readRow/ReadRow";
import EditRow from "./editRow/EditRow";

const WordTableRow = ({ editMode, ...props }) => (
  <>{editMode ? <EditRow {...props} /> : <ReadRow {...props} />}</>
);

export default WordTableRow;
