"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,

      delay: 0,
      mirror: false,
    });
  }, []);

  return children;
}
