import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalSlice.js";

const reducer = {
  modal: modalReducer,
};

export default configureStore({
  reducer,
  devTools: true,
});
