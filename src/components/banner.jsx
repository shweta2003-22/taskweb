import 'react';

import { useState, useEffect } from 'react';
 // Import your CSS file for styling

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: './src/assets/slide1.jpg', title: 'Slide 1 Title', description: 'Slide 1 Description' },
    { image: './src/assets/slide1.jpg', title: 'Slide 2 Title', description: 'Slide 2 Description' },
    { image: './src/assets/slide1.jpg', title: 'Slide 3 Title', description: 'Slide 3 Description' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner">
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href="#" className="btn">SHOP THE COLLECTION</a>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;