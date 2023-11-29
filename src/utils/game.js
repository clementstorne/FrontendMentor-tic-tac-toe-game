const createGameBoard = () => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push("");
  }
  return arr;
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

const whoWon = (gameBoard) => {
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
      return gameBoard[a];
    }
  }

  throw new Error("There is no winner");
};

const isItATie = (gameBoard) => {
  if (!gameBoard.includes("") && !hasSomeoneWon(gameBoard)) {
    return true;
  } else {
    return false;
  }
};

export { createGameBoard, updateBoard, hasSomeoneWon, whoWon, isItATie };
