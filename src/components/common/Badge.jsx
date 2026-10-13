import React from "react";
import { ROLES } from "../../constants/roles";

export default function Badge({ role }) {
  const isAdmin = role === ROLES.ADMIN;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.2rem 0.6rem",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        fontWeight: "700",
        letterSpacing: "0.05em",
        backgroundColor: isAdmin ? "rgba(99, 102, 241, 0.15)" : "rgba(13, 148, 136, 0.15)",
        color: isAdmin ? "#818cf8" : "#2dd4bf",
        border: `1px solid ${isAdmin ? "rgba(99, 102, 241, 0.3)" : "rgba(13, 148, 136, 0.3)"}`,
      }}
    >
      {role}
    </span>
  );
}