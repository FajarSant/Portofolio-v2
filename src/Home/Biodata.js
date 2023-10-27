import React from 'react';
import foto from "../Assets/aku.jpg"

const Biodata = () => {
  const containerStyle = {
    background: 'rgba(0, 0, 0, 0.75)', // Slightly transparent background
    backdropFilter: 'blur(10px)', // Blur effect
    border: '2px solid #000', // Border
    borderRadius: '1.5rem', // Rounded corners
  };

  return (
    <div className="px-5 py-5 md:px-12 md:py-10 text-left mx-3 mb-5">
      <div style={containerStyle} className="rounded-3xl text-amber-50 p-5">
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
          <section className="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
            <div className="flex justify-center">
              <img
                className="w-9/12 rounded-full mb-3 fadein-up"
                src={foto}
                alt="Foto"
              />
            </div>
            <div className="md:w-7/12">
              <p className="mb-3 md:mb-7 fadein-left fadeins-1">
                &nbsp; &nbsp; &nbsp; Hi everyone! My name is Bagas Rakha Putra. I'm a web developer from Bogor, West Java. I have 1 year of experience in back-end web development. I really enjoy what I do right now; in my opinion, creating programs is not just a job, but also an art that has aesthetic value.
              </p>
              <p className="mb-3 fadein-left fadeins-2">
                &nbsp; &nbsp; &nbsp; My job is to build your website to be functional and user-friendly yet still attractive. In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use. My goal is to convey your message and identity in the most creative way. If you are interested in hiring me, please contact the listed contact.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Biodata;
