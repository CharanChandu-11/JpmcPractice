import React, { useRef } from 'react';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-green-800 text-white py-4 px-6 flex justify-between items-center shadow-md z-50 transition duration-300">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.bhumi.ngo/_next/static/media/BhumiNgoLogo.8431d033.svg"
            alt="NGO Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold tracking-wide">Bhumi</span>
        </div>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <button
              onClick={() => scrollToSection(homeRef)}
              className="hover:text-orange-300 transition duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-orange-300 transition duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="hover:text-orange-300 transition duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section
        ref={homeRef}
        className="pt-24 min-h-screen bg-green-50 flex items-center justify-center px-4 transition-all duration-500"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-orange-600 mb-4 transition duration-500">
            Together, We Can Make a Difference
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto transition duration-500">
            Bhumi empowers youth and volunteers to build a better India through education,
            environment, and equality initiatives.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-36 px-6 bg-white text-center border-t border-orange-100 transition-all duration-500"
      >
        <h2 className="text-4xl font-semibold text-green-700 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Bhumi is one of India’s largest youth volunteering organisations.
          Through consistent efforts, we aim to bring about change in the fields of education,
          environment, and civic welfare. With over 20,000 volunteers nationwide, our impact is growing every year.
        </p>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-36 px-6 bg-green-100 text-center border-t border-green-200 transition-all duration-500"
      >
        <h2 className="text-4xl font-semibold text-orange-600 mb-6">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-10">
          Reach out to join our mission or collaborate with us!
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { title: '📞 Phone', info: '+91 90000 12345' },
            { title: '📧 Email', info: 'contact@bhumi.ngo' },
            { title: '📍 Location', info: 'Chennai / Hyderabad, India' },
          ].map(({ title, info }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 w-64"
            >
              <h4 className="text-lg font-semibold mb-2 text-green-800">{title}</h4>
              <p className="text-gray-600">{info}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
