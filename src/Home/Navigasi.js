import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Impor ikon GitHub dan LinkedIn

function Navigasi() {
  return (
    <nav className="bg-base-300 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-black text-2xl font-semibold">Fajar Santoso#</NavLink>
        </div>

        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-black">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Biodata" className="text-gray-600 hover:text-black">Biodata</NavLink>
          </li>
          <li>
            <NavLink to="/Portofolio" className="text-gray-600 hover:text-black">Portofolio</NavLink>
          </li>
          <li>
            <NavLink to="/Skills" className="text-gray-600 hover:text-black">Skills</NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 hover:text-black" size={24} /> {/* Ikon GitHub */}
          </a>
          <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 hover:text-black" size={24} /> {/* Ikon LinkedIn */}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigasi;
