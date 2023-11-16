import { describe, expect, test, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NewGame from "../pages/NewGame";

beforeEach(() => {
  render(<NewGame />);
});

describe("When I am on the NewGame Page", () => {
  test("the NewGame Page renders correctly", () => {
    const title = screen.getByText("Pick player 1’s mark");
    const subtitle = screen.getByText("REMEMBER : X GOES FIRST");
    const firstButton = screen.getByText("New game (vs CPU)");
    const secondButton = screen.getByText("New game (vs player)");
    const gameLogo = screen.getByAltText("Game Logo");
    const xMarkNotSelected = screen.getByAltText("X mark is not selected");
    const oMarkSelected = screen.getByAltText("O mark is selected");

    expect(title).toBeDefined();
    expect(subtitle).toBeDefined();
    expect(firstButton).toBeDefined();
    expect(secondButton).toBeDefined();
    expect(gameLogo).toBeDefined();
    expect(xMarkNotSelected).toBeDefined();
    expect(oMarkSelected).toBeDefined();
  });
  describe("and I click on the mark selector", () => {
    test("player's mark is toggled", () => {
      const oMarkSelected = screen.getByAltText("O mark is selected");
      const xMarkNotSelected = screen.getByAltText("X mark is not selected");

      expect(oMarkSelected).toBeDefined();
      expect(xMarkNotSelected).toBeDefined();

      fireEvent.click(oMarkSelected.parentElement);

      const oMarkNotSelected = screen.getByAltText("O mark is not selected");
      const xMarkSelected = screen.getByAltText("X mark is selected");
      expect(oMarkNotSelected).toBeDefined();
      expect(xMarkSelected).toBeDefined();
    });
  });
});
