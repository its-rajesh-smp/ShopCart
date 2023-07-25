import React from "react";
import "./Add.css";

function Add({ path, image }) {
  return (
    <div className=" Add-div ">
      <img src={image} alt="Add" />
    </div>
  );
}

export default Add;
