import { describe, expect, test } from "vitest";
import { createGrid } from "../utils/grid";

describe("When I call the createGrid function", () => {
  const grid = createGrid();
  test("I get an array of length 9", () => {
    expect(grid).toHaveLength(9);
  });

  test("I get an array of empty strings", () => {
    grid.forEach((el) => expect(el).toBe(""));
  });
});
