// ContactOptions.js

import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactOptions = ({ onClose, onContact }) => {
  const handleContact = (method) => {
    onContact(method);
    onClose();
  };

  return (
    <div className="contact-options">
      <div onClick={() => handleContact('whatsapp')}>
        <FaWhatsapp size={30} />
      </div>
      <div onClick={() => handleContact('instagram')}>
        <FaInstagram size={30} />
      </div>
      <div onClick={() => handleContact('email')}>
        <FaEnvelope size={30} />
      </div>
    </div>
  );
};

export default ContactOptions;
