import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import AddProject from "../pages/AddProject/AddProject";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/contact',element:<Contact></Contact>},
        {path:'/projectDetails',
        element:<ProjectDetails></ProjectDetails>},
        {path:'/about',
        element:<About></About>},
        {path:'/blog',
        element:<Blog></Blog>},
        {path:'/addProject',
        element:<AddProject></AddProject>},
        
    ]
    }
])