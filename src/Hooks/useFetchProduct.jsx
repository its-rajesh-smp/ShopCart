import { useEffect, useState } from "react";
import { databases } from "../AppWrite/appwriteconfig";
import { Query } from "appwrite";
import { useSelector } from "react-redux";

const filterQuery = {
  'LOW>HIGH': [],
  'HIGH>LOW': [],
  'DISCOUNT': [],
  'RATING': [],

}

function useFetchProduct(category) {
  const [data, setData] = useState([]);

  // Getting Filter Param
  const filterParams = useSelector((state) => state.filterSortSlice.filter);

  // FILTER QUERY ARRAY





  useEffect(() => {
    (async function () {
      const { documents } = await databases.listDocuments("64afc25ef201d64ed376", '64afd414f12ad37e978f', [
        Query.equal('category', category)
      ])

      setData(documents)
    })()
  }, [category]);

  return data;
}

export default useFetchProduct;
