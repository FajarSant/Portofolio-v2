// LoadingPage.jsx

import React, { useState, useEffect } from "react";
import "../Style/LoadingPage.css"; // Import file CSS
import aku from "../Assets/aku2.jpg";

function LoadingPage({ onLoadingComplete }) {
  const [loadingText, setLoadingText] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [showLoadingButton, setShowLoadingButton] = useState(true);
  const [blinkPipe, setBlinkPipe] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const textToType =
      "Life is short, so gue gak mau jadi NPC di kehidupan sendiri.\nGue berusaha keras, biar plot twist-nya gue yang nulis! 🔥.";
    const typingSpeed = 150;
    const blinkSpeed = 500;

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
        setShowNextButton(true);
        setShowLoadingButton(true);
        setBlinkPipe(false);
        setTimeout(() => {
          setShowProfile(true);
          setShowLoadingButton(false);
        }, 3000);
      }
    };

    writeText();

    const blinkPipeFn = () => {
      setBlinkPipe((prev) => !prev);
      setTimeout(blinkPipeFn, blinkSpeed);
    };

    blinkPipeFn();

    const updateCurrentTime = () => {
      setCurrentTime(new Date());
      requestAnimationFrame(updateCurrentTime);
    };

    requestAnimationFrame(updateCurrentTime);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNextClick = () => {
    onLoadingComplete();
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white relative">
      <div className="background-gif">
        {/* Gunakan format lain atau optimalkan gambar GIF */}
        <img
          src="https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-35.gif"
          alt="Background GIF"
          className="w-full h-full"
        />
      </div>
      <div className={`text-4xl font-bold text-center typing-text ${showProfile ? "hidden" : ""}`}>
        {loadingText}
        {blinkPipe && "|"}
      </div>
      <div className="clock">
        {currentTime.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "numeric",
        })}
        <div className="day-date">
          {currentTime.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      {showLoadingButton && (
        <button className="btn btn-outline btn-error mt-9">
          <span className="loading loading-spinner"></span>
        </button>
      )}
      {showNextButton && showProfile && (
        <div className={`profile-container absolute bottom-0 ${showProfile ? "visible" : "hidden"}`}>
          <img
            alt="avatar"
            width="100%"
            className={`rounded-full border-4 border-amber-200 pict ${showProfile ? "visible" : "hidden"}`}
            src={aku}
          />
          {showNextButton && (
            <button
              className="btn btn-outline btn-error mt-4"
              onClick={handleNextClick}
            >
              Masuk
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
      )}
    </div>
  );
}

export default LoadingPage;
