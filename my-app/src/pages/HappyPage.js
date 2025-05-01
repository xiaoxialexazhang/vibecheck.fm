import React, { useEffect, useState } from "react";
import "./HappyPage.css";

function HappyPage() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("https://www.thecolorapi.com/scheme?hex=FFC0CB&mode=analogic&count=6")
      .then(res => res.json())
      .then(data => {
        const colorList = data.colors.map(c => c.hex.value);
        setColors(colorList);
      });
  }, []);

  return (
    <div className="happy-page">
      {colors.length > 0 &&
        Array.from({ length: 20 }).map((_, idx) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 80 + 40;
          const opacity = Math.random() * 0.5 + 0.3;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = Math.random() * 10 + 5;

          return (
            <div
              key={idx}
              className="circle"
              style={{
                backgroundColor: randomColor,
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                opacity,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
    </div>
  );
}

export default HappyPage;
