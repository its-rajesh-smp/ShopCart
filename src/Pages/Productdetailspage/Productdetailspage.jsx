import React, { useState } from "react";
import "./Productdetailspage.css";
import ProductDetailsImageSection from "../../Components/Product Details Page/Product Details Image/ProductDetailsImageSection";
import ProductDetailsDetailsSection from "../../Components/Product Details Page/Product Details Details/ProductDetailsDetailsSection";
import { useParams } from "react-router-dom";
import ErrorPage from "../Error Page/ErrorPage";
import useFetch from "../../Hooks/useFetch";
import LoadingPage from "../LoadingPage/LoadingPage";

function Productdetailspage(props) {
  const { productid } = useParams();
  const [loader, setLoader] = useState(true)

  // Fetching Current Product
  const fetchedProduct = useFetch("64afc25ef201d64ed376", '64afd414f12ad37e978f', productid, setLoader)


  // Until Api Call Showing Loading Page
  if (loader) {
    return <LoadingPage />
  }

  return (
    fetchedProduct ? (
      <div className=" Productdetailspage-div remove__Header ">
        <ProductDetailsImageSection productDetails={fetchedProduct} />
        <ProductDetailsDetailsSection productDetails={fetchedProduct} />
      </div>
    ) : <ErrorPage />
  );
}

export default Productdetailspage;
