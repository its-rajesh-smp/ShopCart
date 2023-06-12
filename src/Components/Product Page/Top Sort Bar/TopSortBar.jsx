import React from "react";
import "./TopSortBar.css";
import SortFilter from "../../UI/Product Page UI/Filter Section UI/Sort Filter/SortFilter";
import { ShowOnDesktop } from "../../../Style/Media";

function TopSortBar(props) {
  const totalItem = props.totalItem;
  const start = props.skip - 5 + 1;
  const end = props.skip > totalItem ? totalItem : props.skip;

  return (
    <div className=" TopSortBar-div ">
      <div className="TopSortBar-div__currentCat">
        <h3>{props.category.toUpperCase()}</h3>
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
