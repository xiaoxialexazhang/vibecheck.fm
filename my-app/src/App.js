import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HoverEffect from "./components/HoverEffect";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import MoodOptions from "./components/MoodOptions";
import HappyPage from "./pages/HappyPage";

function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleWheel = (e) => {
      setScrollAmount((prev) => Math.min(Math.max(prev + e.deltaY * 0.01, 0), 1));
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/happy" element={<HappyPage />} />
        {/* Add /sad, /sniff, etc. later */}
      </Routes>
    </Router>
  );
}

export default App;
