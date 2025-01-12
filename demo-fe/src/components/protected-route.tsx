import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/auth-context";

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminRequired?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminRequired }) => {
  const { token, isAdmin } = useAuth();

  //navigate to login page to an unauthenticated
  if (!token) {
    return <Navigate to="/login" />;
  }

  //navigate to access-denied page if a user try to access the admin page
  if (token && adminRequired && !isAdmin) {
    return <Navigate to="/access-denied" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
