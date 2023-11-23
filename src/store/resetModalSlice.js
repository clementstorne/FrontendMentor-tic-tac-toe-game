import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const resetModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openResetModal: (state) => {
      state.isOpen = true;
    },
    closeResetModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openResetModal, closeResetModal } = resetModalSlice.actions;
export default resetModalSlice.reducer;
