import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
  constructor(props) {
    super();
    this.state = { size: props.size };
  }
  render() {
    let arr = Array.from(Array(this.state.size).keys());

    const Table = (
      <table style={{ margin: "0 auto", textAlign: "center" }}>
        <tbody>
          {arr.map((row) => {
            return (
              <tr key={row + 1}>
                {arr.map((col) => {
                  return (
                    <td key={row * this.state.size + col + 1}>
                      <Cell />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );

    return <div className="Board">{Table}</div>;
  }
}

export default Board;
