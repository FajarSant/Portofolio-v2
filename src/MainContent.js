// MainContent.jsx

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from './Home/Home';
import Biodata from './Home/Biodata';
import Portofolio from './Home/Portofolio';
import Skills from './Home/Skils';
import Footer from './Home/Footer';
import './Style/Navigasi.css';

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setSticky] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Refs for each section
  const homeRef = useRef(null);
  const biodataRef = useRef(null);
  const portofolioRef = useRef(null);
  const skillsRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      biodata: biodataRef,
      portofolio: portofolioRef,
      skills: skillsRef,
    }),
    [homeRef, biodataRef, portofolioRef, skillsRef]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 64;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }

      setSticky(scrollPosition > 0);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionRefs]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav
        className={`bg-base-300 p-4 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          isSticky ? 'shadow-lg' : ''
        } ${isSmallScreen ? 'hidden' : ''}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {!isSmallScreen && (
              <a
                href="#home"
                className="text-black text-2xl font-semibold cursor-pointer"
                onClick={scrollToTop}
              >
                Fajar Santoso#
              </a>
            )}
          </div>

          <ul className="flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-64}
                className={`text-gray-600 cursor-pointer ${
                  activeSection === 'home' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="biodata"
                smooth={true}
                duration={500}
                offset={-64}
                className={`text-gray-600 cursor-pointer ${
                  activeSection === 'biodata' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
              >
                Biodata
              </Link>
            </li>
            <li>
              <Link
                to="portofolio"
                smooth={true}
                duration={500}
                offset={-64}
                className={`text-gray-600 cursor-pointer ${
                  activeSection === 'portofolio' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-64}
                className={`text-gray-600 cursor-pointer ${
                  activeSection === 'skills' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
              >
                Skills
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/FajarSant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className={`text-gray-600 ${
                  activeSection === 'github' ? 'active' : ''
                } hover:text-black hover:active:text-red-500 cursor-pointer`}
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fajar-santoso-a33b50277/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className={`text-gray-600 ${
                  activeSection === 'linkedin' ? 'active' : ''
                } hover:text-black hover:active:text-red-500 cursor-pointer`}
                size={24}
              />
            </a>
          </div>
        </div>
      </nav>

      <div ref={homeRef} className="content p-10 md:p-20" id="home">
        <Home />
      </div>
      <div ref={biodataRef} className="content p-10 md:p-20" id="biodata">
        <Biodata />
      </div>
      <div ref={portofolioRef} className="content p-10 md:p-20" id="portofolio">
        <Portofolio />
      </div>
      <div ref={skillsRef} className="content p-10 md:p-20" id="skills">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
