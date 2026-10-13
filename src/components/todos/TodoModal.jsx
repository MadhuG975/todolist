import React, { useState, useEffect } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import { useTodos } from "../../context/TodoContext";

export default function TodoModal({ isOpen, onClose, editingTodo }) {
  const { addTodo, updateTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDesc(editingTodo.description || "");
    } else {
      setTitle("");
      setDesc("");
    }
  }, [editingTodo, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, title, desc);
    } else {
      addTodo(title, desc);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={editingTodo ? "Edit Task" : "Create Task"}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Run migration script"
          required
        />
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-textarea"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Additional requirements or context..."
          />
        </div>
        <div className="modal-footer">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" type="submit">
            {editingTodo ? "Save Changes" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}