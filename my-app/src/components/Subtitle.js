import React from "react";
import "./Subtitle.css";

function Subtitle({ scrollAmount }) {
  const opacity = scrollAmount;
  const translateY = 40 - scrollAmount * 20; // settle a little above center

  return (
    <div
      className="subtitle"
      style={{
        opacity,
        transform: `translate(-50%, ${translateY}%)`,
      }}
    >
      how are you feeling?
    </div>
  );
}

export default Subtitle;