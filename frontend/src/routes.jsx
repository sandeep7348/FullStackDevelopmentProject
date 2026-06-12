import { createBrowserRouter } from "react-router-dom";
import { Login } from "./feature/auth/pages/Login";
import { Register } from "./feature/auth/pages/Register";
import { Home } from "./Home";
import { Feed } from "./feature/post/pages/feed";
import FeedUpdate from "./feature/post/pages/feedUpload"
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

  },{
    path:"/feed",
    element:<Feed/>
  },{
    path:"/post/update",
    element:<FeedUpdate/>
  }
]);