
// src/components/TrendingNow.jsx
import 'react';

const TrendingNow = () => {
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
    // Similar structure to WeeklyBestselling products
  ];

  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-center text-3xl font-bold mb-8">TRENDING NOW</h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button className="text-blue-600 font-medium">FEATURED</button>
        <button className="text-gray-600">CAMERAS</button>
        <button className="text-gray-600">ACCESSORIES</button>
      </div>
      <div className="container mx-auto px-4 py-12">
     
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group">
            <div className="relative mb-4">
              <img
                src={products.image}
                alt={products.name}
                className="w-full h-48 object-contain"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm">
                  SALE
                </span>
              )}
            </div>
            <h3 className="text-lg font-medium mb-2">{products.name}</h3>
            <p className="text-orange-500 font-bold">${products.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrendingNow;
