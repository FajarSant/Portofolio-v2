import React from 'react';
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 bg-opacity-90 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/your_twitter">
            <FaTwitter size={32} color="#1DA1F2" />
          </a>
          <a href="https://www.instagram.com/your_instagram">
            <FaInstagram size={32} color="#E4405F" />
          </a>
          <a href="https://www.tiktok.com/your_tiktok">
            <FaTiktok size={32} color="#69C9D0" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All rights reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
