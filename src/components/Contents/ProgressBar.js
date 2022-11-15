import React, { useState } from 'react';

import "../../styles/ProgressBar.css";

const ProgressBar = ({ done, color }) => {
  const [length, setLength] = useState({});

  setTimeout(() => {
    const newLength = {
      opacity: 1,
      width: done ? `${done}%` : 0,
      background: `${color}`,
      height: '100%',
      borderRadius: '20px',
      transition: `1s ease 0.3s`,
    };

    setLength(newLength);
  }, 200);

  function hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return alpha ? `rgba(${r},${g},${b},${alpha})` : `rgb(${r},${g},${b})`;
  }

  return (
    <div className="barContainer">
      <div
        className="progress"
        style={{ backgroundColor: hexToRGB(`${color}`, 0.1) }}
      >
        <div className="progressDone" style={length}></div>
      </div>
      <div style={{ color: `${color}` }}>
        <strong>{`${done}%`}</strong>
      </div>
    </div>
  );
};

export default ProgressBar;
