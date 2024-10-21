import "./App.css";
import { RouterProvider } from "react-router-dom";
import PagesIndex from "./components/Pages/PagesIndex";
import router from "./components/Router/MainRouter";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PagesIndex.ToastContainer />
    </>
  );
}

export default App;
