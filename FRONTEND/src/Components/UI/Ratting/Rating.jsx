import React from "react";
import "./Rating.css";

function Rating(props) {
  return (
    <div className=" Rating-div ">
      <p>{props.data}</p>
      <i className="bx bxs-star"></i>
    </div>
  );
}

export default Rating;
