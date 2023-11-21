import { describe, expect, test } from "vitest";
import { createGameBoard } from "../utils/gameBoard";

describe("When I call the createGrid function", () => {
  const gameBoard = createGameBoard();
  test("I get an array of length 9", () => {
    expect(gameBoard).toHaveLength(9);
  });

  test("I get an array of empty strings", () => {
    gameBoard.forEach((el) => expect(el).toBe(""));
  });
});
