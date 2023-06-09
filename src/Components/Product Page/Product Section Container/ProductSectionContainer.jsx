import React from "react";
import "./ProductSectionContainer.css";
import { ShowOnMobile } from "../../../Style/Media";

import TopSortBar from "../Top Sort Bar/TopSortBar";
import Product from "../Product/Product";
import ToggleFilterMobile from "../../UI/Product Page UI/Filter Section UI/Toggle Filter MOBILE/ToggleFilterMobile";
import Pagination from "../../Home Page/Pagination/Pagination";
import { useSelector } from "react-redux";
function ProductSectionContainer(props) {
  const productList = useSelector(
    (state) => state.allProductSlice.allProductList
  );

  return (
    <div className=" ProductSectionContainer-div ">
      <TopSortBar />

      <ShowOnMobile>
        <ToggleFilterMobile />
      </ShowOnMobile>

      {productList.map((product, index) => {
        return (
          <Product
            showDetailsList={true}
            key={Math.random()}
            id={index}
            data={product}
          />
        );
      })}

      {/* <Pagination /> */}
    </div>
  );
}

export default ProductSectionContainer;
