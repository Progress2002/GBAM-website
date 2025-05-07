import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
