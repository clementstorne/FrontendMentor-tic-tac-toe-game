import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const endOfRoundModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEndOfRoundModal: (state) => {
      state.isOpen = true;
    },
    closeEndOfRoundModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openEndOfRoundModal, closeEndOfRoundModal } =
  endOfRoundModalSlice.actions;
export default endOfRoundModalSlice.reducer;
