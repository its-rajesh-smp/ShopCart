import React from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";

function Productpage() {
  return (
    (
      <div className=" Productpage-div remove__Header ">
        <ShowOnDesktop>
          <FilterSection />
        </ShowOnDesktop>

        <ProductSectionContainer />
      </div>
    )
  );
}

export default Productpage;
