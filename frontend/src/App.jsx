import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])



  return ( <RouterProvider router={router} />)
}

export default App
