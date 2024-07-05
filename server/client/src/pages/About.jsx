import React from "react";
import TopBanner from "../components/TopBanner";
import MiddleAbout from "../components/MiddleAbout";
// import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import ServiceIcon from "../components/ServiceIcon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <TopBanner
        heading="About SaLoon"
        someLine="Luxury salon where you will feel unique and special"
        imageUrl="linear-gradient(rgba(4,9,30,0.3), rgba(4,9,30,0.2)), url('/assets/images/about-banner.jpg')"
      />
      <MiddleAbout />

      <div className="text-center text-light py-5 m-3">
        <Link to="/book" className="salon-menu-btn shadow">
          BOOK APPOINTMENT
        </Link>
      </div>

      <ImageGallery />
      <div className="text-center text-light py-5 m-3">
        <Link to="/gallery" className=" visit-our-gallery-btn shadow ">
          VISIT OUR GALLERY
        </Link>
      </div>

      <ServiceIcon />
    </>
  );
};

export default About;
