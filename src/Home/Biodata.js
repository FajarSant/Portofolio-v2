import React from "react";
import myPhoto from "../Assets/aku.jpg";
import { FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Biodata = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="outer-container border-2 border-teal-500 p-4 md:p-8 rounded-md mt-10 mx-5"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="photo-bio-container flex flex-col items-center">
        <div className="photo-container mb-4">
          <img
            src={myPhoto}
            alt="My Profile"
            className="w-2/4 md:w-1/4 h-auto rounded-full border-4 border-amber-200 mx-auto"
          />
        </div>
        <div className="bio-container text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-black">Biodata Saya</h2>
          <div className="flex items-center mb-2 text-black">
            <FaMapMarkerAlt className="text-xl mr-2" />
            <p className="text-sm md:text-base">
              Karanganyar, Jawa Tengah, Indonesia
            </p>
          </div>
          <div className="flex items-center mb-2 text-black">
            <FaInstagram className="text-xl mr-2" />
            <p className="text-sm md:text-base">@FajarSantf</p>
          </div>
          <div className="flex items-center mb-2 text-black">
            <FaTwitter className="text-xl mr-2" />
            <p className="text-sm md:text-base">@fajarsantoso</p>
          </div>
          <div className="flex items-center mb-2 text-black">
            <FaLinkedin className="text-xl mr-2" />
            <p className="text-sm md:text-base">linkedin.com/in/fajarsantoso</p>
          </div>
          {/* Tambahkan lebih banyak informasi dan ikon sesuai kebutuhan */}
        </div>
      </div>
      <div className="description-container text-center md:text-left text-black mt-4">
        <h1 className="text-2xl font-bold mb-4">Fajar Santoso</h1>
        <p className="text-sm md:text-base text-justify">
          "Halo semuanya, perkenalkan saya Fajar. Saya seorang individu yang
          cenderung sederhana, namun menyimpan banyak cerita menarik di dalam
          hidup saya. Memiliki cita-cita besar menjadi pendorong semangat saya,
          meskipun terkadang saya merasa bingung menghadapi beberapa situasi.
          Saat waktu luang, saya suka menikmati momen santai dengan duduk-duduk
          sambil menikmati secangkir kopi dan didepan laptop. Musik dan film
          adalah teman setia saya; saya sangat menyukai berbagai genre musik dan
          film yang sedikit keras. Terkadang, saya menemukan kebahagiaan dalam
          humor ringan dan candaan receh. Hidup saya mirip roller coaster,
          dengan naik turunnya, tetapi saya selalu berusaha mempertahankan
          semangat dan kepositifan. Saya senang berbagi cerita dan pengalaman,
          dan sangat menghargai setiap orang yang ingin bergabung dalam
          perjalanan hidup saya. Siapa yang mau bergabung dalam kisah hidup
          saya?"
        </p>
      </div>
    </motion.div>
  );
};

export default Biodata;
