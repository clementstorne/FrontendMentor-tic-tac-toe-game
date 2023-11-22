import { createSlice } from "@reduxjs/toolkit";
import { createGameBoard } from "../utils/gameBoard";
import { updateBoard } from "../utils/game";

const initialState = {
  gameBoard: createGameBoard(),
  scores: {
    x: 0,
    o: 0,
    ties: 0,
  },
  turn: "x",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGameBoard: (state, action) => {
      state.gameBoard = [
        ...updateBoard(state.gameBoard, action.payload, state.turn),
      ];
      state.turn = state.turn === "x" ? "o" : "x";
    },
    clearBoard: (state) => {
      state.gameBoard = createGameBoard();
    },
  },
});

export const { updateGameBoard, clearBoard } = gameSlice.actions;
export default gameSlice.reducer;
