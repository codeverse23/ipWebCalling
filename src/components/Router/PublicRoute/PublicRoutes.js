// src/routes/PublicRoute/PublicRoute.route.js
import ForgotPassword from "../../Pages/Admin/Auth/SendOtp";
import Login from "../../Pages/Admin/Auth/Login";
import ResetPassword from "../../Pages/Admin/Auth/ResetPassword";
import SignUp from "../../Pages/Admin/Auth/SignUp";

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>,
  },
];

export default publicRoutes;
