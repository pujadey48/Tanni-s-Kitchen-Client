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
import { getUrl } from "../../Util/Util";
import MyReviews from "../../pages/Review/MyReviews";

const servicesAndReviewsLoader = async (id) => {
    const serviceResponse = await fetch(getUrl(`/services/${id}`));
    const service = await serviceResponse.json();
    const reviewsResponse = await fetch(getUrl(`/reviewsForService/${id}`));
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
        loader: () => fetch( getUrl(`/threeservices`)),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(getUrl(`/services`)),
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
      },
      {
        path: "myReviews",
        element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/reviews?uid=${params.id}`)
      }
    ],
  },
]);
