import { useState } from "react";
const App = () => {
  // State for game board
  const [squares, setSquares] = useState(Array(9).fill(null));
  // State to track whose turn it is
  const [xIsNext, setXIsNext] = useState(true);

  // Function to check for a winner

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return the winner (X or O)
      }
    }
    return null; // No winner found yet. 
  };

  return <div></div>;
};

export default App;
