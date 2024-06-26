import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Glace from "./pages/Glace.jsx";
import OldClient from "./components/navbar/login/OldClient.jsx";
import Favorite from "./pages/Favorite.jsx";
import Decouverte from "./pages/Decouverte.jsx";
import Bag from "./pages/Bag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/glace",
        element: <Glace />,
      },
      {
        path: "/decouverte",
        element: <Decouverte />,
      },
      {
        path: "/oldclient",
        element: <OldClient />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
