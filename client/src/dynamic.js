import React, { useState, useEffect } from 'react';

function DynamicBackground() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div style={{ backgroundColor: backgroundColor }}>
    </div>
  );
}

export default DynamicBackground;
