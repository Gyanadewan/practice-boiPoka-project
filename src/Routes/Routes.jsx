import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../Components/ReadList/ReadList";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
    {
        index:true,
        loader:()=> fetch("booksData.json"),
        path:"/home",
        Component: Home
    },
    {
      path: "/about",
      Component: About
    },
    {
      path:"readlist",
     loader:()=> fetch("booksData.json"),
      Component: ReadList
    },
    {
      path: '/bookDetails/:id',
      loader:()=> fetch("/booksData.json"),
      Component: BookDetails
    }
  ]
    
  },
 
]);
