import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Books from "../Components/Books";
import Book from "../Components/Book";

const router = createBrowserRouter([
    {path:'/',Component:Root,children:[
        {index:true,Component:Home},
        {path:'books',
        loader:()=>fetch("http://localhost:5000/books"),
        Component:Books},
        {path:'book',Component:Book},
    ]},
])
export default router;