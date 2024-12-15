import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout.tsx"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Login from "./pages/auth/Login.tsx"
import Signup from "./pages/auth/Signup.tsx"
import CartPage from "./pages/CartPage.tsx"

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
        },
        {
          path: "/cart",
          element: <CartPage/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/sign-up",
      element: <Signup/>
    }
  ])



  return ( <RouterProvider router={router} />)
}

export default App
