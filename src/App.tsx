// src/App.tsx
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../src/components/layout/RootLayout"
import Home from "./pages/Home";
import ChildrenSection from "./pages/ChildrenSection";
import Adult from "./pages/Adult";
import PersonsWithDisabilities from "./pages/PersonswithDisabilities";
import LearnMore from "./pages/LearnMore";
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // ✅ This wraps all pages
    children: [
      { index: true, element: <Home /> },
      { path: "ChildrenSection", element: <ChildrenSection /> },
      { path: "Adult", element: <Adult /> },
      { path: "PersonswithDisabilities", element: <PersonsWithDisabilities /> },
      { path: "LearnMore", element: <LearnMore /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
