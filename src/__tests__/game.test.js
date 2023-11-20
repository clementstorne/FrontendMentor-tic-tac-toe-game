import { describe, expect, test } from "vitest";
import { createGrid } from "../utils/grid";
import { selectCell } from "../utils/game";

describe("When I select a cell in the grid", () => {
  test("I get an array of length 9", () => {
    const gameGrid = createGrid();
    const index = 0;
    const mark = "x";
    selectCell(gameGrid, index, mark);
    expect(gameGrid[index]).toBe(mark);
  });

  test("if the cell is not empty, I get an error", () => {
    const gameGrid = ["o", "", "", "", "", "", "", "", ""];
    const index = 0;
    const mark = "x";
    expect(() => selectCell(gameGrid, index, mark)).toThrowError(
      "That cell is already taken"
    );
  });
});
