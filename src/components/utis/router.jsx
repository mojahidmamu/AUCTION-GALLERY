import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Services from "../Services/Services";

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
            path: "/services",
            element: <Services></Services>
        }
    ]
  },
]);

export default router;
