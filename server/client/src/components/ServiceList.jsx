import React from "react";
import Listitem from "./Listitem";
// import Button from './Button';
// Your data as a JavaScript object
const cuttingStyling = [
  {
    name: "Oxygen Blast Facial",
    price: 240,
    duration: 60,
  },
  {
    name: "Oxygen Blast Facial",
    price: 240,
    duration: 60,
  },
  {
    name: "Eyebrow Shaping",
    price: "50 - $97",
    duration: 90,
  },
  {
    name: "Eyebrow Shaping",
    price: "50 - $97",
    duration: 90,
  },
  {
    name: "Four Layer Facial",
    price: 140,
    duration: 90,
  },
  {
    name: "Four Layer Facial",
    price: 140,
    duration: 90,
  },
];
const hairTreatment = [
  {
    name: "Lash Application",
    price: 45,
    duration: 50,
  },
  {
    name: "Lash Application",
    price: 45,
    duration: 50,
  },
  {
    name: "Eyelash Tinting",
    price: 25,
    duration: 120,
  },
  {
    name: "Eyelash Tinting",
    price: 25,
    duration: 120,
  },
  {
    name: "Deep Cleaning Facial",
    price: "130+",
    duration: 55,
  },
  {
    name: "Deep Cleaning Facial",
    price: "130+",
    duration: 55,
  },
  {
    name: "Eyebrow Tinting",
    price: "15+",
    duration: 40,
  },
  {
    name: "Eyebrow Tinting",
    price: "15+",
    duration: 40,
  },
];

const hairColouring = [
  {
    name: "Organic Facial",
    price: 185,
    duration: "1.5 hours",
  },
  {
    name: "Eyelash Tinting",
    price: 25,
    duration: "2 hours",
  },
  {
    name: "Deep Cleaning Facial",
    price: "130+",
    duration: "55 minutes",
  },
  {
    name: "Eyelash Tinting",
    price: 25,
    duration: "2 hours",
  },
  {
    name: "Deep Cleaning Facial",
    price: "130+",
    duration: "55 minutes",
  },
];
const hairExtensions = [
  {
    name: "Organic Facial",
    price: 185,
    duration: "1.5 hours",
  },
  {
    name: "Eyelash Tinting",
    price: 25,
    duration: "2 hours",
  },
  {
    name: "Deep Cleaning Facial",
    price: "130+",
    duration: "55 minutes",
  },
];

const ServiceList = () => {
  return (
    <>
      <div className="service-container"></div>

      <div className="container">
        <div className="row">
          <div className="col-12  col-md-6 col-lg-6">
            <div className="ser-cont-item">
              <h2>Cutting & Styling</h2>
              <Listitem servicesData={cuttingStyling} />
            </div>
          </div>
          <div className="col-12  col-md-6 col-lg-6">
            <div className="ser-cont-item">
              <h2>Hair Treatments</h2>
              <Listitem servicesData={hairTreatment} />
            </div>
          </div>
          <div className="col-12  col-md-6 col-lg-6">
            <div className="ser-cont-item">
              <h2>Hair Colouring</h2>
              <Listitem servicesData={hairColouring} />
            </div>
          </div>
          <div className="col-12  col-md-6 col-lg-6">
            <div className="ser-cont-item">
              <h2>Hair Extensions</h2>
              <Listitem servicesData={hairExtensions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceList;
