import { useEffect, useState } from "react";
import { databases } from "../AppWrite/appwriteconfig";
import { Query } from "appwrite";
import { useSelector } from "react-redux";

const filterQuery = {
  'POPULARITY': [Query.orderAsc('price')],
  'LOW_HIGH': [Query.orderAsc('price')],
  'HIGH_LOW': [Query.orderDesc('price')],
  'DISCOUNT': [Query.orderDesc('discount')],
  'REVIEWS': [Query.orderDesc('rating')],
}

function useFetchProduct(category) {
  const [data, setData] = useState([]);

  // Getting Filter Param
  const filterParams = useSelector((state) => state.filterSortSlice.filter);



  // SORTING ARRAYS
  const sortByArr = filterParams.sortBy !== "" ? filterQuery[filterParams.sortBy] : []
  const minPriceFilterArr = filterParams.minPrice !== "" ? [Query.greaterThanEqual('price', +filterParams.minPrice)] : []
  const maxPriceFilterArr = filterParams.maxPrice !== "" ? [Query.lessThanEqual('price', +filterParams.maxPrice)] : []
  const ratingFilterArr = filterParams.rating !== "" ? [Query.equal('rating', +filterParams.rating)] : []




  useEffect(() => {
    (async function () {
      try {
        const { documents } = await databases.listDocuments("64afc25ef201d64ed376", '64afd414f12ad37e978f', [
          Query.equal('category', category), ...sortByArr, ...minPriceFilterArr, ...maxPriceFilterArr, ...ratingFilterArr
        ])

        setData(documents)

      } catch (error) {
        console.log(error);
      }
    })()
  }, [category, filterParams]);

  return data;
}

export default useFetchProduct;
