// Navigasi.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../Style/Navigasi.css'

function Navigasi({ activeSection }) {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
  );
}

export default Navigasi;
