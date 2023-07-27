import React, { useState } from "react";
import "./HomeImageSlider.css";
import HomeImageSliderImage from "../../UI/Home Page UI/Home Image Slider UI/Home Image Slider Image/HomeImageSliderImage";
import HomeImageSliderBtn from "../../UI/Home Page UI/Home Image Slider UI/Home Image Slider Btn/HomeImageSliderBtn";
import useFetch from "../../../Hooks/useFetch";
import { GET_SLIDER_PRODUCTS } from "../../../API/endpoints";


function HomeImageSlider() {

  // FETCHING SLIDER PRODUCTS FROM DATABASE
  const [sliderProductList] = useFetch(GET_SLIDER_PRODUCTS)


  const [productIndex, setProductIndex] = useState(0);
  // On Left Click
  const onLeftClick = () => {
    setProductIndex((p) => {
      if (p === 0) {
        return 2;
      } else {
        return p - 1;
      }
    });
  };

  //   On Right Click
  const onRightClick = () => {
    setProductIndex((p) => {
      if (p === 2) {
        return 0;
      } else {
        return p + 1;
      }
    });
  };

  return (
    sliderProductList &&
    <div className=" HomeImageSlider-div ">
      <HomeImageSliderBtn onClick={onLeftClick} icon="<" />
      <HomeImageSliderImage index={productIndex} products={sliderProductList} />
      <HomeImageSliderBtn onClick={onRightClick} icon=">" />
    </div>
  );
}

export default HomeImageSlider;
