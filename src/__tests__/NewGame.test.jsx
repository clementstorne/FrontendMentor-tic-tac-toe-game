import { describe, expect, test, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import NewGame from "../pages/NewGame";
import { newGame } from "../store/gameSlice";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "./utils/utils-for-tests";

const mockStore = configureMockStore();

beforeEach(() => {
  renderWithProviders(
    <MemoryRouter>
      <NewGame />
    </MemoryRouter>
  );
});

describe("When I am on the NewGame Page", () => {
  test("it renders the NewGame Page correctly", () => {
    expect(screen.queryByAltText("Game Logo")).toBeTruthy();
    expect(screen.queryByText("Pick player 1’s mark")).toBeTruthy();
    expect(screen.queryByAltText("X mark is not selected")).toBeTruthy();
    expect(screen.queryByAltText("O mark is selected")).toBeTruthy();
    expect(screen.queryByText("REMEMBER : X GOES FIRST")).toBeTruthy();
    expect(screen.queryByText("New game (vs CPU)")).toBeTruthy();
    expect(screen.queryByText("New game (vs player)")).toBeTruthy();
  });

  describe("and I click on the mark selector", () => {
    test("it toggles the player's mark", () => {
      const selectedOMark = screen.getByAltText("O mark is selected");
      const notSelectedXMark = screen.getByAltText("X mark is not selected");

      expect(selectedOMark).toBeDefined();
      expect(notSelectedXMark).toBeDefined();

      fireEvent.click(selectedOMark.parentElement);

      const notSelectedOMark = screen.getByAltText("O mark is not selected");
      const selectedXMark = screen.getByAltText("X mark is selected");

      expect(notSelectedOMark).toBeDefined();
      expect(selectedXMark).toBeDefined();
    });
  });

  describe("and I click on the 'New game (vs CPU)' button", () => {
    test("it dispatches the newGame action with the correct parameters", async () => {
      const user = userEvent.setup();
      await user.click(screen.getByText("New game (vs CPU)"));
      // ... votre logique de test ici
    });

    test("it navigates to the correct path", async () => {
      cleanup();

      render(
        <Provider store={mockStore()}>
          <BrowserRouter>
            <NewGame />
          </BrowserRouter>
        </Provider>
      );

      const user = userEvent.setup();
      await user.click(screen.getByText("New game (vs CPU)"));

      const currentPath = window.location.pathname;
      const expectedPath = "/game";

      expect(currentPath).toBe(expectedPath);
    });
  });

  describe("and I click on the 'New game (vs player)' button", () => {
    test("it dispatches the newGame action with the correct parameters", async () => {
      const user = userEvent.setup();
      await user.click(screen.getByText("New game (vs player)"));
      // ... votre logique de test ici
    });

    test("it navigates to the correct path", async () => {
      cleanup();

      render(
        <Provider store={mockStore()}>
          <BrowserRouter>
            <NewGame />
          </BrowserRouter>
        </Provider>
      );

      const user = userEvent.setup();
      await user.click(screen.getByText("New game (vs player)"));

      const currentPath = window.location.pathname;
      const expectedPath = "/game";

      expect(currentPath).toBe(expectedPath);
    });
  });
});
