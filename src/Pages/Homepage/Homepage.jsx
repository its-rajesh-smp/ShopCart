import React from "react";
import "./Homepage.css";
import NavCategory from "../../Components/Home Page/Nav Category/NavCategory";
import HomeImageSlider from "../../Components/Home Page/Home Image Slider/HomeImageSlider";
import AddsCardContainer from "../../Components/Home Page/Adds Card Container/AddsCardContainer";
import { useSelector } from "react-redux";

function Homepage(props) {
  const selector = useSelector((state) => state.homeProductSlice);

  return (
    <div className=" Homepage-div remove__Header">
      <NavCategory categoryList={selector.categoryList} />
      <HomeImageSlider sliderImgList={selector.sliderList} />
      <AddsCardContainer addsList={selector.addsList} />
    </div>
  );
}

export default Homepage;
