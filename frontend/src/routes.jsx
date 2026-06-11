import { createBrowserRouter } from "react-router-dom";
import { Login } from "./feature/auth/pages/Login";
import { Register } from "./feature/auth/pages/Register";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);