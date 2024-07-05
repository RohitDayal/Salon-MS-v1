import React from "react";

const MiddleAbout = () => {
  return (
    <>
      <div className="about-section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-section-left">
                <h4 className="text-danger">MIND, BODY AND SOUL</h4>
                <h1>Luxury salon where you will feel unique</h1>
                <p>
                  Congue augue sagittis egestas integer velna purus purus magna
                  nec suscipit and egestas magna an aliquam ipsum vitae and
                  purus justo ligula ipsum primis cubilia gravida augue and
                  luctus egestas vitae molestie donec libero
                </p>
                <div className="about-image-left">
                  <img
                    src="/assets/images/about-salon-03.jpg"
                    alt="about-left"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-section-right row">
                <div className="about-image-right order-2 order-md-1">
                  <img
                    src="/assets/images/about-salon-02.jpg"
                    alt="about-right"
                  />
                </div>
                <p className="order-1 order-md-2">
                  Adipisicing elit. Ab, nisi. Vitae ullam est, facere id quia,
                  porro fuga aut cupiditate voluptas repellendus eum saepe
                  suscipit atque quasi maxime, consequatur labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleAbout;
