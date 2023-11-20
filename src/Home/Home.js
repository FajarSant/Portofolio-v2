// Introduction.js

import React from "react";
import yourImage from "../Assets/aku1.jpg";
import TypeWriterText from "../Components/TypeWriterText";
import { motion } from "framer-motion";

const contactInfo = {
  email: "your.email@example.com", // Ganti dengan alamat email Anda
  subject: "Pertanyaan dari Pengunjung Website",
  message: "Halo Fajar, \n\nSaya tertarik dengan profil Anda dan ingin berbicara lebih lanjut."
};

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/path/to/your/cv.pdf'; // Ganti dengan path sebenarnya ke file CV Anda
  link.download = 'Fajar_Santoso_CV.pdf';
  link.click();
};

const handleContactMe = () => {
  const { email, subject, message } = contactInfo;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
};

const TextContent = () => {
  return (
    <div className="text-content text-center md:text-left ">
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(to right, #000000, #FFD700)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Hello, Perkenalkan<br></br> Saya Fajar Santoso
      </motion.h2>
      <span
        className="text-xl font-bold neon-text"
        style={{
          textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700",
        }}
      >
        <TypeWriterText />
      </span>
      <p className="text-sm md:text-base text-justify md:text-justify mt-5 mb-2">
        Halo, saya Fajar Santoso. Terima kasih sudah mengunjungi website pribadi
        saya. Di sini, Anda dapat mengetahui lebih banyak tentang saya dan
        proyek-proyek yang telah saya kerjakan. Saya senang berbagi kisah dan
        pengalaman melalui halaman ini.
      </p>
      <p className="text-sm md:text-base text-justify md:text-justify mb-5">
        Jangan ragu untuk menjelajahi setiap bagian. Jika Anda memiliki
        pertanyaan atau ingin berbicara lebih lanjut, silakan hubungi saya.
        Terima kasih lagi dan selamat menikmati!
      </p>

      <div className="flex  md:flex-row gap-2 my-2">
        <button className="btn btn-outline" onClick={handleDownloadCV}>
          Download CV
        </button>
        <button className="btn btn-outline" onClick={handleContactMe}>
          Hubungi saya
        </button>
      </div>
    </div>
  );
};

const ImageContent = () => {
  return (
    <div className="image-content md:order-1 text-center md:text-left flex justify-center items-center">
      <img
        src={yourImage}
        alt="Introduction"
        className="w-2/4 md:w-3/4 h-auto rounded-full border-4 border-amber-200 mb-4 md:mb-0"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div className="introduction-container flex flex-col md:flex-row gap-8 items-center justify-center md:justify-start">
      <ImageContent />
      <TextContent />
    </div>
  );
};

export default Home;
