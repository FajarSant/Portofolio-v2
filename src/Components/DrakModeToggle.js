import React, { useState } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
    </button>
  );
}

export default DarkModeToggle;
