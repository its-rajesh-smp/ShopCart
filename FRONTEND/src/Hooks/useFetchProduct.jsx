import axios from "axios";
import { useEffect, useState } from "react";
import { PRODUCT_BY_CATEGORY } from "../Firebase/API_URL";

function useFetchProduct(category) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data: productData } = await axios.get(
          `${PRODUCT_BY_CATEGORY}/${category}.json`
        );
        setData(productData);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [category]);

  return data;
}

export default useFetchProduct;
