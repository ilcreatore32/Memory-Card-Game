import { createSlice } from "@reduxjs/toolkit";

export const RevealsSlice = createSlice({
  name: "reveals",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = RevealsSlice.actions;

export default RevealsSlice.reducer;
