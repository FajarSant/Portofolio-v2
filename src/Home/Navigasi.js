import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigasi() {
  // const navStyle = {
  //   background: 'rgba(0, 0, 0, 0.55)', // Slightly transparent background
  //   backgroundColor: 'rgba(255, 255, 255, 0.7)', // Latar belakang transparan dengan alpha 0.7
  //   backdropFilter: 'blur(10px)', // Efek blur dengan radius 10px
  // };

  return (
    <nav  className="bg-base-300 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center"> {/* Bagian kiri */}
          <NavLink to="/" className="text-black text-2xl font-semibold">Fajar Santoso#</NavLink>
        </div>

        <ul className="flex space-x-4"> {/* Bagian tengah */}
          <li>
            <NavLink to="/" className="text-gray-300 hover:text-black">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Biodata" className="text-gray-300 hover:text-black">Biodata</NavLink>
          </li>
          <li>
            <NavLink to="/Portofolio" className="text-gray-300 hover:text-black">Portofolio</NavLink>
          </li>
          <li>
            <NavLink to="/Skills" className="text-gray-300 hover:text-black">Skills</NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4"> {/* Bagian kanan */}
          <NavLink to="/profil" className="text-white hover:text-black" activeClassName="active">Profil</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigasi;
