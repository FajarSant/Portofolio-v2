// MainContent.js
import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from './Home/Home';
import Biodata from './Home/Biodata';
import Portofolio from './Home/Portofolio';
import Skils from './Home/Skils';
import './Style/Navigasi.css';

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setSticky] = useState(false);

  // Refs for each section
  const homeRef = useRef(null);
  const biodataRef = useRef(null);
  const portofolioRef = useRef(null);
  const skillsRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    biodata: biodataRef,
    portofolio: portofolioRef,
    skills: skillsRef,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 64; // Consider the height of the fixed navbar

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }

      setSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return (
    <div>
      <nav
        className={`bg-base-300 p-4 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          isSticky ? 'shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-black text-2xl font-semibold">
              Fajar Santoso#
            </a>
          </div>

          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className={`text-gray-600 ${
                  activeSection === 'home' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Biodata"
                className={`text-gray-600 ${
                  activeSection === 'biodata' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
                onClick={() => setActiveSection('biodata')}
              >
                Biodata
              </a>
            </li>
            <li>
              <a
                href="#Portofolio"
                className={`text-gray-600 ${
                  activeSection === 'portofolio' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
                onClick={() => setActiveSection('portofolio')}
              >
                Portofolio
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className={`text-gray-600 ${
                  activeSection === 'skills' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className={`text-gray-600 ${
                  activeSection === 'github' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className={`text-gray-600 ${
                  activeSection === 'linkedin' ? 'active' : ''
                } hover:text-black hover:active:text-red-500`}
                size={24}
              />
            </a>
          </div>
        </div>
      </nav>

      <div ref={homeRef} className="content p-20" id="home">
        <Home />
      </div>
      <div ref={biodataRef} className="content p-20" id="Biodata">
        <Biodata />
      </div>
      <div ref={portofolioRef} className="content p-20" id="Portofolio">
        <Portofolio />
      </div>
      <div ref={skillsRef} className="content p-20" id="Skills">
        <Skils />
      </div>
    </div>
  );
};

export default MainContent;
