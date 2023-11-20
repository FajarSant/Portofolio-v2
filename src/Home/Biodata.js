import React from "react";
import foto from "../Assets/aku.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerStyle = {
  background: "rgba(0, 0, 0, 0.75)", // Slightly transparent background
  backdropFilter: "blur(10px)", // Blur effect
  border: "2px solid #000", // Border
  borderRadius: "1.5rem", // Rounded corners
};

const Biodata = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const fadeImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="px-5 py-5 md:px-12 md:py-10 text-left mx-3 mb-5"
    >
      <motion.div
        style={containerStyle}
        className="rounded-3xl text-amber-50 p-5 md:p-8"
        variants={fadeInVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <article data-page="about">
          <header>
            <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
              About Me &nbsp;
              <div
                className="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration="600"
              ></div>
            </div>
          </header>
          <motion.section
            className="grid md:grid-cols-2 gap-4 items-center"
            variants={fadeInVariants}
          >
            <motion.div variants={fadeImageVariants} className="md:mx-auto">
              <img
                className="w-full md:w-11/12 rounded-full mb-3 fadein-up mx-auto md:mx-0"
                src={foto}
                alt="Foto"
              />
            </motion.div>
            <motion.div variants={fadeInVariants} className="text-white">
              <p className="mb-3 md:mb-7 fadein-left fadeins-1">
                &nbsp; &nbsp; &nbsp; Halo semua! Gue Fajar Santoso, seorang web
                developer asal Karanganyar, Jateng. Udah setahunan lebih nih gue
                berkecimpung di dunia back-end dan Frontend (Fullstack) junior web development. Gue suka banget
                ngoding, menurut gue, bikin program tuh bukan cuma kerjaan, tapi
                seni yang punya nilai estetika gitu.{" "}
              </p>
              <p className="mb-3 fadein-left fadeins-2">
                &nbsp; &nbsp; &nbsp; Kerja ku tuh ngebikin website kalian jadi
                fungsional, gampang dipake, tapi tetep kece. Selain itu, gue
                bakal kasih sentuhan personal buat produk lo dan pastiin kalo
                websitenya eye-catching dan gampang dipake. Tujuan gue
                sederhana, ngegambarin pesan dan identitas lo dengan cara yang
                kreatif. Kalo lo tertarik buat nyewain gue, langsung aja kontak
                nomer yang ada ya!{" "}
              </p>
            </motion.div>
          </motion.section>
        </article>
      </motion.div>
    </motion.div>
  );
};

export default Biodata;
