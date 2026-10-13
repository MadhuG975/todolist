import React from "react";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";
import { useTodos } from "../../context/TodoContext";
import { STATUS_OPTIONS } from "../../constants/roles";

export default function TodoCard({ todo, onEdit }) {
  const { isAdmin } = useAuth();
  const { deleteTodo, updateStatus } = useTodos();

  return (
    <div className="todo-card">
      <div>
        <h4 className="todo-title">{todo.title}</h4>
        <p className="todo-desc">{todo.description || "No description provided."}</p>
      </div>

      <div className="todo-footer">
        {/* Status Dropdown: Enabled for BOTH Admin and User */}
        <select
          className={`status-select ${todo.status}`}
          value={todo.status}
          onChange={(e) => updateStatus(todo.id, e.target.value)}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* RBAC Action Enforcement */}
        <div className="card-actions">
          {isAdmin ? (
            <>
              <Button variant="ghost" onClick={() => onEdit(todo)}>Edit</Button>
              <Button variant="ghost" onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </>
          ) : (
            <span className="read-only-badge">🔒 Read-Only</span>
          )}
        </div>
      </div>
    </div>
  );
}