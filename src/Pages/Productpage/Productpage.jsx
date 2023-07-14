import React from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../Hooks/useFetchProduct";


function Productpage(props) {
  const param = useParams();

  // Fetching ProductsList using category after sorting
  const productList = useFetchProduct(param.category);




  return (
    (
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
