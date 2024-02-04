import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Balance from "../pages/Balance/Balance";





  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
         path:'/',
         element:<Home></Home> 
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/balance',
        element:<Balance></Balance>
        }
      ]
    },
  ]);
  export default Router;