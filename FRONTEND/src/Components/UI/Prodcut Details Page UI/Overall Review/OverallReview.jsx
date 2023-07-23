import React from "react";
import "./OverallReview.css";
import OverallRatingBar from "../Overall Rating  Bar/OverallRatingBar";

function OverallReview(props) {
  const maxValue = 1479;

  return (
    <div className=" OverallReview-div ">
      <div className="OverallReview-div_div1">
        <h1>
          <span>4.4</span>⭐
        </h1>
        <p>
          <span>{maxValue}</span> Ratings & <span>209</span> Reviews
        </p>
      </div>

      <div>
        <OverallRatingBar
          number="5"
          maxValue={maxValue}
          color="green"
          value={1470}
        />
        <OverallRatingBar
          number="4"
          maxValue={maxValue}
          color="green"
          value={300}
        />
        <OverallRatingBar
          number="3"
          maxValue={maxValue}
          color="green"
          value={100}
        />
        <OverallRatingBar
          number="2"
          maxValue={maxValue}
          color="orangered"
          value={50}
        />
        <OverallRatingBar
          number="1"
          maxValue={maxValue}
          color="red"
          value={200}
        />
      </div>
    </div>
  );
}

export default OverallReview;
