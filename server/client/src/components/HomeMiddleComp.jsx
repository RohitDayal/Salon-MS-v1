import React from "react";

const HomeMiddleComp = () => {
  return (
    <>
      <div
        className="container container-sec"
        style={{ backgroundColor: "#e5e5e5" }}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            {/*order-2 order-md-1 */}

            <div className="home-middle-comp home-middle-comp-div1 pt-0 pb-0">
              <div>
                <h6 style={{ color: "#ef6f6f" }}>DECLARE YOUR STYLE</h6>
                <h1>Empower your look. Elevate your game</h1>
                <p>
                  Discover expert grooming to elevate your style and confidence.
                  Our skilled stylists deliver precision haircuts, smooth
                  shaves, and sharp beard trims in a relaxing, upscale
                  environment. Experience the perfect blend of classic
                  techniques and modern trends. Book now and transform your
                  grooming routine.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            {/*order-1 order-md-2 */}
            <div className="home-middle-comp">
              <img src="/assets/images/home-middle-comp-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMiddleComp;
