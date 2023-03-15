import { configureStore, createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "check",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, addBy } = CounterSlice.actions;
