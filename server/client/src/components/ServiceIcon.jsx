import React from "react";
// import ImgCompo from './ImgCompo';

const ServiceIcon = () => {
  const services = [
    { path: "/assets/icons/facial-massage.png", name: "Facial" },
    { path: "/assets/icons/eyelashes.png", name: "Eyelashe" },
    { path: "/assets/icons/human-eyebrow.png", name: "Eyebrow" },
    { path: "/assets/icons/beauty.png", name: "Beauty" },
    { path: "/assets/icons/wax.png", name: "Waxing" },
    { path: "/assets/icons/nails-polish.png", name: "Nails" },
  ];
  return (
    <>
      <div className="container" style={{ marginBottom: "3rem" }}>
        <div className="service-icon-top-sec">
          <p>INDULGE IN YOURSELF</p>
          <h1>Feel Yourself More Beautiful</h1>
          <p className="px-md-5 py-md-4 py-4 m-auto col-md-9">
            Congue augue sagittis egestas integer velna purus purus magna nec
            suscipit and egestas magna aliquam ipsum vitae purus justo lacus
            ligula and ipsum lacinia primis cubilia
          </p>
        </div>
      </div>

      {/* <div className="service-icon-bottom"> */}
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={index}>
              <div className="service-section-icon">
                <img
                  src={service.path}
                  alt={service.name}
                  className="service-icon"
                />
                <h1>{service.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ServiceIcon;
