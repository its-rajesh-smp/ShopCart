import React from "react";
import "./NavCategory.css";
import NavCategoryItem from "../../UI/Home Page UI/Nav Category UI/Nav Category Card/NavCategoryItem";
import { useSelector } from "react-redux";

function NavCategory(props) {
  const categoryList = useSelector(state => state.homeProductSlice.categoryList)

  return (
    <div className=" NavCategory-div ">
      <div className="NavCategory-div__itemContainer">
        {categoryList.map((category) => {
          return <NavCategoryItem key={category.name} image={category.image} name={category.name} />;
        })}
      </div>
    </div>
  );
}

export default NavCategory;
