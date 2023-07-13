import React from "react";
import "./HomeImageSliderImage.css";

function HomeImageSliderImage({ imageList, index }) {
  return (
    <div className=" HomeImageSliderImage-div ">
      <img src={imageList[index].image} alt="img" />
    </div>
  );
}

export default HomeImageSliderImage;
