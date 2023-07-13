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

  // Fetching ProductsList using category
  const productList = useFetchProduct(param.category);




  return (
    productList.length !== 0 && (
      <div className=" Productpage-div remove__Header ">
        <ShowOnDesktop>
          <FilterSection />
        </ShowOnDesktop>

        <ProductSectionContainer
          category={param.category}
          productList={productList}
        />
      </div>
    )
  );
}

export default Productpage;
