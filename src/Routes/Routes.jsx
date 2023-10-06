import {createBrowserRouter} from "react-router-dom"
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import Privateroute from "./Privateroute/Privateroute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('/news.json')
        },
        {
            path:'/news/:id',
            element:<Privateroute><News></News></Privateroute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;