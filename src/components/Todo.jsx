import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Redux/TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
const Todo = () => {
  const todoList = useSelector((state) => state.todo);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title, description));
    setTitle("");
    setDescription("");
  };

  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" />
      </form>
      <br />
      {todoList.map((item, i) => (
        <>
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default Todo;
