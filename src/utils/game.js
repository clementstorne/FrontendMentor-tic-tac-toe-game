const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createGameBoard = () => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push("");
  }
  return arr;
};

const findEmptyCells = (gameBoard) => {
  const emptyCells = [];

  gameBoard.forEach((cell, index) => {
    if (cell === "") {
      emptyCells.push(index);
    }
  });

  return emptyCells;
};

const isGameBoardFull = (gameBoard) => {
  if (!gameBoard.includes("")) {
    return true;
  } else {
    return false;
  }
};

const updateBoard = (gameBoard, index, mark) => {
  if (gameBoard[index] !== "") {
    throw new Error(`Cell at index ${index} is already taken by '${mark}'`);
  } else {
    gameBoard.splice(index, 1, mark);
    return gameBoard;
  }
};

const hasSomeoneWon = (gameBoard) => {
  for (const combo of WINNING_COMBOS) {
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

const whoWon = (gameBoard) => {
  if (hasSomeoneWon(gameBoard)) {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }
  }
};

const isItATie = (gameBoard) => {
  if (isGameBoardFull(gameBoard) && !hasSomeoneWon(gameBoard)) {
    return true;
  } else {
    return false;
  }
};

export {
  createGameBoard,
  findEmptyCells,
  isGameBoardFull,
  updateBoard,
  hasSomeoneWon,
  whoWon,
  isItATie,
};
