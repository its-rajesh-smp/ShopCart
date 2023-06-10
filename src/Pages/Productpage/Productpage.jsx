import React, { useState } from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../Hooks/useFetchProduct";

function Productpage(props) {
  const param = useParams();
  const [productList, setProductList] = useState([]);
  const data = useFetchProduct(param.category, setProductList);

  return (
    data && (
      <div className=" Productpage-div remove__Header ">
        <ShowOnDesktop>
          <FilterSection data={data} setProductList={setProductList} />
        </ShowOnDesktop>

        <ProductSectionContainer
          setProductList={setProductList}
          productList={productList}
        />
      </div>
    )
  );
}

export default Productpage;
