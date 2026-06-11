import { RouterProvider } from "react-router"
import {routes} from "./routes"
import "./style.scss"
import { AuthProvider } from "./feature/auth/auth.context"

function App() {
  

  return(
    <AuthProvider>
    <RouterProvider router={routes}/>
    </AuthProvider>
  )
}

export default App
