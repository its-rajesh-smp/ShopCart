import React, { useEffect, useState } from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../Hooks/useFetchProduct";
import { useSelector } from "react-redux";

function Productpage(props) {
  const param = useParams();
  const data = useFetchProduct(param.category);
  const myFilter = useSelector((state) => state.filterSortSlice.filter);



  /* -------------------------------------------------------------------------- */
  /*                                  FILTERING                                 */
  /* -------------------------------------------------------------------------- */
  const filteredArr = data.filter((product) => {
    const price = product.price;
    const rating = Math.floor(product.rating);
    if (
      (price <= myFilter.maxPrice || myFilter.maxPrice == "") &&
      (price >= myFilter.minPrice || myFilter.minPrice == "") &&
      (rating == myFilter.rating || myFilter.rating == "")
    ) {
      return true;
    }
  });


  /* -------------------------------------------------------------------------- */
  /*                                   SORTING                                  */
  /* -------------------------------------------------------------------------- */
  if (myFilter.sortBy === "popularity") {
  } else if (myFilter.sortBy === "low_to_high") {
    filteredArr.sort((item1, item2) => {
      return -item2.price + item1.price;
    });
  } else if (myFilter.sortBy === "high_to_low") {
    filteredArr.sort((item1, item2) => {
      return item2.price - item1.price;
    });
  } else if (myFilter.sortBy === "discount") {
    filteredArr.sort((item1, item2) => {
      return item2.discountPercentage - item1.discountPercentage;
    });
  } else if (myFilter.sortBy === "popularity") {
    filteredArr.sort((item1, item2) => {
      return item2.price - item1.price;
    });
  }


  return (
    data && (
      <div className=" Productpage-div remove__Header ">
        <ShowOnDesktop>
          <FilterSection />
        </ShowOnDesktop>

        <ProductSectionContainer
          category={param.category}
          productList={filteredArr}
        />
      </div>
    )
  );
}

export default Productpage;
