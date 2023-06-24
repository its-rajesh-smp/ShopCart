import React, { useEffect, useState } from "react";
import "./ProductSectionContainer.css";
import { ShowOnMobile } from "../../../Style/Media";

import TopSortBar from "../Top Sort Bar/TopSortBar";
import Product from "../Product/Product";
import ToggleFilterMobile from "../../UI/Product Page UI/Filter Section UI/Toggle Filter MOBILE/ToggleFilterMobile";
import Pagination from "../../Home Page/Pagination/Pagination";

function ProductSectionContainer(props) {
  // State To Change Page
  const [skip, setSkip] = useState(5);

  return (
    <div className=" ProductSectionContainer-div ">
      <TopSortBar
        skip={skip}
        totalItem={props.productList.length}
        category={props.category}
      />
      <ShowOnMobile>
        <ToggleFilterMobile />
      </ShowOnMobile>

      {props.productList
        .map((product) => {
          return (
            <Product
              showDetailsList={true}
              key={Math.random()}
              id={product.id}
              data={product}
            />
          );
        })
        .slice(skip - 5, skip)}

      <Pagination
        skip={skip}
        setSkip={setSkip}
        length={props.productList.length}
      />
    </div>
  );
}

export default ProductSectionContainer;
