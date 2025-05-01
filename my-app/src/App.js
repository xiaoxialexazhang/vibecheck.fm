import React, { useState, useEffect } from "react";
import "./App.css";
import HoverEffect from "./components/HoverEffect";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

function App() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [scrollY, setScrollY] = useState(0);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container" onMouseMove={handleMouseMove}>
      <div className="background-layer">
        <HoverEffect x={mousePos.x} y={mousePos.y} />
      </div>
      <div className="content-layer">
        <Title scrollY={scrollY} />
        <Subtitle scrollY={scrollY} />
        <div className="spacer" />
      </div>
    </div>
  );
}

export default App;
