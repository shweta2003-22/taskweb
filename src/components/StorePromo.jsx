// src/components/StorePromo.jsx
import 'react';

const StorePromo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">THE BEST CHOICE FOR YOUR STORE</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          NexGeek is a highly configurable, elegant and clean Shopify theme 
          that seamlessly adapts for all screen sizes and devices.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default StorePromo;