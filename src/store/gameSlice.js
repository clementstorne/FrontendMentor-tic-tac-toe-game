import { createSlice } from "@reduxjs/toolkit";
import { createGameBoard } from "../utils/gameBoard";
import { updateBoard, hasSomeoneWon, whoWon } from "../utils/game";

const initialState = {
  gameBoard: createGameBoard(),
  typeOfGame: null,
  player1: {
    mark: null,
    score: 0,
    won: false,
  },
  player2: {
    type: null,
    mark: null,
    score: 0,
    won: false,
  },
  ties: 0,
  turn: "x",
  isGameActive: false,
  whoStarts: "x",
  winner: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame: (state, action) => {
      state.gameBoard = createGameBoard();
      state.isGameActive = true;
      state.typeOfGame = action.payload.typeOfGame;
      state.player1.mark = action.payload.player1Mark;
      state.player2.type =
        action.payload.typeOfGame === "vsCPU" ? "CPU" : "player";
      state.player2.mark = action.payload.player1Mark === "x" ? "o" : "x";
    },
    updateGameBoard: (state, action) => {
      state.gameBoard = [
        ...updateBoard(state.gameBoard, action.payload, state.turn),
      ];
      const numberOfTurns = state.gameBoard.filter(Boolean).length;
      if (numberOfTurns >= 5) {
        if (hasSomeoneWon(state.gameBoard)) {
          state.winner = whoWon(state.gameBoard);
          state.winner === state.player1.mark
            ? state.player1.score++
            : state.player2.score++;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
        } else if (numberOfTurns === 9) {
          state.ties++;
          state.winner = null;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
        } else {
          state.turn = state.turn === "x" ? "o" : "x";
        }
      } else {
        state.turn = state.turn === "x" ? "o" : "x";
      }
    },
    clearBoard: (state) => {
      state.gameBoard = createGameBoard();
    },
    newRound: (state) => {
      state.gameBoard = createGameBoard();
      state.turn = state.whoStarts;
      state.isGameActive = true;
      state.winner = null;
    },
    quitGame: () => initialState,
  },
});

export const {
  newGame,
  updateGameBoard,
  clearBoard,
  endOfRound,
  newRound,
  quitGame,
} = gameSlice.actions;
export default gameSlice.reducer;
