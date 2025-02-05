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
        return squares[a];
      }
    }
    return null;
  };

  // Handle Square clicks

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;

    // Create a copy of the squares array
    const newSquares = squares.slice();
    // Mark the square with X or O
    newSquares[i] = xIsNext ? "X" : "O";
    // Update the state
    setSquares(newSquares);
    // Toggle the turn
    setXIsNext(!xIsNext);
  };
  // Reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Calculate game status

  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        {/* Game Status */}
        <div className="text-2xl font-bold text-gray-800 mb-5">{status}</div>
        {/* Game Board */}
        <div className="grid grid-cols-3 gap-1.5 w-[300px] mx-auto mb-5">
          {squares.map((square, index) => (
            <button
              key={index}
              className="w-20 h-20 bg-white border-2 border-gray-600 text-2xl font-bold flex items-center justify-center hover:bg-gray-100 focus:outline-none"
              onClick={() => handleClick(index)}
            >
              {square}
            </button>
          ))}
        </div>
        {/* Reset Button */}

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200 font-medium"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default App;
