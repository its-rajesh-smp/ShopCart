import React from "react";
import "./NavCategory.css";
import NavCategoryItem from "../../UI/Home Page UI/Nav Category UI/Nav Category Card/NavCategoryItem";
import useFetch from "../../../Hooks/useFetch";
import { GET_CATEGORY } from "../../../API/endpoints";


function NavCategory() {

  // FETCHING CATEGORY LIST FROM DATABASE
  const [categoryList] = useFetch(GET_CATEGORY)



  return (
    <div className=" NavCategory-div ">
      <div className="NavCategory-div__itemContainer">
        {categoryList && categoryList.map((category) => {
          return <NavCategoryItem key={category.path} path={category.path} image={category.image} name={category.name} />;
        })}

      </div>
    </div>
  );
}

export default NavCategory;
