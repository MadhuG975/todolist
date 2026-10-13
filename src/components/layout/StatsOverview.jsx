import React from "react";
import { useTodos } from "../../context/TodoContext";

export default function StatsOverview() {
  const { todos } = useTodos();

  const total = todos.length;
  const inProgress = todos.filter((t) => t.status === "IN_PROGRESS").length;
  const completed = todos.filter((t) => t.status === "COMPLETED").length;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total Assigned</span>
        <span className="stat-count">{total}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">In Progress</span>
        <span className="stat-count">{inProgress}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <span className="stat-count">{completed}</span>
      </div>
    </div>
  );
}