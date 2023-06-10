import React from "react";
import "./PriceFilter.css";

function PriceFilter(props) {
  return (
    <div className=" PriceFilter-div filterCard">
      <p className="PriceFilter-div__name">PRICE</p>

      <div>
        <select
          value={props.filter.minPrice}
          onChange={(e) => {
            props.setFilter((p) => {
              return { ...p, minPrice: e.target.value };
            });
          }}
          name="min"
        >
          <option value="MIN">MIN</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="3000">3000</option>
        </select>
        <p>to</p>
        <select
          value={props.filter.maxPrice}
          onChange={(e) => {
            props.setFilter((p) => {
              return { ...p, maxPrice: e.target.value };
            });
          }}
          name="max"
        >
          <option value="MAX">MAX</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="30000">30000</option>
          <option value="10000">{"10,000"}</option>
        </select>
      </div>
    </div>
  );
}

export default PriceFilter;
