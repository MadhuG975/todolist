import React from "react";
import TodoCard from "./TodoCard";

export default function TodoGrid({ todos, onEdit }) {
  if (todos.length === 0) {
    return <div className="empty-state">No matching tasks found.</div>;
  }

  return (
    <div className="todo-grid">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onEdit={onEdit} />
      ))}
    </div>
  );
}