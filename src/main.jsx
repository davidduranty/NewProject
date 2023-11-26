import ReactDOM from "react-dom";
import App from "./App.jsx";
import React from "react";
import "./styles/index.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Glace from "./pages/Glace.jsx";
import OldClient from "./components/navbar/login/OldClient.jsx";
import Favorite from "./pages/Favorite.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/glace" element={<Glace />} />
      <Route path="/oldclient" element={<OldClient />} />
      <Route path="/favorite" element={<Favorite />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
