import Authentication from "../views/Authentication";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
]);
