import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContex";
// children son rutas dentro de PublicRoute definidas en AppRouter
export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return !user.logged ? children : <Navigate to="/marvel" />;
};
