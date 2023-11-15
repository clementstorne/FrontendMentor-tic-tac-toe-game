import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NewGame from "./NewGame";

describe("When I am on the NewGame Page,", () => {
  test("the NewGame Page renders correctly", () => {
    render(<NewGame />);

    const title = screen.getByText("Pick player 1’s mark");
    const subtitle = screen.getByText("REMEMBER : X GOES FIRST");
    const firstButton = screen.getByText("New game (vs CPU)");
    const secondButton = screen.getByText("New game (vs player)");
    const gameLogo = screen.getByAltText("Game Logo");
    const xMarkNotSelected = screen.getByAltText("X mark is not selected");
    const xMarkSelected = screen.getByAltText("X mark is selected");
    const oMarkNotSelected = screen.getByAltText("O mark is not selected");
    const oMarkSelected = screen.getByAltText("O mark is selected");

    expect(title).toBeDefined();
    expect(subtitle).toBeDefined();
    expect(firstButton).toBeDefined();
    expect(secondButton).toBeDefined();
    expect(gameLogo).toBeDefined();
    expect(xMarkNotSelected).toBeDefined();
    expect(xMarkSelected).toBeDefined();
    expect(oMarkNotSelected).toBeDefined();
    expect(oMarkSelected).toBeDefined();
  });

  test("toggles player mark on click", () => {
    render(<NewGame />);

    const xMarkSelected = screen.getByAltText("X mark is selected");
    expect(xMarkSelected).toBeInTheDocument();

    fireEvent.click(xMarkSelected.parentElement);

    const oMarkSelected = screen.getByAltText("O mark is selected");
    expect(oMarkSelected).toBeInTheDocument();
  });
});
