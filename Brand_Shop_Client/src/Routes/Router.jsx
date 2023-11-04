import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct";
import SpecificBrandCars from "../Pages/SpecificBrandCars";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CarDetails from "../Pages/CarDetails";
import UpdateCar from "../Pages/UpdateCar";
import SignUpOrSignIn from "../Pages/SignUpOrSignIn";
import MyCart from "../Pages/MyCart";
import ErrorPage from "../Pages/ErrorPage";
import AllCars from "../Components/AllCars";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add_product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cars/:brand",
        element: <SpecificBrandCars />,
        // loader: ({ params }) =>
        //   fetch(`https://brand-shop-server-lime.vercel.app/cars/${params.brand}`),
      },
      {
        path: "/car/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-lime.vercel.app/car/${params.id}`),
      },
      {
        path: "/car/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-lime.vercel.app/car/${params.id}`),
      },
      {
        path: "/signUp_or_signIn",
        element: <SignUpOrSignIn />,
      },
      {
        path: "/my_cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/cars",
        element: <AllCars />,
        loader: () => fetch("https://brand-shop-server-lime.vercel.app/cars"),
      },
    ],
  },
]);

export default Router;
