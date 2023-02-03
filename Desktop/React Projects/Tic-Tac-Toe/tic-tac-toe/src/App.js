import "./App.css";
import React, { Component } from "react";
import TicTacToe from "./TicTacToe";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1> Welcome to the TicTacToe Game! </h1>
        <br />
        <TicTacToe />
      </div>
    );
  }
}

export default App;
