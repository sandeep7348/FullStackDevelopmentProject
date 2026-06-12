import { createBrowserRouter } from "react-router-dom";
import { Login } from "./feature/auth/pages/Login";
import { Register } from "./feature/auth/pages/Register";
import { Home } from "./Home";
export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/",
    element:<Home/>

  }
]);