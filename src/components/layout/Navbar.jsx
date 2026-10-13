import React from "react";
import Badge from "../common/Badge";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="brand">
        <h2>Task<span>Flow</span></h2>
      </div>
      <div className="user-profile">
        <span className="user-email">{user.email}</span>
        <Badge role={user.role} />
        <Button variant="ghost" onClick={logout}>Sign Out</Button>
      </div>
    </nav>
  );
}