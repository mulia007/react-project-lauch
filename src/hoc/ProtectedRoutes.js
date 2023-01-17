import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoute = (props) => {
  const [login, setLogin] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setLogin(false);
      setIsLoading(false);
    } else {
      setLogin(true);
      setIsLoading(false);
    }
  }, [login]);

  if (isloading) {
    return "...Checking Auth...";
  }
  if (!login) return <Navigate to="/login" />;
  return props.children;
};

export default ProtectedRoute;
