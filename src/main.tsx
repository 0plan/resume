import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Main from "./index.tsx";
import "@/lib/locales";
import Home from "@/pages/Home.tsx";
import Projects from "@/pages/Projects.tsx";
import NotFound from "@/pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <Projects /> },
      { path: "lab", element: <Projects lab /> },
      { path: "lab/:id", element: <Projects lab /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<p role="status">Loading…</p>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>,
);
