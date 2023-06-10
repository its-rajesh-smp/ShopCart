import React, { useRef } from "react";
import "./PriceFilter.css";

function PriceFilter(props) {
  return (
    <div className=" PriceFilter-div filterCard">
      <p className="PriceFilter-div__name">PRICE</p>

      <div>
        <select
          onClick={(e) => {
            props.setFilter((p) => {
              return { ...p, minPrice: e.target.value };
            });
          }}
          name="min"
        >
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
        </select>

        <p>to</p>

        <select
          onClick={(e) => {
            props.setFilter((p) => {
              return { ...p, maxPrice: e.target.value };
            });
          }}
          name="max"
        >
          <option value="60000">60000+</option>
          <option value="10000">10000</option>
          <option value="20000">20000</option>
          <option value="30000">30000</option>
        </select>
      </div>
    </div>
  );
}

export default PriceFilter;
