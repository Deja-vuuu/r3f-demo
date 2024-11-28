import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/home"
import Light from "./pages/light"
import Shadow from "./pages/shadow"
import Hooks from "./pages/hooks"

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
  //   {
  //     path: "about",
  //     element: <div>About</div>,
  //   },
])

export default router
