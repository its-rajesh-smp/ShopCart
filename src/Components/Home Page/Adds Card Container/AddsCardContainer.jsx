import React from "react";
import "./AddsCardContainer.css";
import Add from "../../UI/Home Page UI/Adds Card Container UI/Add/Add";
import { useSelector } from "react-redux";

function AddsCardContainer(props) {
  const addsList = useSelector(state => state.homeProductSlice.addsList)

  return (
    <div className=" AddsCardContainer-div ">
      {addsList.map((add) => {
        return <Add key={Math.random()} image={add.image} />;
      })}
    </div>
  );
}

export default AddsCardContainer;
