import React from "react";
import "./NavCategoryItem.css";
import { NavLink } from "react-router-dom";

function NavCategoryItem({ path, image, name }) {
  return (
    <NavLink to={`/product/${path}`}>
      <div className=" NavCategoryItem-div ">
        <img src={image} alt="item" />
        <p>{name}</p>
      </div>
    </NavLink>
  );
}

export default NavCategoryItem;
