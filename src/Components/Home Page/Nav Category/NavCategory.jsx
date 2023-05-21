import React from "react";
import "./NavCategory.css";
import NavCategoryItem from "../../UI/Home Page UI/Nav Category UI/Nav Category Card/NavCategoryItem";

function NavCategory(props) {
  return (
    <div className=" NavCategory-div ">
      <div className="NavCategory-div__itemContainer">
        {props.categoryList.map((category) => {
          return <NavCategoryItem key={category.path} category={category} />;
        })}
      </div>
    </div>
  );
}

export default NavCategory;
