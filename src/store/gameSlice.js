import { createSlice } from "@reduxjs/toolkit";
import { createGameBoard } from "../utils/game";
import { updateBoard, hasSomeoneWon, whoWon } from "../utils/game";
import { findBestMove } from "../utils/ai";

export const initialState = {
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
  numberOfTurns: 0,
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
      if (
        state.player2.type === "CPU" &&
        state.player2.mark === state.whoStarts
      ) {
        state.gameBoard = [
          ...updateBoard(
            state.gameBoard,
            findBestMove(state.gameBoard, state.player2.mark),
            state.player2.mark
          ),
        ];
        state.numberOfTurns++;
        state.turn = state.turn === "x" ? "o" : "x";
      }
    },
    updateGameBoard: (state, action) => {
      state.gameBoard = [
        ...updateBoard(state.gameBoard, action.payload, state.turn),
      ];
      console.log(state.gameBoard);
      state.numberOfTurns++;
      if (state.numberOfTurns >= 5) {
        if (hasSomeoneWon(state.gameBoard)) {
          state.winner = whoWon(state.gameBoard);
          state.winner === state.player1.mark
            ? state.player1.score++
            : state.player2.score++;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
        } else if (state.numberOfTurns === 9) {
          state.ties++;
          state.winner = null;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
        }
      }
      if (state.isGameActive) {
        state.turn = state.turn === "x" ? "o" : "x";
        if (state.player2.type === "CPU") {
          state.gameBoard = [
            ...updateBoard(
              state.gameBoard,
              findBestMove(state.gameBoard, state.player2.mark),
              state.player2.mark
            ),
          ];
          state.numberOfTurns++;
          if (state.numberOfTurns >= 5) {
            if (hasSomeoneWon(state.gameBoard)) {
              state.winner = whoWon(state.gameBoard);
              state.winner === state.player1.mark
                ? state.player1.score++
                : state.player2.score++;
              state.whoStarts = state.whoStarts === "x" ? "o" : "x";
              state.isGameActive = false;
            } else if (state.numberOfTurns === 9) {
              state.ties++;
              state.winner = null;
              state.whoStarts = state.whoStarts === "x" ? "o" : "x";
              state.isGameActive = false;
            }
          }
          state.turn = state.turn === "x" ? "o" : "x";
        }
      }
    },
    iaTurn: (state) => {
      if (state.isGameActive) {
        state.gameBoard = [
          ...updateBoard(
            state.gameBoard,
            findBestMove(state.gameBoard, state.player2.mark),
            state.player2.mark
          ),
        ];
        state.numberOfTurns++;
      }
    },
    endOfTurn: (state) => {
      if (state.isGameActive && state.numberOfTurns >= 5) {
        if (hasSomeoneWon(state.gameBoard)) {
          state.winner = whoWon(state.gameBoard);
          state.winner === state.player1.mark
            ? state.player1.score++
            : state.player2.score++;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
          return;
        } else if (state.numberOfTurns === 9) {
          state.ties++;
          state.winner = null;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
          return;
        }
      }
      state.turn = state.turn === "x" ? "o" : "x";
    },
    clearBoard: (state) => {
      state.gameBoard = createGameBoard();
    },
    newRound: (state) => {
      state.gameBoard = createGameBoard();
      state.turn = state.whoStarts;
      state.numberOfTurns = 0;
      state.isGameActive = true;
      state.winner = null;
      if (
        state.player2.type === "CPU" &&
        state.player2.mark === state.whoStarts
      ) {
        state.gameBoard = [
          ...updateBoard(
            state.gameBoard,
            findBestMove(state.gameBoard, state.player2.mark),
            state.player2.mark
          ),
        ];
        state.numberOfTurns++;
        state.turn = state.player1.mark;
      }
    },
    quitGame: () => initialState,
  },
});

export const {
  newGame,
  updateGameBoard,
  iaTurn,
  endOfTurn,
  clearBoard,
  newRound,
  quitGame,
} = gameSlice.actions;
export default gameSlice.reducer;
