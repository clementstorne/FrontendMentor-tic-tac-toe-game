import { combineReducers, configureStore } from "@reduxjs/toolkit";

import resetModalReducer from "./resetModalSlice.js";
import endOfRoundModalReducer from "./endOfRoundModalSlice.js";
import gameReducer from "./gameSlice.js";

const reducer = combineReducers({
  resetModal: resetModalReducer,
  endOfRoundModal: endOfRoundModalReducer,
  game: gameReducer,
});

export default configureStore({
  reducer,
  devTools: true,
});
