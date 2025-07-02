// src/components/FaviconHandler.jsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const FaviconHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const changeFavicon = (src) => {
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = src;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = src;
        document.head.appendChild(newLink);
      }
    };

    if (location.pathname.startsWith("/truefashionbd")) {
      changeFavicon("../../public/logoOfTFB.jpg"); // Adjust path as needed
    } else {
      changeFavicon("../../public/logoOfTFI.jpg");
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default FaviconHandler;
