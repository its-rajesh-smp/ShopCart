import React from "react";
import "./ProductDetailsImageSection.css";
import SmallProductImageContainer from "../../UI/Prodcut Details Page UI/Small Product Image Container/SmallProductImageContainer";

function ProductDetailsImageSection({ productDetails }) {
  return (
    <div className=" ProductDetailsImageSection-div ">
      <SmallProductImageContainer productDetails={productDetails} />
    </div>
  );
}

export default ProductDetailsImageSection;
