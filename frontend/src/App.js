import React, { useState } from "react";
import { Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";

import { PrivateRoute } from "./helpers/privateRoute";
import AddWordPage from "./components/addWordPage/AddWordPage";
import WordListPage from "./components/wordListPage/WordListPage";

import axios from "axios";

export const NameContext = React.createContext();

function App() {
  const [name, updateName] = useState("");

  const getUser = () => {
    axios
      .get(
        "https://bears-api.andrew-horn-portfolio.life/api/v1/rest-auth/user/"
      )
      .then(resp => console.log(resp.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Nav name={name} />
      <Route exact path="/" component={Homepage} />
      <PrivateRoute
        path="/add-word"
        component={AddWordPage}
        getUser={getUser}
        name={name}
      />
      <PrivateRoute path="/word-list" component={WordListPage} />
    </div>
  );
}

export default App;
