import React, { useEffect, useState } from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsListByCategory } from "../../Store/Actions/fetchProduct";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../Hooks/useFetchProduct";

function Productpage(props) {
  const dispatch = useDispatch();
  const param = useParams();
  const [productList, setProductList] = useState([]);
  const data = useFetchProduct(param.category, setProductList);

  return (
    data && (
      <div className=" Productpage-div remove__Header ">
        <ShowOnDesktop>
          <FilterSection data={data} setProductList={setProductList} />
        </ShowOnDesktop>
        <ProductSectionContainer productList={productList} />
      </div>
    )
  );
}

export default Productpage;
