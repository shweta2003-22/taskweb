import React from "react";
// import './Header.css' ;

function Header()
{
return(
    <React.Fragment>
       <header className="header">
      {/* <div className="top-bar">
        <div className="left-section">
          <ul>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Create Account</a></li>
          </ul>
        </div>
        <div className="right-section">
          <p>USD</p>
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div> */}

      <div className="main-section">
        <div className="logo">
          <a href="#">
            <img src="src/assets/react.svg" alt="Nexgeek Logo" />
          </a>
        </div>
        <div className="contact-info">
          <p>Order Online or Call Us</p>
          <p>+1 800 000 8808</p>
        </div>
        <div className="free-shipping">
          <p>Free Shipping</p>
          <p>ON ORDER ABOVE $500</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src="search-icon.png" alt="Search Icon" />
          </button>
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          {/* <li><a href="#">DEMO</a></li> */}
          <li><a href="#">SHOP</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">ENTERTAINMENT</a></li>
          <li><a href="#">HOME APPLIANCES</a></li>
          <li><a href="#">LOOKBOOK</a></li>
          <li><a href="#">PAGES</a></li>
          <li><a href="#">BUY NOW!</a></li>
        </ul>
      </nav>
    </header>
    </React.Fragment>
)
}

export default Header;