import React, { useState } from "react";
import "./SortFilter.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../../Store/Reducer/filterSortReducer";

function SortFilter(props) {
  const filter = useSelector(state => state.filterSortSlice.filter)
  const dispatch = useDispatch()

  // On Click Any Sort
  const onClickSortHandeler = (sortBy) => {
    dispatch(setFilter({ sortBy: sortBy }))
  };

  return (
    <div className=" SortFilter-div ">
      <p style={{ fontWeight: "500" }}>Sort By</p>
      <p
        className={`${filter.sortBy === "popularity" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("popularity")}
      >
        Popularity
      </p>
      <p
        className={`${filter.sortBy === "low_to_high" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("low_to_high")}
      >
        Price--Low to High
      </p>
      <p
        className={`${filter.sortBy === "high_to_low" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("high_to_low")}
      >
        Price--High to Low
      </p>
      <p
        className={`${filter.sortBy === "reviews" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("reviews")}
      >
        Reviews
      </p>
      <p
        className={`${filter.sortBy === "discount" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("discount")}
      >
        Discount
      </p>
    </div>
  );
}

export default SortFilter;
