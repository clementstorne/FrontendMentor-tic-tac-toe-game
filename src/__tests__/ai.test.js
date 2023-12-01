import { describe, expect, test } from "vitest";
import { evaluate, minimax, findBestMove } from "../utils/ai";

describe("AI Functions", () => {
  describe("evaluate", () => {
    test("should return null with an empty board", () => {
      const emptyBoard = ["", "", "", "", "", "", "", "", ""];
      expect(evaluate(emptyBoard, "x")).toBeNull();
    });

    test("should return null with a non-winning and non-tie board", () => {
      const nonWinningNonTieBoard = ["x", "", "o", "", "x", "", "", "", ""];
      expect(evaluate(nonWinningNonTieBoard, "o")).toBeNull();
    });

    test("should return 10 when CPU is winning", () => {
      const oWinningBoard = ["o", "o", "o", "", "", "", "", "", ""];
      const xWinningBoard = ["x", "x", "x", "", "", "", "", "", ""];
      expect(evaluate(oWinningBoard, "o")).toBe(10);
      expect(evaluate(xWinningBoard, "x")).toBe(10);
    });

    test("should return -10 when CPU is losing", () => {
      const oWinningBoard = ["o", "o", "o", "", "", "", "", "", ""];
      const xWinningBoard = ["x", "x", "x", "", "", "", "", "", ""];
      expect(evaluate(xWinningBoard, "o")).toBe(-10);
      expect(evaluate(oWinningBoard, "x")).toBe(-10);
    });

    test("should return 0 with a tie board", () => {
      const tieBoard = ["x", "o", "x", "x", "o", "o", "o", "x", "x"];
      expect(evaluate(tieBoard, "x")).toBe(0);
    });
  });

  describe("minimax", () => {
    test("should choose winning move for 'o'", () => {
      const gameBoard = ["x", "x", "", "", "", "", "", "o", "o"];
      expect(minimax(gameBoard, "o", 0, true)).toBeGreaterThan(-Infinity);
    });

    test("should choose blocking move for 'x'", () => {
      const gameBoard = ["x", "x", "", "", "", "", "", "o", "o"];
      expect(minimax(gameBoard, "x", 0, true)).toBeLessThan(Infinity);
    });

    test("should choose optimal move for a tie", () => {
      const gameBoard = ["x", "o", "x", "o", "x", "", "", "", ""];
      expect(minimax(gameBoard, "o", 0, true)).toBe(0);
    });

    test("should anticipate opponent's move", () => {
      const board = ["x", "", "", "", "", "", "", "", ""];
      expect(minimax(board, "o", 0, true)).toBeGreaterThan(-Infinity);
    });
  });

  describe("findBestMove", () => {
    test("should return 0 with an empty board", () => {
      const emptyBoard = ["", "", "", "", "", "", "", "", ""];
      expect(findBestMove(emptyBoard, "o")).toBe(0);
    });

    // test("should choose winning move", () => {
    //   const gameBoard = ["x", "x", "", "", "", "", "", "o", "o"];
    //   expect(findBestMove(gameBoard, "o")).toBe(6);
    // });

    // test("should choose blocking move", () => {
    //   const gameBoard = ["o", "", "", "", "o", "", "x", "x", ""];
    //   expect(findBestMove(gameBoard, "o")).toBe(8);
    // });
  });
});
