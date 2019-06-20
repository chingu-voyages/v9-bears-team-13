const isEditModeOn = wordList => {
  for (let word of wordList) {
    if (word.editMode) {
      return true;
    }
  }
  return false;
};

export default isEditModeOn;
