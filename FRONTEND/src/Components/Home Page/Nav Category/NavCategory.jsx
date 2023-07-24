import React from "react";
import "./NavCategory.css";
import NavCategoryItem from "../../UI/Home Page UI/Nav Category UI/Nav Category Card/NavCategoryItem";
import { useSelector } from "react-redux";

function NavCategory() {

  const categoryList = useSelector((state) => state.homeProductSlice.categoryList);


  return (
    <div className=" NavCategory-div ">
      <div className="NavCategory-div__itemContainer">

        {categoryList.map((category) => {
          return <NavCategoryItem key={category.path} category={category} />;
        })}

      </div>
    </div>
  );
}

export default NavCategory;
