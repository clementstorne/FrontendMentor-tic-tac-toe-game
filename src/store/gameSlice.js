import { createSlice } from "@reduxjs/toolkit";
import { createGameBoard } from "../utils/gameBoard";
import { updateBoard, hasSomeoneWon } from "../utils/game";

const initialState = {
  gameBoard: createGameBoard(),
  xScore: 0,
  oScore: 0,
  ties: 0,
  turn: "x",
  isGameActive: true,
  whoStarts: "x",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGameBoard: (state, action) => {
      state.gameBoard = [
        ...updateBoard(state.gameBoard, action.payload, state.turn),
      ];
      const numberOfTurns = state.gameBoard.filter(Boolean).length;
      if (numberOfTurns >= 5) {
        if (hasSomeoneWon(state.gameBoard)) {
          state.turn === "x" ? state.xScore++ : state.oScore++;
          state.whoStarts = state.whoStarts === "x" ? "o" : "x";
          state.isGameActive = false;
        } else if (numberOfTurns === 9) {
          state.ties++;
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
    endOfRound: (state) => {
      state.isGameActive = false;
      state.whoStarts = state.whoStarts === "x" ? "o" : "x";
      state.gameBoard = createGameBoard();
    },
    newRound: (state) => {
      state.gameBoard = createGameBoard();
      state.turn = state.whoStarts;
      state.isGameActive = true;
    },
  },
});

export const { updateGameBoard, clearBoard, endOfRound, newRound } =
  gameSlice.actions;
export default gameSlice.reducer;
