
// src/components/BrandsSection.jsx
import  'react';

const BrandsSection = () => {
  const brands = [
    {
      title: 'BELLE',
      image: 'src/assets/br1.png',
    },
    {
      title: 'KAMERA',
      image: 'src/assets/br2.png',
    },
    {
      title: 'FAMIZA',
      image: 'src/assets/br1.png',
    },
    {
      title: 'LITEMART',
      image: 'src/assets/br2.png',
    },
    {
      title: 'BBN',
      image: 'src/assets/br1.png',
    },
    {
      title: 'O62X',
      image: 'src/assets/br2.png',
    }
   
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">BRANDS WE SALE</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
      {brands.map((brand, index) => (
          <div key={index} className="group cursor-pointer">
            <img
              src={brand.image}
              alt={brand.title}
              className="w-full d-blockobject-contain mb-4 px-6"
            />
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-500">{brand}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default BrandsSection;