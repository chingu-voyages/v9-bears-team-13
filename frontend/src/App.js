import React, { useState } from "react";
import { Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";

import { PrivateRoute } from "./routes/privateRoute";
import AddWordPage from "./components/addWordPage/AddWordPage";
import WordListPage from "./components/wordListPage/WordListPage";

import axios from "axios";

export const NameContext = React.createContext();

function App() {
  const [username, setUsername] = useState("");
  const [pkValue, setValue] = useState(0);
  const [words, setWords] = useState([]);

  const getUser = () => {
    axios
      .get(
        "https://bears-api.andrew-horn-portfolio.life/api/v1/rest-auth/user/",
        {
          headers: {
            Authorization: `Token  ${localStorage.getItem("authToken")}`
          }
        }
      )
      .then(resp => {
        setUsername(resp.data.username);
        setValue(resp.data.pk);
      })
      .catch(err => console.log(err));
  };

  const getWords = () => {
    axios
      .get("https://bears-api.andrew-horn-portfolio.life/api/v1/", {
        headers: {
          Authorization: `Token  ${localStorage.getItem("authToken")}`
        }
      })
      .then(resp => {
        setWords(resp.data);
      })
      .catch(err => console.log(err));
  };

  const wipeState = () => {
    setUsername("");
    setWords([]);
    setValue(0);
  };

  return (
    <div className="App">
      <Nav name={username} getUser={getUser} wipeState={wipeState} />
      <Route exact path="/" component={Homepage} />
      <PrivateRoute
        path="/add-word"
        userId={pkValue}
        component={AddWordPage}
        getWords={getWords}
        words={words}
      />
      <PrivateRoute
        path="/word-list"
        component={WordListPage}
        words={words}
        getWords={getWords}
      />
    </div>
  );
}

export default App;
