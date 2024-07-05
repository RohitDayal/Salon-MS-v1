import React from "react";
import { Link } from "react-router-dom";
import HomeMiddleComp from "../components/HomeMiddleComp";
import WeatherComponent from "../components/WeatherComponent";
// import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("/assets/images/hero-banner-top.jpg")',
  };
  return (
    <>
      <div className="home-section" style={backgroundImageStyle}>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6" style={{ textAlign: "left" }}>
              <h1 className="heading-text">The Salon That Gives You Style</h1>
              <h5 className="sub-heading-text">
                Expert haircuts, precise shaves, and stylish beard trims
                tailored to perfection
              </h5>
              <div className="button-container">
                <Link to="/services" className="salon-menu-btn shadow">
                  VIEW SALON MENU
                </Link>
                <Link
                  to="/book"
                  className="salon-booking-btn shadow ms-4"
                >
                 BOOK APPOINTMENT
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 opening-hour-container">
              <div className="opening-hour-bottom-right">
                <h2 className="opening-hour">
                  Opening Hours
                  <div className="time-scchedule">
                    <p>Mon - Fri: 9:00AM - 8:00PM</p>
                    <p>Sat - Sun: 9:00AM - 8:00PM</p>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section-middle">
        <p>YOUR HAIR, YOUR STYLE</p>
        <h1>Services for progressive or traditional gentlemen</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="custom-div">
              <img src="/assets/images/home-section-middle-1.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4 mt-md-0 mb-md-0 mt-3 mb-3">
            <div className="custom-div-middle-1">
              <h2>Don’t be ordinary, be extraordinary</h2>
              <p>
                Sagittis congue augue an egestas integer velna purus purus magna
                libero suscipit and egestas magna undo aliquam ipsum purus lorem
                ipsum dolar
              </p>
            </div>

            <div className="custom-div-middle-2">
              <img src="/assets/images/home-section-middle-2.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="custom-div">
              <img src="/assets/images/home-section-middle-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container container-sec">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-section-icon">
              <img
                src="/assets/icons/man-hair.png"
                alt="haircut"
                className="home-page-service-icon"
              />
              <h3>Haircut</h3>
              <p>
                Transform your look with our exceptional haircutting services.
                Book now!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-section-icon">
              <img
                src="/assets/icons/razor.png"
                alt="razor"
                className="home-page-service-icon"
              />
              <h3>Moustache Trim</h3>
              <p>
                Refine your style with a precise moustache trim. Book today!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-section-icon">
              <img
                src="/assets/icons/shaving.png"
                alt="face save"
                className="home-page-service-icon"
              />
              <h3>Face Shave</h3>
              <p>
                Experience the smoothest shave tailored to your skin. Book now!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-section-icon">
              <img
                src="/assets/icons/barber-shop.png"
                alt="haircut"
                className="home-page-service-icon"
              />
              <h3>Beard Trim</h3>
              <p>
                Craft your perfect look with our expert beard grooming services.
                Book now!
              </p>
            </div>
          </div>
        </div>
      </div>

      <HomeMiddleComp />

      {/* <HeroBanner /> */}

      <WeatherComponent/>
    </>
  );
};

export default Home;
