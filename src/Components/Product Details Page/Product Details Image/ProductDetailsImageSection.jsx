import React from "react";
import "./ProductDetailsImageSection.css";
import SmallProductImageContainer from "../../UI/Prodcut Details Page UI/Small Product Image Container/SmallProductImageContainer";

function ProductDetailsImageSection(props) {
  return (
    <div className=" ProductDetailsImageSection-div ">
      <SmallProductImageContainer data={props.data} />
    </div>
  );
}

export default ProductDetailsImageSection;
