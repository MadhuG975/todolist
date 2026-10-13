import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { useTodos } from "./context/TodoContext";
import AuthCard from "./components/auth/AuthCard";
import Navbar from "./components/layout/Navbar";
import StatsOverview from "./components/layout/StatsOverview";
import TodoFilters from "./components/todos/TodoFilters";
import TodoGrid from "./components/todos/TodoGrid";
import TodoModal from "./components/todos/TodoModal";

import "./assets/styles/main.css";
import "./assets/styles/dashboard.css";
import "./assets/styles/todo.css";

export default function App() {
  const { user } = useAuth();
  const { todos } = useTodos();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  if (!user) {
    return <AuthCard />;
  }

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filter === "ALL" || todo.status === filter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenCreate = () => {
    setEditingTodo(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <main className="dashboard-content">
        <StatsOverview />
        <TodoFilters
          search={search}
          onSearchChange={setSearch}
          activeFilter={filter}
          onFilterChange={setFilter}
          onOpenCreate={handleOpenCreate}
        />
        <TodoGrid todos={filteredTodos} onEdit={handleOpenEdit} />
      </main>

      <TodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editingTodo={editingTodo}
      />
    </div>
  );
}