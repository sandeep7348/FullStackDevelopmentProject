import { RouterProvider } from "react-router"
import {routes} from "./routes"
import "./style.scss"

function App() {
  

  return(
    <RouterProvider router={routes}/>
  )
}

export default App
