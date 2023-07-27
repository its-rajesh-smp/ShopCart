import React, { useEffect, useState } from "react";
import "./ProductSectionContainer.css";
import { ShowOnMobile } from "../../../Style/Media";

import TopSortBar from "../Top Sort Bar/TopSortBar";
import Product from "../Product/Product";
import ToggleFilterMobile from "../../UI/Product Page UI/Filter Section UI/Toggle Filter MOBILE/ToggleFilterMobile";
import Pagination from "../../Home Page/Pagination/Pagination";
import useFetch from "../../../Hooks/useFetch";
import { GET_PRODUCTS_BY_CATEGORY } from "../../../API/endpoints";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductSectionContainer() {

  // Getting Category From Param
  const { category } = useParams()

  // GETTING FILTER
  const filter = useSelector(state => state.filterSortSlice.filter)

  // State To Change Page
  const [skip, setSkip] = useState(0);

  // FETCHING ITEMS FROM SERVER WITH SKIP VALUE FOR PAGINATION AND THE FILTERS
  // IF FILTER IS EMPTY THEN SENDING false AS QUERY PARAM JUST BECAUSE WE CANNOT SEND "" EMPTY STRING  AS QUERY
  const [data] = useFetch(`${GET_PRODUCTS_BY_CATEGORY}/${category}/${skip}/${filter.minPrice !== "" ? filter.minPrice : false}/${filter.maxPrice !== "" ? filter.maxPrice : false}/${filter.rating !== "" ? filter.rating : false}/${filter.sortBy !== "" ? filter.sortBy : false}`)


  // Reset the pagination whenever filter is changed
  useEffect(() => {
    setSkip(0)
  }, [filter])




  return (
    data &&
    <div className=" ProductSectionContainer-div ">
      <TopSortBar
        skip={skip}
        totalItem={data.length}
        category={category}
      />


      <ShowOnMobile>
        <ToggleFilterMobile />
      </ShowOnMobile>


      {data.items
        .map((productDetails) => {
          return (
            <Product
              showDetailsList={true}
              key={productDetails.productId}
              productDetails={productDetails}
            />
          );
        })}


      <Pagination
        skip={skip}
        setSkip={setSkip}
        length={data.length}
      />
    </div>
  );
}

export default ProductSectionContainer;
