import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About eShop</h1>
        <p>
          At eShop we aim to offer great products and a simple, fast shopping experience.
        </p>
      </div>

      
        <div className="about-text">
          <h2>Who are we?</h2>
          <p>
            eShop is an online store where you find quality products at fair prices. Our team is passionate about technology and customer service.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to bring technology closer to you and make online shopping easier and more enjoyable.
          </p>

          <h2>Why choose us?</h2>
          <ul>
            <li>Quality, verified products</li>
            <li>Fast and reliable delivery</li>
            <li>Friendly customer support</li>
            <li>Easy and transparent returns</li>
          </ul>
      </div>
    </div>
  );
}

export default AboutUs;