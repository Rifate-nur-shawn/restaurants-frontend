import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import Offers from "./pages/Offers";
import Gallery from "./pages/Gallery";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/Offers",
        element: <Offers />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Locations",
        element: <Locations />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      
      
      

    ],
  },
]);
