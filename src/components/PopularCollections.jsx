// src/components/PopularCollections.jsx
import 'react';

const PopularCollections = () => {
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
    // Add more collections...
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-screen-2xl">
      <h2 className="text-center text-3xl font-bold mb-8">POPULAR COLLECTIONS</h2>
      <div className="grid grid-cols-12 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {collections.map((collection, index) => (
          <div key={index} className="group cursor-pointer">
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full d-blockobject-contain mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCollections;
