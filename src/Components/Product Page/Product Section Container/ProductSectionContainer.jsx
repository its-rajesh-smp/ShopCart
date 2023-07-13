import React, { useState } from "react";
import "./ProductSectionContainer.css";
import { ShowOnMobile } from "../../../Style/Media";

import TopSortBar from "../Top Sort Bar/TopSortBar";
import Product from "../Product/Product";
import ToggleFilterMobile from "../../UI/Product Page UI/Filter Section UI/Toggle Filter MOBILE/ToggleFilterMobile";
import Pagination from "../../Home Page/Pagination/Pagination";

function ProductSectionContainer({ productList, category }) {
  // State To Change Page
  const [skip, setSkip] = useState(5);


  return (
    <div className=" ProductSectionContainer-div ">
      <TopSortBar
        skip={skip}
        totalItem={productList.length}
        category={category}
      />
      <ShowOnMobile>
        <ToggleFilterMobile />
      </ShowOnMobile>

      {productList
        .map((product) => {
          return (
            <Product
              showDetailsList={true}
              key={product.$id}
              productDetails={product}
            />
          );
        })
        .slice(skip - 5, skip)}

      <Pagination
        skip={skip}
        setSkip={setSkip}
        length={productList.length}
      />
    </div>
  );
}

export default ProductSectionContainer;
