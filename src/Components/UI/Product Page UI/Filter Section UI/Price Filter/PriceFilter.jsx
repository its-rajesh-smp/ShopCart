import React from "react";
import "./PriceFilter.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../../Store/Reducer/filterSortReducer";

function PriceFilter(props) {
  const dispatch = useDispatch();

  const onChangeMaxPriceHandeler = (price) => {
    if (price !== "MAX") {
      dispatch(setFilter({ minPrice: price }));
    } else {
      dispatch(setFilter({ minPrice: "MAX" }));
    }
  };
  const onChangeMinPriceHandeler = (price) => {
    if (price !== "MIN") {
      dispatch(setFilter({ maxPrice: price }));
    } else {
      dispatch(setFilter({ maxPrice: "MIN" }));
    }
  };

  return (
    <div className=" PriceFilter-div filterCard">
      <p className="PriceFilter-div__name">PRICE</p>

      <div>
        <select
          onChange={(e) => {
            onChangeMaxPriceHandeler(e.target.value);
          }}
          name="min"
        >
          <option value="MIN">MIN</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={3000}>3000</option>
        </select>
        <p>to</p>
        <select
          onChange={(e) => {
            onChangeMinPriceHandeler(e.target.value);
          }}
          name="max"
        >
          <option value="MAX">MAX</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={30000}>30000</option>
          <option value={10000}>{"10,000"}</option>
        </select>
      </div>
    </div>
  );
}

export default PriceFilter;
