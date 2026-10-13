import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../constants/roles";

export default function SignUpForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(ROLES.USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email Address"
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="Create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="form-group">
        <label>Assigned System Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={ROLES.USER}>User (Status Update Only)</option>
          <option value={ROLES.ADMIN}>Admin (Full Control)</option>
        </select>
      </div>
      <Button type="submit" variant="primary" style={{ width: "100%", marginTop: "0.5rem" }}>
        Create Account
      </Button>
    </form>
  );
}