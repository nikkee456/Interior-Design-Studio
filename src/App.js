import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Consultation from "./pages/Consultation";
import ContactUs from "./pages/ContactUs";
import Design from "./pages/Design";
import DesignProcess from "./pages/DesignProcess";
import OurReach from "./pages/OurReach";
import ServicesOffered from "./pages/ServicesOffered";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/navbar-2" element={<Navbar2/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/view-portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/our-reach" element={<OurReach />} />
          <Route path="/services" element={<ServicesOffered />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/consultation" element={<Consultation />}/>
          <Route path="/design-process" element={<DesignProcess />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
