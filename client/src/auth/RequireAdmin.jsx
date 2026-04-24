import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { isAdmin } from "./roles";

export default function RequireAdmin({ children }) {
  const { user } = useAuth();

  if (!user || !isAdmin(user)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
