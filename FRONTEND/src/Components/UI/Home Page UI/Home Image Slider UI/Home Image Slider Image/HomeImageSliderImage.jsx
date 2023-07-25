import React from "react";
import "./HomeImageSliderImage.css";

function HomeImageSliderImage({ products, index }) {
  return (
    <div className=" HomeImageSliderImage-div ">
      <img src={products[index].image} alt="img" />
    </div>
  );
}

export default HomeImageSliderImage;
