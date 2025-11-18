import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


import Root from "./Routes/Root"
import ErrorPage from "./error-page";
import About from "./Components/About.jsx";
import Users from "./Components/Users.jsx";
import IndUser from "./Components/IndUser.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
     errorElement: <ErrorPage />,
     
  },


  {
    path: "/home",
     element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },

  {
    path: "/users",
    element: <Users />,
    errorElement: <ErrorPage />,
//     children: [{
//     path: "id",
//     element: <IndUser/>,
//   },
// ],
  },
  {
    path: "/users/:id",
    element: <IndUser />,
    errorElement: <ErrorPage />
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
