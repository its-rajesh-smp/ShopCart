import React, { useEffect, useRef, useState } from "react";
import "./FilterSection.css";
import { ShowOnMobile } from "../../../Style/Media";
import TopFilter from "../../UI/Product Page UI/Filter Section UI/Top Filter/TopFilter";
import PriceFilter from "../../UI/Product Page UI/Filter Section UI/Price Filter/PriceFilter";
import RatingFilter from "../../UI/Product Page UI/Filter Section UI/Rating Filter/RatingFilter";
import SortFilter from "../../UI/Product Page UI/Filter Section UI/Sort Filter/SortFilter";

function FilterSection(props) {
  const [filter, setFilter] = useState({
    minPrice: "MIN",
    maxPrice: "MAX",
    rating: "NO",
  });

  // Run When Filter Change
  useEffect(() => {
    const filteredArr = props.data.filter((product) => {
      const productPrice = product.price;
      const productRating = Math.floor(product.rating);
      console.log(filter.rating);
      if (
        (productPrice <= filter.maxPrice || filter.maxPrice === "MAX") &&
        (productPrice >= filter.minPrice || filter.minPrice === "MIN") &&
        (productRating == filter.rating || filter.rating === "NO")
      ) {
        return true;
      }
    });

    props.setProductList(filteredArr);
  }, [filter, props.data]);

  return (
    <div className=" FilterSection-div ">
      <TopFilter />
      <PriceFilter setFilter={setFilter} />
      <RatingFilter setFilter={setFilter} />
      <ShowOnMobile>
        <SortFilter />
        <button className="FilterSection-div__applyFilterBTN">
          APPLY FILTER
        </button>
      </ShowOnMobile>
    </div>
  );
}

export default FilterSection;
