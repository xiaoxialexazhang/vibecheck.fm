import React, { useEffect, useState } from 'react';
import './ColorMosaic.css';

function ColorMosaic({ seedColor, playlistUrl }) {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColorScheme = async () => {
      try {
        const hexColor = seedColor.replace('#', '');
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=monochrome&count=4`);
        const data = await response.json();
        const colorArray = data.colors.map(color => color.hex.value);
        setColors(colorArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching color scheme:', error);
        setLoading(false);
      }
    };

    if (seedColor) {
      fetchColorScheme();
    }
  }, [seedColor]);

  if (loading) {
    return <div className="loading">Loading colors...</div>;
  }

  return (
    <div className="color-mosaic">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-block"
          style={{ backgroundColor: color }}
        />
      ))}
      <div className="playlist-container">
        <iframe
          title="Spotify Playlist Embed"
          src={playlistUrl}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="spotify-embed"
        />
      </div>
    </div>
  );
}

export default ColorMosaic;