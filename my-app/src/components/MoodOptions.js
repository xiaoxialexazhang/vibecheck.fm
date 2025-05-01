import React from "react";
import "./MoodOptions.css";
import ColorMosaic from "./ColorMosaic";

import yay from "../assets/happy-face.png";
import sniff from "../assets/stunned.png";
import meh from "../assets/neutral-face.png";
import ahh from "../assets/sad-face.png";

function MoodOptions({ scrollAmount, onMoodSelect, onBack }) {
  const [selectedMood, setSelectedMood] = React.useState(null);
  const visible = scrollAmount >= 1;

  const moodColors = {
    yay: "#FFD9FA", // Light pink shade
    sniff: "#7B9EA8", // Muted blue
    meh: "#D4B483", // Warm beige/yellow
    ahh: "#C86B6B", // Muted red
  };

  const playlistUrls = {
    yay: "https://open.spotify.com/embed/playlist/4sc9F9KorWUfcZHGP3ZUUM?utm_source=generator",
    sniff: "https://open.spotify.com/embed/playlist/37i9dQZF1EIfO26kPw4DmK?utm_source=generator",
    meh: "https://open.spotify.com/embed/playlist/0QqogDgQSy1Xoy1jDlyczA?utm_source=generator",
    ahh: "https://open.spotify.com/embed/playlist/37i9dQZF1EIhuCNl2WSFYd?utm_source=generator"
  };

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  };

  if (selectedMood) {
    return (
      <>
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <ColorMosaic 
          seedColor={moodColors[selectedMood]} 
          playlistUrl={playlistUrls[selectedMood]}
        />
      </>
    );
  }

  return (
    <div className={`mood-options ${visible ? "show" : ""}`}>
      <div className="emoji-card" onClick={() => handleMoodClick("yay")}>
        < img src={yay} alt="yay emoji" />
        <p>YAY!</p >
      </div>
      <div className="emoji-card" onClick={() => handleMoodClick("sniff")}>
        < img src={sniff} alt="sniff emoji" />
        <p>SNIFF</p >
      </div>
      <div className="emoji-card" onClick={() => handleMoodClick("meh")}>
        < img src={meh} alt="meh emoji" />
        <p>MEH</p >
      </div>
      <div className="emoji-card" onClick={() => handleMoodClick("ahh")}>
        < img src={ahh} alt="ahhh emoji" />
        <p>AHHH!!</p >
      </div>
    </div>
  );
}

export default MoodOptions;