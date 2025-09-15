import React from 'react';
import { 
  FaTwitter, 
  FaBehance, 
  FaGithub, 
  FaCodepen, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebookF 
} from "react-icons/fa";

const Footer = React.memo(() => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="w-full my-10 flex flex-col md:flex-row gap-4 items-center justify-center px-4">

        {/* Copyright */}
        <div className="text-gray-400 text-sm tracking-wide">
          © <span className="year">{new Date().getFullYear()}</span> Ahmed Abdelaziz
        </div>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/ahmedvbdelaziz" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-400 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ahmedabdelaziz11" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.behance.net/ahmedabdelaziz180" target="_blank" rel="noreferrer" aria-label="Dribbble" className="hover:text-pink-500 transition">
            
            <FaBehance size={20} />
          </a>
          <a href="https://x.com/_therealzizo" target="_blank" rel="noreferrer" aria-label="Behance" className="hover:text-blue-500 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/ahmedvbdellaziz" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition">
            <FaInstagram size={20} />
          </a>
          
        </div>

        

      </div>
    </footer>
  );
});

export default Footer;
