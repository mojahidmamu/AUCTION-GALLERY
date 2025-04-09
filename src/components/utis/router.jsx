import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Details from "../Details/Details";
import Auctions from "../Auctions/Auctions";
import Categories from "../Categories/Categories";

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
          path: "/details",
          element: <Details></Details>
        },
        {
          path: "/auctions",
          element: <Auctions></Auctions>
        },
        {
          path: "/categories",
          element: <Categories></Categories>
        }
    ]
  },
]);

export default router;
