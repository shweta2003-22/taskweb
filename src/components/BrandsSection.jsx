import React, { useState, useEffect } from 'react';

const BrandsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const brands = [
    {
      name: 'BELLE',
      logo: 'src/assets/br1.png',
      color: '#FF6B6B'
    },
    {
      name: 'KAMERA',
      logo: 'src/assets/br2.png',
      color: '#4ECDC4'
    },
    {
      name: 'FAMIZA',
      logo: 'src/assets/br1.png',
      color: '#45B7D1'
    },
    {
      name: 'LITEMART',
      logo: 'src/assets/br2.png',
      color: '#96CEB4'
    },
    {
      name: 'BBN',
      logo: 'src/assets/br1.png',
      color: '#FF9F1C'
    },
    {
      name: 'O62X',
      logo: 'src/assets/br2.png',
      color: '#7868E6'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === brands.length - 5 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [brands.length]);

  const BrandCard = ({ brand }) => (
    <div className="group relative p-2 rounded transition-all duration-300 hover:shadow-md bg-white">
      <div className="relative overflow-hidden h-14 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
          <span 
            className="text-sm font-bold"
            style={{ color: brand.color }}
          >
            {brand.name}
          </span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      <div className="absolute inset-0 rounded overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: brand.color }}
        />
        <div 
          className="absolute right-0 top-0 w-0.5 h-0 transition-all duration-500 group-hover:h-full"
          style={{ backgroundColor: brand.color }}
        />
      </div>
    </div>
  );

  return (

    <div className="container mx-auto px-4 py-6 overflow-hidden">
      <h2 className="text-center text-xl font-bold mb-4">BRANDS WE SALE</h2>
      
      <div className="relative">
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-white transition-colors text-sm"
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button 
          onClick={() => setCurrentIndex(prev => Math.min(brands.length - 5, prev + 1))}
          className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-white transition-colors text-sm"
          disabled={currentIndex === brands.length - 5}
        >
          →
        </button>
        
        <div 
          className="flex transition-transform duration-500 ease-out px-4"
          style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
        >
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-1"
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;