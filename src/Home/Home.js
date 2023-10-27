import React from 'react';
import aku from '../Assets/aku1.jpg';
import TypewriterText from '../Components/TypeWriterText';

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
      <div className="welcome-text-container space-y-2 text-center md:text-left px-4 md:px-10"> {/* Perubahan pada padding */}
        <p className="text-black">Hello World, I'm</p>
        <h1 className="text-2xl md:text-4xl font-bold text-black fadein-up">Bagas Rakha</h1>
        <div className="py-2">
          <h1 className="typewrite text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-500 fadein-up">
            <span className="wrap"><TypewriterText /></span>
          </h1>
        </div>
        <p className="text-black pr-4 fade-in-from-left animate__animated animate__fadeIn">
          Welcome to My personal website. <span role="img" aria-label="wave">👋🏼</span>
        </p>
        <div className="welcome-buttons flex flex-col md:flex-row gap-4 md:gap-0"> {/* Perubahan pada tata letak tombol */}
          <button className="btn glass" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn glass p-2" onClick={handleContactMe}> {/* Perubahan pada padding */}
            Contact Me
          </button>
        </div>
      </div>
      <div className="welcome-image-container flex justify-center md:justify-start fadein-right ">
        <img
          alt="avatar"
          width="100"
          height="100"
          className="w-8/12  rounded-full border-4 border-amber-200 pict"
          src={aku}
        />
      </div>
    </main>
  );
}

export default Home;
