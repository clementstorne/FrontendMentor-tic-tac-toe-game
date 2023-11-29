import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Game from "../pages/Game";

const mockStore = configureMockStore();

beforeEach(() => {
  render(
    <Provider store={mockStore()}>
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    </Provider>
  );
});

describe("When I am on the Game Page", () => {
  test("it renders the Game Page correctly", () => {
    const gameLogo = screen.getByAltText("Game Logo");
    const resetButton = screen.getByText("Restart");
    const cells = screen.getAllByRole("button");

    expect(gameLogo).toBeDefined();
    expect(resetButton).toBeDefined();
    expect(cells).toHaveLength(9);
  });
});
