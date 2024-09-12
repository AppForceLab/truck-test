import { createBrowserRouter } from "react-router-dom";
import Home from "../features/Home/Home";
import Error from "../ui/Error/Error";
import AppLayout from "../ui/AppLayout/AppLayout";
import Catalog from "../features/Catalog/Catalog";

const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
  
      children: [
        {
          path: '/',
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: '/Catalog',
          element: <Catalog />,
          errorElement: <Error />,
        }
      ],
    },
  ]);

export default router;