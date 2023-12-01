import { hasSomeoneWon, whoWon, isItATie, findEmptyCells } from "./game";

const evaluate = (gameBoard, aiMark) => {
  if (hasSomeoneWon(gameBoard)) {
    if (whoWon(gameBoard) === aiMark) {
      return 10;
    } else {
      return -10;
    }
  } else if (isItATie(gameBoard)) {
    return 0;
  }
  return null;
};

const minimax = (gameBoard, aiMark, depth, isMaximizing) => {
  const score = evaluate(gameBoard, aiMark);
  const playerMark = aiMark === "x" ? "o" : "x";

  if (score !== null) {
    return score;
  }

  let bestScore = isMaximizing ? -Infinity : Infinity;
  const leftMoves = findEmptyCells(gameBoard);

  leftMoves.forEach((move) => {
    const newBoard = [...gameBoard];
    newBoard[move] = isMaximizing ? aiMark : playerMark;
    const currentScore = minimax(newBoard, aiMark, depth + 1, !isMaximizing);
    bestScore = isMaximizing
      ? Math.max(currentScore, bestScore)
      : Math.min(currentScore, bestScore);
  });

  return bestScore;
};

const findBestMove = (gameBoard, aiMark) => {
  let bestScore = -Infinity;
  let bestMove = null;

  const leftMoves = findEmptyCells(gameBoard);

  leftMoves.forEach((move) => {
    const newBoard = [...gameBoard];
    newBoard[move] = aiMark;
    const score = minimax(newBoard, aiMark, 0, false);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  });
  return bestMove;
};

export { evaluate, minimax, findBestMove };
