import React from "react";
import "./Product.css";
import ProductImageSection from "../../UI/Product Page UI/Product UI/Product Image Section/ProductImageSection";
import ProductDescriptionSection from "../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection";
import ProductPriceSection from "../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection";
import { useNavigate } from "react-router-dom";

function Product({ showDetailsList, productDetails, incDecBtn }) {
  const navigate = useNavigate();



  /* -------------------------------------------------------------------------- */
  /*                              ON CLICK PRODUCT                              */
  /* -------------------------------------------------------------------------- */
  const onProductClick = (e) => {
    e.stopPropagation()
    navigate(`/productdetails/${productDetails.$id}`);
    // props.closeHambargar && props.closeHambargar();
  };




  return (
    <div onClick={onProductClick} className=" Product-div ">
      <ProductImageSection
        incDecBtn={incDecBtn}
        productDetails={productDetails}
      />

      <ProductDescriptionSection
        productDetails={productDetails}
        showDetailsList={showDetailsList}
      />

      <ProductPriceSection productDetails={productDetails} />
    </div>
  );
}

export default Product;
