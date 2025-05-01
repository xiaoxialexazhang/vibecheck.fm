import React, { useEffect, useState } from "react";
import "./App.css";
import HoverEffect from "./components/HoverEffect";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import MoodOptions from "./components/MoodOptions";

function App() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [scrollAmount, setScrollAmount] = useState(0); // virtual scroll state

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleWheel = (e) => {
      setScrollAmount((prev) => {
        const next = Math.min(Math.max(prev + e.deltaY * 0.01, 0), 1); // clamp 0 to 1
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <HoverEffect x={mousePos.x} y={mousePos.y} />
      <Title scrollAmount={scrollAmount} />
      <Subtitle scrollAmount={scrollAmount} />
      <MoodOptions scrollAmount={scrollAmount} />
    </div>
  );
}

export default App;
