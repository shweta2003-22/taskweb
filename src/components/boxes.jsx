import { useState } from 'react';
import Box from './box';

const Boxes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const boxes = [
    { image: './src/assets/box1.jpg', title: 'ACCESSORIES' },
    { image: './src/assets/box2.jpg', title: 'MOBILES & TABLETS' },
    // Add more boxes as needed
  ];

  const handleBoxClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="boxes-container">
      {boxes.map((box, index) => (
        <Box
          key={index}
          image={box.image}
          title={box.title}
          isActive={index === activeIndex}
          onClick={() => handleBoxClick(index)}
        />
      ))}
    </div>
  );
};

export default Boxes;