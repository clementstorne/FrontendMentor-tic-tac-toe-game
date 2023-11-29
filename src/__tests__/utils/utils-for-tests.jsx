/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import resetModalReducer from "../../store/resetModalSlice.js";
import endOfRoundModalReducer from "../../store/endOfRoundModalSlice.js";
import gameReducer from "../../store/gameSlice.js";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        resetModal: resetModalReducer,
        endOfRoundModal: endOfRoundModalReducer,
        game: gameReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
