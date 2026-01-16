import React from "react";
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import Footer from "./Footer";
import './DesignProcess.css';
import Navbar2 from "../components/Navbar2";

const DesignProcess = () => {
  return (
    <div>
      <Navbar2/>
      <br />
    <div className="design-process-page">

      <div className="intro-section">
        <div className="intro-overlay"></div> 
        <h1 className="section-heading">DESIGN PROCESS</h1> 
        <p>
          Our creative process develops through understanding the key parameters for the project, 
          from which we use clear strategic thinking to produce contemporary and innovative designs 
          that respond individually to the clients’ requirements. Chie Design has a resourceful and 
          talented team who understands the science behind a successful project. From the outset of 
          each project, we assist the client in assembling appropriate consultant advice and work 
          tirelessly to ensure each design is executed to the highest standard and delivered within 
          typically challenging budgets and timescales.
        </p>
      </div>

      {/* Design Process Section */}
      <div className="design-process-section">
        {/* First Block */}
        <div className="process-block">
          <video autoPlay loop muted width="50%">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="process-content">
            <h2>DESIGN</h2>
            <h3>DESIGN CONCEPTUALIZATION</h3>
            <ul>
              <li>Client Brief</li>
              <li>Look and Feel Style</li>
              <li>Spatial Planning</li>
            </ul>
            <h3>DESIGN CONSOLIDATION</h3>
            <ul>
              <li>Schematic Design</li>
              <li>Detail Design Development</li>
              <li>3D Visualization</li>
            </ul>
            <h3>PROJECT SPECIFICATIONS</h3>
            <ul>
              <li>Technical Services</li>
              <li>Material Finalization</li>
            </ul>
          </div>
        </div>

        {/* Second Block */}
        <div className="process-block reversed">
          <div className="process-content">
            <h2>EXECUTION</h2>
            <h3>CONTRACT MANAGEMENT</h3>
            <ul>
              <li>BOQ’s and Tender documentation</li>
              <li>Comparative Analysis</li>
              <li>Contractor / Vendor appointments</li>
            </ul>
            <h3>PROJECT DOCUMENTATION AND SUPERVISION</h3>
            <ul>
              <li>Quality Control through GFC packages</li>
              <li>Design Consistency through site reviews</li>
              <li>Coordination and Project Management</li>
            </ul>
            <h3>COMPLETION AND HANDOVER</h3>
            <ul>
              <li>Finishing stage and Set up</li>
              <li>Handover Documents</li>
            </ul>
          </div>
          <video autoPlay loop muted width="50%">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Third Block */}
        <div className="process-block">
          <video autoPlay loop muted width="50%">
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="process-content">
            <h2>DECOR & STYLING</h2>
            <h3>FURNITURE SOLUTIONS</h3>
            <ul>
              <li>Indoor and Outdoor Customization</li>
              <li>Sourcing</li>
            </ul>
            <h3>DÉCOR SELECTION</h3>
            <ul>
              <li>Soft Furnishings</li>
              <li>Decorative lighting</li>
              <li>Accessories</li>
            </ul>
            <h3>ART CONSULTANCY</h3>
            <ul>
              <li>Ideation</li>
              <li>Selection / Collaboration</li>
              <li>Installation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DesignProcess;
