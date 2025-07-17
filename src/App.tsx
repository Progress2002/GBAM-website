import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ChildrenSection from "./pages/ChildrenSection";
import Adult from "./pages/Adult";
import PersonsWithDisabilities from "./pages/PersonswithDisabilities";
import LearnMore from "./pages/LearnMore";
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "*", element: <NotFound /> },
  {path: "/ChildrenSection", element: <ChildrenSection />},
  {path: "/Adult", element: <Adult />},
  {path: "/PersonswithDisabilities", element: <PersonsWithDisabilities />},
  {path: "/LearnMore", element: <LearnMore />},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
