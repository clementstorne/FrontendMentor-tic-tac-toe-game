import { describe, expect, test } from "vitest";
import { createGameBoard } from "../utils/gameBoard";
import {
  updateBoard,
  hasSomeoneWon,
  checkWinner,
  isItATie,
} from "../utils/game";

describe("Tic Tac Toe Game Functions", () => {
  describe("updateBoard", () => {
    test("should update the board with the correct mark", () => {
      const initialBoard = createGameBoard();
      const updatedBoard = [...initialBoard];
      const index = 0;
      const mark = "x";
      updateBoard(updatedBoard, index, mark);
      expect(updatedBoard[[index]]).toBe(mark);
    });

    test("should throw an error if the cell is already taken", () => {
      const updatedBoard = ["o", "", "", "", "", "", "", "", ""];
      const index = 0;
      const mark = "x";
      expect(() => {
        updateBoard(updatedBoard, index, mark);
      }).toThrowError("That cell is already taken");
    });
  });

  describe("hasSomeoneWon", () => {
    test("should return true if there is a winner", () => {
      const winningBoard = ["x", "x", "x", "", "", "", "", "", ""];
      expect(hasSomeoneWon(winningBoard)).toBe(true);
    });

    test("should return false if there is no winner", () => {
      const nonWinningBoard = ["x", "o", "x", "", "", "", "", "", ""];
      expect(hasSomeoneWon(nonWinningBoard)).toBe(false);
    });
  });

  describe("checkWinner", () => {
    test("should return the current player if there is a winner", () => {
      const winningBoard = ["o", "o", "o", "", "", "", "", "", ""];
      expect(checkWinner(winningBoard, "o")).toBe("o");
    });
  });

  describe("isItATie", () => {
    test("should return true if it is a tie", () => {
      const tieBoard = ["x", "o", "x", "x", "o", "o", "o", "x", "x"];
      expect(isItATie(tieBoard)).toBe(true);
    });
  });
});
