import React from "react";
import ImgCompo from "./ImgCompo";

const ImageGallery = () => {
  const imagePaths = [
    "/assets/gallery/hair_01-2-400x500.jpg",
    "/assets/gallery/hair_01-400x500.jpg",
    "/assets/gallery/hair_02-400x500.jpg",
    "/assets/gallery/hair_04-400x500.jpg",
    "/assets/gallery/hair_07-400x500.jpg",
    "/assets/gallery/hair_cut-600x750.jpg",
    "/assets/gallery/hero-4-2-400x500.jpg",
    "/assets/gallery/img-01-400x500.jpg",
    "/assets/gallery/img-08-600x750.jpg",
    "/assets/gallery/img-09-600x750.jpg",
    "/assets/gallery/hair_01-2-400x500.jpg",
    "/assets/gallery/hair_01-400x500.jpg",
  ];
  return (
    <>
      {/* <div className="gallery-container">
        {imagePaths.map((path, index) => (
          <ImgCompo key={index} path={path} />
        ))}
      </div> */}
      <div className="container-fluid">
        <div className="row gallery-container">
          {imagePaths.map((path, index) => (
            <ImgCompo key={index} path={path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
