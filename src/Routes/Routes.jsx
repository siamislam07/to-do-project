import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:'',
        children: [
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register'
            },
            {
                path:'/addTask'
            }

        ]
    },
]);

export default router