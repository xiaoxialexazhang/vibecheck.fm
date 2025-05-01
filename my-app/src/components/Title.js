import React from "react";
import "./Title.css";

function Title({ scrollAmount }) {
  const opacity = 1 - scrollAmount;
  const translateY = -50 - scrollAmount * 20; // move slightly up

  return (
    <h1
      className="title"
      style={{
        opacity,
        transform: `translate(-50%, ${translateY}%)`,
      }}
    >
      vibecheck.fm
    </h1>
  );
}

export default Title;
