import React, { useEffect, useState } from "react";
import "./HomeImageSlider.css";
import HomeImageSliderImage from "../../UI/Home Page UI/Home Image Slider UI/Home Image Slider Image/HomeImageSliderImage";
import HomeImageSliderBtn from "../../UI/Home Page UI/Home Image Slider UI/Home Image Slider Btn/HomeImageSliderBtn";
import { useSelector } from "react-redux";

function HomeImageSlider(props) {

  const sliderImageList = useSelector(state => state.homeProductSlice.sliderList)

  // State To Change Index of slider image
  const [imageIndex, setImageIndex] = useState(0);


  // On Left Click
  const onLeftClick = () => {
    setImageIndex((p) => {
      if (p === 0) {
        return 2;
      } else {
        return p - 1;
      }
    });
  };

  //   On Right Click
  const onRightClick = () => {
    setImageIndex((p) => {
      if (p === 2) {
        return 0;
      } else {
        return p + 1;
      }
    });
  };

  return (
    sliderImageList.length !== 0 &&
    <div className=" HomeImageSlider-div ">
      <HomeImageSliderBtn onClick={onLeftClick} icon="<" />
      <HomeImageSliderImage index={imageIndex} imageList={sliderImageList} />
      <HomeImageSliderBtn onClick={onRightClick} icon=">" />
    </div>
  );
}

export default HomeImageSlider;
