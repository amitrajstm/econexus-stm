import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { isUser } from "./roles";

export default function RequireUser({ children }) {
  const { user } = useAuth();

  if (!user || !isUser(user)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
