import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route } from "react-router-dom";
import GamePageContainer from "./components/GamePageContainer/GamePageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/LoginPage" render={() => <LoginPage />} />
        <Route path="/GamePage" render={() => <GamePageContainer />} />
      </div>
    );
  }
}

export default App;
