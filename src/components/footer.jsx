// src/components/Footer.jsx
import 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-500">Order Tracking</a></li>
              <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">QUICK SHOP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">All Products</a></li>
              <li><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
              <li><a href="#" className="hover:text-orange-500">Special Offers</a></li>
              <li><a href="#" className="hover:text-orange-500">Best Sellers</a></li>
              <li><a href="#" className="hover:text-orange-500">Clearance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-orange-500"></i>
                <span>123 Tech Street, Digital City, 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-orange-500"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-orange-500"></i>
                <span>support@nexgeek.com</span>
              </li>
              <li className="mt-4">
                <h4 className="font-bold mb-2">STAY CONNECTED</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-orange-500">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 NexGeek. All Rights Reserved. | eCommerce Software by Shopify
            </div>
            {/* <div className="flex gap-3">
              <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
              <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6" />
              <img src="/api/placeholder/40/25" alt="American Express" className="h-6" />
              <img src="/api/placeholder/40/25" alt="PayPal" className="h-6" />
              <img src="/api/placeholder/40/25" alt="Apple Pay" className="h-6" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;