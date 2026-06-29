import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoute from "./Components/Routing/AppRoute";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
