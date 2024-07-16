import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomLayout from "@pages/Layout/CustomLayout";
import Error404 from "@pages/Error/Error404";
import Tables from "@pages/Products/Tables";
import Chairs from "@pages/Products/Chairs";
import Sofas from "@pages/Products/Sofas";
import Lamps from "@pages/Products/Lamps";
import NewItems from "@pages/Products/NewItems";
import Profile from "@pages/Profile";
import Home from '@pages/Home'
import Discover from '@pages/Discover'
import Cart from '@pages/Cart'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CustomLayout />,
      errorElement: <Error404 />,
      children: [
        { path: "products/sofas", element: <Sofas /> },
        { path: "products/tables", element: <Tables /> },
        { path: "/products/chairs", element: <Chairs /> },
        { path: "/products/lamps", element: <Lamps /> },
        { path: "/products/newItems", element: <NewItems /> },
        { path: '/profile', element: <Profile />},
        { path: '/home', element: <Home />},
        { path: '/discover', element: <Discover />},
        { path: '/cart', element: <Cart />}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
