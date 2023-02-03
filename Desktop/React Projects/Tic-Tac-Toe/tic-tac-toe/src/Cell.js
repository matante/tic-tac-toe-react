import React, { Component } from "react";
import TicTacToeContext from "./TicTacToeContext";

class Cell extends Component {
  constructor() {
    super();
    this.state = { image: null };
  }

  handleClick = (data) => {
    if (this.state.image == null) {
      this.setState({ image: data.turn ? data.X : data.O });
      data.changeTurn();
    } else {
      console.log(this.state.image);
    }
  };

  render() {
    const styles = {
      backgroundImage: `url(${this.state.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "175px",
      height: "175px",
    };
    return (
      <TicTacToeContext.Consumer>
        {(contextData) => (
          <div className="Cell">
            <button
              style={styles}
              onClick={() => this.handleClick(contextData)}
            />
          </div>
        )}
      </TicTacToeContext.Consumer>
    );
  }
}

export default Cell;

