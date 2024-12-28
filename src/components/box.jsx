import React from "react";
import { useState } from 'react';
const Box = ({ image, title, index, activeIndex }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  

// eslint-disable-next-line no-unused-vars
function Box()
{
return(
    <React.Fragment>
        <div className={`box ${index === activeIndex ? 'active' : ''} ${isHovered ? 'hovered' : ''}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
        <img src={image} alt={title} />
        <div className="box-content">
            <h3>{title}</h3>
        </div>
        </div>

    </React.Fragment>
)
}
}
export default Box;
// ./src/assets/box1.jpg