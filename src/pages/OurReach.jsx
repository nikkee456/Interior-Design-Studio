import React from "react";
import Residential from './images/Residential.jpg'; 
import Hospitality from './images/Hospitality.jpg'; 
import Commercial from './images/Commercial.jpg';
import Navbar2 from '../components/Navbar2';
import Multidisciplinary from './images/Multidisciplinary.jpg';
import Footer from "./Footer";
import "./OurReach.css";

const OurReach = () => {
  const sections = [
    {
      title: "Residential",
      description: `By engaging with our clients and understanding their needs,
      we craft an exquisite range of custom luxury homes that are family-friendly, 
      comfortable, and functional. Each home we design tells a unique story, 
      embodying the essence of exceptional interior design.`,
      link: "#",
      imgSrc: Residential, 
    },
    {
      title: "Hospitality",
      description: `In Hospitality Interior Design, our focus is on business. 
      We aim to enhance the space with a carefully curated style and ambiance, all while optimizing functionality to ensure profitability.`,
      link: "#",
      imgSrc: Hospitality,
    },
    {
      title: "Commercial",
      description: `We remain agile in the fast-evolving world of commercial interiors. 
      Our approach to designing commercial spaces is centered on boosting productivity, 
      reducing time, and efficiently managing budgets.`,
      link: "#",
      imgSrc: Commercial, 
    },
    {
      title: "Multidisciplinary",
      description: `Designing for a wide range of projects across various categories presents both challenges and rewards. 
      It requires blending modern techniques and aesthetics to meet diverse and intricate needs.`,
      link: "#",
      imgSrc: Multidisciplinary,
    },
  ];

  return (
    <div>
      <Navbar2/>
      <br />
    <div className="our-reach-container">
      <h1>Our Reach</h1>
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <img src={section.imgSrc} alt={section.title} className="section-image" />
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <a href={section.link}>Read More</a>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default OurReach;
