import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        // Scrolling down and past 50px, hide the navbar
        setShowNavbar(false);
      } else {
        // Scrolling up or near the top, show the navbar
        setShowNavbar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="logo">
        <a href="/">Nook & Luxe</a>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/our-reach">Our Reach</Link>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          <Link to="/services">Services Offered</Link>
          <ul className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
            <li>
              <Link to="/services/design">Design</Link>
            </li>
            <li>
              <Link to="/services/consultation">Consultation</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/design-process">Design Process</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className="nav-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
