import React from 'react';
import aku from '../Assets/aku.jpg';
import TypewriterText from '../Components/TypeWriterText';
import CV from "../Assets/aku.jpg"

function Home() {
  const handleDownloadCV = () => {
    // Gantilah URL berikut dengan URL file CV Anda
    const cvFileUrl = {aku};
    window.location.href = cvFileUrl;
  };

  const handleContactMe = () => {
    // Gantilah nomor WhatsApp dan pesan yang sesuai
    const phoneNumber = 'NOMOR_WHATSAPP';
    const message = 'Halo, saya tertarik untuk berbicara dengan Anda.';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${+6285728056216}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <main className="welcome-container mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
      <div className="welcome-text-container space-y-2 text-center md:text-left px-10">
        <p className="text-black">Hello World, I'm</p>
        <h1 className="text-4xl font-bold md:text-5xl text-black fadein-up">Bagas Rakha</h1>
        <div className="py-2">
          <h1 className="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-500 md:text-2xl fadein-up">
            <span className="wrap"><TypewriterText /></span>
          </h1>
        </div>
        <p className="text-black pr-4 fade-in-from-left animate__animated animate__fadeIn">
          Welcome to My personal website. <span role="img" aria-label="wave">👋🏼</span>
        </p>
        <div className="welcome-buttons">
          <button className="btn glass" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn glass" onClick={handleContactMe}>
            Contact Me
          </button>
        </div>
      </div>
      <div className="welcome-image-container flex justify-center md:justify-start fadein-right">
        <img
          alt="avatar"
          width="300"
          height="300"
          className="w-10/11 md:h-auto rounded-full border-4 border-amber-200 pict"
          src={aku}
        />
      </div>
    </main>
  );
}

export default Home;
