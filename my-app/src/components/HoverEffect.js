import React from "react";
import "./HoverEffect.css";

function HoverEffect({ x, y }) {
  return (
    <div
      className="hover-effect"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
}

export default HoverEffect;