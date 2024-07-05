import React from "react";
import Button from "./Button";

const HeroBanner = () => {
      const backgroundImageStyle = {
          color: "white",
          height: "600px",
        backgroundImage: 'url("/assets/images/hero-banner-back.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      };
  return (
    <div className="hero-banner" style={backgroundImageStyle}>
      <div className="hero-left">
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          doloribus odio quaerat.
        </h1>
      </div>
      <div className="hero-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae
        repellat esse optio dignissimos impedit. Culpa quidem voluptatem
        voluptatum et officiis reprehenderit aliquid.
      </div>
      <div className="hero-bottom">
        <Button 
        route = '/login' 
        name="Signup for free" 
        bgColor="#4e4fe9" 
        color="white" 
        />
      </div>
    </div>
  );
};

export default HeroBanner;
