import React from "react";
import "./ProductDetailsDetailsSection.css";
import ProductDescriptionSection from "../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection";
import ProductPriceSection from "../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection";
import ProductBigDescriptionContainer from "../../UI/Prodcut Details Page UI/Product Big Description Container/ProductBigDescriptionContainer";
import ProductDescriptionCard from "../../UI/Prodcut Details Page UI/Product Description Card/ProductDescriptionCard";
import ProductSpecificationCard from "../../UI/Prodcut Details Page UI/Product Specification Card/ProductSpecificationCard";
import OverallReview from "../../UI/Prodcut Details Page UI/Overall Review/OverallReview";
import ProductReview from "../../UI/Prodcut Details Page UI/Review/ProductReview";
import CreateReview from "../../UI/Prodcut Details Page UI/Create Review/CreateReview";

function ProductDetailsDetailsSection(props) {
  return (
    <div className=" ProductDetailsDetailsSection-div ">
      <ProductDescriptionSection data={props.data} showDetailsList={false} />

      <ProductPriceSection data={props.data} />

      <ProductBigDescriptionContainer for={"Product Description"}>
        <ProductDescriptionCard num={1} />
        <ProductDescriptionCard num={2} />
        <ProductDescriptionCard num={3} />
      </ProductBigDescriptionContainer>

      <ProductBigDescriptionContainer for={"Specification"}>
        <ProductSpecificationCard />
        <ProductSpecificationCard />
        <ProductSpecificationCard />
      </ProductBigDescriptionContainer>

      <ProductBigDescriptionContainer for={"Review"}>
        <OverallReview />
        <CreateReview />

        <ProductReview />
        <ProductReview />
        <ProductReview />
        <ProductReview />
      </ProductBigDescriptionContainer>
    </div>
  );
}

export default ProductDetailsDetailsSection;
