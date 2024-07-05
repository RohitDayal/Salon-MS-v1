import React from "react";
import TopBanner from "../components/TopBanner";
import ServiceList from "../components/ServiceList";
import ImageGallery from "../components/ImageGallery";
import SalonSchedule from "../components/SalonSchedule ";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <TopBanner
        heading="Hair Services"
        someLine="It's time to give your hair some love"
        imageUrl="linear-gradient(rgba(4,9,30,0.3), rgba(4,9,30,0.2)), url('/assets/images/hair-services-banner.jpg')"
      />
      <ServiceList />
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

      <SalonSchedule />
    </>
  );
};

export default Services;
