import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
        <img src="https://www.bhumi.ngo/_next/static/media/BhumiNgoLogo.8431d033.svg" alt="Logo" className="w-30 h-30" />
          {/* <h1 className="text-2xl font-bold text-orange-500 mb-2">Bhumi</h1> */}
          <p className="text-sm text-gray-400">
            Bhumi is a non-profit initiative focused on sustainable farming and empowering local communities.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-green-400">Reach Us</h2>
          <p className="text-sm text-gray-300">123 Green Street, Eco City, India</p>
          <p className="text-sm text-gray-300 mt-1">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-300 mt-1">✉️ support@bhumi.org</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-green-400">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white text-xl"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white text-xl"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white text-xl"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white text-xl"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-green-400">Get in Touch</h2>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md mt-2">
            Contact Us Now
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-6" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bhumi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
