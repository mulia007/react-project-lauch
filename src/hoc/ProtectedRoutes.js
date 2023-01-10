import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
      setLoading(false);
    } else {
      setIsLogin(true);
      setLoading(false);
    }
  }, isLogin);

  if (loading) {
    return "loadinggg";
  }

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
