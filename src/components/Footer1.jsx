import React from "react";

function Footer()
{
return(
    <React.Fragment>
        <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>INFORMATIONS</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Additional Information</a></li>
              <li><a href="#">Lookbook</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CUSTOMER SERVICES</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Orders & Returns</a></li>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">Custom Link</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>QUICK SHOP</h3>
            <ul>
              <li><a href="#">Collections</a></li>
              <li><a href="#">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Trending Products</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Beauty</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CONTACT US</h3>
            <ul>
              <li><p>35 Galaxy Enque,</p></li>
              <li><p>2568 steet, 23568 NY</p></li>
              <li><p>(440) 000 000 0000</p></li>
              <li><p><a href="mailto:sales@yousile.com">sales@yousile.com</a></p></li>
            </ul>
            <div className="social-icons">
              <h4>STAY CONNECTED</h4>
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2020 NexGeek. All Rights Reserved. Ecommerce Software by Shopify.</p>
          <div className="payment-icons">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="Mastercard" />
            <img src="paypal.png" alt="Paypal" />
            <img src="american-express.png" alt="American Express" />
            {/* Add more payment icons as needed */}
          </div>
        </div>
      </div>
    </footer>
    </React.Fragment>
)
};

export default Footer;
