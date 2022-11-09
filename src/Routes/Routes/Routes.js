import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Blogs from "../../pages/Blogs/Blogs";
import Login from "../../pages/Login/Login/Login";
import Signup from "../../pages/Login/Signup/Signup";
import Services from "../../pages/Services/Services";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../pages/Services/AddService";

const servicesAndReviewsLoader = async (id) => {
    const serviceResponse = await fetch(`http://localhost:5000/services/${id}`);
    const service = await serviceResponse.json();
    const reviewsResponse = await fetch(`http://localhost:5000/reviewsForService/${id}`);
    const reviews = await reviewsResponse.json();

    console.log("service", service);          
    console.log("reviews",reviews);

    return {service, reviews};
}

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/threeservices`),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => servicesAndReviewsLoader(params.id),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addServices",
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
      }
    ],
  },
]);
