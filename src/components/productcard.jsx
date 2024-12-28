import { useState, useEffect } from 'react';

const productsData = [
  {
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '$100',
    image: './src/assets/p1.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '$100',
    image: './src/assets/p2.jpg',
  },
  {
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '$100',
    image: './src/assets/p3.jpg',
  },
  {
    name: 'Product 4',
    description: 'Description for Product 4',
    price: '$100',
    image: './src/assets/p4.jpg',
  },
  {
    name: 'Product 5',
    description: 'Description for Product 5',
    price: '$100',
    image: './src/assets/p5.jpg',
  },
  {
    name: 'Product 6',
    description: 'Description for Product 6',
    price: '$100',
    image: './src/assets/p6.jpg',
  },
];

const ProductCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + productsData.length) % productsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-card-container">
      <button className="prev-btn" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <div className="product-card-wrapper">
        {productsData.map((product, index) => (
          <div
            key={index}
            className={`product-card ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">
                <span>{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;