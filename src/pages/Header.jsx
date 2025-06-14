import React from 'react';
import { Link } from 'react-router-dom';

function Header({ scrollToSection, homeRef, aboutRef, workRef, involvedRef, contactRef }) {
  return (
    <header className="bg-white text-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://www.bhumi.ngo/_next/static/media/BhumiNgoLogo.8431d033.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap space-x-4 text-sm md:text-base font-medium items-center">
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-orange-500 transition"><Link to="/">Home</Link></button>
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-orange-500 transition">About Us</button>
          <button onClick={() => scrollToSection(workRef)} className="hover:text-orange-500 transition">Our Work</button>
          <button onClick={() => scrollToSection(involvedRef)} className="hover:text-orange-500 transition">Get Involved</button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-orange-500 transition">Contact Us</button>
          <Link to="/Blogs" className="hover:text-orange-500 transition">Blogs</Link>
          <Link to="/Payment" className="hover:text-green-600 transition font-semibold">Give</Link>
          <Link
            to="/Volunteer"
            className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition font-semibold"
          >
            Volunteer Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
