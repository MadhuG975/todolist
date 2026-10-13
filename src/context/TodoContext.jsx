import React, { createContext, useContext, useState } from "react";
import { INITIAL_TODOS } from "../constants/mockData";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      status: "PENDING",
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id, title, description) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title, description } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const updateStatus = (id, nextStatus) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: nextStatus } : t))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, updateStatus }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}