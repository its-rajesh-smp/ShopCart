import React, { useState } from "react";
import "./SortFilter.css";

function SortFilter(props) {
  const [selected, setSelected] = useState("popularity");

  // On Click Any Sort
  const onClickSortHandeler = (sortBy) => {
    props.setProductList((p) => {
      setSelected(sortBy);
      const sortedArr = p.sort((item1, item2) => {
        if (sortBy === "popularity") {
          return item2.price - item1.price;
        } else if (sortBy === "low_to_high") {
          return item1.price - item2.price;
        } else if (sortBy === "high_to_low") {
          return -item1.price + item2.price;
        } else if (sortBy === "reviews") {
          return item1.price - item2.price;
        } else if (sortBy === "discount") {
          return -item1.discountPercentage + item2.discountPercentage;
        }
      });
      return [...sortedArr];
    });
  };

  return (
    <div className=" SortFilter-div ">
      <p style={{ fontWeight: "500" }}>Sort By</p>
      <p
        className={`${selected === "popularity" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("popularity")}
      >
        Popularity
      </p>
      <p
        className={`${selected === "low_to_high" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("low_to_high")}
      >
        Price--Low to High
      </p>
      <p
        className={`${selected === "high_to_low" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("high_to_low")}
      >
        Price--High to Low
      </p>
      <p
        className={`${selected === "reviews" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("reviews")}
      >
        Reviews
      </p>
      <p
        className={`${selected === "discount" ? "activSort" : ""}`}
        onClick={() => onClickSortHandeler("discount")}
      >
        Discount
      </p>
    </div>
  );
}

export default SortFilter;
