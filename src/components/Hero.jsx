// src/components/Hero.jsx
import 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      <img 
        src="src/assets/slide1.jpg" 
        alt="Camera lens close-up"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">CLOSER THAN EVER</h1>
            <p className="text-xl mb-6">
              Fully weather sealed design. Special seals resist water,
              fog, snow and dust for top performance.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;