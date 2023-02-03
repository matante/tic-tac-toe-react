import React, { Component } from "react";
import Board from "./Board";
import TicTacToeContext from "./TicTacToeContext";
import charmander from "./images/charmander.png";
import squirtle from "./images/squirtle.png";

class TicTacToe extends Component {
  constructor() {
    super();
    this.state = { turn: true, X: charmander, O: squirtle };
    // true is X's turn, false is O's turn.
  }
  changeTurn = () => {
    this.setState({ turn: !this.state.turn });
  };
  render() {
    return (
      <TicTacToeContext.Provider
        value={{
          turn: this.state.turn,
          changeTurn: this.changeTurn,
          X: this.state.X,
          O: this.state.O,
        }}
      >
        <div className="TicTacToe">
          <Board size={3} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>This is</h2>
          <img
            src={this.state.turn ? charmander : squirtle}
            alt=""
            style={{ width: "175px", height: "175px", margin: "0 10px" }}
          />
          <h2>'s turn!</h2>
        </div>
      </TicTacToeContext.Provider>
    );
  }
}

export default TicTacToe;

/*
images credit:
<a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Roundicons Freebies - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Roundicons Freebies - Flaticon</a>
*/
