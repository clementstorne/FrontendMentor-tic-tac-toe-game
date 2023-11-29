import { describe, expect, test } from "vitest";
import {
  createGameBoard,
  updateBoard,
  hasSomeoneWon,
  whoWon,
  isItATie,
} from "../utils/game";

describe("Tic Tac Toe Game Functions", () => {
  describe("createGameBoard", () => {
    const gameBoard = createGameBoard();
    test("should create an array of length 9", () => {
      expect(gameBoard).toHaveLength(9);
    });

    test("should create an array of empty strings", () => {
      gameBoard.forEach((el) => expect(el).toBe(""));
    });
  });

  describe("updateBoard", () => {
    test("should update the board with the correct mark", () => {
      const initialBoard = createGameBoard();
      const index = 0;
      const mark = "x";
      const updatedBoard = updateBoard(initialBoard, index, mark);
      expect(updatedBoard[[index]]).toBe(mark);
    });

    test("should throw an error if the cell is already taken", () => {
      const updatedBoard = ["o", "", "", "", "", "", "", "", ""];
      const index = 0;
      const mark = "x";
      expect(() => {
        updateBoard(updatedBoard, index, mark);
      }).toThrowError("Cell at index 0 is already taken by 'x'");
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

    test("should return false if there is a tie", () => {
      const tieBoard = ["x", "o", "x", "x", "o", "o", "o", "x", "x"];
      expect(hasSomeoneWon(tieBoard)).toBe(false);
    });
  });

  describe("checkWinner", () => {
    test("should return the mark of the winner if there is one", () => {
      const winningBoard = ["o", "o", "o", "", "", "", "", "", ""];
      expect(whoWon(winningBoard)).toBe("o");
    });

    test("should throw an error if there is no winner", () => {
      const tieBoard = ["x", "o", "x", "x", "o", "o", "o", "x", "x"];
      expect(() => {
        whoWon(tieBoard);
      }).toThrowError("There is no winner");
    });
  });

  describe("isItATie", () => {
    test("should return true if there is a tie", () => {
      const tieBoard = ["x", "o", "x", "x", "o", "o", "o", "x", "x"];
      expect(isItATie(tieBoard)).toBe(true);
    });

    test("should return false if there is a winner", () => {
      const winningBoard = ["o", "o", "o", "", "", "", "", "", ""];
      expect(isItATie(winningBoard)).toBe(false);
    });
  });
});
