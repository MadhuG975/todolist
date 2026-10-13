import React from "react";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../constants/roles";

export default function QuickLoginButtons() {
  const { login } = useAuth();

  return (
    <div>
      <div className="quick-login-divider">
        <span>Or instant test login</span>
      </div>
      <div className="quick-btn-grid">
        <Button
          variant="secondary"
          onClick={() => login("admin@platform.io", ROLES.ADMIN)}
        >
          ⚡ Admin
        </Button>
        <Button
          variant="secondary"
          onClick={() => login("user@platform.io", ROLES.USER)}
        >
          👤 User
        </Button>
      </div>
    </div>
  );
}