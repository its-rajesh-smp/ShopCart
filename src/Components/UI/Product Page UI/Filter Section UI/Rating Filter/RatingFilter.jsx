import React from "react";
import "./RatingFilter.css";

function RatingFilter(props) {
  // On Click Rating
  const onChangeHandeler = (e) => {
    props.setFilter((p) => {
      return { ...p, rating: e.target.value };
    });
  };

  return (
    <div className=" RatingFilter-div filterCard">
      <p className="RatingFilter-div__name">CUSTOMER RATINGS</p>
      <div className="RatingFilter-div__ratingContainer">
        <div className="RatingFilter-div__rating">
          <input
            onChange={onChangeHandeler}
            name="rating_radio_filter"
            type="radio"
            value={5}
          />
          <p>5 ⭐</p>
        </div>

        <div className="RatingFilter-div__rating">
          <input
            onChange={onChangeHandeler}
            name="rating_radio_filter"
            type="radio"
            value={4}
          />
          <p>4 ⭐</p>
        </div>

        <div className="RatingFilter-div__rating">
          <input
            onChange={onChangeHandeler}
            name="rating_radio_filter"
            type="radio"
            value={3}
          />
          <p>3 ⭐</p>
        </div>

        <div className="RatingFilter-div__rating">
          <input
            onChange={onChangeHandeler}
            name="rating_radio_filter"
            type="radio"
            value={2}
          />
          <p>2 ⭐</p>
        </div>
        <div className="RatingFilter-div__rating">
          <input
            onChange={onChangeHandeler}
            name="rating_radio_filter"
            type="radio"
            value={1}
          />
          <p>1 ⭐ </p>
        </div>
      </div>
    </div>
  );
}

export default RatingFilter;
