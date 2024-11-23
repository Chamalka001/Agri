import React from 'react'
import './about.css'; 

export default function About() {
  return (
    <div className="about-section">
  <div className="about-container">
    <div className="intro-section">
      <div className="intro-header">
        <p>How it started</p>
        <h1>Our Dream is to Revolutionize Local Vegetable Markets</h1>
      </div>
      <div className="intro-description">
        <p>
          The <span className="company-highlight">AGRI</span> was established to connect local farmers directly with customers.
          Our mission is to eliminate middlemen, ensuring fair prices for both farmers and consumers. By creating a transparent
          and convenient platform, we aim to support sustainable farming practices while delivering fresh, high-quality produce
          to your doorstep. With a vision of empowering communities, we've built a marketplace that benefits everyone—farmers,
          customers, and the environment.
        </p>
      </div>
    </div>
    <div className="achievements-section">
      <div className="image-wrapper">
        <img src="../images/market-girl.jpg" className="market-girl-image" />
      </div>
      <div className="achievements-details">
        <div className="achievements-row">
          <div className="achievement-card">
            <h1>5+ Years</h1>
            <p>Supporting Local Farmers</p>
          </div>
          <div className="achievement-card">
            <h1>50+</h1>
            <p>Partnered Farmers</p>
          </div>
        </div>
        <div className="achievements-row">
          <div className="achievement-card">
            <h1>10,000+</h1>
            <p>Happy Customers</p>
          </div>
          <div className="achievement-card">
            <h1>95%</h1>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
