import React from "react";
import "./ContactUs.css";
import Footer from "./Footer";
import Navbar2 from '../components/Navbar2';

const ContactUs = () => {
  return (
    <>
    <Navbar2/>
    <br />
    <br />
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <br />
          <div className="info">
            <p><i className="fas fa-phone"></i>+91 987 65 43 210</p>
            <p><i className="fas fa-envelope"></i>projects@nookluxe.in</p>
            <p><i className="fas fa-map-marker-alt"></i>L9, Green View Tower,<br />
          Plot No. D-23, Bandra-Kurla Complex (BKC),<br />
            Bandra (East), Mumbai 400051 </p>
          </div>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-discord"></i>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <div className="input-box">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input-box">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-box">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input-box">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 012 3456 789" />
              </div>
            </div>
            <div className="input-box">
              <label>Message</label>
              <textarea placeholder="Write your message..."></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
