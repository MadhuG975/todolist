import React from "react";

export default function Button({ children, variant = "primary", onClick, type = "button", className = "" }) {
  const styles = {
    primary: { background: "var(--primary-accent)", color: "#fff", border: "none" },
    danger: { background: "var(--danger-accent)", color: "#fff", border: "none" },
    secondary: { background: "transparent", color: "var(--text-muted)", border: "1px solid var(--border-color)" },
    ghost: { background: "transparent", color: "var(--text-muted)", border: "none" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        fontWeight: "600",
        fontSize: "0.875rem",
        cursor: "pointer",
        ...styles[variant],
      }}
      className={className}
    >
      {children}
    </button>
  );
}