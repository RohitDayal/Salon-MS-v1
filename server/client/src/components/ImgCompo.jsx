import React from "react";

const ImgCompo = (props) => {
  const inlineStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };
  return (
    // <div className="img-container">
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 img-container">
      <img src={props.path} alt="gallery-photos" style={inlineStyle} />
    </div>
  );
};

export default ImgCompo;
