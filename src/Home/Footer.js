import React from 'react';
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 bg-opacity-90 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="">About us</a>
        <a className="">Contact</a>
        <a className="">Jobs</a>
        <a className="">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/fajarsant">
            <FaTwitter size={32} color="#1DA1F2" />
          </a>
          <a href="https://www.instagram.com/FajarSantf">
            <FaInstagram size={32} color="#E4405F" />
          </a>
          <a href="https://www.tiktok.com/FajarSantf">
            <FaTiktok size={32} color="#69C9D0" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - ShinXyc</p>
      </aside>
    </footer>
  );
};

export default Footer;
