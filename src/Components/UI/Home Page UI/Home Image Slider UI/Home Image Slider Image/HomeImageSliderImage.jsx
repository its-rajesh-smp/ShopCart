import React from "react";
import "./HomeImageSliderImage.css";

function HomeImageSliderImage(props) {
  return (
    <div className=" HomeImageSliderImage-div ">
      <img src={props.images[props.index]} alt="img" />
    </div>
  );
}

export default HomeImageSliderImage;
