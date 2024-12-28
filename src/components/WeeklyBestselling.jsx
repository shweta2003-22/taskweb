// src/components/WeeklyBestselling.jsx
import  'react';

const WeeklyBestselling = () => {
  const products = [
    {
      name: 'Philips Women Epilator',
      price: 299.99,
      image: 'src/assets/p1.jpg',
      sale: true,
    },
    {
      name: 'Canon EOS 5D',
      price: 579.99,
      image: 'src/assets/p2.jpg',
    },
    {
      name: 'Samsung Smart TV',
      price: 579.99,
      image: 'src/assets/p3.jpg',
    },
    {
      name: 'Philips Women Epilator',
      price: 299.99,
      image: 'src/assets/p1.jpg',
      sale: true,
    },
    {
      name: 'Canon EOS 5D',
      price: 579.99,
      image: 'src/assets/p2.jpg',
    },
    
    // Add more products...
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">WEEKLY BESTSELLING</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group">
            <div className="relative mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm">
                  SALE
                </span>
              )}
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-orange-500 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyBestselling;
