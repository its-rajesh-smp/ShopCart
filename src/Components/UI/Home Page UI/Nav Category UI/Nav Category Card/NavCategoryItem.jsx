import React from "react";
import "./NavCategoryItem.css";

function NavCategoryItem(props) {
  return (
    <div className=" NavCategoryItem-div ">
      <img src={props.category.img} alt="item" />
      <p>{props.category.path.toUpperCase()}</p>
    </div>
  );
}

export default NavCategoryItem;
