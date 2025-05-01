import React from "react";
import "./Title.css";

function Title({ scrollY }) {
  const translateY = Math.max(0, 100 - scrollY * 0.5); // Slide up slowly
  const opacity = Math.max(0, 1 - scrollY / 150); // Fade out as scroll increases

  return (
    <h1
      className="title"
      style={{
        transform: `translateY(-${translateY}px)`,
        opacity: opacity
      }}
    >
      vibecheck.fm
    </h1>
  );
}

export default Title;
