import React from "react";
import "./AddsCardContainer.css";
import Add from "../../UI/Home Page UI/Adds Card Container UI/Add/Add";

function AddsCardContainer(props) {
  return (
    <div className=" AddsCardContainer-div ">
      {props.addsList.map((add) => {
        return <Add key={Math.random()} src={add} />;
      })}
    </div>
  );
}

export default AddsCardContainer;
