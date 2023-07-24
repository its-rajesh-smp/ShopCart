import React from "react";
import "./AddsCardContainer.css";
import Add from "../../UI/Home Page UI/Adds Card Container UI/Add/Add";
import { useSelector } from "react-redux";

function AddsCardContainer() {

  const addsList = useSelector((state) => state.homeProductSlice.addsList);


  return (
    <div className=" AddsCardContainer-div ">
      {addsList.map((add) => {
        return <Add key={Math.random()} src={add} />;
      })}
    </div>
  );
}

export default AddsCardContainer;
