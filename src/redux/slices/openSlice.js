import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
  name: "open and close",
  initialState: { isOpen: false },
  reducers: {
    openClose: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openClose } = openSlice.actions;
export default openSlice.reducer;