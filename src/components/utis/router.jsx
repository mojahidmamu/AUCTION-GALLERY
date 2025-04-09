import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Details from "../Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/service",
            element: <Services></Services>
        },
        {
          path: "/details",
          element: <Details></Details>
        }
    ]
  },
]);

export default router;
