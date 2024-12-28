
// src/components/Newsletter.jsx
import 'react';

const Newsletter = () => {
  return (
    <div className="bg-teal-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">SIGN UP FOR NEWSLETTERS</h2>
        <p className="mb-6">Get weekly updates about our latest shop and special offers</p>
        <div className="max-w-xl mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded text-gray-800"
          />
          <button className="bg-gray-800 text-white px-8 py-2 rounded">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;