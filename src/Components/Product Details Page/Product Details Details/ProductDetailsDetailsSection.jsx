import React, { useEffect, useState } from "react";
import "./ProductDetailsDetailsSection.css";
import ProductDescriptionSection from "../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection";
import ProductPriceSection from "../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection";
import ProductBigDescriptionContainer from "../../UI/Prodcut Details Page UI/Product Big Description Container/ProductBigDescriptionContainer";
import ProductDescriptionCard from "../../UI/Prodcut Details Page UI/Product Description Card/ProductDescriptionCard";
import ProductSpecificationCard from "../../UI/Prodcut Details Page UI/Product Specification Card/ProductSpecificationCard";
import OverallReview from "../../UI/Prodcut Details Page UI/Overall Review/OverallReview";
import ProductReview from "../../UI/Prodcut Details Page UI/Review/ProductReview";
import CreateReview from "../../UI/Prodcut Details Page UI/Create Review/CreateReview";


function ProductDetailsDetailsSection({ productDetails }) {

  return (
    <div className=" ProductDetailsDetailsSection-div ">
      <ProductDescriptionSection productDetails={productDetails} showDetailsList={false} />

      <ProductPriceSection productDetails={productDetails} />

      {/* <ProductBigDescriptionContainer for={"Product Description"}>
        <ProductDescriptionCard num={1} />
        <ProductDescriptionCard num={2} />
        <ProductDescriptionCard num={3} />
      </ProductBigDescriptionContainer> */}

      {/* <ProductBigDescriptionContainer for={"Specification"}>
        <ProductSpecificationCard />
        <ProductSpecificationCard />
        <ProductSpecificationCard />
      </ProductBigDescriptionContainer> */}

      <ProductBigDescriptionContainer for={"Review"}>
        <OverallReview productDetails={productDetails} />

        {/* {isUserBuy && (
          <CreateReview setReviews={setReviews} data={productDetails} />
        )}

        {reviews.map((review) => (
          <ProductReview key={review.key} data={review} />
        ))}
         */}

      </ProductBigDescriptionContainer>
    </div>
  );
}

export default ProductDetailsDetailsSection;
