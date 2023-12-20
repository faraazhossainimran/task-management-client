import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Login/Login";
import SignUP from "../pages/SignUp/SignUP";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/pricing",
            element: <Pricing></Pricing>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUP></SignUP>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "profile",
          element: <Profile></Profile>
        }
      ]
    }
  ]);
  export default router;