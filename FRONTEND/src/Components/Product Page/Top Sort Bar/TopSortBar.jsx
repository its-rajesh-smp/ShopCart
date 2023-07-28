import React from "react";
import "./TopSortBar.css";
import SortFilter from "../../UI/Product Page UI/Filter Section UI/Sort Filter/SortFilter";
import { ShowOnDesktop } from "../../../Style/Media";

function TopSortBar({ category, totalItem, skip }) {

  let start = skip
  let end = ((skip + 5) < totalItem) ? (skip + 5) : totalItem

  return (
    <div className=" TopSortBar-div ">
      <div className="TopSortBar-div__currentCat">
        <h3>{category.toUpperCase()}</h3>
        <p>
          {"("}Showing <span>{start}</span> - <span>{end}</span> of{" "}
          <span>{totalItem}</span> products{")"}
        </p>
      </div>
      <ShowOnDesktop>
        <SortFilter />
      </ShowOnDesktop>
    </div>
  );
}

export default TopSortBar;
