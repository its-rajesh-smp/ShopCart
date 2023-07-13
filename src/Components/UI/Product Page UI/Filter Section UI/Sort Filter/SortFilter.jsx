import React, { useState } from "react";
import "./SortFilter.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../../Store/Reducer/filterSortReducer";

function SortFilter() {
  return (
    <div className=" SortFilter-div ">
      <p style={{ fontWeight: "500" }}>Sort By</p>
      <SortOption name='POPULARITY' />
      <SortOption name='LOW_HIGH' />
      <SortOption name='HIGH_LOW' />
      <SortOption name='DISCOUNT' />
    </div>
  );
}

export default SortFilter;








/* -------------------------------------------------------------------------- */
/*                            SORT OPTION COMPONENT                           */
/* -------------------------------------------------------------------------- */
function SortOption({ name }) {
  const dispatch = useDispatch()

  // Current Applied Sort
  const { sortBy: appliedSort } = useSelector(state => state.filterSortSlice.filter)


  //  On Click Sort Option
  const onClickSortHandeler = (sortBy) => {
    dispatch(setFilter({ sortBy: sortBy }))
  };


  return (<p
    className={`${appliedSort === name ? "activSort" : ""}`}
    onClick={() => onClickSortHandeler(name)}
  >
    {name}
  </p>)
}