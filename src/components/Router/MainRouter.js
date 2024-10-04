import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoute/PublicRoutes";
import adminRoutes from "./PrivateRoute/AdminRoutes";
import PageNotFound from "../Pages/PageNotFound";


const router = createBrowserRouter([
  ...publicRoutes,
  ...adminRoutes,
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

