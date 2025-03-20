import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from 'react'

// 懒加载所有页面组件
const Home = lazy(() => import("./pages/home"))
const Light = lazy(() => import("./pages/light"))
const Shadow = lazy(() => import("./pages/shadow"))
const Hooks = lazy(() => import("./pages/hooks"))
const Controls = lazy(() => import("./pages/controls"))
const ThreeModels = lazy(() => import("./pages/models"))
const Textures = lazy(() => import("./pages/textures"))
const Html = lazy(() => import("./pages/html"))
const Text = lazy(() => import("./pages/text"))
const Animation = lazy(() => import("./pages/animations"))
const Physics = lazy(() => import("./pages/physics"))
const Test = lazy(() => import("./pages/test"))

// 加载状态组件
const LoadingFallback = () => (
  <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    color: '#666'
  }}>
    Loading...
  </div>
)

// 包装组件以添加 Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: "/light",
    element: withSuspense(Light),
  },
  {
    path: "/shadow",
    element: withSuspense(Shadow),
  },
  {
    path: "/hooks",
    element: withSuspense(Hooks),
  },
  {
    path: "/controls",
    element: withSuspense(Controls),
  },
  {
    path: "/models",
    element: withSuspense(ThreeModels),
  },
  {
    path: "/textures",
    element: withSuspense(Textures),
  },
  {
    path: "/html",
    element: withSuspense(Html),
  },
  {
    path: "/animations",
    element: withSuspense(Animation),
  },
  {
    path: "/text",
    element: withSuspense(Text),
  },
  {
    path: "/physics",
    element: withSuspense(Physics),
  },
  {
    path: "/test",
    element: withSuspense(Test),
  },
  {
    path: "/",
    element: withSuspense(Home),
  },
])

export default router