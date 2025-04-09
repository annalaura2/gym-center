import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Error404, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

export { router };
