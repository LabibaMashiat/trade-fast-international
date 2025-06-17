import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Products from "../pages/Products/Products/Products";
import Gallery from "../pages/Gallery/Gallery/Gallery";
import Contact from "../pages/Contact/Contact/Contact";
import TrueFashionBd from "../pages/TrueFashionBd/TrueFashionBd/TrueFashionBd";
import ProductsTFB from "../pages/TrueFashionBd/ProductsTFB/ProductsTFB/ProductsTFB";
import GalleryTFB from "../pages/TrueFashionBd/GalleryTFB/GalleryTFB/GalleryTFB";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/truefashionbd",
        element: <TrueFashionBd />,
        children: [
          {
            path: "products", // relative path, resolves to /truefashionbd/products
            element: <ProductsTFB />,
          },
          {
            path: "gallery", // relative path, resolves to /truefashionbd/gallery
            element: <GalleryTFB />,
          },
        ],
      },
    ],
  },
]);
