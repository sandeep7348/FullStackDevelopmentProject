import { RouterProvider } from "react-router";
import { routes } from "./routes";
import "./style.scss";

import { AuthProvider } from "./feature/auth/auth.context";
import { PostProvider } from "./feature/post/post.context";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;