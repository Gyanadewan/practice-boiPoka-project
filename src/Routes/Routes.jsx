import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";

import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
    {
        index:true,
        loader:()=> fetch("booksData.json"),
        path:"/",
        Component: Home
    }
  ]
    
  },
 
]);
