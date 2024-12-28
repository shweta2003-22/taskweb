// src/components/CategoryGrid.jsx
import 'react';

const CategoryGrid = () => {
  const categories = [
    {
      title: 'HOME ENTERTAINMENT',
      image: 'src/assets/box1.jpg',
    },
    {
      title: 'ACCESSORIES',
      image: 'src/assets/box2.jpg',
    },
    {
      title: 'MOBILES & TABLETS',
      image: 'src/assets/box3.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;