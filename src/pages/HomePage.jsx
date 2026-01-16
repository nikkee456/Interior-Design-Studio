import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Portfolio from './Portfolio';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './HomePage.css';

const HomePage = () => {
    const fullText =  "Crrafting spaces that inspire, reflect, and elevate your style.";
    const [typedText, setTypedText] = useState(""); 
    const typingSpeed = 50;
    const hireUsRef = useRef(null);
  
    useEffect(() => {
      let currentIndex = 0;
  
      const type = () => {
        if (currentIndex < fullText.length-1) {
          setTypedText((prev) => prev + fullText[currentIndex]);
          currentIndex ++;
        }
      };
  
      const typingInterval = setInterval(type, typingSpeed);
  
      return () => clearInterval(typingInterval);
    }, [fullText]);

    const scrollToHireUs = () => {
        hireUsRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    };
    const navigate = useNavigate();

    const redirectToPortfolio = () => {
        navigate('/view-portfolio'); // Navigate to Portfolio page
    };
   
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Nook & Luxe</h1>
          <h2>INTERIOR DESIGN STUDIO</h2>
          <p className="typing-text">{typedText}</p>
          <div className="hero-buttons">
            <a href="/design-process" className="hero-button">Design Process</a>
            <a href="/our-reach" className="hero-button">Our Reach</a>
            <a href="/contact-us" className="hero-button">Contact Us</a>
          </div>
        </div>
      </header>


      {/* Text Paragraph Section */}
      <section className="about-section">
        <h2>Your Trusted Partner in Design Excellence</h2>
        <p>
          At Nook & Luxe, we have years of experience working with famous designers, architects, and project managers from all over the world. 
          This means we know how to help you bring your ideas to life. Our team in Mumbai is highly creative at making beautiful spaces. 
          We pay close attention to every little detail, from the beginning of your project to the end, everything must be perfect, but on time. 
          You don’t have to worry about a thing – we’ll take care of all aspects and keep you updated along the way. With us on your side, you’ll have 
          a trustworthy partner helping you through every step of your design journey. We promise to make your vision a reality and give you amazing results that you’ll love.
        </p>
        <p>Let’s Create Timeless Luxury Together: Ready to Create Your Dream Space?</p>
        <div className="about-links">
                    <button className="about-button" onClick={scrollToHireUs}>
                        Schedule a Consultation
                    </button>
                    <button className="about-button" onClick={redirectToPortfolio}>
                    View Our Portfolio
                    </button>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="testimonials-section">
  <h2>TESTIMONIALS</h2>
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <img src="https://i.pinimg.com/736x/f2/cd/a1/f2cda1e4b115aee220100633190fa9d8.jpg" alt="Anand Bhatt" className="client-image" />
      <h3>Alicia Romana</h3>
      <p className="client-title">Senior PM, Mace Project & Cost Management Pvt. Ltd., Mumbai, India</p>
      <p className="client-review">
        Mithila is extremely knowledgeable about every aspect of interior design. She is professional, 
        reliable, and always available for the assigned project. <a href="/read-more">Read More</a>
      </p>
    </div>
    <div className="testimonial-card">
      <img src="https://i.pinimg.com/736x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg" alt="Satish Tamba" className="client-image" />
      <h3>Satish Bhat</h3>
      <p className="client-title">Founder & CEO, Racheta Interiors, Mumbai, India</p>
      <p className="client-review">
        I have known Mithila for quite a while now and have had the pleasure of working with her on various large-scale 
        luxury projects.<a href="/read-more">Read More</a>
      </p>
    </div>
    <div className="testimonial-card">
      <img src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920" alt="Satish Tamba" className="client-image" />
      <h3>Damayanti Tyagi</h3>
      <p className="client-title">CEO, Maker Bhavan Foundation, Alto, CA, USA </p>
      <p className="client-review">
      Mithila is a class act among interior designers. She was the project lead for the redesign of my previous office at IIT Bombay Alumni Association. <a href="/read-more">Read More</a>
      </p>
    </div>
  </div>
</section>


<section className="hire-us-section" ref={hireUsRef}>
  <div className="hire-us-container">
    <div className="hire-us-content">
      <h2>HIRE US</h2>
    </div>
    <div className="hire-us-form-container">
      <form className="hire-us-form">
        <label>
          Full Name *
          <input type="text" name="fullName" required />
        </label>
        <label>
          Mobile Number *
          <input type="tel" name="mobileNumber" required />
        </label>
        <label>
          Email Address *
          <input type="email" name="email" required />
        </label>
        <label>
          Location *
          <input type="text" name="location" required />
        </label>
        <label>
          Message
          <textarea name="message"></textarea>
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};

export default HomePage;  