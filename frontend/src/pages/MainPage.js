import React from "react";
import "./MainHome.css"; // Import CSS
import homepic from '../pages/homepic.jpg';
import pic1 from '../pages/fusecolored.png';
import pic2 from '../pages/image2.jpeg';
import pic3 from '../pages/image3.png';

function MainPage() {
  return (
    <div className="MainPage">
      {/* Header Section */}
      <header className="header">
  <nav className="navbar">
    <div className="logo">
      <h1>Pet Shop</h1>
    </div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</header>



      {/* Hero Section */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${homepic})` }}>
        <div className="hero-text">
          <h2>Discover the Beauty of Nature</h2>
          <p>Embrace the tranquility and wonder of the outdoors with us.</p>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are passionate about bringing people closer to nature and helping them discover its endless beauty and inspiration.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Our Services</h2>
        <div className="Contact-cards">
          <a href="/veterinaryservices">
            <div className="card" style={{ backgroundImage: `url(${pic1})` }}>
             
            </div>
          </a>
          <a href="/pet-supermarket">
            <div className="card" style={{ backgroundImage: `url(${pic2})` }}>
             
            </div>
          </a>
          <a href="/pet-care-center">
            <div className="card" style={{ backgroundImage: `url(${pic3})` }}>
              
            </div>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Sierra Nature. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
