import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"

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
    },
    {
      path: "/check-out",
      element: <Checkout/>
    }
  ])



  return ( <RouterProvider router={router} />)
}

export default App
