import { hasSomeoneWon, whoWon, isItATie, findEmptyCells } from "./game";

const evaluate = (gameBoard, iaMark) => {
  if (hasSomeoneWon(gameBoard)) {
    if (whoWon(gameBoard) === iaMark) {
      return 10;
    } else {
      return -10;
    }
  } else if (isItATie(gameBoard)) {
    return 0;
  }
  return null;
};

const minimax = (gameBoard, iaMark, depth, isMaximizing) => {
  const score = evaluate(gameBoard, iaMark);
  const playerMark = iaMark === "x" ? "o" : "x";

  if (score !== null) {
    return score;
  }

  let bestScore = isMaximizing ? -Infinity : Infinity;
  const leftMoves = findEmptyCells(gameBoard);

  leftMoves.forEach((move) => {
    const newBoard = [...gameBoard];
    newBoard[move] = isMaximizing ? iaMark : playerMark;
    const currentScore = minimax(
      newBoard,
      isMaximizing ? iaMark : playerMark,
      depth + 1,
      !isMaximizing
    );
    bestScore = isMaximizing
      ? Math.max(currentScore, bestScore)
      : Math.min(currentScore, bestScore);
  });

  return bestScore;
};

const findBestMove = (gameBoard, iaMark) => {
  // let bestScore = -Infinity;
  // let bestMove = null;

  // const leftMoves = findEmptyCells(gameBoard);

  // leftMoves.forEach((move) => {
  //   const newBoard = [...gameBoard];
  //   newBoard[move] = iaMark;
  //   const score = minimax(newBoard, iaMark, 0, false);
  //   if (score > bestScore) {
  //     bestScore = score;
  //     bestMove = move;
  //   }
  // });

  // return bestMove;

  const leftMoves = findEmptyCells(gameBoard);
  console.log(leftMoves);
  const randomIndex = Math.floor(Math.random() * leftMoves.length);
  return leftMoves[randomIndex];
};

export { findBestMove };
