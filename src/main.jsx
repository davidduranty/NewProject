import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Glace from "./pages/Glace.jsx";
import OldClient from "./components/navbar/login/OldClient.jsx";
import Favorite from "./pages/Favorite.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />} />
//       <Route path="/glace" element={<Glace />} />
//       <Route path="/oldclient" element={<OldClient />} />
//       <Route path="/favorite" element={<Favorite />} />
//     </Route>
//   )
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/glace",
        element: <Glace />,
      },
      {
        path: "/oldclient",
        element: <OldClient />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
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
