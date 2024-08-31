// In your React component file, e.g., HeroSection.jsx
import React from 'react';
import backimg from '../assets/images/backimg.jpg'; // Adjust the path as needed
import './HeroSection.css';
const HeroSection = () => {
  return ( 
    <>
      <div
      style={{
          backgroundImage: `url(${backimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        //   filter: 'blur(4px)',
        }}
    >
        <div className="hero-section">
  
      <div className="hero-content">
        <h1>Revolutionizing Healthcare Technology</h1>
        <p>
          At Aarogya Innovators, we specialize in cutting-edge technological solutions for OPD queuing, bed availability, patient admission, medicine dispensation, and inventory management. Seamlessly integrate with city-wide healthcare modules.
        </p>
        <div className="hero-buttons">
          <button className="btn-get-started">Get Started</button>
          <button className="btn-learn-more">Learn More</button>
        </div>
      </div>
    </div>


    </div>
    </>
  );
};

export default HeroSection;
