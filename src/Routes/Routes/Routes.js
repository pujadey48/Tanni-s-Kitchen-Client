import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Blogs from "../../pages/Blogs/Blogs";
import Login from "../../pages/Login/Login/Login";
import Signup from "../../pages/Login/Signup/Signup";
import Services from "../../pages/Services/Services";
import ServiceDetails from "../../pages/Services/ServiceDetails";

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
        loader: ({params}) => {
          const services = fetch(`http://localhost:5000/services/${params.id}`);
          const reviews = fetch(`http://localhost:5000/reviewsForService/${params.id}`);

          console.log(services);          
          console.log(reviews);

          return {services, reviews};
        },
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
    ],
  },
]);
