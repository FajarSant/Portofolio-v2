import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypewriterText() {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 1000,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={textRef}></span>
  );
}

export default TypewriterText;
