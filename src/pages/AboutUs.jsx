import React from "react";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import furniture from './images/furniture.jpg';
import interior from './images/interior.jpg';
import decoration from './images/decoration.jpg';

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        {/* Hero Section */}
        <section className="hero">
          <h1>YOUR TRUSTED PARTNER</h1>
          <p>With extensive experience in designing and constructing luxury spaces, we collaborate with renowned international designers, architects, and project managers. Our attention to detail and efficient project management ensures immersive results. With the best interior designers in Mumbai, we serve as your reliable, transparent partner every step of the way.</p>
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn secondary">Contact Us</button>
          </div>
        </section>

        {/* Creative Concept Section */}
        <section className="concept">
          <h2>We Made New Creative Concept</h2>
          <div className="stats">
            <div className="stat-card">
              <h3>10</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3>231</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>20</h3>
              <p>Awards Won</p>
            </div>
          </div>
          <button className="btn">Get Started</button>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2>We Have The Best Interior Design</h2>
          <p>Designing spaces that inspire creativity and comfort.</p>
          <div className="service-gallery">
            <div className="card">
              <img src={furniture} alt="Furniture" />
              <h3>Furniture</h3>
            </div>
            <div className="card">
              <img src={interior} alt="Interior" />
              <h3>Interior</h3>
            </div>
            <div className="card">
              <img src={decoration} alt="Decoration" />
              <h3>Decoration</h3>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
