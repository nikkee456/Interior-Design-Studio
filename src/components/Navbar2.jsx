import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar2.css';

const Navbar2 = () => {
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
        setShowNavbar(false);
      } else {
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
    <nav className={`navbar2 ${showNavbar ? "visible" : "hidden"}`}>
      <div className="logo2">
        <a href="/">Nook & Luxe</a>
      </div>
      <ul className={`nav-links2 ${menuOpen ? "active" : ""}`}>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/our-reach">Our Reach</Link></li>
        <li 
          className={`dropdown2 ${dropdownOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          <Link to="#" onClick={(e) => e.preventDefault()}>Services Offered</Link>
          <ul className="dropdown-menu2">
            <li><Link to="/services/design">Design</Link></li>
            <li><Link to="/services/consultation">Consultation</Link></li>
          </ul>
        </li>
        <li><Link to="/design-process">Design Process</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <div className="nav-toggle2" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar2;
