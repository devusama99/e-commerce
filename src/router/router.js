import Authentication from "../views/Authentication";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import AppTemplate from "../views/AppTemplate";
import Dashboard from "../views/Dashboard";
import Cart from "../views/Cart";
import Success from "../views/Sucess";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
    children: [
      {
        path: "",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppTemplate />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);
