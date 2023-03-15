import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterSlice";
import { todoSlice } from "./TodoSlice";
export const store = configureStore({
  reducer: {
    p: CounterSlice.reducer,
    todo: todoSlice.reducer,
  },
});
