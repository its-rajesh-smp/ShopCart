import React, { useEffect } from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";
import { useDispatch } from "react-redux";
import { fetchProductsListByCategory } from "../../Store/Actions/fetchProduct";
import { useParams } from "react-router-dom";

function Productpage(props) {
  const dispatch = useDispatch();
  const param = useParams();

  // FETCH ALL PRODUCT
  useEffect(() => {
    dispatch(fetchProductsListByCategory(param.category));
  }, []);

  return (
    <div className=" Productpage-div remove__Header ">
      <ShowOnDesktop>
        <FilterSection />
      </ShowOnDesktop>
      <ProductSectionContainer />
    </div>
  );
}

export default Productpage;
