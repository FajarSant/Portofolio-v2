import React, { useState, useEffect } from "react";

function LoadingPage({ onLoadingComplete }) {
  const [loadingText, setLoadingText] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [showLoadingButton, setShowLoadingButton] = useState(true);
  const [blinkPipe, setBlinkPipe] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const textToType = "Untuk membuat teks rata tengah .";
    const typingSpeed = 150; // Kecepatan pengetikan (dalam milidetik)
    const blinkSpeed = 500; // Kecepatan kedipan ikon "|" (dalam milidetik)

    let currentIndex = 0;
    let animationFrameId;

    const writeText = () => {
      if (!isMounted) return;
      if (currentIndex <= textToType.length) {
        setLoadingText(textToType.slice(0, currentIndex));
        currentIndex++;
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(writeText);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setShowNextButton(true);
          setShowLoadingButton(false);
          setBlinkPipe(false);
        }, 500);
      }
    };

    writeText();

    const blinkPipeFn = () => {
      setBlinkPipe((prev) => !prev);
      setTimeout(blinkPipeFn, blinkSpeed);
    };

    blinkPipeFn();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNextClick = () => {
    onLoadingComplete();
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-4xl font-bold text-center typing-text">
        {loadingText}
        {blinkPipe && "|"}
      </div>
      {showLoadingButton && (
        <button className="btn btn-outline btn-error mt-9">
          <span className="loading loading-spinner"></span>
        </button>
      )}
      {showNextButton && (
        <button
          className="btn btn-outline btn-error mt-9"
          onClick={handleNextClick}
        >
          Button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default LoadingPage;
