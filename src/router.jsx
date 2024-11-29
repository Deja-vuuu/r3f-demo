import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/home"
import Light from "./pages/light"
import Shadow from "./pages/shadow"
import Hooks from "./pages/hooks"
import Controls from "./pages/controls"
import ThreeModels from "./pages/3DModels"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/light",
    element: <Light />,
  },
  {
    path: "/shadow",
    element: <Shadow />,
  },
  {
    path: "/hooks",
    element: <Hooks />,
  },
  {
    path: "/controls",
    element: <Controls/>,
  },
  {
    path: "/models",
    element: <ThreeModels/>,
  },
])

export default router
