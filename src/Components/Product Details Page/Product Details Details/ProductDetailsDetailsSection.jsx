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
import { useSelector } from "react-redux";

function ProductDetailsDetailsSection(props) {
  const userOrders = useSelector((state) => state.userOrdersSlice.orders);

  let isUserBuy = false;

  for (let i = 0; i < userOrders.length; i++) {
    if (
      userOrders[i].category === props.data.category &&
      userOrders[i].id === props.data.id
    ) {
      isUserBuy = true;
      break;
    }
  }

  // All Reviews
  const [reviews, setReviews] = useState([]);

  // Updating The Review Array Whenever Product Data is changed
  useEffect(() => {
    const reviewArr = props.data.review
      ? Object.keys(props.data.review).map((key) => {
          return {
            ...props.data.review[key],
            key: key,
            category: props.data.category,
            id: props.data.id,
          };
        })
      : [];
    setReviews(reviewArr);
  }, [props.data]);

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

        {isUserBuy && (
          <CreateReview setReviews={setReviews} data={props.data} />
        )}

        {reviews.map((review) => (
          <ProductReview key={review.key} data={review} />
        ))}
      </ProductBigDescriptionContainer>
    </div>
  );
}

export default ProductDetailsDetailsSection;
