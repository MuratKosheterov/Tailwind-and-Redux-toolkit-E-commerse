import { createSlice } from "@reduxjs/toolkit";

const openModal = createSlice({
  name: "openCloseCheckout",
  initialState: { openChekout: false },
  reducers: {
    addCheckout: (state, action) => {
      state.openChekout = !state.openChekout;
    },
  },
});

export const { addCheckout } = openModal.actions;
export default openModal.reducer;
