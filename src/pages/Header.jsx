import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://www.bhumi.ngo/_next/static/media/BhumiNgoLogo.8431d033.svg" alt="Logo" className="w-30 h-30" />
          {/* <span className="text-xl font-bold text-orange-500">Bhumi</span> */}
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/" className="hover:text-orange-400 transition">About Us</Link>
          <Link to="/" className="hover:text-orange-400 transition">Our Work</Link>
          <Link to="/" className="hover:text-orange-400 transition">Get Involved</Link>
          <Link to="/" className="hover:text-orange-400 transition">Contact Us</Link>
          <Link to="/Blogs" className="hover:text-orange-400 transition">Blogs</Link>
          <Link to="/Payment" className="hover:text-green-400 transition font-semibold">Give</Link>
          <Link to="/Volunteer" className="bg-orange-500 text-black px-4 py-1 rounded hover:bg-orange-600 transition font-semibold">
            Volunteer Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
