import React from "react";
import "./Product.css";
import ProductImageSection from "../../UI/Product Page UI/Product UI/Product Image Section/ProductImageSection";
import ProductDescriptionSection from "../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection";
import ProductPriceSection from "../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  // On Product Click --> Product Details
  const onProductClick = () => {
    navigate(`/productdetails/${param.category}/${props.id}`);
  };

  return (
    <div onClick={onProductClick} className=" Product-div ">
      <ProductImageSection data={props.data} showBtn={props.showBtn} />
      <ProductDescriptionSection
        data={props.data}
        showDetailsList={props.showDetailsList}
      />
      <ProductPriceSection data={props.data} />
    </div>
  );
}

export default Product;
