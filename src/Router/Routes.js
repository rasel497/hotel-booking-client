import { createBrowserRouter } from "react-router-dom";
import About from "../componant/About/About";
import Home from "../componant/Home/Home/Home";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([{

    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/about',
            element: <About></About>
        }
    ]
}])