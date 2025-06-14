import React, { useState } from 'react';
import Chatting from './Chatting'; // Your chatbot component
import { FaComments, FaMinus, FaTimes } from 'react-icons/fa';

function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    location: '',
    whatsapp: false,
    newsletter: false,
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add your API logic here
  };

  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Registration Panel */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Volunteer Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-3 rounded bg-white border border-green-500 focus:outline-none" required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-3 rounded bg-white border border-green-500 focus:outline-none" required />
          </div>
          <input type="tel" name="mobile" placeholder="Mobile (with country code)" value={formData.mobile} onChange={handleChange} className="w-full p-3 rounded bg-white border border-green-500 focus:outline-none" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-white border border-green-500 focus:outline-none" required />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-3 rounded bg-white border border-green-500 focus:outline-none" required />

          <div className="space-y-2 text-sm">
            <label className="flex items-center">
              <input type="checkbox" name="whatsapp" checked={formData.whatsapp} onChange={handleChange} className="mr-2" />
              Permission to contact over WhatsApp
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="mr-2" />
              I would like to receive Bhumi's newsletter and event updates
            </label>
          </div>

          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition">
            Submit
          </button>
        </form>
      </div>

      {/* Catalogue Section */}
      <div className="max-w-5xl mx-auto p-6 mt-12">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Why Volunteer with Bhumi?</h2>
        <p className="text-gray-700 mb-6">
          Volunteering at Bhumi is an opportunity to make a real difference in the lives of underprivileged communities while growing personally and professionally.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg">Community Impact</h3>
            <p className="text-sm mt-2">Be a part of positive social change that empowers youth and communities.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg">Skill Development</h3>
            <p className="text-sm mt-2">Gain leadership, communication, and problem-solving skills.</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-orange-600 text-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg">Networking</h3>
            <p className="text-sm mt-2">Connect with like-minded individuals and expand your circle.</p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl z-50"
          onClick={() => setChatOpen(true)}
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Chatbot Panel */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white text-black border border-gray-300 rounded-xl shadow-xl z-50 overflow-hidden">
          {/* Chatbot Header */}
          <div className="flex justify-between items-center bg-green-600 text-white p-2 px-4 font-semibold">
            <span>Chat Assistant</span>
            <div className="flex gap-2">
              <button onClick={() => setChatMinimized(!chatMinimized)}>
                <FaMinus />
              </button>
              <button
                onClick={() => {
                  setChatOpen(false);
                  setChatMinimized(false); // Reset minimized state
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Chatbot Body (preserved unless closed) */}
          <div className={`${chatMinimized ? "hidden" : "block"} h-96 overflow-y-auto`}>
            <Chatting />
          </div>
        </div>
      )}
    </div>
  );
}

export default Volunteer;
