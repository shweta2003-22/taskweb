// src/components/Navbar.jsx
import 'react';
import Logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={Logo} alt="NexGeek" className="h-8" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Shop</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Features</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Entertainment</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Pages</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Buy Now</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-orange-500">
              <i className="fas fa-phone"></i> +1 (555) 000-0000
            </span>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Free Shipping
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
