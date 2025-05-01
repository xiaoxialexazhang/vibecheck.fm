import React from "react";
import "./MoodOptions.css";

import yay from "../assets/happy-face.png";
import sniff from "../assets/stunned.png";
import meh from "../assets/neutral-face.png";
import ahh from "../assets/sad.png";

function MoodOptions({ scrollAmount }) {
  const visible = scrollAmount >= 1;

  return (
    <div className={`mood-options ${visible ? "show" : ""}`}>
      <div className="emoji-card">
        <img src={yay} alt="yay emoji" />
        <p>YAY!</p>
      </div>
      <div className="emoji-card">
        <img src={sniff} alt="sniff emoji" />
        <p>SNIFF</p>
      </div>
      <div className="emoji-card">
        <img src={meh} alt="meh emoji" />
        <p>MEH</p>
      </div>
      <div className="emoji-card">
        <img src={ahh} alt="ahhh emoji" />
        <p>AHHH!!</p>
      </div>
    </div>
  );
}

export default MoodOptions;
