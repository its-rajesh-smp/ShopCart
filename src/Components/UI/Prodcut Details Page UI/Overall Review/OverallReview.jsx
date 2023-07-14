import React from "react";
import "./OverallReview.css";
import OverallRatingBar from "../Overall Rating  Bar/OverallRatingBar";

// To Show Dyncamic Used Math.Random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function OverallReview({ productDetails }) {
  const one = getRndInteger(0, 300)
  const two = getRndInteger(100, 150)
  const three = getRndInteger(20, 300)
  const four = getRndInteger(0, 500)
  const five = getRndInteger(100, 1000)
  const maxValue = one + two + three + four + five;



  return (
    <div className=" OverallReview-div ">
      <div className="OverallReview-div_div1">
        <h1>
          <span>{productDetails.rating}</span>⭐
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
          value={five}
        />
        <OverallRatingBar
          number="4"
          maxValue={maxValue}
          color="green"
          value={four}
        />
        <OverallRatingBar
          number="3"
          maxValue={maxValue}
          color="green"
          value={three}
        />
        <OverallRatingBar
          number="2"
          maxValue={maxValue}
          color="orangered"
          value={two}
        />
        <OverallRatingBar
          number="1"
          maxValue={maxValue}
          color="red"
          value={one}
        />
      </div>
    </div>
  );
}

export default OverallReview;
