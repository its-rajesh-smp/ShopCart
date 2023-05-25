import React from "react";
import "./ProductPriceSection.css";

function ProductPriceSection(props) {
  return (
    <div className=" ProductPriceSection-div ">
      <h1>
        $<span>{props.data.price}</span>
      </h1>
      <div>
        <p className="fakePrice">
          $<span>33540</span>
        </p>
        <p className="off">
          <span>{props.data.discountPercentage}</span>% off
        </p>
      </div>
      <p className="freeDel">Free delivery</p>
    </div>
  );
}

export default ProductPriceSection;
