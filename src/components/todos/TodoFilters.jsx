import React from "react";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";

export default function TodoFilters({ search, onSearchChange, activeFilter, onFilterChange, onOpenCreate }) {
  const { isAdmin } = useAuth();
  const filters = ["ALL", "PENDING", "IN_PROGRESS", "COMPLETED"];

  return (
    <div className="todo-toolbar">
      <input
        type="text"
        className="search-input"
        placeholder="Filter by title..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className="filter-pills">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-pill ${activeFilter === f ? "active" : ""}`}
            onClick={() => onFilterChange(f)}
          >
            {f.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Admin-only Add Task Trigger */}
      {isAdmin && (
        <Button variant="primary" onClick={onOpenCreate}>
          + Add Task
        </Button>
      )}
    </div>
  );
}