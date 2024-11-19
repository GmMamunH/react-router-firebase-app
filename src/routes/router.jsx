import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import { loadData, loadSingleData } from "../utils/utils";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Reset from "../pages/Reset";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "users",
        element: (
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        ),
        loader: loadData,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: ({ params }) => loadSingleData(params.userId),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
