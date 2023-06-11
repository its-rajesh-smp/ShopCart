import React, { useEffect, useState } from "react";
import "./Productpage.css";
import FilterSection from "../../Components/Product Page/Filter Section/FilterSection";
import ProductSectionContainer from "../../Components/Product Page/Product Section Container/ProductSectionContainer";
import { ShowOnDesktop } from "../../Style/Media";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../Hooks/useFetchProduct";
import { useSelector } from "react-redux";

function Productpage(props) {
  const param = useParams();
  const [productList, setProductList] = useState([]);
  const data = useFetchProduct(param.category);
  const myFilter = useSelector((state) => state.filterSortSlice.filter);


  // Set Product First Time
  useEffect(() => {
    setProductList(data);
  }, [data]);

  // Filter Logic
  useEffect(() => {

    const filteredArr = data.filter((product) => {
      const price = product.price;
      const rating = Math.floor(product.rating);
      if (
        (price <= myFilter.maxPrice || myFilter.maxPrice == "MAX") &&
        (price >= myFilter.minPrice || myFilter.minPrice == "MIN") &&
        (rating == myFilter.rating || myFilter.rating == "NO")
      ) {
        return true;
      }
    });
    setProductList(filteredArr)
  }, [myFilter]);

  return (
    data && (
      <div className=" Productpage-div remove__Header ">
        <ShowOnDesktop>
          <FilterSection />
        </ShowOnDesktop>

        <ProductSectionContainer
          setProductList={setProductList}
          productList={productList}
        />
      </div>
    )
  );
}

export default Productpage;
