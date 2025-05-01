import React, { useState } from "react";
import "./App.css";

function App() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="app"
      onMouseMove={handleMouseMove}
    >
      <div
        className="hover-effect"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
        }}
      />
      <h1 className="title">vibecheck.fm</h1>
    </div>
  );
}

export default App;
