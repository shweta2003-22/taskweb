import React, { useState, useEffect } from 'react';

const PopularCollections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const collections = [
    {
      title: 'Mobile & Tablets',
      image: 'src/assets/c1.jpg',
    },
    {
      title: 'Cameras',
      image: 'src/assets/c2.jpg',
    },
    {
      title: 'Mobile & Tablets',
      image: 'src/assets/c3.jpg',
    },
    {
      title: 'Cameras',
      image: 'src/assets/c1.jpg',
    },
    {
      title: 'Cameras',
      image: 'src/assets/c2.jpg',
    },
    {
      title: 'Mobile & Tablets',
      image: 'src/assets/c3.jpg',
    },
    {
      title: 'Mobile & Tablets',
      image: 'src/assets/c1.jpg',
    },
    {
      title: 'Cameras',
      image: 'src/assets/c2.jpg',
    },
    {
      title: 'Mobile & Tablets',
      image: 'src/assets/c3.jpg',
    },
    {
      title: 'Cameras',
      image: 'src/assets/c1.jpg',
    },
    {
      title: 'Cameras',
      image: 'src/assets/c2.jpg',
    },
    {
      title: 'Mobile & Tablets',
      image: 'src/assets/c3.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === collections.length - 5 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [collections.length]);

  const CollectionCard = ({ collection }) => (
    <div className="relative group cursor-pointer overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 transform translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:bg-opacity-60">
        <h3 className="text-white text-center py-2 px-1 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {collection.title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-6">POPULAR COLLECTIONS</h2>
      
      
      <div className="relative">
     
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors"
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button 
          onClick={() => setCurrentIndex(prev => Math.min(collections.length - 5, prev + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors"
          disabled={currentIndex === collections.length - 5}
        >
          →
        </button>
        
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
        >
          {collections.map((collection, index) => (
            <div 
              key={index}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-1"
            >
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCollections;