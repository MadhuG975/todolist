import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import QuickLoginButtons from "./QuickLoginButtons";
import "../../assets/styles/auth.css";

export default function AuthCard() {
  const [tab, setTab] = useState("login");

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-header">
          <h1>TaskFlow RBAC</h1>
          <p>Role-governed task management platform</p>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab-btn ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            Sign In
          </button>
          <button
            className={`auth-tab-btn ${tab === "signup" ? "active" : ""}`}
            onClick={() => setTab("signup")}
          >
            Register
          </button>
        </div>

        {tab === "login" ? <LoginForm /> : <SignUpForm />}

        <QuickLoginButtons />
      </div>
    </div>
  );
}