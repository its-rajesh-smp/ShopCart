import React from "react";
import "./TopSortBar.css";
import SortFilter from "../../UI/Product Page UI/Filter Section UI/Sort Filter/SortFilter";
import { ShowOnDesktop } from "../../../Style/Media";

function TopSortBar(props) {
  return (
    <div className=" TopSortBar-div ">
      <div className="TopSortBar-div__currentCat">
        <h3>Television</h3>
        <p>
          {"("}Showing <span>1</span> - <span>24</span> of <span>29</span>{" "}
          products{")"}
        </p>
      </div>
      <ShowOnDesktop>
        <SortFilter />
      </ShowOnDesktop>
    </div>
  );
}

export default TopSortBar;
