import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const WeeklyBestselling = () => {
  const products = [
    {
      name: 'Philips Women Epilator',
      price: 299.99,
      image: 'src/assets/p1.jpg',
      sale: true,
      colors: ['#FF0000', '#000000', '#FFFFFF'],
    },
    {
      name: 'Canon EOS 5D',
      price: 579.99,
      image: 'src/assets/p2.jpg',
      colors: ['#000000', '#808080'],
    },
    {
      name: 'Samsung Smart TV',
      price: 579.99,
      image: 'src/assets/p3.jpg',
      colors: ['#000000', '#SILVER'],
    },
    {
      name: 'Philips Women Epilator',
      price: 299.99,
      image: 'src/assets/p1.jpg',
      sale: true,
      colors: ['#FF0000', '#000000', '#FFFFFF'],
    },
    {
      name: 'Canon EOS 5D',
      price: 579.99,
      image: 'src/assets/p2.jpg',
      colors: ['#000000', '#808080'],
    },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="group relative bg-white p-1 rounded shadow-sm transition-all duration-300 hover:shadow-lg">
        <div className="relative mb-2 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {product.sale && (
            <span className="absolute left-1 top-1 rounded bg-red-500 px-1 py-0.5 text-xs text-white">
              SALE
            </span>
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center gap-1.5 opacity-0 transition-all duration-300 group-hover:bg-opacity-20 group-hover:opacity-100">
            <button className="transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white rounded-full p-1.5 hover:bg-gray-100">
              <ShoppingCart className="h-4 w-4 text-gray-600" />
            </button>
            <button className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white rounded-full p-1.5 hover:bg-gray-100">
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <h3 className="mb-1 text-xs font-medium text-gray-800 truncate px-1">{product.name}</h3>
        <p className="mb-1.5 text-sm font-bold text-orange-500 px-1">${product.price}</p>
        
        <div className="flex gap-1 px-1 pb-1">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className="h-2.5 w-2.5 rounded-full border border-gray-300 transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="mb-6 text-center text-2xl font-bold">WEEKLY BESTSELLING</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyBestselling;