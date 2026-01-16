import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h3>NOOK & LUXE LLP</h3>
          <p>
          L9, Green View Tower,<br />
          Plot No. D-23, Bandra-Kurla Complex (BKC),<br />
            Bandra (East), Mumbai 400051
          </p>
          <p>+91 987 65 43 210</p>
          <p>projects@nookluxe.in</p>
        </div>

        {/* Middle Left Section */}
        <div className="footer-section">
          <h3>OTHER LINKS</h3>
          <ul>
            <li>About Us</li>
            <li>Our Reach</li>
            <li>Design Process</li>
            <li>Projects</li>
            <li>Career</li>
            <li>FAQ's</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Middle Right Section */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Interior Design</li>
            <li>Design Build</li>
            <li>Outsourced Design</li>
            <li>Turnkey Solutions</li>
            <li>Get in touch</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3>LOCATIONS</h3>
          <ul>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Bangalore</li>
            <li>Goa</li>
            <li>Qatar</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 | Nook & Luxe LLP | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
