import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Nav from "./components/nav/Nav";
import { PrivateRoute } from "./routes/privateRoute";
import AddWordPage from "./components/addWordPage/AddWordPage";
import WordListPage from "./components/wordListPage/WordListPage";

export const NameContext = React.createContext();

function App(props) {
  const [username, setUsername] = useState("");
  const [pkValue, setValue] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (username && (!words || !words.length)) {
      getWords();
    }
  }, [username]);

  useEffect(() => {
    if (localStorage.getItem("authToken") && props.history.location.pathname === "/") {
      props.history.push("/add-word");
    }
  }, [props.history]);

  useEffect(() => {
    if (
      !username &&
      !pkValue &&
      (!words || !words.length) &&
      localStorage.getItem("local")
    ) {
      const { username, pkValue, words } = localStorage.getItem("local");
      setUsername(username);
      setValue(pkValue);
      setWords(words);
    }
    return localStorage.setItem(
      "local",
      JSON.stringify({ username, pkValue, words })
    );
  }, [username, pkValue]);

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
    localStorage.clear();
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

export default withRouter(App);
