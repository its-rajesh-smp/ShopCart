import React from "react";
import "./Product.css";
import ProductImageSection from "../../UI/Product Page UI/Product UI/Product Image Section/ProductImageSection";
import ProductDescriptionSection from "../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection";
import ProductPriceSection from "../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();

  // On Product Click --> Product Details
  const onProductClick = () => {
    navigate(`/productdetails/${props.data.category}/${props.id}`);
  };

  return (
    <div className=" Product-div ">
      <ProductImageSection
        onClick={onProductClick}
        data={props.data}
        showBtn={props.showBtn}
      />
      <ProductDescriptionSection
        data={props.data}
        showDetailsList={props.showDetailsList}
      />
      <ProductPriceSection data={props.data} />
    </div>
  );
}

export default Product;
