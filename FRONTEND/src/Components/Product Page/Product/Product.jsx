import React from "react";
import "./Product.css";
import ProductImageSection from "../../UI/Product Page UI/Product UI/Product Image Section/ProductImageSection";
import ProductDescriptionSection from "../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection";
import ProductPriceSection from "../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection";
import { useNavigate } from "react-router-dom";

function Product({ productDetails }) {
  const navigate = useNavigate();

  // On Product Click --> Product Details
  const onProductClick = () => {
    navigate(`/productdetails/${productDetails.category}/${productDetails.id}`);
    // props.closeHambargar && props.closeHambargar();
  };

  return (
    <div className=" Product-div ">
      <ProductImageSection
        onClick={onProductClick}
        productDetails={productDetails}
      // showBtn={props.showBtn}
      />
      <ProductDescriptionSection
        productDetails={productDetails}
      // showDetailsList={props.showDetailsList}
      />
      <ProductPriceSection productDetails={productDetails} />
    </div>
  );
}

export default Product;
