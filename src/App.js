import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/LoginPage">
          <LoginPage />
        </Route>

        <Route path="/GamePage">
          <GamePage />
        </Route>
      </div>
    );
  }
}

export default App;
