const getWordsFromApp = (words = []) =>
  words.map(({ author, word, times_seen, ...rest }) => ({
    editMode: false,
    author,
    text: word,
    timesSeen: times_seen,
    ...rest
  }));

export default getWordsFromApp;
