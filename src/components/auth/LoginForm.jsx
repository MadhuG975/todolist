import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../constants/roles";

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, ROLES.ADMIN); // Defaults to Admin for demo submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email Address"
        type="email"
        placeholder="alex@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="primary" style={{ width: "100%", marginTop: "0.5rem" }}>
        Sign In
      </Button>
    </form>
  );
}