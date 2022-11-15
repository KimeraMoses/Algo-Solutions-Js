// Front-end Challenge
// We provided some simple React template code. Your goal is to create a functioning Tic Tac Toe game. It should work the following way: the first player to go places an X anywhere on the board by clicking a square, and then the next player will be able to place an O, and it continues alternating like this every turn.

// You should also implement a function to determine if any player won by getting 3 X's or O's in a diagonal, horizontal, or vertical row. If there is a winner, display a message at the top. If nobody wins, then do not display any message. Finally, you should also implement the reset function that resets the entire board. You should also not be able to override the other players move during the game.

// You are free to add classes and styles, but make sure you leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.

import React, { useState } from "react";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Square({ value, handleClick }) {
  return (
    <div className="square" style={squareStyle}>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}

function Board() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    nextValue: true,
  });
  const handleClick = (i) => {
    const prevSquares = state.squares.slice();
    prevSquares[i] = state.nextValue ? "X" : "O";
    setState({
      squares: prevSquares,
      nextValue: !state.nextValue,
    });
  };

  const handleReset = () => {
    setState({
      squares: Array(9).fill(null),
      nextValue: true,
    });
  };

  const getWinner = (squares) => {
    const winCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCombination.length; i++) {
      const [a, b, c] = winCombination[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = getWinner(state.squares);

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{state.nextValue ? "X" : "O"}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={state.squares[0]} handleClick={() => handleClick(0)} />
          <Square value={state.squares[1]} handleClick={() => handleClick(1)} />
          <Square value={state.squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={state.squares[3]} handleClick={() => handleClick(3)} />
          <Square value={state.squares[4]} handleClick={() => handleClick(4)} />
          <Square value={state.squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={state.squares[6]} handleClick={() => handleClick(6)} />
          <Square value={state.squares[7]} handleClick={() => handleClick(7)} />
          <Square value={state.squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;
