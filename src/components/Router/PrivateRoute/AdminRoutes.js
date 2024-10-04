// src/routes/index.jsx
import PagesIndex from "../../Pages/PagesIndex";
import Dashbord from "../../Pages/Admin/Dashboard/Dashbord";
import ChangePassword from "../../Pages/Admin/ChangePassword/ChangePassword";
import ProfileUpdate from "../../Pages/Admin/Profile/ProfileUpdate";
import PrivateRoute from "./PrivateRoute";


const adminRoutes = [
  {
    path: "/",
    element: <PagesIndex.Main_Content />, 
    children: [
      {
        path: "/",
        element: <PrivateRoute element={Dashbord} />, 
      },
      {
        path: "/changepassword",
        element: <PrivateRoute element={ChangePassword} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={ProfileUpdate} />,
      },
    ],
  },
];


export default adminRoutes;
