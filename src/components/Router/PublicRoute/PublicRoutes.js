// src/routes/PublicRoute/PublicRoute.route.js
import Login from "../../Pages/Auth/Login";
import SignUp from "../../Pages/Auth/SignUp";

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
];

export default publicRoutes;
