import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function Payment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardHolder: ''
  });
  const [success, setSuccess] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white text-black pt-28 px-8 flex justify-center items-start gap-12 transition-all relative">
      {success && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} recycle={false} />
      )}

      {!success && (
        <div className="w-1/3 flex flex-col gap-4">
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow hover:scale-105 hover:shadow-xl transition text-white">
            <h3 className="font-bold text-lg">2,000+ Children Educated</h3>
            <p className="text-sm mt-2">Bhumi provides after-school programs in multiple cities.</p>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-lg shadow hover:scale-105 hover:shadow-xl transition text-white">
            <h3 className="font-bold text-lg">300+ Organizations Partnered</h3>
            <p className="text-sm mt-2">We collaborate with institutions for broader impact.</p>
          </div>
          <div className="bg-gradient-to-r from-black to-gray-800 p-6 rounded-lg shadow hover:scale-105 hover:shadow-xl transition text-white">
            <h3 className="font-bold text-lg">1,000+ Volunteers</h3>
            <p className="text-sm mt-2">Join our network and make a difference.</p>
          </div>
        </div>
      )}

      <div className="w-1/2">
        {!success && step === 1 && (
          <form onSubmit={handleInitialSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg border border-green-500">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Donation</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
              Continue to Payment
            </button>
          </form>
        )}

        {!success && step === 2 && (
          <form onSubmit={handlePaymentSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg border border-orange-500">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Payment</h2>

            <div className="grid grid-cols-2 gap-4">
              {[500, 1000, 2000, 5000].map(amount => (
                <button
                  key={amount}
                  type="button"
                  className={`p-4 border ${formData.amount === String(amount) ? 'border-orange-600 bg-orange-100' : 'border-gray-300'} rounded font-semibold hover:bg-orange-50`}
                  onClick={() => setFormData(prev => ({ ...prev, amount: String(amount) }))}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount (₹) <span className="text-red-500">*</span>
              </label>
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date <span className="text-red-500">*</span>
                </label>
                <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} required placeholder="MM/YY" className="w-full p-2 mt-1 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV <span className="text-red-500">*</span>
                </label>
                <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name on Card <span className="text-red-500">*</span>
              </label>
              <input type="text" name="cardHolder" value={formData.cardHolder} onChange={handleChange} required className="w-full p-2 mt-1 border border-gray-300 rounded" />
            </div>

            <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded">
              Donate Now
            </button>
          </form>
        )}
      </div>

      {/* Success Message */}
      {success && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white text-center px-6">
          <h1 className="text-4xl font-extrabold text-green-600 mb-6 animate-pulse">🎉 Thank You for Your Donation! 🎉</h1>
          <div className="w-full max-w-md flex flex-col gap-4">
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow text-white">
              <h3 className="font-bold text-lg">2,000+ Children Educated</h3>
              <p className="text-sm mt-2">Your contribution supports real change.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-lg shadow text-white">
              <h3 className="font-bold text-lg">300+ Organizations Partnered</h3>
              <p className="text-sm mt-2">You’re now part of a wide-reaching impact.</p>
            </div>
            <div className="bg-gradient-to-r from-black to-gray-800 p-6 rounded-lg shadow text-white">
              <h3 className="font-bold text-lg">1,000+ Volunteers</h3>
              <p className="text-sm mt-2">Together we grow stronger.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
