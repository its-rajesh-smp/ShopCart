import React from "react";
import "./RatingFilter.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../../../Store/Reducer/filterSortReducer";

function RatingFilter(props) {
  const dispatch = useDispatch()

  // On Click Rating
  const onChangeHandeler = (rating) => {
    dispatch(setFilter({ rating: rating }))
  };

  return (
    <div className=" RatingFilter-div filterCard">
      <p className="RatingFilter-div__name">CUSTOMER RATINGS</p>
      <div className="RatingFilter-div__ratingContainer">
        <div className="RatingFilter-div__rating">
          <input
            onChange={(e) => { onChangeHandeler(e.target.value) }}
            name="rating_radio_filter"
            type="radio"
            value={5}
          />
          <p>5 ⭐</p>
        </div>

        <div className="RatingFilter-div__rating">
          <input
            onChange={(e) => { onChangeHandeler(e.target.value) }}
            name="rating_radio_filter"
            type="radio"
            value={4}
          />
          <p>4 ⭐</p>
        </div>

        <div className="RatingFilter-div__rating">
          <input
            onChange={(e) => { onChangeHandeler(e.target.value) }}
            name="rating_radio_filter"
            type="radio"
            value={3}
          />
          <p>3 ⭐</p>
        </div>

        <div className="RatingFilter-div__rating">
          <input
            onChange={(e) => { onChangeHandeler(e.target.value) }}
            name="rating_radio_filter"
            type="radio"
            value={2}
          />
          <p>2 ⭐</p>
        </div>
        <div className="RatingFilter-div__rating">
          <input
            onChange={(e) => { onChangeHandeler(e.target.value) }}
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
