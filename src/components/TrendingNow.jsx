import React, { useState } from 'react';
import { Search, Settings } from 'lucide-react';

const TrendingNow = () => {
  const [selectedCategory, setSelectedCategory] = useState('FEATURED');
  
  const products = {
    FEATURED: [
      {
        name: 'Philips Women Epilator',
        price: 299.99,
        image: '/api/placeholder/200/200',
        sale: true,
        colors: ['#FF0000', '#000000', '#FFFFFF'],
        category: 'FEATURED'
      },
      {
        name: 'Canon EOS 5D',
        price: 579.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000', '#808080'],
        category: 'CAMERAS'
      },
      {
        name: 'Samsung Smart TV',
        price: 899.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000', '#SILVER'],
        category: 'FEATURED'
      },
      {
        name: 'MacBook Pro',
        price: 1299.99,
        image: '/api/placeholder/200/200',
        colors: ['#808080', '#SILVER'],
        category: 'FEATURED'
      }
    ],
    CAMERAS: [
      {
        name: 'Sony A7 III',
        price: 1999.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000'],
        category: 'CAMERAS'
      },
      {
        name: 'Nikon Z6',
        price: 1799.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000', '#808080'],
        category: 'CAMERAS'
      },
      {
        name: 'Canon R6',
        price: 2499.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000'],
        category: 'CAMERAS'
      },
      {
        name: 'Fujifilm X-T4',
        price: 1699.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000', '#SILVER'],
        category: 'CAMERAS'
      }
    ],
    ACCESSORIES: [
      {
        name: 'Camera Tripod',
        price: 99.99,
        image: '/api/placeholder/200/200',
        sale: true,
        colors: ['#000000', '#808080'],
        category: 'ACCESSORIES'
      },
      {
        name: 'Camera Bag',
        price: 79.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000', '#964B00'],
        category: 'ACCESSORIES'
      },
      {
        name: 'LED Light Kit',
        price: 149.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000'],
        category: 'ACCESSORIES'
      },
      {
        name: 'Memory Card',
        price: 49.99,
        image: '/api/placeholder/200/200',
        colors: ['#000000'],
        category: 'ACCESSORIES'
      }
    ]
  };

  const ProductCard = ({ product }) => {
    return (
      <div className="group relative bg-white p-2 rounded shadow-sm transition-all duration-300 hover:shadow-lg">
        <div className="relative mb-2 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-36 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 transform opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex flex-col gap-1 pr-2">
              <button className="rounded-full bg-white p-1.5 shadow-md transition-all hover:bg-gray-100">
                <Settings className="h-4 w-4 text-gray-600" />
              </button>
              <button className="rounded-full bg-white p-1.5 shadow-md transition-all hover:bg-gray-100">
                <Search className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          {product.sale && (
            <span className="absolute left-1 top-1 rounded bg-red-500 px-1.5 py-0.5 text-xs text-white">
              SALE
            </span>
          )}
        </div>

        <h3 className="mb-1 text-sm font-medium text-gray-800 truncate">{product.name}</h3>
        <p className="mb-2 text-base font-bold text-orange-500">${product.price}</p>
        
        <div className="flex gap-1">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className="h-3 w-3 rounded-full border border-gray-300 transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-center text-2xl font-bold">TRENDING NOW</h2>
      
      <div className="mb-6 flex justify-center space-x-6">
        {['FEATURED', 'CAMERAS', 'ACCESSORIES'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`transform transition-all duration-300 hover:scale-105 ${
              selectedCategory === category
                ? 'text-blue-600 font-medium'
                : 'text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products[selectedCategory].map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};


export default TrendingNow;
