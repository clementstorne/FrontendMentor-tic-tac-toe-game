const updateBoard = (grid, index, mark) => {
  if (grid[index] !== "") {
    throw new Error("That cell is already taken");
  } else {
    grid.splice(index, 1, mark);
  }
};

const hasSomeoneWon = (gameBoard) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }

  return false;
};

const checkWinner = (gameBoard, currentPlayer) => {
  if (hasSomeoneWon(gameBoard)) {
    return currentPlayer;
  }
};

const isItATie = (gameBoard) => {
  if (!gameBoard.includes("") && !hasSomeoneWon(gameBoard)) {
    return true;
  }
};

export { updateBoard, hasSomeoneWon, checkWinner, isItATie };
