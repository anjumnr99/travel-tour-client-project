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
import GuideProfile from "../pages/GuideProfile/GuideProfile";
import MakeReview from "../pages/GuideProfile/Review/MakeReview";
import TypePackage from "../pages/Home/TourType/TypePackage";
import AllStory from "../pages/Home/Story/AllStory";
import StoryDetails from "../pages/Home/Story/StoryDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyProfile from "../pages/MyProfile/MyProfile";
import MyWishList from "../pages/MyWishList/MyWishList";


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
        path: 'all-stories/:id',
        element: <StoryDetails></StoryDetails>
      },
      {
        path: 'packages/:type',
        element: <TypePackage></TypePackage>
      },
      {
        path: 'guide-profile/:id',
        element:<GuideProfile></GuideProfile>
      },

      {
        path:'all-packages',
        element:<AllPackages></AllPackages>
      },
      {
        path:'all-stories',
        element:<AllStory></AllStory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'my-profile',
            element: <MyProfile></MyProfile>
          },
          {
            path: 'my-bookings',
            element:<MyBookings></MyBookings>
           
          },
          {
            path: 'my-wishlist',
            element:<MyWishList></MyWishList>
           
          },
        ]
      }
    ]
  }

]);

export default mainRoute;