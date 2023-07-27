import React from "react";
import "./ProductDescriptionSection.css";
import Rating from "../../../Ratting/Rating";
import { ShowOnDesktop } from "../../../../../Style/Media";

function ProductDescriptionSection({ productDetails }) {
  return (
    <div className=" ProductDescriptionSection-div ">
      <h2>{productDetails.name}</h2>

      <div className="ProductDescriptionSection-div__ratingDiv">
        <Rating data={productDetails.rating} />
        <p className="ProductDescriptionSection-div__totalrating">
          <span>{1250}</span> Ratings & <span>2500</span> Reviews
        </p>
        <p className="ProductDescriptionSection-div__totalbuy">
          {"("} <span>2500</span> {")"}
        </p>
      </div>

      {false && (
        <ShowOnDesktop>
          <ul className="ProductDescriptionSection-div__descPoints">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </ShowOnDesktop>
      )}
    </div>
  );
}

export default ProductDescriptionSection;
