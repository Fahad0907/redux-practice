import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "Learn Python",
    description: "i will learn python within 4 days",
  },
  {
    id: 2,
    title: "Learn JavaScript",
    description: "i will learn javascript within 5 days",
  },
];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, description) => {
        const id = nanoid();
        return { payload: { id, title, description } };
      },
    },
  },
});
export const { addTodo } = todoSlice.actions;
