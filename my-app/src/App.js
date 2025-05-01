import React, { useEffect, useState } from "react";
import "./App.css";
import HoverEffect from "./components/HoverEffect";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import MoodOptions from "./components/MoodOptions";

function App() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [scrollAmount, setScrollAmount] = useState(0);
  const [showMosaic, setShowMosaic] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowMosaic(true);
  };

  const handleBack = () => {
    setShowMosaic(false);
    setSelectedMood(null);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (!showMosaic) {
        setScrollAmount((prev) => {
          const next = Math.min(Math.max(prev + e.deltaY * 0.01, 0), 1);
          return next;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [showMosaic]);

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <HoverEffect x={mousePos.x} y={mousePos.y} />
      {!showMosaic ? (
        <>
          <Title scrollAmount={scrollAmount} />
          <Subtitle scrollAmount={scrollAmount} />
          <MoodOptions scrollAmount={scrollAmount} onMoodSelect={handleMoodSelect} onBack={handleBack} />
        </>
      ) : (
        <div className="mosaic-container">
          <MoodOptions scrollAmount={1} onMoodSelect={handleMoodSelect} onBack={handleBack} />
        </div>
      )}
    </div>
  );
}

export default App;