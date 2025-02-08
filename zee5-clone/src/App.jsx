import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Plans from "./components/Plans";
import "./styles/global.css";  // Global styles (optional)

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Plans />
    </div>
  );
};

export default App;
