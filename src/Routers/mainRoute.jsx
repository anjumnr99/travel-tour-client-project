import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import Community from "../pages/Community/Community";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blogs from "../pages/Blogs/Blogs";
import PackageDetails from "../pages/Home/OurPackages/PackageDetails";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRouter from "./PrivateRouter";
import AllPackages from "../pages/AllPackages/AllPackages";


const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'community',
        element: <Community></Community>
      },
      {
        path: 'contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },

      {
        path: 'package-details/:id',
        element: <PackageDetails></PackageDetails>
      },
      {
        path: 'my-bookings',
        element: <PrivateRouter>
          <MyBookings></MyBookings>
        </PrivateRouter>
      },
      {
        path:'all-packages',
        element:<AllPackages></AllPackages>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
]);

export default mainRoute;