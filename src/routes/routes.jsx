import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home.jsx";
import About from "../Components/About/About.jsx";
import { Blog } from "../Components/Blog/Blog.jsx";
import Page404 from "../Components/Page404/Page404.jsx";
import Layout from "../Components/Layout/Layout.jsx";
import BlogDetails from "../Components/Blog/BolgDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },

      // صفحة تفاصيل المقال
      { path: "blog/:slug", element: <BlogDetails /> },

      // أي مسار غلط
      { path: "*", element: <Page404 /> },
    ],
  },
]);