import React from "react";
import "./Subtitle.css";

function Subtitle({ scrollY }) {
  const visible = scrollY > 200;
  const opacity = visible ? 1 : 0;
  const translateY = visible ? '-60%' : '-40%';

  return (
    <div
      className="subtitle"
      style={{
        opacity: opacity,
        transform: `translate(-50%, ${translateY})`,
      }}
    >
      how are you feeling today?
    </div>
  );
}

export default Subtitle;
