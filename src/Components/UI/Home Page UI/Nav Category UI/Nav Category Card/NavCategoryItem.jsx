import React from "react";
import "./NavCategoryItem.css";
import { NavLink } from "react-router-dom";

function NavCategoryItem({ name, image }) {
  return (
    <NavLink to={`/product/${name}`}>
      <div className=" NavCategoryItem-div ">
        <img src={image} alt="item" />
        <p>{name.toUpperCase()}</p>
      </div>
    </NavLink>
  );
}

export default NavCategoryItem;
