import { Navigate } from "react-router-dom";

// PrivateRoute — token check karo, nahi toh /login bhejo
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Token nahi hai? Login page pe redirect karo
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token hai? Protected page dikhao
  return children;
};

export default PrivateRoute;
