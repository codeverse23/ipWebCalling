
import './App.css';
import { RouterProvider } from "react-router-dom";
import MainRouter from './components/Router/MainRouter';
import router from "./components/Router/MainRouter";

function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;


