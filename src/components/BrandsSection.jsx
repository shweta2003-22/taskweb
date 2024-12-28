
// src/components/BrandsSection.jsx
import  'react';

const BrandsSection = () => {
  const brands = [
    'BELLE',
    'KAMERA',
    'FAMIZA',
    'LITEMART',
    'BBN',
    'O62X',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">BRANDS WE SALE</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-500">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;