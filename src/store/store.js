import { combineReducers, configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalSlice.js";
import gameReducer from "./gameSlice.js";

const reducer = combineReducers({
  modal: modalReducer,
  game: gameReducer,
});

export default configureStore({
  reducer,
  devTools: true,
});
