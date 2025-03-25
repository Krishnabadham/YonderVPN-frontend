import useUserData from "@/hooks/useUserData";
import { Navigate, Outlet } from "react-router-dom";
 // Import the custom AuthContext

const AdminRoute = () => {
  const { userData } = useUserData();  // Access the user object from context

  // If the user is not an admin, redirect to the home page or any other page you prefer
  if (!userData?.isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;  // If the user is an admin, render the protected routes
};

export default AdminRoute;
