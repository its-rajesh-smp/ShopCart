import React, { useEffect } from "react";
import "./Productdetailspage.css";
import ProductDetailsImageSection from "../../Components/Product Details Page/Product Details Image/ProductDetailsImageSection";
import ProductDetailsDetailsSection from "../../Components/Product Details Page/Product Details Details/ProductDetailsDetailsSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentProduct } from "../../Store/Actions/fetchCurrentProduct";

function Productdetailspage(props) {
  const param = useParams();
  const dispatch = useDispatch();
  const selector = useSelector(
    (state) => state.currentProductSlice.productData
  );

  // Fetch Current Product
  useEffect(() => {
    dispatch(fetchCurrentProduct(param.category, param.productid));
  }, []);

  return (
    <div className=" Productdetailspage-div remove__Header ">
      <ProductDetailsImageSection data={selector} />
      <ProductDetailsDetailsSection data={selector} />
    </div>
  );
}

export default Productdetailspage;
