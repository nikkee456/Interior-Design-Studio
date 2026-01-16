import React from "react";
import ImageSlider from "./ImageSlider";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const Portfolio = () => {
  const slides = [
    { url: image1, title: "Modern Living Room" },
    { url: image2, title: "Elegant Bedroom" },
    { url: image3, title: "Minimalist Kitchen" },
  ];

  const containerStyles = {
    width: "80%",
    height: "400px",
    margin: "20px auto",
  };

  return (
    
    <div className="portfolio-container">
      <h2 className="text-center my-4">My Portfolio</h2>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Portfolio;
