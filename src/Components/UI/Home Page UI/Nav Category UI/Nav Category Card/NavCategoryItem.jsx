import React from "react";
import "./NavCategoryItem.css";
import { NavLink } from "react-router-dom";

function NavCategoryItem(props) {
  return (
    <NavLink to={`/product/${props.category.path}`}>
      <div className=" NavCategoryItem-div ">
        <img src={props.category.img} alt="item" />
        <p>{props.category.path.toUpperCase()}</p>
      </div>
    </NavLink>
  );
}

export default NavCategoryItem;
